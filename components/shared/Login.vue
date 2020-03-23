<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-form id="login-form" @submit.prevent="login()">
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>התחברות</v-toolbar-title>
            <v-spacer />
            <v-btn text @click="dialog = false">
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
  data: () => ({
    dialog: false,
    email: '',
    password: '',
    errorMeesge: ''
  }),
  created() {
    EventBus.$on(BUSEVENTS.toglleLoginDialog, () => {
      this.toglleDialog();
    });
  },
  methods: {
    toglleDialog() {
      this.dialog = !this.dialog;
    },
    login() {
      this.errorMeesge = '';
      try {
        this.$store.dispatch('user/logIn', {
          username: this.email,
          password: this.password
        });
        this.dialog = false;
      } catch (e) {
        this.errorMeesge = 'שגיאת שרת';
      }
    },
    navigateToRegisterPage() {
      this.$router.push('register');
      this.dialog = false;
    }
  }
};
</script>

<style scoped></style>
