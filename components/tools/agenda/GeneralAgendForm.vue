<template>
  <section class="form__wrapper">
    <v-form @submit.prevent="send()">
      <h2 class="form__title">
        הגשת הצעה לסדר יום
      </h2>
      <hr class="hr">
      <ok-input
        v-model="title"
        name="title"
        label="נושא ההצעה"
        placeholder="לדוג' תקציב המדינה, פיתוח הפריפריה"
        type="text"
      />
      <v-spacer />
      <v-row justify="center">
        <v-btn color="indigo" dark type="submit">
          שליחה
        </v-btn>
      </v-row>
    </v-form>
  </section>
</template>

<script lang="ts">
import OkInput from '~/components/shared/form/OkInput.vue';

export default {
  components: {
    OkInput
  },
  data: () => ({
    title: '',
    text: '',
    status: {
      color: 'gray',
      var: '--v-secondary-darken2',
    },
  }),
  methods: {
    send() {

    },
  },
};
</script>

<style>

</style>
