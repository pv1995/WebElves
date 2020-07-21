<template>
    <div class="react-native">
        <section class="service-banner banner4 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/mern.jpeg" width="100%" alt="MERN Stack Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">MERN Stack Development</h1>
                <h4 class="text-center raleway white-color">Combining the power of JavaScript with React & Node</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose MERN Stack Development Services?</h5>
            <p class="lato mt-5">
                MERN is an acronym for MongoDB, ExpressJS, ReactJS and NodeJS. It is a free and open source JavaScript software stack to develop highly efficient web applications.<br>
                It is one of the fastest growing open source frameworks backed with good community support. It comes with a pre-built extensive suite of testing tools and with the growing number of libraries and contributors, it helps accelerate as well as smoothen the development process of your project.
            </p>
            <h5 class="mid-headers">MERN Stack Development Company</h5>
            <p class="lato mt-5">
                WebElves is a MERN Stack development company offering dedicated full stack MERN developers for your requirements. We create fast, scalable and real time development solutions that will retain the attention of the target audience and increase the number of customers leaving a long-term impression on the business.
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
        title: 'MERN Stack Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier MERN stack development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'mern stack development services, mern stack development company, mern stack application development, mern stack development company, web development services, web developers, hire developers, custom software development services' },
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
                    name: 'ReactJS Development',
                    img: '/images/react.jpeg',
                    content: "React, one of the fastest-growing and most popular frontend libraries has been steadily gaining traction among developers, as well as business owners.",
                    route: 'reactjs-development'
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
