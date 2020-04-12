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
              flat
              @click="dialogState(false)"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-alert v-if="errorMeesge" color="error" :value="errorMeesge">
            <small>{{ errorMeesge }}</small>
          </v-alert>
          <v-card-text>
            <ok-input
              v-model="email"
              name="login"
              label="מייל / שם משתמש"
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
          <v-card-actions>
            <v-btn
              type="cancel"
              class="mr-auto ml-2"
              color="#FAFAFA"
              large
              @click="dialogState(false)"
            >
              ביטול
            </v-btn>
            <v-btn
              type="submit"
              form="login-form"
              color="#4D4D4D"
              class="white--text"
              large
            >
              כניסה
            </v-btn>
          </v-card-actions>
          <v-divider light />
          <div
            class="
              flex"
          >
            <v-btn
              type="button"
              @click.prevent="navigateToRegisterPage()"
            >
              הרשמה
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
    login() {
      this.errorMeesge = '';
      try {
        this.$store.dispatch('user/logIn', {
          username: this.email,
          password: this.password,
        });
        this.dialogState(false);
      } catch (e) {
        this.errorMeesge = 'שגיאת שרת';
      }
    },
    navigateToRegisterPage() {
      this.$router.push('register');
      this.dialogState(false);
    },
  },
};
</script>

<style scoped></style>
