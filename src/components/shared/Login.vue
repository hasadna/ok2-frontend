<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-form @submit.prevent="login()" id="login-form">
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>{{ $language.common.login }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-alert v-if="errorMeesge" color="error" :value="errorMeesge">
            <small>{{errorMeesge}}</small>
          </v-alert>
          <v-card-text>
            <v-text-field v-model="username" name="login" label="Login" type="text"></v-text-field>

            <v-text-field v-model="password" name="password" label="Password" type="password"></v-text-field>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions>
            <v-btn
              @click.prevent="navigateToRegisterPage()"
              type="button"
              color="primary"
              dark
            >{{ $language.register.signup }}</v-btn>
            <v-spacer></v-spacer>
            <v-btn color="indigo" dark type="submit" form="login-form">{{ $language.common.login }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
    username: '',
    password: '',
    errorMeesge: ''
  }),
  methods: {
    async login() {
      this.errorMeesge = '';
      try {
        this.$store.dispatch('logIn', {
          username: this.username,
          password: this.password
        });
        this.dialog = false;
      } catch (e) {
        this.errorMeesge = this.$language.register.errorMeesge;
      }
    },
    navigateToRegisterPage() {
      this.$router.push('RegisterPage');
      this.dialog = false;
    }
  }
};
</script>

<style scoped>
</style>
