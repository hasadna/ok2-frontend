<template>
  <div class="toatr">
    <v-alert
      v-if="toastrs.includes(pleaseRegister)"
      dense
      icon="mdi-alert"
      transition="slide-y-transition"
    >
      <v-row align="center">
        <v-col class="grow">
          אהלן,
          <!-- <br> -->
          לצורך מעקב אחרי סטטוס השימוש שלך בכלים יש להירשם.
          זה רק דקה, מבטיחים
        </v-col>
        <v-col class="shrink">
          <v-btn class="text--white" @click="unSsetToastr(pleaseRegister)">
            להרשמה
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ToasterEnum } from '~/app/enums/toaster.enum.ts';

export default {
  name: 'Toaster',
  data: () => {
    return {
      pleaseRegister: ToasterEnum.pleaseRegister
    };
  },
  computed: {
    ...mapGetters({
      toastrs: 'ui/getToastrs',
    }),
  },
  methods: {
    unSsetToastr(toastr) {
      this.$store.dispatch('ui/unSetToastr', toastr);
      this.$router.push('RegisterPage');
    }
  }

};
</script>

<style>
.toatr{
    top: auto;
    bottom:-175%;
    position: absolute;
    width: 75%;
    margin: auto;
    right: 0;
    left: 0;
    z-index: 0;
}
.v-alert__icon.v-icon{
  margin: auto 6px;
}
</style>
