<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-card>
        <v-toolbar dark color="blue">
          <v-toolbar-title>רק כמה פרטים וזהו...</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form id="signup-form" ref="form" v-model="valid" form @submit.prevent="register()">
            <v-alert :value="!!alertMsg" color="error" icon="warning">
              {{ alertMsg }}
            </v-alert>

            <v-text-field
              v-model="privateName"
              name="privateName"
              :label="`שם פרטי`"
              :rules="[rules.required]"
            />

            <v-text-field
              v-model="lastName"
              name="privateName"
              :label="`שם משפחה`"
              :rules="[rules.required]"
            />

            <v-text-field
              v-model="email"
              name="email"
              type="email"
              label="מייל"
              :rules="[rules.required, rules.email]"
            />

            <v-text-field
              v-model="password"
              name="password"
              :label="`סיסמא`"
              :rules="[rules.required, rules.password]"
              type="password"
            />

            <v-text-field
              v-model="confirm_password"
              name="confirm_password"
              :label="`סיסמא שנית`"
              :rules="[rules.required]"
              type="password"
              :error="!isRepaetForm()"
            />

            <v-divider light />

            <v-radio-group v-model="role">
              <v-radio
                v-for="role in roles"
                :key="role.name"
                :label="`${role.name}`"
                :value="role.name"
              />
            </v-radio-group>
          </v-form>
        </v-card-text>
        <v-divider light />
        <v-card-actions>
          <v-btn color="black" dark @click.prevent="openLigonModal()">
            כבר נרשמת?
          </v-btn>
          <v-spacer />
          <v-btn color="success" @click.prevent="register()">
            הרשמה
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { EventBus, BUSEVENTS } from '~/services/bus/bus';

export default {
  name: 'RegisterPage',
  data: () => ({
    valid: true,
    alertMsg: '',
    privateName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
    roles: [
      { name: 'יועץ/ת' },
      { name: 'אקטיביסט/ת' },
      { name: 'חבר כנסת' },
      { name: 'אחר' }
    ],
    role: null,
    rules: {
      required: value => !!value || 'חובה',
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      },
      password: (value) => {
        const isValid = value && value.length >= 5;
        return isValid || 'יש להזין 5 תווים לפחות';
      }
    }
  }),
  created() {
    this.role = this.roles[0].name;
  },
  methods: {
    register() {
      if (this.isValid()) {
        this.$store.dispatch('signUp', {
          privateName: this.privateName,
          lastName: this.lastName,
          role: this.role,
          email: this.email,
          password: this.password
        });
      }
    },
    isRepaetForm() {
      return this.password === this.confirm_password;
    },
    isValid() {
      return this.isRepaetForm() && this.$refs.form.validate();
    },
    openLigonModal() {
      EventBus.$emit(BUSEVENTS.toglleLoginDialog);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
