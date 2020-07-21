import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'


import _6f6c098b from '../layouts/default.vue'

const layouts = { "_default": _6f6c098b }



export default {
  head: {"title":"Digital Strategy Consulting | webElves","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"A Digital Strategy Consulting Firm in Bangalore. Strategic app planning and development, Web & Enterprise  development,  Digital Transformation"},{"hid":"keywords","name":"keywords","content":"Web development,android app development,mobile app development, web design company,Digital Marketing,ecommerce, vuejs, react native, sailsjs, nodejs, chrome extension developers, electron developers, hybrid\u002Fnative app development company react.js, quasar, best wearable app development company, mobile app design company,ios app development, vuejs development company, "},{"hid":"description","name":"description","content":"WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications."},{"hid":"keywords","name":"keywords","content":"web development company, web development services, web developers, hire developers, nodejs development services, reactjs development services, vuejs development services, react native development, Ecommerce Website Development Company, mobile app development services, mobile app development company, cross platform app development services, hybrid mobile app development company, cms development, wordpress development services, custom software development services"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Lato:400,700,900|Open+Sans:400,700,800|Raleway:600,700,900"}],"style":[],"script":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    
    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
    
  },
  components: {
    NuxtLoading
  }
}
