<template>
  <div>
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else class="tool-container">
      <h2>{{ title }}</h2>
      <div class="mini-blocks-container">
        <div class="d-flex">
          <div class="mini-block">
            {{ description }}
          </div>
        </div>

        <div class="d-flex">
          <div class="mini-block">
            <ul>
              <li v-for="(e, i) in pastEvents" :key="i">
                {{ e.date.toISOString() }} - {{ e.text }}
              </li>
            </ul>
          </div>
          <div class="mini-block">
            <ul>
              <li v-for="(e, i) in futureEvents" :key="i">
                {{ e.date.toISOString() }} - {{ e.text }}
              </li>
            </ul>
          </div>
        </div>

        <div class="d-flex">
          <div class="mini-block">
            <h4>מתוך תקנון הכנסת</h4>
            <ul class="takanon-list">
              <li v-for="(clause, i) in takanon" :key="i">
                {{ clause.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="tool-body-container">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
// import { ToolId } from '../../app/types/tool';
import { toolsService } from '~/services/tools.services';

export default {
  name: 'ParliamentTool',

  props: {
    toolId: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    isLoading: true,
    title: '',
    description: '',
    didYouKnow: [],
    pastEvents: [],
    futureEvents: [],
    takanon: [],
  }),

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const theToolId = this.toolId;

        this.title = 'langModule.title';

        this.description = await toolsService.getDescription(theToolId);
        this.didYouKnow = await toolsService.getDidYouKnow(theToolId);

        const toolEvents = await toolsService.getEvents(theToolId)
        const now = new Date();
        this.pastEvents = toolEvents.filter(e => e.date < now);
        this.futureEvents = toolEvents.filter(e => e.date > now);

        this.takanon = await toolsService.getTakanon(theToolId);

        this.isLoading = false;
      } catch (e) {
        return e;
      }
    },
  },
};
</script>
<style scoped lang="scss">

</style>
