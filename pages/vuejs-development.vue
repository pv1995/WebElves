<template>
    <div class="react-native">
        <section class="service-banner banner5 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/vue.jpeg" width="100%" alt="VueJS Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">VueJS Development</h1>
                <h4 class="text-center raleway white-color">Fast, Performant & Smart Applications</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose VueJS Development Services?</h5>
            <p class="lato mt-5">
                VueJS is one of the widely used software technologies for web development. VueJS is an open-source Javascript framework to build fast, performant & smart single page applications (SPAs) and user interface. VueJS is one of the best JavaScript frameworks and a great substitute to React.js or Angular.js. VueJS is the ideal choice of developers for creating E-commerce stores and apps for various industries like health, finance, education and more. This  framework has features and benefits that can make it suitable for businesses of all verticals.
            </p>
            <p class="lato">
                VueJS features:
            </p>
            <ul>
                <li>
                    <strong>Simple Integration:</strong> With VueJS framework you can build single page apps. VueJS enables adding components into existing apps which is possible because of great adaptability and smooth integration abilities.
                </li>
                <li>
                    <strong>High Performance:</strong> VueJS, compared to AngularJS Framework and ReactJS Framework is lighter and that is the main reason behind its worldwide acceptance.
                </li>
                <li>
                    <strong>Two Way Data Binding:</strong> Two way binding of data ensures faster, precise, and bug-free web app development, which results in on-time delivery of the project.
                </li>
                <li>
                    <strong>Reusable Components:</strong> VueJS divides the whole app into components and these components are reusable.
                </li>
                <li>
                    <strong>Flexibility & Security:</strong> Vue makes it very easy to set-up, and start coding. With VueJS making a Minimum Viable Product can be a lot faster than in any other framework. VueJS is famous for its amazing stability due to its component-based flow.
                </li>
            </ul>
            <h5 class="mid-headers">VueJS Development Company</h5>
            <p class="lato mt-5">
                VueJS developers at WebElves build reliable and fast applications your customers will enjoy. They translate your ideas into functional products in a quick and flexible manner. Our dedicated full-stack VueJS developers are adept with all the new version releases of this library and experienced in developing web applications for all industry verticals.
            </p>
            <p class="lato vue-subheaders">
                VueJS Development for large Enterprises Platforms
            </p>
            <p class="lato">
                We build VueJS applications for giant enterprises which are suitable for large-scale and also scalable, reliable, & secure at the same time.
            </p>
            <p class="lato vue-subheaders">
                Social/ Interactive Apps
            </p>
            <p class="lato">
                Hire VueJS developers who have strong experience in building highly secured, and high performance social-interactive apps development.
            </p>
            <p class="lato vue-subheaders">
                Custom VueJS Applications
            </p>
            <p class="lato">
                Hire VueJS programmers who are highly experienced in developing in secured, robust, feature rich and high performance VueJS web applications development.
            </p>
            <p class="lato vue-subheaders">
                Portal Development Solutions
            </p>
            <p class="lato">
                Hire VueJS developers who can build online portals with proficiency in custom product development for small to large businesses.
            </p>
            <p class="lato vue-subheaders">
                E-Commerce
            </p>
            <p class="lato">
                When it comes to e-commerce development solutions, our developers provide excellent services to clients across the globe.
            </p>
            <p class="lato vue-subheaders">
                Interactive Dashboards
            </p>
            <p class="lato">
                By using this framework, our full-stack VueJS developers build interactive dashboards and apps for real time user experience.
            </p>
            <div class="mt-5">
                <a class="request-button" @click="goToRequestQuote">
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
        title: 'VueJS Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier VueJS development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'vuejs development services, Vuejs development agency, vuejs development company, vuejs development firm, vue js mobile app, vue development, vuejs development, web development agency, mobile app development agency, hybrid app development agency, web applicatiion development company, mobile application development company' },
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
                    name: 'AngularJS Development',
                    img: '/images/angular.jpeg',
                    content: "AngularJS is a JavaScript-based open-source front-end web framework designed by Google to address many of the challenges encountered in developing single-page applications. It is built on the belief that declarative programming should be used to create user interfaces and connect software components, while imperative programming is better suited to defining an application's business logic.",
                    route: 'angularjs-development'
                },
                {
                    id: 3,
                    name: 'NuxtJS Development',
                    img: '/images/nuxt.jpeg',
                    content: 'NuxtJS is an open-source web application framework based on VueJS, NodeJS, Webpack and Babel.js. The framework is advertised as "meta-framework for universal applications".',
                    route: 'nuxtjs-development'
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
.vue-subheaders {
    font-weight: bold;
}
</style>
