<template>
    <div class="react-native">
        <section class="service-banner banner5 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/quasar.jpeg" width="100%" alt="Quasar Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">Quasar Framework Development</h1>
                <h4 class="text-center raleway white-color">Responsive++ Websites & Apps</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose Quasar Development Services?</h5>
            <p class="lato mt-5">
                Quasar is an open-source framework (powered with Vue) that helps web developers with rapid prototyping to create responsive++ websites/apps in many flavours.
            </p>
            <ul>
                <li>
                    SPAs (Single Page Applications)
                </li>
                <li>
                    SSR (Server-side Rendered Application) (+ optional PWA client takeover)
                </li>
                <li>
                    PWAs (Progressive Web Applications)
                </li>
                <li>
                    Mobile Applications (Android, iOS, React Native) 
                </li>
                <li>
                    Cross-platform Desktop Applications (using Electron)
                </li>
                <li>
                    MVP (Minimum viable product) : Perfect for your first launch which is a product with just enough features to satisfy early customers, and to provide feedback for future product development.
                </li>
            </ul>
            <h5 class="mid-headers">Quasar Development Company</h5>
            <p class="lato mt-5">
                We develop components and features for almost every development need out there. Each of these components is carefully crafted to offer the best possible experience to your end user. The application is designed with performance & responsiveness in mind.
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
        title: 'Quasar Framework Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier Quasar Framework development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'quasar development services, quasar development company, quasar application development, quasar development company, web development services, web developers, hire developers, custom software development services, Ecommerce Website Development Company, mobile app development services, cms development' },
        ]
        }
    },
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: 'VueJS Development',
                    img: '/images/vue.jpeg',
                    content: "VueJS is one of the widely used software technologies for web development. VueJS is an open-source Javascript framework to build fast, performant & smart single page applications (SPAs) and user interface. VueJS is one of the best JavaScript frameworks and a great substitute to React.js or Angular.js. VueJS is the ideal choice of developers for creating E-commerce stores and apps for various industries like health, finance, education and more. This  framework has features and benefits that can make it suitable for businesses of all verticals.",
                    route: 'vuejs-development'
                },
                {
                    id: 2,
                    name: 'ReactJS Development',
                    img: '/images/react.jpeg',
                    content: "React, one of the fastest-growing and most popular frontend libraries has been steadily gaining traction among developers, as well as business owners.",
                    route: 'reactjs-development'
                },
                {
                    id: 3,
                    name: 'Ionic App Development',
                    img: '/images/ionic.jpeg',
                    content: "Ionic Framework is the free, open source mobile UI toolkit for developing high-quality cross-platform apps for native iOS, Android, and the web—all from a single codebase.",
                    route: 'ionic-app-development'
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
.express-heading {
    font-size: 24px;
}
</style>
