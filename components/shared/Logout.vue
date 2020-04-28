<template>
  <div class="absolute tooltip">
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
      user: 'user/getUser',
    }),
  },
  methods: {
    ...mapActions({
      logOut: 'user/logOut',
    }),
  },
};
</script>

<style lang="scss" scooped>
.tooltip{
    bottom: -200%;
    left: 0;
    right: -156px;
}

</style>
