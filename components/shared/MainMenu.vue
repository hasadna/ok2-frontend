<template>
  <ul class="flex">
    <li v-for="menu in menus" :key="menu.href">
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
        name: 'ח"כים וסיעות',
        href: '#',
      },
      {
        name: 'ח"כים וסיעות',
        href: '#',
      },
    ],
  }),

};
</script>

<style>

</style>
