<template>
  <v-app class="App">
    <AppHeader />
    <AppSideBar />
    <v-content>
      <v-container fluid class="height-1-1">
        <router-view class="height-1-1" />
      </v-container>
    </v-content>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '../components/app/AppHeader/AppHeader ';
import AppFooter from '../components/app/AppFooter/AppFooter';
import AppSideBar from '../components/app/AppSiderBar/AppSideBar';

export default {
  components: {
    AppFooter,
    AppHeader,
    AppSideBar,
  },
  data() {
    return {};
  },
};
</script>
