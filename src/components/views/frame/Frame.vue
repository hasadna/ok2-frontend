<template>
  <div class="hello">
    <div class="views-container">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.views-container {
  width: 100vw;
  height: 70vh;
  background-color: lightgrey;
}
</style>
