<template>
  <v-app>
    <v-navigation-drawer app clipped right v-model="isDrawer">
      <v-list nav dense>
        <v-list-item-group>
          <router-link v-for="menu in menus" v-bind:key="menu.link" v-bind:to="{path:menu.link}">
            <v-list-item>
              <v-list-item-title>{{menu.name}}</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-right class="header">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="isDrawer = !isDrawer"></v-app-bar-nav-icon>
        <router-link to="/">
          <v-img
            alt="Logo"
            class="shrink mr-2"
            contain
            :src="require('./assets/logo.png')"
            transition="scale-transition"
            width="70"
          />
        </router-link>
        <v-toolbar-title>{{ $language.common.appName }}</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>

      <Login v-if="!getUser" />
      <Logout v-if="getUser" />

      <v-menu bottom right></v-menu>

      <div>
        <LanguageSelect />
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

      <Footer />
  </v-app>
</template>

<script>
import Login from './components/shared/Login';
import Logout from './components/shared/Logout';
import { Localizer } from './app/locale/localizer';
import { mapGetters } from 'vuex';
import LanguageSelect from './components/views/layout/LanguageSelect';
import Footer from './components/views/layout/Footer';

const lang = Localizer.instance.language;

export default {
  name: 'App',
  components: {
    Login,
    Logout,
    LanguageSelect,
    Footer
  },
  computed: {
    ...mapGetters(['getUser'])
  },

  data: () => ({
    isDrawer: true,
    menus: [
      { name: lang.common.home, link: '/' },
      { name: lang.oneMinuteSpeech.title, link: '/oneminutespeech' }
    ]
  }),

  methods: {}
};
</script>
<style scoped>
* {
  font-family: 'Arimo', sans-serif;
}
.header {
  background: var(--v-primary-lighten5);
}
</style>
