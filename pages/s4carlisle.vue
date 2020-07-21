<template>
    <div class="s4carlisle">
        <section class="screenshots">
            <img src="/images/s4carlisle.jpeg" width="100%"/>
        </section>
        <section class="service-content portfolio-inner-content">
            <h5 class="solutions-heading">Overview</h5>
            <p class="lato">
                S4Carlisle delivers leading-edge publishing and technology services, from content creation to production & distribution, in an efficient & cost effective manner.
            </p>
            <h5 class="solutions-heading mt-4 challenges-heading">Challenges</h5>
            <ul>
                <li>
                    Client needed an interactive platform between publishers and authors to share, publish and edit content.
                </li>
                <li>
                    The content was to be divided & filtered using many parameters like  content management , automation and creation services.
                </li>
                <li>
                    The client required  applications that are easy to use, facile to navigate and highly responsive across all devices.
                </li>
            </ul>
            <h5 class="solutions-heading mt-4 tech-heading">Technologies</h5>
            <div class="row">
                <div class="col-4 mx-auto" v-for="(tech, i) in technologies" :key="i">
                    <div class="solution-card tech-cards">
                        <h5 class="lato">{{tech}}</h5>
                    </div>
                </div>
            </div>
            <h5 class="how-heading portfolio-how-heading">How WebElves can help?</h5>
            <p class="lato mt-5">
                Developed a custom web application to enable the S4carlisle acquire clients that enable them to work with authors and publishers to help create or enhance content for books, journals, and other publications.<br>
                We developed a highly responsive website to align with their brand and quality, as well as improved functionality with an engaging, immersive digital experience.
            </p>
            <div class="mt-5">
                <a class="request-button"  @click="goToRequestQuote">
                    Request A Quote
                </a>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            technologies: [
                'HTML','CSS', 'JavaScript', 'jQuery', 'Bootstrap'
            ]
        }
    },
    methods: {
        goToRequestQuote() {
            this.$router.push({name: 'request-quote'});
        }
    }
}
</script>
<style scoped>
.s4carlisle {
    margin-top: 65px;
}
.portfolio-inner-content > p, .portfolio-inner-content > ul{
    margin-top: 1.5rem;
}
.portfolio-inner-content > ul {
    /* padding-left: 0.5rem; */
    padding-left: 20px !important;
}
.portfolio-inner-content > ul > li {
    font-size: 20px;
    line-height: 35px;
    font-family: 'Lato', sans-serif;
}
.tech-cards {
    min-height: 0;
}
.portfolio-how-heading {
    width: 360px !important;
}
</style>
