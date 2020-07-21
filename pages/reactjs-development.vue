<template>
    <div class="react-native">
        <section class="service-banner banner5 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInLeft">
                    <img src="/images/react.jpeg" width="100%" alt="ReactJS Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">ReactJS Development</h1>
                <h4 class="text-center raleway white-color">Scalable Front-end Web Applications</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose ReactJS Development Services?</h5>
            <p class="lato mt-5">
                React, one of the fastest-growing and most popular frontend libraries has been steadily gaining traction among developers, as well as business owners.<br>
                ReactJS gives you the flexibility to update and render all the design component that is designed for each state in the application when data changes. It gives you the power to develop large web applications that use data and can change over time without reloading the page.<br>
                React Js is a flexible javascript library for building user Interfaces. It allows us to create fast, simple and scalable frontend web applications.
            </p>
            <h5 class="mid-headers">ReactJS Development Company</h5>
            <p class="lato mt-5">
                Obtain interactive frontend application development solutions from a leading ReactJS development company. The applications we develop are suitable across all the industries and translate all your business features in an impressive interface.<br>
                WebElves offers a wide array of services with ReactJS. Whether you want to develop a simple business website or wish to develop a complex mobile application, our ReactJS development services can fit best for you.
            </p>
            <ul>
                <li>
                    We develop platform-independent solutions that seamlessly run on different OS and also ensure multiple layers of system security.
                </li>
                <li>
                    Throughout our ReactJS rendering, we offer dynamic UX and UI that goes perfect with your business theme. We help to develop native app and plugins based on ReactJS that works beyond configuration and convention.
                </li>
                <li>
                    Our expert league of developers run efficient quality testing before delivering your applications to ensure flawless working of it.
                </li>
                <li>
                    We have a team of experienced ReactJS developers who provide you an efficient ReactJS platform with effective control over its content and integrate scalability & robustness to the final solution.
                </li>
            </ul>
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
        title: 'ReactJS Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier ReactJS development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'react web development, react js application development, Hire react JS developers , Reactjs Development Company , React Js Development Services , react app development, react js development, web development agency, mobile app development agency, hybrid app development agency, web applicatiion development company, mobile application development company' },
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
                    name: 'AngularJS Development',
                    img: '/images/angular.jpeg',
                    content: "AngularJS is a JavaScript-based open-source front-end web framework designed by Google to address many of the challenges encountered in developing single-page applications. It is built on the belief that declarative programming should be used to create user interfaces and connect software components, while imperative programming is better suited to defining an application's business logic.",
                    route: 'angularjs-development'
                },
                {
                    id: 3,
                    name: 'MERN Stack Development',
                    img: '/images/mern.jpeg',
                    content: "MERN is an acronym for MongoDB, ExpressJS, ReactJS and NodeJS. It is a free and open source JavaScript software stack to develop highly efficient web applications.",
                    route: 'mern-stack-development'
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
