export default {
  mode: 'universal',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'כנסת פתוחה 2.0',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Alef&display=swap" rel="stylesheet' }
    ],
  },
  loading: { color: '#fff' },
  css: [
    '~/assets/styles/main.scss',
  ],
  plugins: [
    '~/plugins/axios',
  ],
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build',
    '@nuxtjs/axios',

  ],
  modules: [
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
  ],
  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
    },
  },
  axios: {
    proxy: true,
  },
  vuetify: {
    rtl: true,
    customVariables: [
      '~/assets/variables.scss',
    ],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        themes: {
          light: {
            primary: '#25408F',
            secondary: '#EDEEFF',
            accent: '#8c9eff',
            error: '#b71c1c',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
        options: {
          customProperties: true,
        },
      },
    },
  },

  build: {
    extend(config, ctx) { },
  },
  typescript: {
    typeCheck: {
      eslint: true,
    },
  },
};

