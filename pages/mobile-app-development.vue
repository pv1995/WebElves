<template>
    <div class="mobile">
        <section class="service-banner banner2 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <h1 class="text-center raleway tertiary-color">Mobile Application Development</h1>
                <h4 class="text-center raleway white-color">Innovative Mobile Experiences</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                We build beautiful, user-centric, engaging and responsive applications with a coalesce of strategy, design and development. Mobile apps we design create engagement, interaction and brand loyalty. We develop feature-packed & transformative mobile experiences for every user, platform and industry.
            </p>
            <h5 class="solutions-heading tech-heading">Solutions</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="(tech, i) in technologies" :key="i">
                    <div v-if="tech.name === 'Hybrid App Development'" class="solution-card tech-cards" @click="goToSubMobile(tech.route)">
                        <div class="d-flex justify-content-around align-items-center">
                            <img :src="tech.imageURL" width="100%" :alt="tech.altText" class="tech-card-img" style="margin-bottom: 0.5rem"/>
                            <img :src="tech.imageURL2" width="100%" :alt="tech.altText" class="tech-card-img" style="margin-bottom: 0.5rem"/>
                        </div>
                        <h5 class="lato">{{tech.name}}</h5>
                    </div>
                    <div class="solution-card tech-cards" @click="goToSubMobile(tech.route)" v-else>
                        <img :src="tech.imageURL" width="100%" :alt="tech.altText" class="tech-card-img" style="margin-bottom: 0.5rem"/>
                        <h5 class="lato">{{tech.name}}</h5>
                    </div>
                </div>
            </div>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <p class="lato mt-5">
                Our deep native and web experience with enterprise and consumer apps matched with our ability to create cross-platform mobile apps to deliver your business app to most people, more platforms in minimum time and lowest costs.
            </p>
            <div class="mt-5">
                <a class="request-button" @click="goToRequestQuote">
                    Request A Quote
                </a>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    head () {
        return {
            title: 'Mobile Application Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'mobile app development agency, mobile application development agency, mobile app development company, mobile app development services, mobile app development company india, react native development company, nativescript development company' },
            ]
        }
    },
    data() {
        return {
            technologies: [
                {
                    id: 1,
                    name: 'React Native Development',
                    route: 'react-native-development',
                    imageURL: '/images/react.jpeg',
                    altText: 'React Native Development Agency for mobile applications'
                },
                {
                    id: 2,
                    name: 'NativeScript Development',
                    route: 'nativescript-development',
                    imageURL: '/images/nativescript.jpeg',
                    altText: 'NativeScript Development Company for mobile apps'
                },
                {
                    id: 3,
                    name: 'Hybrid App Development',
                    route: 'hybrid-app-development',
                    imageURL: '/images/ionic.jpeg',
                    imageURL2: '/images/quasar.jpeg',
                    altText: 'Hybrid App Development Company for hybrid & cross-platform apps'
                }
            ]
        }
    },
    methods: {
        goToSubMobile(name) {
            this.$router.push({name: name});
        },
        goToRequestQuote() {
            this.$router.push({name: 'request-quote'});
        }
    }
}
</script>
<style scoped>
.mobile {
    margin-top: 65px;
}
</style>
