<template>
  <div>
    <ParliamentTool v-bind:title="$language.oneMinuteSpeech.title">
      <template v-slot:description>
        תיאור קצר לכלי "נואמים בני דקה"
      </template>
      <template v-slot:future>
        מה קורה בעתיד של "נאומים בני דקה"
      </template>
      <template v-slot:regulations>
        תיאור קצר לכלי "נואמים בני דקה"
      </template>
      <template v-slot:description>
        תיאור קצר לכלי "נואמים בני דקה"
      </template>
      <template v-slot:body>
        תיאור קצר לכלי "נואמים בני דקה"
      </template>
    </ParliamentTool>
  </div>
</template>

<script lang="ts">
import ParliamentTool from '../parliamentTool/ParliamentTool.vue';

export default {
  name: 'OneMinuteSpeech',

  components: {
    ParliamentTool
  },

  data: () => ({}),

  methods: {}
};
</script>
<style scoped>
</style>
