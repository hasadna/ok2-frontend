<template>
  <v-app-bar app clipped-right class="header">
    <nuxt-link to="/" class="d-flex align-center">
      <span class="svg block" v-html="logo" />
      <h1 class="ok-color display-1 mr-2 d-none d-md-block Alef">
        כנסת פתוחה
      </h1>
    </nuxt-link>
    <v-app-bar-nav-icon class="d-flex d-sm-none" @click="toglleIsDrawer()" />
    <v-spacer />
    <main-menu class="row-1-1 d-none d-sm-flex" />
    <v-spacer />

    <AppHeaderUser />

    <v-menu bottom right />
    <Toastr />
  </v-app-bar>
</template>

<script>

import MainMenu from '~/components/shared/MainMenu.vue';
import Toastr from '~/components/shared/Toastr.vue';
import AppHeaderUser from '~/components/app/AppHeader/AppHeaderUser.vue';
import { BUSEVENTS, EventBus } from '~/services/bus/bus.ts';
import { getSvg } from '~/app/utils/svgs.ts';
export default {
  name: 'AppHeader',
  components: {
    MainMenu,
    AppHeaderUser,
    Toastr
  },
  data: () => ({
    isDrawer: false,
    logo: getSvg('logo'),
  }),

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
  // margin-right: 8px;
}
</style>
