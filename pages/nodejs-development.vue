<template>
    <div class="react-native">
        <section class="service-banner banner4 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/node.jpeg" width="100%" alt="NodeJS Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">NodeJS Development</h1>
                <h4 class="text-center raleway white-color">Faster & Scalable Real-Time Applications</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                NodeJS has the power to build faster and scalable real-time applications. Strengthen your back-end with scalable and speedy NodeJS development. NodeJS is a multipurpose platform with 4 million+ users across the globe and with an annual growth rate of 100%.<br>
                Many startups, SMBs and Fortune 500 companies use NodeJS for various desktop applications, real-time applications, mobile and web applications, full-stack development, and even large scale applications.
            </p>
            <p class="lato">
                NodeJS is popular because of its myriad of features:
            </p>
            <ul>
                <li>
                    NodeJS has a strong presence in IOT, cloud stacks, connected devices, and real-time web applications.
                </li>
                <li>
                    NodeJS, together with Vue, Angular and ReactJS, delivers robust enterprise solutions.
                </li>
                <li>
                    NodeJS plays a key role at companies where data sensitive applications and solutions are used as well as developed.
                </li>
                <li>
                    NodeJS offers the versatility to deploy web apps and APIs that can be used with robots as well as microcontrollers.
                </li>
                <li>
                    NodeJS is an open source, event driven, non-blocking I/O model which provides the ability to build strong server side network web applications.
                </li>
                <li>
                    NodeJS has become a widely popular environment to develop next gen, cross-platform, web and mobile applications with fast back-end and user friendly front-end development.
                </li>
            </ul>
            <h6 class="mid-headers express-heading">ExpressJS: A framework of NodeJS</h6>
            <p class="lato">
                Express is a minimal and flexible NodeJS web application framework that provides a robust set of features for web and mobile applications. ExpressJS is fast, unopinionated and minimalist.<br>
                A lot of popular applications and websites like MySpace, Geekli.st, Klout, Segment.io and Yummly are powered by ExpressJS.
            </p>
            <h5 class="mid-headers">Why choose our NodeJS Development Services?</h5>
            <p class="lato mt-5">
                Our dedicated team of nodejs developers have great industry knowledge and years of expertise to ensure that your business reaches its goals. We develop result-driven solutions with rich features and offer incredible customized solutions to our clients.
            </p>
            <p class="lato">
                Our expert team of developers have hands-on expertise in crafting feature-rich NodeJS based solutions. Solutions we provide:
            </p>
            <ul>
                <li>Build real-time applications</li>
                <li>Web and mobile application development</li>
                <li>Desktop application development</li>
                <li>Full-stack development</li>
                <li>Large scale application development</li>
                <li>Socket programming</li>
                <li>IOT</li>
                <li>E-commerce & shopping cart development</li>
                <li>Plugin development</li>
            </ul>
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
        title: 'NodeJS Development | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier NodeJS development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'Node Js Development , nodejs web development, Node Js Development Company, Node Js App Development , Hire Node Js Developers , Node Js Development Services, web development agency, mobile app development agency, hybrid app development agency, web application development company, mobile application development company, ecommerce development company, Ecommerce Website Development Services, Ecommerce Website Development Company, cms development services, cms development company' },
        ]
        }
    },
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: 'SailsJS Development',
                    img: '/images/sails.jpeg',
                    content: 'SailsJS, being one of the fast and most popular MVC framework for NodeJS, makes it quite easy to custom build enterprise grade NodeJS applications. Using Sails, NodeJS apps are build in a shorter time frame. It is mainly used for building chatrooms, multiplayers online games, real time dashboard and more with the help of data-driven APIs and service – oriented architectures',
                    route: 'sailsjs-development'
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
                    name: 'MEAN Stack Development',
                    img: '/images/mean.jpeg',
                    content: 'MEAN is an acronym for MongoDB, ExpressJS, AngularJS and NodeJS. It is a free and open source JavaScript software stack for building dynamic websites and web applications.',
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
.express-heading {
    font-size: 24px;
}
</style>
