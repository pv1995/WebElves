<template>
    <div class="react-native">
        <section class="service-banner banner4 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/go.jpeg" width="100%" alt="Golang Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">Golang Development</h1>
                <h4 class="text-center raleway white-color">Simple, Scalable, Superior & Secure</h4>
            </div>
        </section>
        <section class="service-content">
            <h5 class="mid-headers">Why Choose Golang Development Services?</h5>
            <p class="lato mt-5">
                Golang is an open source, static type compiled language. Most of its features enable quick development, easy deployment, and error-free performance. This leads to lower costs and quicker return on investment.<br>
                Due to its inherent features such as garbage collection, memory management, concurrency, scalability, superior standard library and security Go applications are feature rich in design and development.
            </p>
            <h5 class="mid-headers">Golang Development Company</h5>
            <p class="lato mt-5">
                WebElves is a leading Golang Development Company that builds tailored software solutions by leveraging Go Programming Language and Google Cloud. We induce growth acceleration of businesses through digital transformation. By combining our expertise in technology and industry, we focus on in-depth understanding of business challenges. We then devise solutions that are Simple, Scalable, Superior, Secure and Speedily delivered.<br>
                It is a growingly popular language with more and more companies such as Uber, Microsoft, Airbnb and others adopting it. If you would like to hire Golang Developers to give your applications a competitive edge, drop us a message here.
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
        title: 'Golang Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier Golang development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'Golang Development, Golang Development company, Golang Developers, golang web development, golang mobile development, golang android development, golang mobile app development' },
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
.express-heading {
    font-size: 24px;
}
</style>
