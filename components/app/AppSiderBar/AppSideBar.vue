<template>
  <v-navigation-drawer v-model="isDrawer" disable-resize-watcher app clipped right>
    <v-list v-for="route in routes" :key="route.path" nav dense>
      <v-list-item :class="{'active':route.isActive}" class="black--text">
        <router-link :to="{ path: route.path }">
          <v-list-item-title>
            {{ route.text }}
          </v-list-item-title>
          <v-list-group v-if="route.children.length">
            <v-list-item v-for="child in route.children" :key="child.path" class="sub-menu">
              <router-link :to="{ path: `${route.path}/${child.path}` }">
                <v-list-item-content>
                  <v-list-item-title>{{ child.text }}<v-list-item-title /></v-list-item-title>
                </v-list-item-content>
              </router-link>
            </v-list-item>
          </v-list-group>
        </router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { EventBus, BUSEVENTS } from '~/services/bus/bus';
import { getRouteName } from '~/app/utils/routeNames.ts';
export default {
  name: 'AppSideBar',
  data: () => ({
    isDrawer: false,
    menus: [
      { name: 'עמוד הבית', link: '/' },
      { name: 'נאומים בני דקה', link: 'tools/one-minute-speech' },
    ],
  }),
  computed: {
    routes() {
      const routes = this.$router.options.routes;
      return routes
        .filter(route => !!route.path)
        .map(this.mapRouteObj);
    },
  },
  created() {
    EventBus.$on(BUSEVENTS.toglleIsDrawer, (payload) => {
      this.setDrawer(payload);
    });
  },
  methods: {
    setDrawer(is) {
      this.isDrawer = is;
    },
    isActive(href) {
      const currentRoute = this.$nuxt.$route.path;
      return currentRoute === href;
    },
    mapRouteObj(route) {
      let children = [];
      if (route.children) {
        children = route.children.filter(child => !!child.path).map(this.mapRouteObj);
      }
      return {
        ...route,
        children,
        text: getRouteName(route.path),
        isActive: this.isActive(route.path)
      };
    }
  },
};
</script>

<style scoped lang="scss">
@import "~assets/variables.scss";

.my-2 {
  margin: 0 15px;
  text-decoration: none;
}
.active{
  background-color: $dark-gray;
}
</style>
