<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md8>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue">
            <v-toolbar-title>{{ $language.register.signUpForm }}</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
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
                :label="$language.register.email"
                :rules="[rules.required, rules.email]"
              ></v-text-field>

              <v-text-field
                name="password"
                :label="$language.register.password"
                :rules="[rules.required]"
                type="password"
                v-model="password"
              ></v-text-field>

              <v-text-field
                name="password"
                :label="$language.register.confirm_password"
                :rules="[rules.required]"
                type="password"
                v-model="confirm_password"
                :error="!valid()"
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
            <v-btn @click.prevent="openLigonModal()" round color="black" dark>כבר נרשמת?</v-btn>
            <v-spacer></v-spacer>
            <v-btn
              round
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

export default {
  name: 'RegisterPage',
  data: () => ({
    alertMsg: ``,
    privateName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
    role: null,
    roles: [
      { name: `יועץ פרלמנטרי` },
      { name: `אקטיביסט` },
      { name: `חבר כנסת` },
      { name: `אחר` }
    ],

    rules: {
      required: value => !!value || 'Required',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'Invalid e-mail.';
      }
    }
  }),
  methods: {
    register() {
      if (this.valid()) {
        this.$store.dispatch('REGISTER', {
          privateName: this.privateName,
          lastName: this.lastName,
          role: this.role,
          email: this.email,
          password: this.password
        });
      }
    },
    valid() {
      return this.password === this.confirm_password;
    },
    openLigonModal() {
      EventBus.$emit(BUSEVENTS.toglleLoginDialog);
    }
  }
};
</script>
