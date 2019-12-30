<template>
  <div>
    <ParliamentTool v-bind:toolId="toolId">
      <div>טופס אינטראקטיבי</div>
    </ParliamentTool>
  </div>
</template>

<script lang="ts">
import ParliamentTool from '../parliamentTool/ParliamentTool.vue';
import { ToolId } from '../../../../store/modules/tool';

export default {
  name: 'OneMinuteSpeech',

  components: {
    ParliamentTool
  },

  data: () => ({
    toolId: ToolId.OneMinuteSpeech
  }),

  methods: {}
};
</script>
<style scoped lang="scss">
</style>
