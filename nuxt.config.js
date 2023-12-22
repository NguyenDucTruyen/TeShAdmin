export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Admin_TeSh',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  
  ssr: false,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAWxhD7REQJmcOadf6oTRDp60ugn7C4VL8',
          authDomain: 'teshstorebykod-43.firebaseapp.com',
          databaseURL:
            'https://teshstorebykod-43-default-rtdb.asia-southeast1.firebasedatabase.app',
          projectId: 'teshstorebykod-43',
          storageBucket: 'teshstorebykod-43.appspot.com',
          messagingSenderId: '524272303934',
          appId: '1:524272303934:web:625824eae0a491c4aa366f',
          measurementId: 'G-TZP52W1J3Q',
        },
        services: {
          auth: true,
          firestore: true, 
          database: true,
        },
      },
    ],
  ],
  router: {
    middleware: 'middleware-auth',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
