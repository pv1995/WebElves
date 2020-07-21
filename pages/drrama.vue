<template>
    <div class="drrama">
        <section class="screenshots">
            <img src="/images/drrama.jpeg" width="100%" />
        </section>
        <section class="service-content portfolio-inner-content">
            <h5 class="solutions-heading">Overview</h5>
            <p class="lato">
                Dr. Rama's Test Tube Baby Centre is one of the pioneer fertility institutes with state of art treatment plans and infertility experts. With our more than two decades experience, state of ART laboratory, personal care and leading edge programs they provide excellent chance of conceiving and having a successful pregnancy.
            </p>
            <h5 class="solutions-heading mt-4 challenges-heading">Challenges</h5>
            <ul>
                <li>
                    Committed to a superior infertility treatment services, Dr Rama’s Center was looking to improve both the aesthetic, and content management elements of their website, which they considered to be of paramount importance to establish a positive brand name.
                </li>
                <li>
                    The client was looking for a platform to enable online appointment bookings, showcase services offered and customer testimonials to increase brand awareness and customer reach.
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
                'HTML','CSS', 'JavaScript', 'BootstrapVue', 'Node.js', 'Express.js', 'VueJS', 'Nuxt.js', 'Sketch', 'Adobe Photoshop'
            ]
        }
    }
}
</script>
<style scoped>
.drrama {
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
