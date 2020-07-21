<template>
    <div class="web-portal">
        <section class="service-banner banner1 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <h1 class="text-center raleway tertiary-color">Web Portal Development</h1>
                <h4 class="text-center raleway white-color">B2B | C2C | B2C</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                Under the hood of web portal development services, we develop proper architecture to provide solutions for functional extensions, enhancement and integrating a new system. No matter what kind of web portal you need - enterprise, knowledge or corporate - developers at WebElves are the masters in developing all kinds of web portals, ranging from multi-functional B2B/B2C/C2C portals to portals offering a specific functionality, like social networking, dating, online jobs, price comparison, real estate, food ordering, etc.
            </p>
            <h5 class="solutions-heading">Solutions</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="type in types" :key="type.id">
                    <div class="solution-card type-cards d-block">
                        <h5 class="lato">{{type.name}}</h5>
                        <p class="lato">{{type.content}}</p>
                    </div>
                </div>
            </div>
            <h5 class="solutions-heading">Technologies</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="(tech, i) in technologies" :key="i">
                    <div class="solution-card tech-cards" @click="goToTech(tech.route)">
                        <img :src="tech.imageURL" width="100%" :alt="tech.altText" v-if="tech.name === 'MEAN Stack'" style="width:100px;height:50px;margin:0.8rem 0"/>
                        <img :src="tech.imageURL" width="100%" :alt="tech.altText" v-else-if="tech.name === 'MERN Stack'" style="width:160px;margin:0.5rem 0"/>
                        <img :src="tech.imageURL" width="100%" :alt="tech.altText" v-else-if="tech.name === 'SailsJS'" style="width:120px;margin:1rem 0"/>
                        <img :src="tech.imageURL" width="100%" :alt="tech.altText" class="tech-card-img" v-else/>
                        <h5 class="lato">{{tech.name}}</h5>
                    </div>
                </div>
            </div>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <p class="lato mt-5">
                We can translate your ideas into functional web and enterprise portals.<br>
                Being a prestigious web development company offering a comprehensive range of custom web development services, we’re committed to building fast, intuitive, efficient web portals that deliver true value to your business and visitors.
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
            title: 'Web Portal Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'Web Application Development Services, web development firm, Web Development Services, Web Development Agency, Web application development firm, web application development company, web development company, website development company, vuejs development company, vuejs development agency, reactjs development company, reactjs development services, nodejs development company, nodejs development services' },
            ]
        }
    }, 
    data() {
        return {
            types: [
                {
                    id: 1,
                    name: 'Enterprise Portal Development',
                    content: 'Enterprises always characterized by multiple outlets, multiple processes, and multitudes of activities. Our web and enterprise portals provide them a collaborative platform to bridge gaps between employees, customers, processes, applications, and data.'
                },
                {
                    id: 2,
                    name: 'B2B Customer Portal',
                    content: 'We empower B2B eCommerce portals with the latest tools in our B2B portal development. Facilitate services right from finding the right outlet to catalog surfing and final payments. We enable Omni Channel communication between all stakeholders by providing multiple touch points.'
                },
                {
                    id: 3,
                    name: 'B2C Portal Development',
                    content: 'Our B2C portal design aims to foster easy self-services among end-users. Our advanced navigation system empowers your shoppers to find desired products/services with a few taps/clicks. Enhancements in performance, productivity, and sales are our targets in B2C portal development.'
                }
            ],
            technologies: [
                {
                    name: 'VueJS',
                    imageURL: '/images/vue.jpeg',
                    altText: 'Web Portal Development using VueJS',
                    route: 'vuejs-development'
                },
                {
                    name: 'ReactJS',
                    imageURL: '/images/react.jpeg',
                    altText: 'Web Portal Development Services using ReactJS',
                    route: 'reactjs-development'
                },
                {
                    name: 'AngularJS',
                    imageURL: '/images/angular.jpeg',
                    altText: 'Web Portal Development company using AngularJS',
                    route: 'angularjs-development'
                },
                {
                    name: 'MEAN Stack',
                    imageURL: '/images/mean.jpeg',
                    altText: 'Web Portal Development using MEAN Stack',
                    route: 'mean-stack-development'
                },
                {
                    name: 'MERN Stack',
                    imageURL: '/images/mern.jpeg',
                    altText: 'Web Portal Development using MERN Stack',
                    route: 'mern-stack-development'
                },
                {
                    name: 'MEVN Stack',
                    imageURL: '/images/vue.jpeg',
                    altText: 'Web Portal Development using MEVN Stack',
                    route: 'vuejs-development'
                },
                {
                    name: 'NodeJS',
                    imageURL: '/images/node.jpeg',
                    altText: 'Web Portal Development Services using NodeJS',
                    route: 'nodejs-development'
                },
                {
                    name: 'SailsJS',
                    imageURL: '/images/sails.jpeg',
                    altText: 'Web Portal Development agency using SailsJS',
                    route: 'sailsjs-development'
                },
                {
                    name: 'Golang',
                    imageURL: '/images/go.jpeg',
                    altText: 'Web Portal Development company using Golang',
                    route: 'golang-development'
                },
                {
                    name: 'Elixir',
                    imageURL: '/images/elixir.jpeg',
                    altText: 'Web Portal Development using Elixir',
                    route: 'elixir-development'
                },
                {
                    name: 'NuxtJS',
                    imageURL: '/images/nuxt.jpeg',
                    altText: 'Web Portal Development Agency using NuxtJS',
                    route: 'nuxtjs-development'
                },
                {
                    name: 'Quasar Framework',
                    imageURL: '/images/quasar.jpeg',
                    altText: 'Web Portal Development Services using Quasar Framework',
                    route: 'quasar-framework'
                }
            ],
            services: [
                {
                    id: 1,
                    name: 'Custom Web Development',
                    img: '/images/custom-web.jpeg',
                    content: "Companies are investing a lot of effort in customizing their applications to improve customer experience and make the overall application surfing intuitive and engaging. Since every company is completely different with its own custom needs, custom web application development company should invest considerable amount of time in learning the business model, key activities of business and then propose a custom app development solution tailored to specific needs.",
                    route: 'ecommerce-development'
                },
                {
                    id: 2,
                    name: 'E-Commerce Application Development',
                    img: '/images/ecommerce.jpeg',
                    content: "We understand that the business of the present and future relies heavily on your E-Commerce transactions as there is an exponential  increase of purchases being made on computers and mobile devices whether it's for B2C or B2B. E-commerce draws on technologies such  as electronic funds transfer, mobile commerce, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems.",
                    route: 'ecommerce-development'
                },
                {
                    id: 3,
                    name: 'ERP Development',
                    img: '/images/erp.jpeg',
                    content: "Enterprise Resource Planning (ERP) software is any of a number of software platforms that bring together customer relationship management, accounting, core HR, and supply chain management features together in a single software. Because of the complexity and number of features available through ERP software, it has been traditionally adopted by large enterprise corporations, but recent years have proved that ERP software is useful even for small and medium-sized businesses (SMBs).",
                    route: 'erp-development'
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
        },
        goToTech(value) {
            this.$router.push({name: value})
        }
    }
}
</script>
<style scoped>
.web-portal {
    margin-top: 65px;
}
.type-cards {
    min-height: 320px;
    padding-top: 2rem !important;
    padding-left: 1rem;
    padding-right: 1rem;
}
.type-cards > p {
    margin-top: 1.5rem;
    font-size: 16px;
    text-align: justify
}
.tech-cards {
    min-height: 0 !important;
    margin: 1rem 0 !important;
}
</style>
