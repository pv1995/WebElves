<template>
    <div class="tracre">
        <section class="screenshots">
            <img src="/images/shadowzinner.jpeg" width="100%" />
        </section>
        <section class="service-content portfolio-inner-content">
            <h5 class="solutions-heading">Overview</h5>
            <p class="lato">
                Traditional listing sites try to disrupt real estate agents and force landlords to be transparent.<br>
                This dashboard recognises an opportunity to empower agents whilst protecting landlords commercially sensitive information from being made public. It combines a unique inquiry based approach to discovery with end-to-end deal and lease management, giving landlords and agents a command centre from which to align market demand with their asset management strategy.
            </p>
            <h5 class="solutions-heading mt-4 challenges-heading">Challenges</h5>
            <ul>
                The client required a lease management system for landlords and real estate agents managing every step from posting requirement to leasing. The platform included:
                <li>
                    Linkedin login integration
                </li>
                <li>
                    Different user roles and permissions, including Administrator, Landlord Representative and Tenant representative.
                </li>
                <li>
                    A powerful internal search engine
                </li>
                <li>
                    Third-party integrations (Facebook, YouTube, Google Maps, and more)
                </li>
                <li>
                    Managing leasing transaction on various parameters such as stage of the deal, type of deal enabling user modification  and updation of all leasing activities.
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
            <ul>
                <li>
                    Created user flow implementing the business logic & prototyping of the product.
                </li>
                <li>
                    Build a scalable and robust architecture for different user roles.
                </li>
                <li>
                    User specific dashboards for lease activity monitoring and management.
                </li>
                <li>
                    Maintained and Integrated database of assets/properties across China.
                </li>
            </ul>
            <p class="lato">
                We  delivered a feature-rich platform to help automate manual administrative workload for the corporate leasing agents, digitizing the real-estate industry.
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
                'HTML', 'CSS', 'JavaScript', 'Sketch', 'Adobe Photoshop', 'Figma', 'OmniGraffle', 'Node.js', 'Express.js', 'MongoDB', 'VueJS', 'Quasar Framework'
            ]
        }
    }
}
</script>
<style scoped>
.tracre {
    margin-top: 65px;
}
.portfolio-inner-content > p, .portfolio-inner-content > ul{
    margin-top: 1.5rem;
}
.portfolio-inner-content > ul {
    /* padding-left: 0.5rem; */
    padding-left: 20px !important;
}
.portfolio-inner-content > ul > li, .portfolio-inner-content > ul {
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
