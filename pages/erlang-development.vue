<template>
    <div class="react-native">
        <section class="service-banner banner4 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated fadeIn">
                    <img src="/images/erlang.jpeg" width="100%" alt="Erlang Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">Erlang Development</h1>
                <h4 class="text-center raleway white-color">Massively Scalable Soft Real-Time Systems</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose Erlang Development Services?</h5>
            <p class="lato mt-5">
                Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution and fault tolerance.<br>
                Erlang is widely used by major companies like Ericsson who use it for support nodes, GPRS and 3G networks worldwide, Amazon to implement SimpleDB in AWS EC2 and WhatsApp to run their messaging servers.
            </p>
            <h5 class="mid-headers">Erlang Development Company</h5>
            <p class="lato mt-5">
                WebElves is a Erlang development company offering dedicated Erlang developers for your requirements. We create fast, scalable and real time development solutions that will retain the attention of the target audience and increase the number of customers leaving a long-term impression on the business.
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
        title: 'Erlang Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier Erlang development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'erlang development services, erlang development company, erlang application development, erlang development company, web development services, web developers, hire developers, custom software development services' },
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
                    name: 'SailsJS Development',
                    img: '/images/sails.jpeg',
                    content: 'SailsJS, being one of the fast and most popular MVC framework for NodeJS, makes it quite easy to custom build enterprise grade NodeJS applications. Using Sails, NodeJS apps are build in a shorter time frame. It is mainly used for building chatrooms, multiplayers online games, real time dashboard and more with the help of data-driven APIs and service – oriented architectures',
                    route: 'sailsjs-development'
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
