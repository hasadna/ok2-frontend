<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <div class="white--text" v-for="menu in menus" :key="menu.link" color="white" text rounded>
        <router-link class="my-2 white--text" :to="{path:menu.link}">{{ menu.name }}</router-link>|
      </div>

      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >כנסת פתוחה הוא פרוייקט שמטרתו לחשוף את פעילות הכנסת לציבור</v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    menus: [
      { name: `דף הבית`, link: '/' },
      { name: `ח"כים וסיעות`, link: '' },
      { name: `ועדות`, link: '//' }
    ]
  })
};
</script>

<style scoped lang="scss">
.my-2 {
  margin: 0 15px;
  text-decoration: none;
}
</style>
