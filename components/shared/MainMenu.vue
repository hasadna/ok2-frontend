<template>
  <ul class="d-flex justify-center row-1-1">
    <li v-for="menu in menus" :key="menu.href" :class="{'active':isActive(menu.href)}" class="px-4 tac black--text row-1-1 d-flex justify-center flex-column fs18">
      <nuxt-link :to="menu.href">
        {{ menu.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MainMenu',
  data: () => ({
    menus: [
      {
        name: 'ח"כים וסיעות',
        href: '#',
      },
      {
        name: 'ועדות',
        href: '##',
      },
      {
        name: 'כלים פרלמנטריים',
        href: '###',
      },
    ],
  }),
  methods: {
    isActive(href) {
      if (href === '#') {
        return true;
      }
    }
  }

};
</script>

<style lang="scss" scoped>

li{
  position: relative;
  ::after{
    content: '';
    position: absolute;
    bottom: -4px;
    right: 0;
    left: 0;
    margin: auto;
    height: 4px;
    width: 100%;
    max-width: 0%;

  background: $ok-color;
  transition: 0.3s ease-in;
  }
}
li.active{
  background-color: $dark-gray;
}
li:hover,
li.active{
  position: relative;
  a{
  color: $ok-color;
  }
  ::after{
    max-width: 100%;
  transition: 0.3s ease-in;
  }
}
</style>
