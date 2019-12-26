<template>
  <v-app>
    <v-navigation-drawer app clipped right>
    </v-navigation-drawer>

    <v-app-bar app color="primary" clipped-right>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.png')"
          transition="scale-transition"
          width="70"
        />
        <v-toolbar-title>{{ $language.common.appName }}</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-menu bottom right></v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab router to="/">{{ $language.common.home }}</v-tab>
          <v-tab router to="/oneminutespeech">{{ $language.oneMinuteSpeech.title }}</v-tab>
          <v-tab>2כלי</v-tab>
          <v-tab>3כלי</v-tab>
        </v-tabs>
      </template>

      <div>
        <LanguageSelect />
      </div>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import LanguageSelect from './components/views/layout/LanguageSelect';

export default {
  name: 'App',

  components: {
    LanguageSelect
  },

  data: () => ({
  }),

  methods: {
  }
};
</script>
<style scoped>
* {
  font-family: 'Arimo', sans-serif;
}
</style>
