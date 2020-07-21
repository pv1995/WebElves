const pkg = require("./package");

const  routes =  [
  '/home',
  '/services',
  '/aboutus',
  '/contactus',
  '/careers',
  '/technologies',
  '/web',
  '/mobile',
  '/design',
  '/customWeb',
  '/webPortal',
  '/eCommerce',
  '/erp',
  '/cms',
  '/reactNative',
  '/nativescript',
  '/quasar',
  '/elixir',
  '/disclaimer',
  '/privacyPolicy',
  '/requestQuote'
]

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Digital Strategy Consulting | webElves",
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: pkg.description
      },
      {
        hid: "keywords",
        name: "keywords",
        content: pkg.keywords
      },
      {
        hid: 'description',
        name: 'description', 
        content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' 
      },

      { 
        hid: 'keywords',
        name: 'keywords',
        content: 'web development company, web development services, web developers, hire developers, nodejs development services, reactjs development services, vuejs development services, react native development, Ecommerce Website Development Company, mobile app development services, mobile app development company, cross platform app development services, hybrid mobile app development company, cms development, wordpress development services, custom software development services' 
      },
     
    ],
    link: [{
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato:400,700,900|Open+Sans:400,700,800|Raleway:600,700,900"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {src:"~/plugins/vue-particles",ssr:false},
    {src: "~/plugins/font-awesome",ssr:false},
    {src: "~/plugins/sweet-alert",ssr:false},
    {src: "~/plugins/v-validate",ssr:true},
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/vue-typer.js', ssr: false },
    { src: '~plugins/vue-slick.js', ssr: false },
    { src: '~firebase/firebaseInit.js', ssr: false },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-VueJS.org/docs/
    ["bootstrap-vue/nuxt", "@nuxtjs/sitemap"]
  ],
  sitemap: {
    hostname: 'http://127.0.0.1:3000',
    gzip: true,
    path: '/sitemap.xml',
    generate: true,
    routes: routes
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
