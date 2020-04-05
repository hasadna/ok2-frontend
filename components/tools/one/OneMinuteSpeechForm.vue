<template>
  <section class="form__warpper">
    <v-form @submit.prevent="send()">
      <legend class="text-center">
        שליחת הצעה לנאום בן דקה
      </legend>
      <v-text-field
        v-model="title"
        name="title"
        label="נושא הנאום"
        placeholder="לדוג' תקציב המדינה, פיתוח הפריפריה"
        type="text"
      />
      <v-textarea v-model="text" outlined name="text" auto-grow label="תוכן הנאום" />
      <CharacterCount :text="text" :word-amount="wordAmount" />
      <h6>אורך אופטימלי - {{ wordAmount.min }}-{{ wordAmount.max }} מילים ולא יותר מ-{{ wordAmount.error }}</h6>
      <v-spacer />

      <v-row justify="center">
        <v-btn color="indigo" dark type="submit">
          {{ $language.form.send }}
        </v-btn>
      </v-row>
    </v-form>
  </section>
</template>

<script lang="ts">
import CharacterCount from '~/components/shared/CharacterCount.vue';

export default {
  components: {
    CharacterCount,
  },
  data: () => ({
    title: '',
    text: '',
    wordAmount: {
      min: 150,
      max: 250,
      error: 300,
    },
    status: {
      color: 'gray',
      var: '--v-secondary-darken2',
    },
  }),
  methods: {
    send() {
      console.log('send');
    },
  },
};
</script>

<style>
legend {
  display: block;
  margin-bottom: 2rem;
}
small {
  margin: -25px 0 15px;
  display: block;
}
</style>
