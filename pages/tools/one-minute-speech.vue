<template>
  <div class="d-flex justify-space-between">
    <div class="half">
      <Taknon />
      <OneMinuteSpeechForm />
    </div>
    <ParliamentTool :tool-id="toolId" class="half" />
  </div>
</template>

<script lang="ts">
import ParliamentTool from '~/components/tools/ParliamentTool.vue';
import OneMinuteSpeechForm from '~/components/tools/one/OneMinuteSpeechForm.vue';
import Taknon from '~/components/tools/one/Taknon.vue';
import { ToolId } from '~/app/types/tool';

export default {
  name: 'OneMinuteSpeech',
  transition: 'default',
  components: {
    ParliamentTool,
    OneMinuteSpeechForm,
    Taknon
  },

  data: () => ({
    toolId: ToolId.OneMinuteSpeech,
  }),

  methods: {},
};
</script>
<style scoped lang="scss">
.half{
  max-width: 49%;
  flex:1 0 49%;
}
</style>
