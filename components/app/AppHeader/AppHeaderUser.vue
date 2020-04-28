<template>
  <div class="d-flex hello">
    <div class="tal mx-2">
      שלום {{ user ? user.firstName : `אורח/ת` }}<br>
      <strong>{{ user ? `יציאה מחשבונך`: `התחברות` }}</strong>
    </div>
    <button @click="toglleForm">
      <v-avatar size="36">
        <v-img v-if="user && user.avatar" :src="user.avatar" />
        <v-icon v-else>
          mdi-account
        </v-icon>
      </v-avatar>
      <v-icon>mdi-chevron-down</v-icon>
    </button>

    <div v-if="isDisplayForm" class="relative">
      <Login v-if="!user" :dialog.sync="isDisplayForm" @update:dialog="isDisplayForm = $event" />
      <Logout v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '~/components/shared/Login.vue';
import Logout from '~/components/shared/Logout.vue';
import { ToasterEnum } from '~/app/enums/toaster.enum.ts';
import { Ls, isPleaseRegister } from '~/app/utils/localStorage.ts';
export default {
  name: 'AppHeaderUser',
  components: {
    Login,
    Logout,
  },
  data: () => {
    return {
      isDisplayForm: false
    };
  },
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
  },
  mounted() {
    if (!this.user && !Ls.get(isPleaseRegister)) {
      Ls.set(isPleaseRegister, true);
      this.$store.dispatch('ui/setToastr', ToasterEnum.pleaseRegister);
    }
  },
  methods: {
    toglleForm() {
      this.isDisplayForm = !this.isDisplayForm;
    }
  }
};
</script>

<style lang="scss" scoped>
.hello{
  line-height: 1;
}
.v-avatar {
  border: 2px solid $dark-gray;
}
</style>
