<template>
  <div class="d-flex justify-space-between">
    <GeneralAgendForm class="half" />
    <ParliamentTool :tool-id="toolId" class="half" />
  </div>
</template>

<script lang="ts">
import ParliamentTool from '~/components/tools/ParliamentTool.vue';
import GeneralAgendForm from '~/components/tools/agenda/GeneralAgendForm.vue';
import { ToolId } from '~/app/types/tool';

export default {
  name: 'OneMinuteSpeech',
  transition: 'default',
  components: {
    ParliamentTool,
    GeneralAgendForm,
  },

  data: () => ({
    toolId: ToolId.GenrealAgenda,
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
