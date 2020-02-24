<template>
  <div>
    <ParliamentTool v-bind:toolId="toolId">
      <OneMinuteSpeechForm />
    </ParliamentTool>
  </div>
</template>

<script lang="ts">
import ParliamentTool from '../parliamentTool/ParliamentTool.vue';
import OneMinuteSpeechForm from '../oneMinuteSpeechForm/OneMinuteSpeechForm.vue';
import { ToolId } from '../../../../store/modules/tool';

export default {
  name: 'OneMinuteSpeech',

  components: {
    ParliamentTool,
    OneMinuteSpeechForm
  },

  data: () => ({
    toolId: ToolId.OneMinuteSpeech
  }),

  methods: {}
};
</script>
<style scoped lang="scss">
</style>
