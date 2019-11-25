import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

export default new Vuetify({
    rtl: true,
    theme: {
        themes: {
            light: {
                primary: '#757282',
                secondary: '#b0bec5',
                accent: '#8c9eff',
                error: '#b71c1c',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
        },
    }
});
