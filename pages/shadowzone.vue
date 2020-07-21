<template>
    <div class="shadowzone">
        <section class="screenshots">
            <img src="/images/shadowzinner.jpeg" width="100%" />
        </section>
        <section class="service-content portfolio-inner-content">
            <h5 class="solutions-heading">Overview</h5>
            <p class="lato">
                Shadowz One Dance is a professional organization for development of contemporary dancing in Bengaluru. With critically acclaimed performances on many international platforms they are a known name in the Kannada film industry. Through their work, they supports and initiates understanding of new Indian dance expressions.
            </p>
            <h5 class="solutions-heading mt-4">Challenges</h5>
            <ol>
                <li>
                    Marketing & advertising Graphic Design:
                    <ul>
                        <li>
                            Postcards and flyers
                        </li>
                        <li>
                            Posters, banners and billboards
                        </li>
                    </ul>
                </li>
                <li>
                    Social Media Marketing & Advertising Graphic Design.
                </li>
                <li>
                    Visual identity graphic design:
                    <ul>
                        <li>
                            Logo Design
                        </li>
                        <li>
                            Business cards
                        </li>
                        <li>
                            Newsletter
                        </li>
                        <li>
                            Email marketing templates
                        </li>
                    </ul>
                </li>
            </ol>
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
                Our team of expert designers created various pixel perfect custom Illustrations for the client’s graphic design requirements matching the client’s brand identity and vision.
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
                'Sketch', 'Adobe Photoshop', 'Figma'
            ]
        }
    }
}
</script>
<style scoped>
.shadowzone {
    margin-top: 65px;
}
.portfolio-inner-content > p, .portfolio-inner-content > ul{
    margin-top: 1.5rem;
}
.portfolio-inner-content > ul {
    /* padding-left: 0.5rem; */
    padding-left: 20px !important;
}
.portfolio-inner-content > ol > li {
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
