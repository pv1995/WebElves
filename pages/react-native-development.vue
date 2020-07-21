<template>
    <div class="react-native">
        <section class="service-banner banner2 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <div class="tech-logo-wrapper animated bounceInRight">
                    <img src="/images/react.jpeg" width="100%" alt="React Native Development Company">
                </div>
                <h1 class="text-center raleway tertiary-color">React Native Development</h1>
                <h4 class="text-center raleway white-color">Our go-to Mobile Solution</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                When you’re looking for Speed and Agility in a mobile application combined with native experience, React Native is your go-to solution.<br><br>
                One has to consider two major platforms while developing a mobile app : Android and iOS. For both platforms, developers need to create two separate apps, which slows down the development cycle and leads to higher development costs and increased time-to-market. React Native is an open-source framework that help developers build natively rendered cross-platform mobile apps using only JavaScript and ReactJS.
            </p>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <p class="lato mt-5">
                WebElves is a top React Native development firm and we have expertise in developing future-proof cross-platform mobile applications for Web, iOS, and Android. Our team of React Native developers provides state of the art solution to help businesses in marketing their products and services in no time.
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
            title: 'React Native Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier React Native development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'react native mobile development, React Native Development services, react native app development, react native development agency, react native app development company, react native development company, react native development, Android app development firm, Android application development agency, ios application development services, ios app development agency, Native app development company, Native app development services, Mobile App Development Agency, Mobile Application Development Agency' },
            ]
        }
    },
    data() {
        return {
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
                    name: 'Hybrid Application Development',
                    img: '/images/ionic.jpeg',
                    content: 'We build beautiful, user-centric, engaging and responsive applications with a coalesce of strategy, design and development. Mobile apps we design create engagement, interaction and brand loyalty. We develop feature-packed & transformative mobile experiences for every user, platform and industry.',
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
.react-native {
    margin-top: 65px;
}
</style>
