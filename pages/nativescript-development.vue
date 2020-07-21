<template>
    <div class="nativescript">
        <section class="service-banner banner2 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/nativescript.jpeg" width="100%" alt="NativeScript Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">NativeScript Development</h1>
                <h4 class="text-center raleway white-color">Native Cross-Platform Mobile Apps using JavaScript</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                The next generation of mission-critical business applications will be cognitive—adaptive, connected and intelligent. NativeScript’s advanced features help you deliver rich user experiences that are the leading edge of any modern, sophisticated app.
            </p>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <p class="lato mt-5">
                Our team has expertise and experience in building mobile solutions using NativeScript for your most ambitious products.<br><br>
                Being expert JavaScript developers, NativeScript gives us full control of the mobile application, helping us make use of all of its features extensively to build futuristic and innovative mobile experiences.
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
            title: 'NativeScript Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier NativeScript application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'NativeScript Development, nativescript development company, nativescript mobile app, nativescript app development, nativescript mobile app development, Android app development firm, Android application development agency, ios application development services, ios app development agency, Native app development company, Native app development services, Mobile App Development Agency, Mobile Application Development Agency' },
            ]
        }
    },
    data() {
        return {
            services: [
                {
                    id: 1,
                    name: 'React Native Development',
                    img: '/images/react.jpeg',
                    content: "When you’re looking for Speed and Agility in a mobile application combined with native experience, React Native is your go-to solution.",
                    route: 'react-native-development'
                },
                {
                    id: 2,
                    name: 'Ionic App Development',
                    img: '/images/ionic.jpeg',
                    content: "Ionic Framework is the free, open source mobile UI toolkit for developing high-quality cross-platform apps for native iOS, Android, and the web—all from a single codebase.",
                    route: 'hybrid-app-development'
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

</style>
