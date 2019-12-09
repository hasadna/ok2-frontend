<template>
  <select @change="onLanguageChange($event)" :value="selectedLanguage">
    <option value="he">עברית</option>
    <option value="en">English</option>
  </select>
</template>

<script lang="ts">
import { Localizer } from './../../../app/locale/localizer';

export default {
  name: 'LanguageSelect',

  data: () => ({
    selectedLanguage: Localizer.instance.languageName
  }),

  methods: {
    onLanguageChange(e) {
      Localizer.instance.languageName = e.target.value;
      // Next line is ugly but I didn't find any other way
      // to refersh the entire app
      location.reload();
    }
  }
};
</script>
<style scoped>
</style>
