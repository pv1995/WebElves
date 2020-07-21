<template>
    <div class="custom-web">
        <section class="service-banner banner1 d-flex justify-content-center align-items-center primary-bg">
            <div>
                <h1 class="text-center raleway tertiary-color">Custom Web Applications</h1>
                <h4 class="text-center raleway white-color">Converting your colossal web development vision into a sure reality with stead-fast latest tech stack services!</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                Companies are investing a lot of effort in customizing their applications to improve customer experience and make the overall application surfing intuitive and engaging. Since every company is completely different with its own custom needs, custom web application development company should invest considerable amount of time in learning the business model, key activities of business and then propose a custom app development solution tailored to specific needs.
            </p>
            <h5 class="solutions-heading tech-heading">Technologies</h5>
            <div class="row">
                <div class="cols col-sm-4 col-md-4 mx-auto" v-for="(tech, i) in technologies" :key="i">
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
                We have expertise and experience is developing business critical and consumer-facing custom web apps tailored to the requirements of a specific business. Our technology leaders ensure an exhaustive evaluation of the latest digital technologies before proposing a solution to customers.
            </p>
            <div class="how-content">
                <div class="how-row" v-for="h in howContent" :key="h.id">
                    <h6 class="font-weight-bold lato">{{h.heading}}</h6>
                    <p class="lato">{{h.content}}</p>
                </div>
            </div>
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
            title: 'Custom Web Applications | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'Custom Ecommerce Website Development Company, Custom eCommerce Website Development Company, custom ecommerce development, custom Software Development Services, React Native Development services, react native development agency, react native app development company, ionic mobile app development company, Reactjs Development Company , React Js Development Services , Angularjs Web Development Company, Angularjs Development Services, Mean Stack Development Company, Node Js Development Company, Golang Development company, vuejs development company, nativescript development company' },
            ]
        }
    },
    data() {
        return {
            technologies: [
                {
                    name: 'VueJS',
                    imageURL: '/images/vue.jpeg',
                    altText: 'Custom Web Application Development using VueJS',
                    route: 'vuejs-development'
                },
                {
                    name: 'ReactJS',
                    imageURL: '/images/react.jpeg',
                    altText: 'Custom Web Application Development Services using ReactJS',
                    route: 'reactjs-development'
                },
                {
                    name: 'AngularJS',
                    imageURL: '/images/angular.jpeg',
                    altText: 'Custom Web Application Development Company using AngularJS',
                    route: 'angularjs-development'
                },
                {
                    name: 'MEAN Stack',
                    imageURL: '/images/mean.jpeg',
                    altText: 'Custom Web Application Development Agency using MEAN Stack',
                    route: 'mean-stack-development'
                },
                {
                    name: 'MERN Stack',
                    imageURL: '/images/mern.jpeg',
                    altText: 'Custom Web Application Development Agency using MERN Stack',
                    route: 'mern-stack-development'
                },
                {
                    name: 'MEVN Stack',
                    imageURL: '/images/vue.jpeg',
                    altText: 'Custom Web Application Development Services using MEVN Stack',
                    route: 'vuejs-development'
                },
                {
                    name: 'NodeJS',
                    imageURL: '/images/node.jpeg',
                    altText: 'Custom Web Application Development using NodeJS',
                    route: 'nodejs-development'
                },
                {
                    name: 'SailsJS',
                    imageURL: '/images/sails.jpeg',
                    altText: 'Custom Web Application Development Agency using SailsJS',
                    route: 'sailsjs-development'
                },
                {
                    name: 'Golang',
                    imageURL: '/images/go.jpeg',
                    altText: 'Custom Web Application Development Company using Golang',
                    route: 'golang-development'
                },
                {
                    name: 'Elixir',
                    imageURL: '/images/elixir.jpeg',
                    altText: 'Custom Web Application Development using Elixir',
                    route: 'elixir-development'
                },
                {
                    name: 'NuxtJS',
                    imageURL: '/images/nuxt.jpeg',
                    altText: 'Custom Web Application Development Services using NuxtJS',
                    route: 'nuxtjs-development'
                },
                {
                    name: 'Quasar Framework',
                    imageURL: '/images/quasar.jpeg',
                    altText: 'Custom Web Application Development Agency using Quasar Framework',
                    route: 'quasar-framework'
                }
            ],
            howContent: [
                {
                    id: 1,
                    heading: 'We conceive the user experience',
                    content: 'Custom web applications are designed to deliver a contextual and personalized experience. It is critical to spend time in researching and designing by understanding potential user through usability research.'
                },
                {
                    id: 2,
                    heading: 'Understand the key business features and prioritize',
                    content: 'Customizing a web application according to specific business needs is challenging. It is important to identify the key features and functionalities and then prioritize them.'
                },
                {
                    id: 3,
                    heading: 'Customize with a futuristic vision',
                    content: 'Make sure the UI and functionalities of the custom web application are future-ready. It becomes very difficult to overhaul and customize the application from scratch in short span of time. We consider the future business goals while developing the custom web application.'
                }
            ],
            services: [
                {
                    id: 1,
                    name: 'E-Commerce Application Development',
                    img: '/images/ecommerce.jpeg',
                    content: "We understand that the business of the present and future relies heavily on your e-Commerce transactions as there is an exponential  increase of purchases being made on computers and mobile devices whether it's for B2C or B2B. E-commerce draws on technologies such  as electronic funds transfer, mobile commerce, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems.",
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
.custom-web {
    margin-top: 65px;
}
.custom-web > .service-banner {
    min-height: 500px;
    padding-left: 12rem;
    padding-right: 12rem;
}
.tech-heading {
    margin-bottom: 2rem;
}
.tech-cards {
    /* min-height: 0 !important; */
    margin: 1rem 0 !important;
}
.custom-web > .service-content > .how-heading {
    margin-top: 5rem;
}
.how-content {
    margin-top: 3rem;
}
.how-row {
    height: 150px;
}
.how-row > h6 {
    font-size: 22px;
}
.how-row > p {
    font-size: 20px;
    margin-top: 1rem;
}
</style>
