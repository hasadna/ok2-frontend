<template>
  <nav :class="{'close':isClose}" class="nav height-1-1">
    <button class="pa-3 fll hidden-xs-only hidden-lg-and-up" @click="toglleSideBar(!isClose)">
      <v-icon>mdi-{{ isClose ? 'chevron-left' : 'close' }}</v-icon>
    </button>
    <ul class="pa-0 flc">
      <li
        v-for="route in routes"
        :key="route.link"
        class="li__wrapper ovh"
      >
        <nuxt-link
          :to="`/tools/${route.path}`"
          class="li d-flex px-4 justify-space-between"
          :class="{'active':route.isActive}"
        >
          <span class="black--text"> {{ route.text }} </span>
          <v-icon>mdi-chevron-left</v-icon>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { getRouteName } from '~/app/utils/routeNames.ts';

export default {
  name: 'ToolsSideBar',
  data: () => ({
    isClose: false,
  }),
  computed: {
    routes() {
      const toolRoots = this.$router.options.routes.find(route => route.path === '/tools');
      if (!toolRoots || !toolRoots.children) {
        return [];
      }
      return toolRoots.children
        .filter(route => !!route.path)
        .map(route => ({
          ...route,
          text: getRouteName(route.path),
          isActive: this.isActive(route.path)
        }));
    }
  },
  methods: {
    toglleSideBar(to) {
      this.isClose = to;
    },
    isActive(href) {
      const currentRoute = this.$nuxt.$route.path;
      return currentRoute.includes(href);
    },
  }
};
</script>

<style lang="scss" scoped>
.nav{
  min-width: 290px;
  max-width: 290px;
  background-color: #fff;
}
@media screen and (min-width: 600px) and (max-width: 1263px){
  .nav.close{
  min-width: 30px;
  .li .v-icon{
    display: none;
    }
  }
}
.li.active{
  background-color: $dark-gray;
  span{
    font-weight: 700;
  }
}

.li{
  min-height: 58px;
  align-items: center;
  border-bottom: 1px solid $dark-gray;
  background-color: #fff;
  transition: all 0.2s ease-in;
  span{
        line-height: 1;
  }
  &:hover{
      background-color: $dark-gray;
      .v-icon{
        transform: translateX(-0.1em);
      }
  }
}

</style>
