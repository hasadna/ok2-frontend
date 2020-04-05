<template>
  <v-app-bar app clipped-right class="header">
    <nuxt-link to="/" class="d-flex align-center">
      <span class="svg block" v-html="logo" />
      <h1 class="ok-color display-1 ">
        כנסת פתוחה
      </h1>
    </nuxt-link>
    <!-- <v-app-bar-nav-icon @click="toglleIsDrawer()" /> -->
    <v-spacer />
    <main-menu />
    <v-spacer />

    <Login v-if="!user" />
    <Logout v-if="user" />

    <v-menu bottom right />
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '~/components/shared/Login.vue';
import MainMenu from '~/components/shared/MainMenu.vue';
import Logout from '~/components/shared/Logout.vue';
import { BUSEVENTS, EventBus } from '~/services/bus/bus.ts';
import { getSvg } from '~/app/utils/svgs.ts';
export default {
  name: 'AppHeader',
  components: {
    Login,
    Logout,
    MainMenu,
  },
  data: () => ({
    isDrawer: false,
    logo: getSvg('logo'),
  }),
  computed: {
    ...mapGetters({
      user: 'user/getUser',
    }),
  },
  methods: {
    toglleIsDrawer() {
      this.isDrawer = !this.isDrawer;
      EventBus.$emit(BUSEVENTS.toglleIsDrawer, this.isDrawer);
    },
  },
};
</script>

<style scoped lang="scss">
.header{
  height: 60px;
  box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.05), 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.15);
  background: #EBEBEB;
}
h1{
  margin-right: 8px;
}
</style>
