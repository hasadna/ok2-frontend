<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>{{ $language.register.signUpForm }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form form @submit.prevent="register()" v-model="valid" id="signup-form" ref="form">
              <v-alert :value="!!alertMsg" color="error" icon="warning">{{alertMsg}}</v-alert>

              <v-text-field
                name="privateName"
                v-model="privateName"
                :label="$language.register.privateName"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                name="privateName"
                v-model="lastName"
                :label="$language.register.lastName"
                :rules="[rules.required]"
              ></v-text-field>

              <v-text-field
                name="email"
                v-model="email"
                type="email"
                :label="$language.register.email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <v-text-field
                name="password"
                :label="$language.register.password"
                :rules="[rules.required, rules.password]"
                type="password"
                v-model="password"
              ></v-text-field>

              <v-text-field
                name="confirm_password"
                :label="$language.register.confirm_password"
                :rules="[rules.required]"
                type="password"
                v-model="confirm_password"
                :error="!isRepaetForm()"
              ></v-text-field>

              <v-divider light></v-divider>

              <v-radio-group v-model="role">
                <v-radio
                  v-for="role in roles"
                  :key="role.name"
                  :label="`${role.name}`"
                  :value="role.name"
                ></v-radio>
              </v-radio-group>
            </v-form>
          </v-card-text>
          <v-divider light></v-divider>
          <v-card-actions>
            <v-btn
              @click.prevent="openLigonModal()"
              color="black"
              dark
            >{{ $language.register.alreadyRegistered }}?</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="success"
              @click.prevent="register()"
            >{{ $language.register.register }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { EventBus, BUSEVENTS } from '../../../services/bus/bus';
import { Localizer } from '../../../app/locale/localizer';

const lang = Localizer.instance.language;

export default {
  name: 'RegisterPage',
  data: () => ({
    valid: true,
    alertMsg: ``,
    privateName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
    roles: [
      { name: lang.register.advisor },
      { name: lang.register.activist },
      { name: lang.register.mk },
      { name: lang.common.other }
    ],
    role: null,
    rules: {
      required: value => !!value || 'Required',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      },
      password: value => {
        const isValid = value && value.length >= 5;
        return isValid || 'Password must have 5+ characters';
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
