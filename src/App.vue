<template>
  <div id="app">
    <Frame :msg="language.common.appName" />
  </div>
</template>

<script lang="ts">
import Frame from './components/views/frame/Frame.vue';
import { language } from './app/locale/language';

export default {
  name: 'app',
  components: {
    Frame
  },
  data() {
    return {
      language
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
