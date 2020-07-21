import Vue from 'vue'
import Router from 'vue-router'

const _381cb095 = () => import('../pages/mern-stack-development.vue' /* webpackChunkName: "pages/mern-stack-development" */).then(m => m.default || m)
const _7eb07080 = () => import('../pages/why-choose-vuejs-for-development.vue' /* webpackChunkName: "pages/why-choose-vuejs-for-development" */).then(m => m.default || m)
const _44f9c0d4 = () => import('../pages/contactus.vue' /* webpackChunkName: "pages/contactus" */).then(m => m.default || m)
const _065b79b4 = () => import('../pages/our-development-process.vue' /* webpackChunkName: "pages/our-development-process" */).then(m => m.default || m)
const _3e58b21d = () => import('../pages/web-application-development.vue' /* webpackChunkName: "pages/web-application-development" */).then(m => m.default || m)
const _6adeda0d = () => import('../pages/careers.vue' /* webpackChunkName: "pages/careers" */).then(m => m.default || m)
const _79246ece = () => import('../pages/reactjs-development.vue' /* webpackChunkName: "pages/reactjs-development" */).then(m => m.default || m)
const _8de43bf4 = () => import('../pages/ecommerce-development.vue' /* webpackChunkName: "pages/ecommerce-development" */).then(m => m.default || m)
const _7787ae22 = () => import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */).then(m => m.default || m)
const _720749d6 = () => import('../pages/vuejs-development.vue' /* webpackChunkName: "pages/vuejs-development" */).then(m => m.default || m)
const _09569e11 = () => import('../pages/nodejs-development.vue' /* webpackChunkName: "pages/nodejs-development" */).then(m => m.default || m)
const _15406943 = () => import('../pages/aboutus.vue' /* webpackChunkName: "pages/aboutus" */).then(m => m.default || m)
const _6c601a69 = () => import('../pages/drrama.vue' /* webpackChunkName: "pages/drrama" */).then(m => m.default || m)
const _0a03eab6 = () => import('../pages/services.vue' /* webpackChunkName: "pages/services" */).then(m => m.default || m)
const _7d8b13d4 = () => import('../pages/usee.vue' /* webpackChunkName: "pages/usee" */).then(m => m.default || m)
const _a7365fc8 = () => import('../pages/golang-development.vue' /* webpackChunkName: "pages/golang-development" */).then(m => m.default || m)
const _53175fb8 = () => import('../pages/shadowzone.vue' /* webpackChunkName: "pages/shadowzone" */).then(m => m.default || m)
const _55bd2520 = () => import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */).then(m => m.default || m)
const _650cf131 = () => import('../pages/sailsjs-development.vue' /* webpackChunkName: "pages/sailsjs-development" */).then(m => m.default || m)
const _1cb2ffb4 = () => import('../pages/s4carlisle.vue' /* webpackChunkName: "pages/s4carlisle" */).then(m => m.default || m)
const _2b18c7d4 = () => import('../pages/design.vue' /* webpackChunkName: "pages/design" */).then(m => m.default || m)
const _452a41f6 = () => import('../pages/elixir-development.vue' /* webpackChunkName: "pages/elixir-development" */).then(m => m.default || m)
const _a3639ad4 = () => import('../pages/request-quote.vue' /* webpackChunkName: "pages/request-quote" */).then(m => m.default || m)
const _4d2f06ca = () => import('../pages/top-5-trends-to-include-in-your-healthcare-app.vue' /* webpackChunkName: "pages/top-5-trends-to-include-in-your-healthcare-app" */).then(m => m.default || m)
const _2cbf30e8 = () => import('../pages/nativescript-development.vue' /* webpackChunkName: "pages/nativescript-development" */).then(m => m.default || m)
const _b4290f2e = () => import('../pages/blogs.vue' /* webpackChunkName: "pages/blogs" */).then(m => m.default || m)
const _7c0233c6 = () => import('../pages/mean-stack-development.vue' /* webpackChunkName: "pages/mean-stack-development" */).then(m => m.default || m)
const _3f1ac510 = () => import('../pages/quasar-framework.vue' /* webpackChunkName: "pages/quasar-framework" */).then(m => m.default || m)
const _1a2980c2 = () => import('../pages/top-uiux-design-trends.vue' /* webpackChunkName: "pages/top-uiux-design-trends" */).then(m => m.default || m)
const _2b5cb888 = () => import('../pages/mobile-app-development.vue' /* webpackChunkName: "pages/mobile-app-development" */).then(m => m.default || m)
const _7a8cd8d2 = () => import('../pages/nuxtjs-development.vue' /* webpackChunkName: "pages/nuxtjs-development" */).then(m => m.default || m)
const _068a4416 = () => import('../pages/hybrid-app-development.vue' /* webpackChunkName: "pages/hybrid-app-development" */).then(m => m.default || m)
const _53ce5dcb = () => import('../pages/nehamondal.vue' /* webpackChunkName: "pages/nehamondal" */).then(m => m.default || m)
const _44103fee = () => import('../pages/digital-marketing.vue' /* webpackChunkName: "pages/digital-marketing" */).then(m => m.default || m)
const _7d25e071 = () => import('../pages/angularjs-development.vue' /* webpackChunkName: "pages/angularjs-development" */).then(m => m.default || m)
const _3d90412b = () => import('../pages/tracre.vue' /* webpackChunkName: "pages/tracre" */).then(m => m.default || m)
const _1b266f6a = () => import('../pages/web-portal-development.vue' /* webpackChunkName: "pages/web-portal-development" */).then(m => m.default || m)
const _52c55e88 = () => import('../pages/ionic-app-development.vue' /* webpackChunkName: "pages/ionic-app-development" */).then(m => m.default || m)
const _7b68ff29 = () => import('../pages/erp-development.vue' /* webpackChunkName: "pages/erp-development" */).then(m => m.default || m)
const _192cd9b0 = () => import('../pages/custom-web-applications.vue' /* webpackChunkName: "pages/custom-web-applications" */).then(m => m.default || m)
const _5d145b6b = () => import('../pages/react-native-development.vue' /* webpackChunkName: "pages/react-native-development" */).then(m => m.default || m)
const _75b7893e = () => import('../pages/erlang-development.vue' /* webpackChunkName: "pages/erlang-development" */).then(m => m.default || m)
const _f5228d1a = () => import('../pages/disclaimer.vue' /* webpackChunkName: "pages/disclaimer" */).then(m => m.default || m)
const _a8e491fc = () => import('../pages/technologies.vue' /* webpackChunkName: "pages/technologies" */).then(m => m.default || m)
const _13e6bae9 = () => import('../pages/top-10-must-have-features-of-an-ecommerce-app.vue' /* webpackChunkName: "pages/top-10-must-have-features-of-an-ecommerce-app" */).then(m => m.default || m)
const _3a8513aa = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/mern-stack-development",
			component: _381cb095,
			name: "mern-stack-development"
		},
		{
			path: "/why-choose-vuejs-for-development",
			component: _7eb07080,
			name: "why-choose-vuejs-for-development"
		},
		{
			path: "/contactus",
			component: _44f9c0d4,
			name: "contactus"
		},
		{
			path: "/our-development-process",
			component: _065b79b4,
			name: "our-development-process"
		},
		{
			path: "/web-application-development",
			component: _3e58b21d,
			name: "web-application-development"
		},
		{
			path: "/careers",
			component: _6adeda0d,
			name: "careers"
		},
		{
			path: "/reactjs-development",
			component: _79246ece,
			name: "reactjs-development"
		},
		{
			path: "/ecommerce-development",
			component: _8de43bf4,
			name: "ecommerce-development"
		},
		{
			path: "/privacy-policy",
			component: _7787ae22,
			name: "privacy-policy"
		},
		{
			path: "/vuejs-development",
			component: _720749d6,
			name: "vuejs-development"
		},
		{
			path: "/nodejs-development",
			component: _09569e11,
			name: "nodejs-development"
		},
		{
			path: "/aboutus",
			component: _15406943,
			name: "aboutus"
		},
		{
			path: "/drrama",
			component: _6c601a69,
			name: "drrama"
		},
		{
			path: "/services",
			component: _0a03eab6,
			name: "services"
		},
		{
			path: "/usee",
			component: _7d8b13d4,
			name: "usee"
		},
		{
			path: "/golang-development",
			component: _a7365fc8,
			name: "golang-development"
		},
		{
			path: "/shadowzone",
			component: _53175fb8,
			name: "shadowzone"
		},
		{
			path: "/portfolio",
			component: _55bd2520,
			name: "portfolio"
		},
		{
			path: "/sailsjs-development",
			component: _650cf131,
			name: "sailsjs-development"
		},
		{
			path: "/s4carlisle",
			component: _1cb2ffb4,
			name: "s4carlisle"
		},
		{
			path: "/design",
			component: _2b18c7d4,
			name: "design"
		},
		{
			path: "/elixir-development",
			component: _452a41f6,
			name: "elixir-development"
		},
		{
			path: "/request-quote",
			component: _a3639ad4,
			name: "request-quote"
		},
		{
			path: "/top-5-trends-to-include-in-your-healthcare-app",
			component: _4d2f06ca,
			name: "top-5-trends-to-include-in-your-healthcare-app"
		},
		{
			path: "/nativescript-development",
			component: _2cbf30e8,
			name: "nativescript-development"
		},
		{
			path: "/blogs",
			component: _b4290f2e,
			name: "blogs"
		},
		{
			path: "/mean-stack-development",
			component: _7c0233c6,
			name: "mean-stack-development"
		},
		{
			path: "/quasar-framework",
			component: _3f1ac510,
			name: "quasar-framework"
		},
		{
			path: "/top-uiux-design-trends",
			component: _1a2980c2,
			name: "top-uiux-design-trends"
		},
		{
			path: "/mobile-app-development",
			component: _2b5cb888,
			name: "mobile-app-development"
		},
		{
			path: "/nuxtjs-development",
			component: _7a8cd8d2,
			name: "nuxtjs-development"
		},
		{
			path: "/hybrid-app-development",
			component: _068a4416,
			name: "hybrid-app-development"
		},
		{
			path: "/nehamondal",
			component: _53ce5dcb,
			name: "nehamondal"
		},
		{
			path: "/digital-marketing",
			component: _44103fee,
			name: "digital-marketing"
		},
		{
			path: "/angularjs-development",
			component: _7d25e071,
			name: "angularjs-development"
		},
		{
			path: "/tracre",
			component: _3d90412b,
			name: "tracre"
		},
		{
			path: "/web-portal-development",
			component: _1b266f6a,
			name: "web-portal-development"
		},
		{
			path: "/ionic-app-development",
			component: _52c55e88,
			name: "ionic-app-development"
		},
		{
			path: "/erp-development",
			component: _7b68ff29,
			name: "erp-development"
		},
		{
			path: "/custom-web-applications",
			component: _192cd9b0,
			name: "custom-web-applications"
		},
		{
			path: "/react-native-development",
			component: _5d145b6b,
			name: "react-native-development"
		},
		{
			path: "/erlang-development",
			component: _75b7893e,
			name: "erlang-development"
		},
		{
			path: "/disclaimer",
			component: _f5228d1a,
			name: "disclaimer"
		},
		{
			path: "/technologies",
			component: _a8e491fc,
			name: "technologies"
		},
		{
			path: "/top-10-must-have-features-of-an-ecommerce-app",
			component: _13e6bae9,
			name: "top-10-must-have-features-of-an-ecommerce-app"
		},
		{
			path: "/",
			component: _3a8513aa,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
