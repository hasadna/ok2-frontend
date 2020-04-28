<template>
  <v-dialog v-model="dialog" persistent max-width="350px">
    <v-card>
      <v-form id="login-form" @submit.prevent="login()">
        <v-card class="elevation-12">
          <v-toolbar color="#FFFFFF" flat>
            <v-toolbar-title>התחברות לכנסת פתוחה</v-toolbar-title>
            <v-spacer />
            <v-btn
              color="#fff"
              elevation="0"
              @click="dialogState(false)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <hr class="ma-auto" style="max-width:90%">
          <v-card-text>
            <ok-input
              v-model="email"
              name="login"
              label="מייל / שם משתמש"
              placeholder="הדואר האלקטורני שאיתו נרשמת"
              type="text"
              class="mb-4"
            />
            <ok-input
              v-model="password"
              name="password"
              label="סיסמא"
              type="password"
              class="mb-4"
            />
          </v-card-text>
          <v-alert v-if="!!errorMeesge" color="error">
            <small>{{ errorMeesge }}</small>
          </v-alert>
          <v-card-actions class="pa-4">
            <v-btn
              type="submit"
              form="login-form"
              color="#4D4D4D"
              class="white--text ok-btn col-1-1"
              large
              :loading="isLoading"
            >
              כניסה
            </v-btn>
          </v-card-actions>
          <div class="tac">
            <v-btn
              class="mt-6 mb-1"
              type="button"
              text
              @click.prevent="navigateToRegisterPage()"
            >
              עוד לא נרשמת?
              <strong>&nbsp;להרשמה</strong>
            </v-btn>
            <br>
            <v-btn
              class="mt-1 mb-6"
              type="button"
              text
              @click.prevent="passwordReset()"
            >
              שחכתי סיסמא
            </v-btn>
          </div>
        </v-card>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import { EventBus, BUSEVENTS } from '../../services/bus/bus';
import OkInput from '~/components/shared/form/OkInput.vue';

export default {
  name: 'Login',
  components: {
    OkInput
  },
  props: {
    dialog: {
      type: Boolean,
      required: true
    }
  },
  data: () => ({
    email: '',
    password: '',
    errorMeesge: '',
    isLoading: false
  }),
  created() {
    EventBus.$on(BUSEVENTS.toglleLoginDialog, () => {
      this.dialogState(!this.dialog);
    });
  },
  methods: {
    dialogState(state) {
      this.$emit('update:dialog', state);
    },
    async login() {
      this.isLoading = true;
      this.errorMeesge = '';
      try {
        await this.$store.dispatch('user/logIn', {
          email: this.email,
          password: this.password,
        })
          .then((res) => {
            this.isLoading = false;
            // TODO: make sure we have user token and so
            this.dialogState(false);
          });
      } catch (error) {
        if (error && error.response && error.response.status === 401) {
          this.errorMeesge = 'המייל או הסיסמא שהזנת שגויים';
        } else {
          this.errorMeesge = 'שגיאת שרת';
        }
        this.isLoading = false;
      }
    },
    navigateToRegisterPage() {
      this.$router.push('register');
      this.dialogState(false);
    },
    passwordResets() {
      this.$router.push('register');
      this.dialogState(false);
    },
  },
};
</script>

<style scoped></style>
