<template>
  <v-navigation-drawer v-model="isDrawer" app clipped right>
    <v-list nav dense>
      <v-list-item-group>
        <router-link v-for="menu in menus" :key="menu.link" :to="{ path: menu.link }">
          <v-list-item>
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { EventBus, BUSEVENTS } from '~/services/bus/bus';

export default {
  name: 'AppSideBar',
  data: () => ({
    isDrawer: false,
    menus: [
      { name: 'עמוד הבית', link: '/' },
      { name: 'נאומים בני דקה', link: 'tools/one-minute-speech' }
    ]
  }),
  created() {
    EventBus.$on(BUSEVENTS.toglleIsDrawer, (payload) => {
      this.setDrawer(payload);
    });
  },
  methods: {
    setDrawer(is) {
      this.isDrawer = is;
    }
  }
};
</script>

<style scoped lang="scss">
.my-2 {
  margin: 0 15px;
  text-decoration: none;
}
</style>
