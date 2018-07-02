module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-examples',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Montserrat|Roboto:400,400italic,600|Roboto+Mono', type: 'text/css' }
    ]
  },
  /*
  ** Customize the progress bar color
  loading也可以自定义组件
  https://nuxtjs.org/api/configuration-loading
  */
  loading: { color: '#3B8070' },


  // https://zh.nuxtjs.org/api/configuration-css
  css:[
    '@/assets/scss/common.css',
    '@/assets/scss/index.scss'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  
  generate: {
    routes: [
      '/async_component_injection/deep-dive-into-ocean',
      '/async_component_injection/welcome-to-my-blog'
    ]
  }
}
