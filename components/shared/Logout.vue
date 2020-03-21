<template>
  <div>
    שלום , {{ user.name }}
    <v-btn @click="logOut()">
      התנתקות
    </v-btn>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Logout',
  computed: {
    ...mapGetters({
      user: 'user/getUser'
    })
  },
  methods: {
    ...mapActions(['logOut'])
  }
};
</script>

<style>
</style>
