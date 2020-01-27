import Vue from 'vue';
import VuetifyLib from 'vuetify/lib';
// @ts-ignore
import Vuetify from 'vuetify'; // eslint-disable-line

Vue.use(VuetifyLib);

export default new VuetifyLib({
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: '#26418c',
        secondary: '#EDEEFF',
        accent: '#8c9eff',
        error: '#b71c1c',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
    options: {
      customProperties: true,
    },
  }
});
