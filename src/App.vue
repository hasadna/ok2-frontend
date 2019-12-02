<template>
  <v-app>
    <v-app-bar app color="primary">
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
          <v-tab>כלי1</v-tab>
          <v-tab>2כלי</v-tab>
          <v-tab>3כלי</v-tab>
        </v-tabs>
      </template>

      <div>
        <select @change="onLanguageChange($event)" :value="selectedLanguage">
          <option value="he">עברית</option>
          <option value="en">English</option>
        </select>
      </div>
    </v-app-bar>

    <v-navigation-drawer clipped right app>
      <!-- -->
    </v-navigation-drawer>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view>
          <Home />
        </router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- footer content here -->
    </v-footer>
  </v-app>
</template>

<script>
import Home from './components/views/home/Home.vue';
import { Localizer } from './app/locale/localizer';

export default {
  name: 'App',

  components: {
    Home
  },

  data: () => ({
    selectedLanguage: Localizer.instance.languageName
  }),

  methods: {
    onLanguageChange(e) {
      Localizer.instance.languageName = e.target.value;
      // Next line is ugly but I didn't find any other way
      // to refersh the entire app
      location.reload();
    }
  }
};
</script>
<style scoped>
* {
  font-family: 'Arimo', sans-serif;
}
</style>
