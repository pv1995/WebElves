<template>
    <div class="react-native">
        <section class="service-banner banner4 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInLeft">
                    <img src="/images/mean.jpeg" width="100%" alt="MEAN Stack Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">MEAN Stack Development</h1>
                <h4 class="text-center raleway white-color">Robust, Scalabe Solutions</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose MEAN Stack Development Services?</h5>
            <p class="lato mt-5">
                MEAN is an acronym for MongoDB, ExpressJS, AngularJS and NodeJS. It is a free and open source JavaScript software stack for building dynamic websites and web applications.<br>
                                Because all components of the MEAN stack support programs that are written in JavaScript, MEAN applications can be written in one language for both server-side and client-side execution environments.
            </p>
            <h5 class="mid-headers">MEAN Stack Development Company</h5>
            <p class="lato mt-5">
                WebElves is a MEAN Stack development company offering dedicated full stack developers for your requirements. We create fast, scalable and real time development solutions that will retain the attention of the target audience and increase the number of customers leaving a long-term impression on the business.
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
        title: 'MEAN Stack Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier MEAN stack development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'mean stack development services, mean stack development company, mean stack application development, mean stack development company, web development services, web developers, hire developers, custom software development services' },
        ]
        }
    },
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: 'NodeJS Development',
                    img: '/images/node.jpeg',
                    content: 'NodeJS has the power to build faster and scalable real-time applications. Strengthen your back-end with scalable and speedy NodeJS development. NodeJS is a multipurpose platform with 4 million+ users across the globe and with an annual growth rate of 100%.',
                    route: 'nodejs-development'
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
