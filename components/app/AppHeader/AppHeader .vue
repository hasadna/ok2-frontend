<template>
  <v-app-bar app clipped-right class="header">
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click="toglleIsDrawer()" />
      <nuxt-link to="/">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          :src="require('~/assets/images/logo.png')"
          transition="scale-transition"
          width="70"
        />
      </nuxt-link>
      <!-- <v-toolbar-title>{{ $language.common.appName }}</v-toolbar-title> -->
    </div>
    <v-spacer />

    <Login v-if="!user" />
    <Logout v-if="user" />

    <v-menu bottom right />
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '~/components/shared/Login.vue';
import Logout from '~/components/shared/Logout.vue';
import { BUSEVENTS, EventBus } from '~/services/bus/bus.ts';
export default {
  name: 'AppHeader',
  components: {
    Login,
    Logout
  },
  data: () => ({
    isDrawer: false
  }),
  computed: {
    ...mapGetters({
      user: 'user/getUser'
    })
  },
  methods: {
    toglleIsDrawer() {
      this.isDrawer = !this.isDrawer;
      EventBus.$emit(BUSEVENTS.toglleIsDrawer, this.isDrawer);
    }
  }
};
</script>

<style>
</style>
