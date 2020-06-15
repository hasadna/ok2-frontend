<template>
  <v-app class="App">
    <AppHeader />
    <AppSideBar />
    <v-main>
      <v-container fluid class="height-1-1 pa-6">
        <router-view class="height-1-1" />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '../components/app/AppHeader/AppHeader ';
import AppFooter from '../components/app/AppFooter/AppFooter';
import AppSideBar from '../components/app/AppSiderBar/AppSideBar';
import { Ls, userLocalStorage } from '../app/utils/localStorage';
import { LOGIN } from '~/store/mutations-types.ts';

export default {
  components: {
    AppFooter,
    AppHeader,
    AppSideBar,
  },
  data() {
    return {};
  },
  mounted() { // client side only
    const user = Ls.get(userLocalStorage);
    if (user) {
      this.$store.commit(`user/${LOGIN.CHECK_IN}`, user);
    }
  }
};
</script>
