// event-bus.vue
import Vue from 'vue';
export const EventBus = new Vue();

export const BUSEVENTS = {
  toggleLoginDialog: 'toggleLoginDialog',
  toggleIsDrawer: 'toggleIsDrawer',
};
