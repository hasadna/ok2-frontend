<template>
  <div>
    Hello,  {{getUser.name}}
    <v-btn @click="logOut()">log out</v-btn>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  computed:{
    ...mapGetters(['getUser'])
  },
  methods:{
    ...mapActions(['logOut'])
  }
};
</script>

<style>

</style>
