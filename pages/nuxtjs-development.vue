<template>
    <div class="react-native">
        <section class="service-banner banner5 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/nuxt.jpeg" width="100%" alt="NuxtJS Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">NuxtJS Development</h1>
                <h4 class="text-center raleway white-color">Meta-Framework for Universal Applications</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose NuxtJS Development Services?</h5>
            <p class="lato mt-5">
                NuxtJS is an open-source web application framework based on VueJS, NodeJS, Webpack and Babel.js. The framework is advertised as "meta-framework for universal applications".<br>
                Nuxt is based on a powerful modular architecture. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap. The main benefits of NuxtJS are improved interactivity, advanced UI like SPAs and optimised SEO.
            </p>
            <h5 class="mid-headers">NuxtJS Development Company</h5>
            <p class="lato mt-5">
                WebElves is a NuxtJS development company offering dedicated NuxtJS developers for your requirements. We create fast, scalable and real time development solutions that will retain the attention of the target audience and increase the number of customers leaving a long-term impression on the business.
            </p>
            <div class="mt-5">
                <a class="request-button"  @click="goToRequestQuote">
                    Request A Quote
                </a>
            </div>
            <h5 class="mid-headers" style="margin-top:6rem !important">Explore Related Services</h5>
            <div class="service-cards">
                <ServiceCard :services="services" @clicked="goToService"/>
            </div>
        </section>
    </div>
</template>
<script>
import ServiceCard from "~/components/service-card.vue";

export default {
    components: {
        ServiceCard
    },
    head () {
        return {
        title: 'NuxtJS Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier NuxtJS development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'nuxtjs development services, nuxtjs development company, nuxtjs application development, nuxtjs development company, web development services, web developers, hire developers, custom software development services, Ecommerce Website Development Company, mobile app development services, cms development' },
        ]
        }
    },
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: 'ReactJS Development',
                    img: '/images/react.jpeg',
                    content: "React, one of the fastest-growing and most popular frontend libraries has been steadily gaining traction among developers, as well as business owners.",
                    route: 'reactjs-development'
                },
                {
                    id: 2,
                    name: 'VueJS Development',
                    img: '/images/vue.jpeg',
                    content: "VueJS is one of the widely used software technologies for web development. VueJS is an open-source Javascript framework to build fast, performant & smart single page applications (SPAs) and user interface. VueJS is one of the best JavaScript frameworks and a great substitute to React.js or Angular.js. VueJS is the ideal choice of developers for creating E-commerce stores and apps for various industries like health, finance, education and more. This  framework has features and benefits that can make it suitable for businesses of all verticals.",
                    route: 'vuejs-development'
                },
                {
                    id: 3,
                    name: 'Quasar Framework Development',
                    img: '/images/quasar.jpeg',
                    content: "Quasar is an open-source framework (powered with Vue) that helps web developers with rapid prototyping to create responsive++ websites/apps in many flavours.",
                    route: 'quasar-framework'
                }
            ]
        }
    },
    methods: {
        goToRequestQuote() {
            this.$router.push({name: 'request-quote'});
        },
        goToService(value) {
            this.$router.push({name: value})
        }
    }
}
</script>
<style scoped>
.react-native {
    margin-top: 65px;
}
.service-content > ul > li {
    font-size: 20px;
    line-height: 35px;
}
</style>
