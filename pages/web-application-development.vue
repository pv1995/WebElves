<template>
    <div class="web">
        <section class="service-banner banner1 d-flex align-items-center justify-content-center primary-bg">
            <div>
                <h1 class="text-center raleway tertiary-color">Web Application Development</h1>
                <h4 class="text-center white-color raleway">Completely customizable high-quality robust websites</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                WebElves is a premier website development company. We’re in the business of awesome web development because we only rely on premier, modern and most worthy technologies to build web projects. It's not just the website, we create a seamless user experience that keeps them coming back.
            </p>
            <h5 class="solutions-heading">Solutions</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="web in webSolutions" :key="web.id">
                    <div class="solution-card cursor-pointer" @click="goToSubWeb(web.route)" style="height:120px !important;padding:2rem !important" v-if="web.id === 3">
                        <h5 class="lato">{{web.name}}</h5>
                    </div>
                    <div class="solution-card cursor-pointer" @click="goToSubWeb(web.route)" style="height:120px !important;padding:3rem !important" v-else>
                        <h5 class="lato">{{web.name}}</h5>
                    </div>
                </div>
            </div>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <p class="lato">
                We have expertise and experience is developing business critical and consumer-facing custom web apps tailored to the requirements of a specific business. Our technology leaders ensure an exhaustive evaluation of the latest digital technologies before proposing a solution to customers.
            </p>
            <div class="mt-5 mob-request-wrapper">
                <a class="request-button"  @click="goToRequestQuote">
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
            title: 'Web Application Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier web development agency. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'Web Application Development Services, web development firm, Web Development Services, Web Development Agency, Web application development firm, web application development company, web development company, website development company, vuejs development company, vuejs development agency, reactjs development company, reactjs development services, nodejs development company, nodejs development services' },
            ]
        }
    },
    data() {
        return {
            webSolutions: [
                {
                    id: 1,
                    name: 'Custom Web Applications',
                    route: 'custom-web-applications'
                },
                {
                    id: 2,
                    name: 'Web Portal Development',
                    route: 'web-portal-development'
                },
                {
                    id: 3,
                    name: 'E-Commerce Application Development',
                    route: 'ecommerce-development'
                },
                {
                    id: 4,
                    name: 'ERP Development',
                    route: 'erp-development'
                },
                // {
                //     id: 5,
                //     name: 'CMS Development',
                //     route: 'cms-development'
                // }
            ]
        }
    },
    methods: {
        goToSubWeb(name) {
            this.$router.push({name: name});
        },
        goToRequestQuote() {
            this.$router.push({name: 'request-quote'});
        }
    }
}
</script>
<style scoped>
.web {
    margin-top: 65px;
}
.how-heading {
    width: 345px;
    margin-bottom: 2rem;
}
</style>
