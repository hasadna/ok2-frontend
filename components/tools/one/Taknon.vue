<template>
  <div class="mb-4 flc">
    <h2 class="text-h5 mb-2 font-weight-regular">
      תקנון הכנסת
    </h2>
    <p>
      {{ computedText }}
    </p>
    <v-btn text class="tal float-left text-capitalize font-weight-bold" @click="toglleExpend(!isOpen)">
      קרא {{ isOpen ? 'פחות' : 'עוד' }}
    </v-btn>
    <hr class="flc">
  </div>
</template>

<script>
export default {
  name: 'Taknon',
  data: () => ({
    isOpen: false,
    text: ` חברי הכנסת רשאים לנום במליה במשך דקה אחת בנושאים לפי בחריתם.
      לפי סעיף 51 לתקנון הכנסת
      שניים מציגיה, במסגרת זמן שלא תעלה על חמש דקות לכל אחד מהמשיבים.
      לפי סעיף 51 לתקנון הכנסת
      שניים מציגיה, במסגרת זמן שלא תעלה על חמש דקות לכל אחד מהמשיבים.
      לפי סעיף 51 לתקנון הכנסת
      שניים מציגיה, במסגרת זמן שלא תעלה על חמש דקות לכל אחד מהמשיבים.
      לפי סעיף 51 לתקנון הכנסת
      שניים מציגיה, במסגרת זמן שלא תעלה על חמש דקות לכל אחד מהמשיבים.
      עם סיום`
  }),
  computed: {
    computedText() {
      return this.isOpen ? this.text : this.text.substring(0, 50) + '...';
    }
  },
  methods: {
    toglleExpend(bol) {
      this.isOpen = bol;
    }
  }

};
</script>

<style>

</style>
