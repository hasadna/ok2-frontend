<template>
  <div class="tool-container">
    <div class="mini-blocks-container">
      <div>
        <div class="mini-block">הסבר קצר</div>
        <div class="mini-block">עתיד</div>
      </div>

      <div>
        <div class="mini-block">תקנון</div>
        <div class="mini-block">היסטוריה</div>
      </div>
    </div>

    <div class="tool-body-container">
      <div>הכלי עצמו</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ParliamentTool',

  data: () => ({}),

  methods: {}
};
</script>
<style scoped lang="scss">
.tool-container {
  display: flex;
  flex-direction: column;

  background: #ddd;

  padding: 20px;
}

.mini-blocks-container {
  flex: 1;
  display: flex;

  & div {
    flex: 1;
  }
}

.mini-block {
  background: #fdfdfd;

  margin: 10px;
  padding: 20px;

  border-radius: 10px;
}

.tool-body-container {
  flex: 1;

  width: 100%;
  min-height: 30vh;

  margin: 10px;
  padding: 20px;

  border-radius: 10px;

  background: #fdfdfd;
}

.tool-descriptoin {
}
</style>
