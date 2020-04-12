<template>
  <nav>
    <ul>
      <li
        v-for="menu in menus"
        :key="menu.link"
      >
        <nuxt-link :to="`/tools/${menu.link}`">
          {{ menu.name }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'ToolsSideBar',
  data: () => ({
    menus: [
      { name: 'שאילתות ונאומים בני דקה', link: 'one-minute-speech' },
    ],
  }),
};
</script>

<style>

</style>
