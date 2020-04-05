<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12>
        <v-img :src="require('~/assets/images/ok.png')" class="my-3" contain height="200" />
      </v-flex>

      <v-flex mb-4>
        <h1
          class="primary--text display-2 font-weight-bold mb-3 tac col-1-1"
        >
          ברוכים הבאים לכנסת פתוחה 2.0
        </h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      title: 'עמוד הבית',
      description: 'ברוכים הבאים לאתר כנסת פתוחה 2.0',
      meta: [{ name: 'twitter:title', contnet: 'כנסת פתוחה 2.0' }],
    };
  },
};
</script>
