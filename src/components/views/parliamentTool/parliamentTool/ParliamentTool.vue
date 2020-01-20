<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <div v-else class="tool-container">
      <h1>{{ title }}</h1>
      <div class="mini-blocks-container">
        <div class="mini-blocks-row">
          <div class="mini-block">{{ description }}</div>
        </div>

        <div class="mini-blocks-row">
          <div class="mini-block">
            <ul>
              <li
                v-for="(e, i) in pastEvents"
                v-bind:key="i"
              >{{ e.date.toISOString() }} - {{ e.text }}</li>
            </ul>
          </div>
          <div class="mini-block">
            <ul>
              <li
                v-for="(e, i) in futureEvents"
                v-bind:key="i"
              >{{ e.date.toISOString() }} - {{ e.text }}</li>
            </ul>
          </div>
        </div>

        <div class="mini-blocks-row">
          <div class="mini-block">
            <h4>מתוך תקנון הכנסת</h4>
            <ul class="takanon-list">
              <li v-for="(clause, i) in takanon" v-bind:key="i">{{ clause.text }}</li>
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
import { toolsService } from '../../../../services/tools.services';
import { toCamelCase } from '../../../../utils/textUtils';

export default {
  name: 'ParliamentTool',

  props: {
    toolId: String
  },

  data: () => ({
    isLoading: true,
    title: null,
    description: null,
    didYouKnow: [],
    pastEvents: [],
    futureEvents: [],
    takanon: []
  }),

  created() {
    this.fetchData();
  },

  methods: {
    async fetchData() {
      try {
        const theToolId = this.toolId;

        const langModuleName = toCamelCase(theToolId);
        const langModule = this.$language[langModuleName];
        this.title = langModule.title;

        this.description = await toolsService.getDescription(theToolId);
        this.didYouKnow = await toolsService.getDidYouKnow(theToolId);

        const toolEvents = await toolsService.getEvents(theToolId);
        const now = new Date();
        this.pastEvents = toolEvents.filter(e => e.date < now);
        this.futureEvents = toolEvents.filter(e => e.date > now);

        this.takanon = await toolsService.getTakanon(theToolId);

        this.isLoading = false;
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.tool-container {
  display: flex;
  flex-direction: column;
  background: var(--v-secondary-base);
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
  background: var(--v-secondary-lighten1);
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
  background: var(--v-secondary-lighten1);
}

.takanon-list {
  font-family: 'Times New Roman', Times, serif;
  font-size: 19px;
  list-style-type: hebrew;
  margin: 0 30px;

  & li {
    margin: 10px 0 15px 0;
  }
}
</style>
