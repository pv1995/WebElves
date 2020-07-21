<template>
    <div class="react-native">
        <section class="service-banner banner4 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/sails-white.jpeg" width="100%" alt="SailsJS Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">SailsJS Development</h1>
                <h4 class="text-center raleway white-color">Enterprise Grade NodeJS Applications</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose SailsJS Development Services?</h5>
            <p class="lato mt-5">
                SailsJS, being one of the fast and most popular MVC framework for NodeJS, makes it quite easy to custom build enterprise grade NodeJS applications. Using Sails, NodeJS apps are build in a shorter time frame. It is mainly used for building chatrooms, multiplayers online games, real time dashboard and more with the help of data-driven APIs and service – oriented architectures.
            </p>
            <p class="lato">
                SailsJS features:
            </p>
            <ul>
                <li>
                    Works with any database with the official ones being MySQL, MongoDB, PostgreSQL, etc.
                </li>
                <li>
                    Auto-generated REST APIs.
                </li>
                <li>
                    Compatible with all frontend technologies like VueJS, AngularJS , ReactJS.
                </li>
                <li>
                    Easy web-socket integration with no additional code.
                </li>
                <li>
                    Flexible asset pipeline.
                </li>
            </ul>
            <h5 class="mid-headers">SailsJS Development Company</h5>
            <p class="lato mt-5">
                WebElves is a SailsJS development company offering dedicated SailsJS developer for web applications development. We create fast, scalable and real time development solutions that will retain the attention of the target audience and increase the number of customers on the website or mobile app development that will leave a long-term impression on the business.
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
        title: 'SailsJS Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier SailsJS development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'sailsjs development services, sailsjs development company, sailsjs application development, sailsjs development company, web development services, web developers, hire developers, custom software development services, Ecommerce Website Development Company, mobile app development services, cms development' },
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
                    name: 'Golang Development',
                    img: '/images/go.jpeg',
                    content: 'Golang is an open source, static type compiled language. Most of its features enable quick development, easy deployment, and error-free performance. This leads to lower costs and quicker return on investment.',
                    route: 'golang-development'
                },
                {
                    id: 3,
                    name: 'Elixir Development',
                    img: '/images/elixir.jpeg',
                    content: "Elixir is a new generation functional & concurrent programming language built on top of Erlang's VM - BEAM.It's a language designed for productivity, extensibility & maintainability, brining in best of Erlang's fault-tolerance, distributed computing & concurrence.",
                    route: 'elixir-development'
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
