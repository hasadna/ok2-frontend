<template>
  <section class="form__wrapper">
    <v-form @submit.prevent="send()">
      <h2 class="form__title">
        שליחת הצעה לנאום בן דקה
      </h2>
      <hr class="hr">
      <small class="d-block form__small">
        נושא הנאום
      </small>
      <ok-input
        v-model="title"
        name="title"
        placeholder="לדוג' תקציב המדינה, פיתוח הפריפריה"
        type="text"
        class="mb-4"
      />
      <small class="d-block form__small">
        תוכן הנאום
        <span class="mr-1">
          (אורך אופטימלי - {{ wordAmount.min }}-{{ wordAmount.max }} מילים ולא יותר מ-{{ wordAmount.error }})
        </span>
      </small>
      <v-textarea
        v-model="content"
        solo
        no-resize
        name="text"
        background-color="#D3D3D3"
        auto-grow
      />

      <CharacterCount :text="content" :word-amount="wordAmount" style="margin-top: -20px;" />
      <v-spacer />

      <v-row justify="center">
        <v-btn
          class="mr-auto ml-2 text--white"
          type="submit"
          background-color="#D3D3D3"
        >
          שליחה
        </v-btn>
      </v-row>
    </v-form>
  </section>
</template>

<script lang="ts">
import CharacterCount from '~/components/shared/CharacterCount.vue';
import OkInput from '~/components/shared/form/OkInput.vue';

export default {
  components: {
    CharacterCount,
    OkInput,
  },
  data: () => ({
    title: '',
    content: '',
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
      const form = { title: this.title, content: this.content };
      console.log(form);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
