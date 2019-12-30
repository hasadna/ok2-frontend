<template>
  <div>
    <ParliamentTool v-bind:title="$language.oneMinuteSpeech.title">
      <template v-slot:description>
        <div>
          <h4>אז מה זה אומר?</h4>
          <p>
            כל
            <u>חבר כנסת</u> רשאי לבקש בתחילת
            <u>ישיבת הכנסת</u> המתקיימת בימים ב' וג' לנאום עד דקה על כל נושא.
          </p>
          <h4>הידעת?</h4>
          <p>בזמן נאום בן דקה, חשפה ח"כ שלי יחימוביץ' את דבר קיומו של האסיר X</p>
        </div>
      </template>
      <template v-slot:history>
        <div>מה היה?</div>
      </template>
      <template v-slot:future>
        <div>מה יהיה?</div>
      </template>
      <template v-slot:regulations>
        <ul class="takanon-list">
          <li>
            ישיבת הכנסת בימים ב' ו-ג', שאינה נפתחת
            בדיון על הצעה להביע אי-אמון בממשלה,
            תיפתח בנאומים של חברי הכנסת בנושאים
            לפי בחירתם, כאמור בסעיף 25(ג); יושב
            ראש הישיבה יקבע את סדר הנואמים; חבר
            הכנסת המבקש לנאום יצביע ממקומו
            באולם המליאה, וידבר, פעם אחת בלבד,
            מהמקום המיועד לכך באולם המליאה,
            במסגרת זמן שלא תעלה על דקה אחת.
          </li>
          <li>
            עם סיום הנאומים, רשאית הממשלה
            להשיב, באמצעות אחד או שניים מנציגיה,
            במסגרת זמן שלא תעלה על חמש דקות לכל
            אחד מהם
          </li>
        </ul>
      </template>
      <template v-slot:body>
        <div>טופס אינטראקטיבי</div>
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
<style scoped lang="scss">
.takanon-list {
  font-family: 'Times New Roman', Times, serif;
  font-size: 19px;
  list-style-type: hebrew;
  margin: 0 30px;

  & li {
    margin: 10px 0 15px 0;
  }
}
</style>
