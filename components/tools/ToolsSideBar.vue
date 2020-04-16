<template>
  <nav :class="{'close':isClose}" class="nav height-1-1">
    <button class="pa-3 fll hidden-xs-only hidden-lg-and-up" @click="toglleSideBar">
      <v-icon>mdi-{{ isClose ? 'chevron-left' : 'close' }}</v-icon>
    </button>
    <ul class="pa-0 flc">
      <li
        v-for="menu in menus"
        :key="menu.link"
        class="li__wrapper ovh"
      >
        <nuxt-link
          :to="`/tools/${menu.link}`"
          class="li d-flex px-4 justify-space-between"
          :class="{'active':isActive(menu.link)}"
        >
          <span class="black--text"> {{ menu.name }} </span>
          <v-icon>mdi-chevron-left</v-icon>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ToolsSideBar',
  data: () => ({
    isClose: false,
    menus: [
      { name: 'שאילתות ונאומים בני דקה', link: 'one-minute-speech' },
      { name: 'הצעות לסדר יום', link: 'genreal-agenda' },
    ],
  }),
  methods: {
    isActive(href) {
      const currentRoute = this.$nuxt.$route.path;
      if (currentRoute.includes(href)) {
        return true;
      }
    },
    toglleSideBar() {
      this.isClose = !this.isClose;
    }
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
