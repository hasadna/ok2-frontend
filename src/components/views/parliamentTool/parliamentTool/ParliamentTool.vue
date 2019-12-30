<template>
  <div class="tool-container">
    <h1>{{ title }}</h1>
    <div class="mini-blocks-container">
      <div class="mini-blocks-row">
        <div class="mini-block">
          <slot name="description" />
        </div>
      </div>

      <div class="mini-blocks-row">
        <div class="mini-block">
          <slot name="history" />
        </div>
        <div class="mini-block">
          <slot name="future" />
        </div>
      </div>

      <div class="mini-blocks-row">
        <div class="mini-block">
          <h4>מתוך תקנון הכנסת</h4>
          <slot name="regulations" />
        </div>
      </div>
    </div>

    <div class="tool-body-container">
      <slot name="body" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ParliamentTool',

  props: {
    title: String
  },

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
  flex-direction: column;
}

.mini-blocks-row {
  display: flex;
}

.mini-block {
  flex: 1;

  background: #fdfdfd;

  margin: 10px;
  padding: 20px;

  border-radius: 10px;
}

.tool-body-container {
  flex: 1;

  min-height: 30vh;

  margin: 10px;
  padding: 20px;

  border-radius: 10px;

  background: #fdfdfd;
}

.tool-descriptoin {
}
</style>
