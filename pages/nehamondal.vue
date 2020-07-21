<template>
    <div class="nehamondal">
        <section class="screenshots">
            <img src="/images/nehamondal.jpeg" width="100%" />
        </section>
        <section class="service-content portfolio-inner-content">
            <h5 class="solutions-heading">Overview</h5>
            <p class="lato">
                Neha Mondal Chakravarty, a Bharatanatyam Danseuse who hails from India, is a familiar name in the International Arts Scene. A postgraduate from the renowned institution, Kalakshetra Foundation, Chennai, Neha is known for her  technique and precision in Bharatanatyam.<br>
                The client came to WebElves for help in exploring how her website and logo could complement as well portray her excellence  as well as her story as an artist.
            </p>
            <h5 class="solutions-heading mt-4 challenges-heading">Challenges</h5>
            <ul>
                <li>
                    Storytelling with easy, fluid navigation through the website.
                </li>
                <li>
                    Social media integrations and back - linking, Social media API integration.
                </li>
                <li>
                    Micro animations with powerful design elements make it easy to connect with the website visitors.
                </li>
                <li>
                    Multiple video hosting with faster load time.
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
                Alongside our design and development, we utilised our expertise, to ensure that the client's digital vision was front and centre, with functionality meeting accessibility, innovation matching capabilities.
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
                'HTML','CSS', 'JavaScript', 'Node.js', 'VueJS', 'Quasar Framework', 'Sketch', 'Figma', 'Adobe Photoshop'
            ]
        }
    }
}
</script>
<style scoped>
.nehamondal {
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
