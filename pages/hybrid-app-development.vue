<template>
    <div class="hybrid">
        <section class="service-banner banner2 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <h1 class="text-center raleway tertiary-color">Hybrid App Development</h1>
                <h4 class="text-center raleway white-color">Native & Web Solutions</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                The rise of smartphones, tablets, wearables and many more devices has brought the need to work across multiple devices. Hybrid apps combine both native and web solutions. Making this an optimum development approach with cost savings, and has compatibility across a variety of platforms.
            </p>
            <h5 class="solutions-heading tech-heading">Technologies</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="(tech, i) in technologies" :key="i">
                    <div class="solution-card tech-cards d-block">
                        <!-- <img :src="tech.img" alt="Hybrid App Development" width="75px" height="75px"/> -->
                        <img :src="tech.imageURL" width="100%" :alt="tech.altText" v-if="tech.name === 'Ionic Framework'" style="width:120px;margin:1rem 0"/>
                        <img :src="tech.imageURL" width="100%" :alt="tech.altText" v-else-if="tech.name === 'SailsJS'" style="width:120px;margin:1rem 0"/>
                        <img :src="tech.imageURL" width="100%" :alt="tech.altText" class="tech-card-img" v-else/>
                        <h5 class="lato">{{tech.name}}</h5>
                    </div>
                </div>
            </div>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <p class="lato mt-5">
                We have expertise in developing future-proof cross-platform mobile applications for Web, iOS, and Android using React Native. Our team of React Native developers provides state of the art solution to help businesses in marketing their products and services in no time.
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
            title: 'Hybrid App Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'hybrid development , hybrid mobile app development company, hybrid mobile application development services, Hybrid mobile app development, hybrid android app development , hybrid app development company, hybrid app development services' },
            ]
        }
    },
    data() {
        return {
            technologies: [
                {
                    id: 1,
                    name: 'Quasar Framework',
                    imageURL: '/images/quasar.jpeg',
                    route: 'quasar-framework',
                    altText: 'Hybrid App Development using Quasar Framework'
                },
                {
                    id: 2,
                    name: 'NodeJS',
                    imageURL: '/images/node.jpeg',
                    route: 'nodejs-development',
                    altText: 'Hybrid Application Development using NodeJS'
                },
                {
                    id: 3,
                    name: 'SailsJS',
                    imageURL: '/images/sails.jpeg',
                    route: 'sailsjs-development',
                    altText: 'Hybrid Application Development Services using SailsJS'
                },
                {
                    id: 4,
                    name: 'Ionic Framework',
                    imageURL: '/images/ionic.jpeg',
                    route: 'ionic-app-development',
                    altText: 'Hyrbid App Development Agency using Ionic Framework'
                }
            ],
            services: [
                {
                    id: 1,
                    name: 'NativeScript Development',
                    img: '/images/nativescript.jpeg',
                    content: "The next generation of mission-critical business applications will be cognitive—adaptive, connected and intelligent. NativeScript’s advanced features help you deliver rich user experiences that are the leading edge of any modern, sophisticated app.",
                    route: 'nativescript-development'
                },
                {
                    id: 2,
                    name: 'React Native Development',
                    img: '/images/react.jpeg',
                    content: "When you’re looking for Speed and Agility in a mobile application combined with native experience, React Native is your go-to solution.",
                    route: 'react-native-development'
                },
                {
                    id: 3,
                    name: 'Quasar Framework Development',
                    img: '/images/quasar.jpeg',
                    content: "Quasar is an open-source framework (powered with Vue) that helps web developers with rapid prototyping to create responsive++ websites/apps in many flavours.",
                    route: 'quasar-framework'
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
.hybrid {
    margin-top: 65px;
}
.tech-cards {
    min-height: 0 !important;
}
</style>
