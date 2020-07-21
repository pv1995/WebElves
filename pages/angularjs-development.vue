<template>
    <div class="react-native">
        <section class="service-banner banner5 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/angular.jpeg" width="100%" alt="Angular Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">AngularJS Development</h1>
                <h4 class="text-center raleway white-color">Productivity & Scalable Infrastructure</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose AngularJS Development Services?</h5>
            <p class="lato mt-5">
                AngularJS is a JavaScript-based open-source front-end web framework designed by Google to address many of the challenges encountered in developing single-page applications. It is built on the belief that declarative programming should be used to create user interfaces and connect software components, while imperative programming is better suited to defining an application's business logic.<br>
                From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.
            </p>
            <h5 class="mid-headers">AngularJS Development Company</h5>
            <p class="lato mt-5">
                WebElves is a AngularJS development firm offering dedicated AngularJS developers for your requirements. We create fast, scalable and real time development solutions that will retain the attention of the target audience and increase the number of customers leaving a long-term impression on the business.
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
        title: 'AngularJS Development | AngularJS Development Services',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier AngularJS development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'Angular web development, Angularjs Web Application Develpopment , Angularjs Web Development Company, Angular Service , Angularjs Development company, Angularjs Development Services , web development services, web developers, hire developers, Ecommerce Website Development Company, mobile app development services, cms development, custom software development services' },
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
                    name: 'MEAN Stack Development',
                    img: '/images/mean.jpeg',
                    content: "MEAN is an acronym for MongoDB, ExpressJS, AngularJS and NodeJS. It is a free and open source JavaScript software stack for building dynamic websites and web applications.",
                    route: 'mean-stack-development'
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
