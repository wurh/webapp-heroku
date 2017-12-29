module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'heroku-nuxt',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
      {
        name: 'HandheldFriendly',
        content: 'true'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Global CSS
   */
  css: [
    '~assets/fontawesome/css/fontawesome-all.min.css',
    '~assets/base.css',
    '~assets/main.css'
  ],
  /*
   ** Build configuration
   */
  build: {
    vendor: [
      'axios'
    ],
    /*
     ** Run ESLint on save
     */
    extend(config, ctx) {}
  },
  //是否使用mint-ui 移動端組件庫
  plugins: [{
    src: '~plugins/mintui',
    ssr: true
  }]
}
