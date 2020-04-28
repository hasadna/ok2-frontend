<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-card class="elevation-12 pa-4">
        <v-toolbar color="#FFFFFF" flat>
          <h1 style="font-size:20px">
            הרשמה לכנסת פתוחה
          </h1>
          <v-spacer />
          <v-btn
            color="#fff"
            elevation="0"
            @click="goBack()"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider />

        <v-form
          id="signup-form"
          ref="form"
          v-model="valid"
          form
          class="ok-form"
          @submit.prevent="register()"
        >
          <v-alert :value="!!alertMsg" color="error" icon="warning">
            {{ alertMsg }}
          </v-alert>
          <h2 class="tac d-block my-1">
            רק כמה פרטים וזהו...
          </h2>
          <label
            v-if="!inputSplited"
            class="ok-input mt-3"
          >
            <span>
              שם מלא
            </span>
            <v-text-field
              v-model="fullName"
              filled
              dense
              name="fullName"
            />
          </label>
          <div v-if="inputSplited" class="d-flex mt-3" fluid>
            <label class="ok-input">
              <span> שם פרטי</span>
              <v-text-field
                v-model="firstName"
                class="ml-4 flex-grow-1"
                name="firstName"
                :rules="[rules.required]"
                filled
                dense
              />
            </label>

            <label class="ok-input ">
              <span>שם משפחה</span>
              <v-text-field
                v-model="lastName"
                class="flex-grow-1"
                name="lastName"
                filled
                dense
                :rules="[rules.required]"
              />
            </label>
          </div>
          <label class="ok-input">
            <span>דואר אלקטרוני - ישמש כשם המשתמש שלך</span>
            <v-text-field
              v-model="email"
              class="mt-3"
              name="email"
              type="email"
              :rules="[rules.required, rules.email]"
              filled
              dense
            />
          </label>
          <label class="ok-input mt-3">
            <span> סיסמא </span>
            <v-text-field
              v-model="password"
              name="password"
              :rules="[rules.required, rules.passwordLength ,rules.passwordNumric]"
              type="password"
              counter
              filled
              dense
            />
          </label>
          <label class="ok-input mt-3">
            <span>
              סיסמא שנית
            </span>
            <v-text-field
              v-model="confirmPassword"
              name="confirmPassword"
              :rules="[rules.required , (password === confirmPassword) || 'הסיסמאות אינן תואמות']"
              type="password"
              counter
              filled
              dense
            />
          </label>

          <v-divider light />

          <v-radio-group v-model="role">
            <label class="tar" style="color: #6F6F6F;">אני:</label>
            <v-radio
              v-for="role in roles"
              :key="role.name"
              color="#000"
              :label="`${role.name}`"
              :value="role.name"
              class="ok-radio-btn"
            />
          </v-radio-group>
        </v-form>
        <v-divider />
        <div class="d-flex justify-center">
          <v-switch
            v-model="remmberMe"
            label="זכור אותי"
          />
        </div>
        <v-card-actions>
          <v-btn
            type="submit"
            form="login-form"
            color="#4D4D4D"
            class="white--text ok-btn col-1-1"
            large
            :loading="isLoading"
            @click.prevent="register()"
          >
            הרשמה
          </v-btn>
        </v-card-actions>
        <v-alert v-if="!!errorMeesge" color="error">
          <small>{{ errorMeesge }}</small>
        </v-alert>
        <div class="tac">
          <v-btn
            class="mt-6 mb-1"
            type="button"
            text
            @click.prevent="openLigonModal()"
          >
            כבר נרשמת?
            <strong>&nbsp;להתחברות</strong>
          </v-btn>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { EventBus, BUSEVENTS } from '~/services/bus/bus';
import { Ls, isPleaseRegister } from '~/app/utils/localStorage.ts';

export default {
  name: 'RegisterPage',
  components: {
  },
  middleware: 'register',
  data: () => ({
    inputSplited: false,
    isLoading: false,
    errorMeesge: '',
    valid: true,
    remmberMe: true,
    alertMsg: '',
    firstName: '',
    lastName: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    roles: [
      { name: 'יועץ/ת' },
      { name: 'אקטיביסט/ת' },
      { name: 'חבר כנסת' },
      { name: 'אחר' },
    ],
    role: '',
    rules: {
      required: (value:string) => !!value || 'חובה',
      email: (value:string) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || 'המייל אינו תקין';
      },
      passwordLength: (value:string) => {
        // FROM DJAGNO
        // Your password must contain at least 8 characters.
        // Your password can’t be too similar to your other personal information.
        // Your password can’t be a commonly used password.
        const isValid = !!value && value.length >= 8;
        return isValid || 'יש להזין 8  תווים לפחות';
      },
      passwordNumric: (value:string) => {
        const isValid = !!value && !/^\d+$/.test(value);
        return isValid || 'יש להזין גם אותיות';
      },
    },
  }),
  watch: {
    fullName(newValue, oldValue) {
      const split = newValue.split(' ');
      const isSplited = split.length > 1 && split[1].length > 1;
      this.firstName = split[0];
      this.lastName = split[1];
      this.inputSplited = isSplited;
      if (isSplited) {
        setTimeout(() => {
          const lastNameEl:any = document.querySelector('[name="lastName"]');
          if (lastNameEl) {
            lastNameEl.focus();
          }
        }, 1);
      }
    }
  },
  created() {
    this.role = this.roles[0].name;
  },

  methods: {
    register() {
      this.inputSplited = true;
      if (this.isValid()) {
        this.isLoading = true;
        this.errorMeesge = '';
        this.$store.dispatch('user/signUp', {
          privateName: this.firstName,
          lastName: this.lastName,
          role: this.role, // TODO convert to english using UserRole enum
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          remmberMe: this.remmberMe
        })
          .then((user) => {
            this.$router.push('/');
          })
          .catch((error) => {
            if (error && error.response && error.response.status === 400) {
              this.errorMeesge = error.response.data.error_message;
            } else {
              this.errorMeesge = 'הסיסמא שהזנת אינה תקינה';
            }
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
    isRepaetForm():boolean {
      const isMatch = this.password === this.confirmPassword;
      return isMatch;
    },
    isValid() {
      const isFormValid = (this.$refs.form as Vue & { validate: () => boolean }).validate();
      const isPasswordValid = this.isRepaetForm();
      return isPasswordValid && isFormValid;
    },
    openLigonModal() {
      EventBus.$emit(BUSEVENTS.toglleLoginDialog, true);
    },
    goBack() {
      Ls.remove(isPleaseRegister);
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
.elevation-12{
  width: 100%;
  max-width: 400px;
}

</style>
