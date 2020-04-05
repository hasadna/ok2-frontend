<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-form id="login-form" @submit.prevent="login()">
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>התחברות</v-toolbar-title>
            <v-spacer />
            <v-btn text @click="dialogState(false)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-alert v-if="errorMeesge" color="error" :value="errorMeesge">
            <small>{{ errorMeesge }}</small>
          </v-alert>
          <v-card-text>
            <v-text-field
              v-model="email"
              name="login"
              label="מייל / שם משתמש"
              type="text"
            />

            <v-text-field
              v-model="password"
              name="password"
              label="סיסמא"
              type="password"
            />
          </v-card-text>
          <v-divider light />
          <v-card-actions>
            <v-btn
              type="button"
              @click.prevent="navigateToRegisterPage()"
            >
              הרשמה
            </v-btn>
            <v-spacer />
            <v-btn color="primary" dark type="submit" form="login-form">
              התחברות
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
import { EventBus, BUSEVENTS } from '../../services/bus/bus';
export default {
  name: 'Login',
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
