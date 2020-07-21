<template>
    <div class="elixir">
        <section class="service-banner banner4 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInLeft">
                    <img src="/images/elixir_bw.jpeg" width="100%" alt="Elixir Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">Elixir Application Development</h1>
                <h4 class="text-center raleway white-color">Real Time Applications, Dashboards & Messaging</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                Elixir is a new generation functional & concurrent programming language built on top of Erlang's VM - BEAM.It's a language designed for productivity, extensibility & maintainability, brining in best of Erlang's fault-tolerance, distributed computing & concurrence.
            </p>
            <h5 class="solutions-heading">Solutions</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="solution in solutions" :key="solution.id">
                    <div class="solution-card elixir-cards d-block">
                        <h5 class="lato">{{solution.name}}</h5>
                        <p class="lato text-justify">{{solution.content}}</p>
                    </div>
                </div>
            </div>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <p class="lato mt-5">
                Our team has expertise and experience in building digital solutions using this technology for your most ambitious products.  Build Real Time Applications, Dashboards, Messaging Applications using Elixir & Phoenix Web Framework.<br><br>
                Icicle is an early adopter of Elixir and have been actively using & promoting Elixir in medium to large scale products.
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
            title: 'Elixir Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier Elixir application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'elixir application development services, elixir application development company, hire elixir developers, custom software development services' },
            ]
        }
    },
    data() {
        return {
            solutions: [
                {
                    id: 1,
                    name: 'High Traffic Systems',
                    content: 'Elixir applications can respond in microseconds. You can handle more requests on the same hardware. E.g. E-commerce, Social Media, APIs'
                },
                {
                    id: 2,
                    name: 'Bots & Intelligent Systems',
                    content: 'Integrations with external services, have to wait and respond to asynchronous events. E.g. Gamification, Send email or notification based on an event, Chat Bots'
                },
                {
                    id: 3,
                    name: 'Distributed or Clustered Systems',
                    content: 'Perfect for fault-tolerant & decentralized system - load is spread across multiple connected systems. E.g. Metrics based Dashboard, Business Intelligence'
                },
                {
                    id: 4,
                    name: 'High Availability & Zero Downtime',
                    content: `Rely on being available 24/7 (100% up-time) with proven fault tolerant & fail safe Erlang's OTP engineering.E.g. Payment Systems, Video Streaming, SaaS Applications`
                },
                {
                    id: 5,
                    name: 'Real Time Apps & Push Notifications',
                    content: 'Server side push notifications across different clients web or mobile on a Real Time basis. E.g. Chat Application, Messaging Platform, Dashboards'
                },
                {
                    id: 6,
                    name: 'Large Enterprise Applications',
                    content: 'With built-in Micro-services & fault tolerance architecture of OTP & Functional language paradigm, Elixir is very much suited for Large Enterprise Applications'
                }
            ],
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
                    name: 'Erlang Development',
                    img: '/images/erlang.jpeg',
                    content: "Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution and fault tolerance.",
                    route: 'erlang-development'
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
.elixir {
    margin-top: 65px;
}
.elixir-cards {
    height: 270px !important;
    padding: 2rem !important;
}
.elixir-cards > h5 {
    height: 60px;
}
.elixir-cards > p {
    /* margin-top: 1rem; */
}
</style>
