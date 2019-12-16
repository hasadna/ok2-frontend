<template>
  <v-app>
    <v-navigation-drawer app clipped right v-model="isDrawer">
     <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="menu in menus"  v-bind:key="menu.link">
            <router-link :to="{path:menu.link}" >
            <v-list-item-title >{{menu.name}}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list-item-group>
     </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" clipped-right>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon  @click.stop="isDrawer = !isDrawer"></v-app-bar-nav-icon>
          <router-link to="/" >
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

      <v-menu bottom right></v-menu>



      <div>
        <select @change="onLanguageChange($event)" :value="selectedLanguage">
          <option value="he">עברית</option>
          <option value="en">English</option>
        </select>
      </div>
    </v-app-bar>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view name="home">
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
    selectedLanguage: Localizer.instance.languageName,
    isDrawer: true,
    menus:[
      {name:'Home', link:'/'},
      {name:'כלי', link:'/tool1'},
    ]
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
