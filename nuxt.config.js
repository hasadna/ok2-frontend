export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/styles/main.scss'
  ],
  plugins: [
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/axios'

  ],

  modules: [],
  vuetify: {
    rtl: true,
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        themes: {
          light: {
            primary: '#26418c',
            secondary: '#EDEEFF',
            accent: '#8c9eff',
            error: '#b71c1c',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107'
          }
        },
        options: {
          customProperties: true
        }
      }
    }
  },

  build: {
    extend(config, ctx) { }
  },
  typescript: {
    typeCheck: {
      eslint: true
    }
  }
};
