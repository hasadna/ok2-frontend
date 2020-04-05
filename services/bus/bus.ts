// event-bus.vue
import Vue from 'vue';
export const EventBus = new Vue();

export const BUSEVENTS = {
  toglleLoginDialog: 'toglleLoginDialog',
  toglleIsDrawer: 'toglleIsDrawer',
};
