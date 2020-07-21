<template>
    <div class="e-commerce">
        <section class="service-banner banner1 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <h1 class="raleway text-center tertiary-color">E-Commerce Application Development</h1>
                <h4 class="text-center white-color raleway">Fully customized B2B & B2C Storefronts designed to your business priorities!</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                We understand that the business of the present and future relies heavily on your e-Commerce transactions as there is an exponential  increase of purchases being made on computers and mobile devices whether it's for B2C or B2B. E-commerce draws on technologies such  as electronic funds transfer, mobile commerce, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems.
            </p>
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
                We offer the best personalization methods and top-notch eCommerce web development services.<br>
                WebElves offers you sophisticated, all-inclusive customized e-commerce web solutions, focused on delivering ultimate performance with an array of advanced features and options suited to your needs.
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
            title: 'E-Commerce Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier E-commerce application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'Ecommerce Website Development Services, Ecommerce Website Development Company, Custom Ecommerce Website Development Company, Custom eCommerce Website Development Company, custom ecommerce development, ecommerce web design services, Mobile App Development Agency, Web Application Development Services, Web Development Services, Web Development Agency, web application development company' },
            ]
        }
    },
    data() {
        return {
            technologies: [
                {
                    name: 'VueJS',
                    imageURL: '/images/vue.jpeg',
                    altText: 'E-Commerce Application Development using VueJS',
                    route: 'vuejs-development'
                },
                {
                    name: 'ReactJS',
                    imageURL: '/images/react.jpeg',
                    altText: 'E-Commerce Application Development Services using ReactJS',
                    route: 'reactjs-development'
                },
                {
                    name: 'AngularJS',
                    imageURL: '/images/angular.jpeg',
                    altText: 'E-Commerce Application Development Company using AngularJS',
                    route: 'angularjs-development'
                },
                {
                    name: 'MEAN Stack',
                    imageURL: '/images/mean.jpeg',
                    altText: 'E-Commerce App Development Services using MEAN Stack',
                    route: 'mean-stack-development'
                },
                {
                    name: 'MERN Stack',
                    imageURL: '/images/mern.jpeg',
                    altText: 'E-Commerce Development Company using MERN Stack',
                    route: 'mern-stack-development'
                },
                {
                    name: 'MEVN Stack',
                    imageURL: '/images/vue.jpeg',
                    altText: 'E-Commerce Development Services using MEVN Stack',
                    route: 'vuejs-development'
                },
                {
                    name: 'NodeJS',
                    imageURL: '/images/node.jpeg',
                    altText: 'E-Commerce Application Development using NodeJS',
                    route: 'nodejs-development'
                },
                {
                    name: 'SailsJS',
                    imageURL: '/images/sails.jpeg',
                    altText: 'E-Commerce App Development Agency using SailsJS',
                    route: 'sailsjs-development'
                },
                {
                    name: 'Quasar Framework',
                    imageURL: '/images/quasar.jpeg',
                    altText: 'E-Commerce Application Development using Quasar Framework',
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
                    name: 'Web Portal Development',
                    img: '/images/web-portal.jpeg',
                    content: "Under the hood of web portal development services, we develop proper architecture to provide solutions for functional extensions, enhancement and integrating a new system. No matter what kind of web portal you need - enterprise, knowledge or corporate - developers at WebElves are the masters in developing all kinds of web portals, ranging from multi-functional B2B/B2C/C2C portals to portals offering a specific functionality, like social networking, dating, online jobs, price comparison, real estate, food ordering, etc.",
                    route: 'web-portal-development'
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
.e-commerce {
    margin-top: 65px;
}
.e-commerce > .service-banner {
    min-height: 500px;
    padding-left: 10rem;
    padding-right: 10rem;
}
</style>
