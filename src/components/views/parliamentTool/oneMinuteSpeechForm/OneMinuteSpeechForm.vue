<template>
  <section class="form__warpper">
    <v-form @submit.prevent="send()">
      <legend class="text-center">שליחת הצעה לנאום בן דקה</legend>
      <v-text-field
        v-model="title"
        name="title"
        label="נושא הנאום"
        placeholder="לדוג' תקציב המדינה, פיתוח הפריפריה"
        type="text"
      ></v-text-field>
      <v-textarea
        v-model="text"
        @input="countChars"
        outlined
        :color="status.color"
        name="text"
        auto-grow
        label="תוכן הנאום"
      ></v-textarea>

      <small :style="{color:`var(${status.var})`}">
        מס' מילים:
        {{wordLength}}/300
      </small>
      <h6>אורך אופטימלי - 150-250 מילים ולא יותר מ-300)</h6>
      <v-spacer></v-spacer>

      <v-row justify="center">
        <v-btn color="indigo" dark type="submit">{{ $language.form.send }}</v-btn>
      </v-row>
    </v-form>
  </section>
</template>

<script>
export default {
  data: () => ({
    title: ``,
    text: ``,
    wordLength: 0,
    status: {
      color: 'gray',
      var: '--v-secondary-darken2'
    },
    statuses: [
      { color: 'gray', var: '--v-secondary-darken2' },
      { color: 'primary', var: '--v-error-lighten4' },
      { color: 'success', var: '--v-success-lighten2' },
      { color: 'warning', var: '--v-warning-darken3' },
      { color: 'error', var: '--v-error-base' }
    ]
  }),
  methods: {
    countChars() {
      const words = this.text.split(/[\n\r\s]+/g);
      words.filter(word => word.length > 0);
      this.wordLength = words.length;
      switch (true) {
        case words.length >= 0 && words.length < 50:
          this.status = this.statuses[0];
          break;
        case words.length >= 51 && words.length < 149:
          this.status = this.statuses[1];
          break;
        case words.length >= 150 && words.length < 250:
          this.status = this.statuses[2];
          break;
        case words.length >= 251 && words.length < 300:
          this.status = this.statuses[3];
          break;
        case words.length >= 300:
          this.status = this.statuses[4];
          break;
      }
    },
    send() {
      console.log('send');
    }
  }
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
