<template>
    <div class="react-native">
        <section class="service-banner banner5 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/ionic.jpeg" width="100%" alt="Ionic Application Development">
                </div>
                <h1 class="text-center raleway tertiary-color">Ionic App Development</h1>
                <h4 class="text-center raleway white-color">App Development Platform</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose Ionic App Development Services?</h5>
            <p class="lato mt-5">
                Ionic Framework is the free, open source mobile UI toolkit for developing high-quality cross-platform apps for native iOS, Android, and the web—all from a single codebase.
            </p>
            <p class="lato mt-5">
                Ionic is a dev platform for the entire app lifecycle that allows teams to build better apps, faster.
            </p>
            <ul>
                <li>
                    <strong>As future-proof as the web</strong>: The apps you build with Ionic leverage the power and stability of the open web - the most time-tested universal runtime in the world. 
                </li>
                <li>
                    <strong>Backed by a global community</strong>: Ionic is backed by a vibrant community of more than 5M developers in over 200 countries.
                </li>
                <li>
                    <strong>Completely Open-Source</strong>: Ionic is completely rooted in open-source. It has one of the largest resources available in the open source community.
                </li>
                <li>
                    <strong>All Round Integrations</strong>: Ionic is compatible with almost all trending frameworks in the industry like Vue, React, Angular, etc. From community plugins to premium supported integrations, Ionic has you covered.
                </li>
            </ul>
            <h5 class="mid-headers">Ionic Development Company</h5>
            <p class="lato mt-5">
                We develop components and features for almost every development need out there. Each of these components is carefully crafted with foolproof coding practices to offer the best possible experience to your end user. The application is designed with performance & responsiveness in mind.<br>
                Ionic is used by major companies like GE Transportation, Marketwatch, IBM, Amtrac amongst others.
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
        title: 'Ionic App Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier Ionic mobile development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'ionic application development, ionic mobile app development, ionic mobile development, mobile web app development, ionic web development, ionic mobile app development company web development services, web developers, hire developers, custom software development services, Ecommerce Website Development Company, mobile app development services, cms development' },
        ]
        }
    },
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: 'Quasar Framework Development',
                    img: '/images/quasar.jpeg',
                    content: "Quasar is an open-source framework (powered with Vue) that helps web developers with rapid prototyping to create responsive++ websites/apps in many flavours.",
                    route: 'quasar-framework'
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
                    name: 'NodeJS Development',
                    img: '/images/node.jpeg',
                    content: 'NodeJS has the power to build faster and scalable real-time applications. Strengthen your back-end with scalable and speedy NodeJS development. NodeJS is a multipurpose platform with 4 million+ users across the globe and with an annual growth rate of 100%.',
                    route: 'nodejs-development'
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
