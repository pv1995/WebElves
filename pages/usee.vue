<template>
    <div class="usee">
        <section class="screenshots">
            <img src="/images/usee.jpeg" width="100%" />
        </section>
        <section class="service-content">
            <h5 class="solutions-heading">Overview</h5>
            <p class="lato">
                USee is an innovative way to shop for the clothing, shoes, accessories, and appliances you see in your favourite television or streaming shows. Simply download to your smartphone or tablet, create an account, and begin discovering the products you see while viewing your favourite shows. See something you like? Purchase it instantly through USee! Shop What You See!
            </p>
            <h5 class="solutions-heading mt-4 challenges-heading">Challenges</h5>
            <ul>
                The client wanted a robust Ecommerce platform enabling a wide range of features such as:
                <li>
                    Content was to be divided & filtered using many parameters such as brand, shows and performer with further sub categorization for each of the parameters.
                </li>
                <li>
                    Social login integration
                </li>
                <li>
                    AWS hosting & deployment services
                </li>
                <li>
                    REST APIs
                </li>
                <li>
                    Elastic search
                </li>
                <li>
                    Payment Gateway Integration
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
                    Improved the deployment procedures and reduced the time to deploy.
                </li>
                <li>
                    Infrastructure control and provisioning was done following industry standards and best practices.
                </li>
                <li>
                    Containerized applications using Amazon Elastic Container Service (ECS) to ensure that all environments have exactly the same setup and can be easily replicated whenever required.
                </li>
                <li>
                    Leveraged auto scaling and spot instances to launch the application at a very low cost but at the same time ensured readiness to scale with an increase in traffic.
                </li>
                <li>
                    Reduced time to provision and deploy new services from 90 minutes to 10 minutes.
                </li>
                <li>
                    Used Amazon EC2 to increase compute capacity in cloud.
                </li>
                <li>
                    Prepared email template for verification and order related queries.
                </li>
            </ul>
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
                'HTML','CSS', 'JavaScript', 'BootstrapVue', 'Node.js', 'Express.js', 'VueJS, Vuex'
            ]
        }
    }
}
</script>
<style scoped>
.usee {
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
