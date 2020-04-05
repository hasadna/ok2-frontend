<template>
  <div>
    <ParliamentTool :tool-id="toolId">
      <OneMinuteSpeechForm />
    </ParliamentTool>
  </div>
</template>

<script lang="ts">
import ParliamentTool from '~/components/tools/ParliamentTool.vue';
import OneMinuteSpeechForm from '~/components/tools/one/OneMinuteSpeechForm.vue';
import { ToolId } from '~/app/types/tool';

export default {
  name: 'OneMinuteSpeech',

  components: {
    ParliamentTool,
    OneMinuteSpeechForm,
  },

  data: () => ({
    toolId: ToolId.OneMinuteSpeech,
  }),

  methods: {},
};
</script>
<style scoped lang="scss">
</style>
