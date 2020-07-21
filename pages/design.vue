<template>
    <div class="design">
        <section class="service-banner banner1 primary-bg tertiary-color d-flex align-items-center justify-content-center">
            <div>
                <h1 class="text-center raleway">UI & UX</h1>
                <h4 class="text-center white-color raleway">Stellar Design + Strategic Thinking</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                Simply put, our core strengths lie in the simplicity of the design yet providing aesthetic, user friendly and  stimulating designs and experiences to our client's customers. A perfect mix of functional resources and visual elements is what we attempt to achieve with our adept team of designers and developers.
            </p>
            <h5 class="solutions-heading">Solutions</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="(design, i) in designSolutions" :key="i">
                    <div class="solution-card" style="height:120px !important;padding:3rem !important">
                        <h5 class="lato">{{design}}</h5>
                    </div>
                </div>
            </div>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <div class="how-content">
                <div class="how-row mob-how-design" v-for="h in howContent" :key="h.id">
                    <h6 class="font-weight-bold lato">{{h.heading}}</h6>
                    <p class="lato">{{h.content}}</p>
                </div>
            </div>
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
    head () {
        return {
            title: 'UI/UX & Graphic Design | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier UI/UX Design Company. Our team of skilled designers, web developers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'ui ux design agency, ui ux design company, ui ux design studio, ui ux agency, ui ux design company india, best ui ux design, Graphic Design, Graphic Design Services, Graphic Design Company, Graphic Design Firm, Graphic Design Agency, best graphic designers' },
            ]
        }
    },
    data() {
        return {
            designSolutions: [
                'Branding', 'UX Strategy', 'Mobile & Web Design', 'Logo Design', 'Business Card Design', 'Poster & Banner Design'
            ],
            howContent: [
                {
                    id: 1,
                    heading: 'Build Customer Journeys',
                    content: `Keeping end-users and their expectations in mind, we build up user personas of all projects, discover and map product's customer journey.`
                },
                {
                    id: 2,
                    heading: 'Rapid Prototyping',
                    content: 'With fast, cost-effective, easy-to-change and talk-about concepts, we specialise in graphical user interface design and dev.'
                },
                {
                    id: 3,
                    heading: 'Top Visual Design Systems',
                    content: 'We have an extensive experience crafting remarkable visual interfaces using style guides, grid systems, typography, mood boards.'
                },
                {
                    id: 4,
                    heading: 'Advanced Technology',
                    content: 'The tools, frameworks and technologies used for UI/UX design at Webelves are latest and as per industry standards.'
                },
                {
                    id: 5,
                    heading: 'Iterative & Collaborative',
                    content: 'We include clients in every decision we make at each phase of development and work iteratively for the changes required.'
                },
                {
                    id: 6,
                    heading: 'User-Centric Delivery',
                    content: `Whether it's design or experience, information architecture or navigation model, the final project delivery is always user-centered.`
                }
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
.design {
    margin-top: 65px;
}
.service-left-wrapper {
    padding: 2rem;
}
.how-content {
    margin-top: 3rem;
}
.how-row {
    height: 100px;
}
.how-row > h6 {
    font-size: 22px;
}
.how-row > p {
    font-size: 20px;
}
</style>
