<template>
    <div class="react-native">
        <section class="service-banner primary-bg d-flex justify-content-center align-items-center">
            <div>
                <h1 class="text-center raleway tertiary-color">The WebElves Development Cycle</h1>
                <h4 class="text-center raleway white-color">End-to-End Project Management Workflow</h4>
            </div>
        </section>
        <section class="service-content">
            <div class="blog-img-wrapper">
                <img src="/images/blog1.jpeg" width="100%" alt="Web & Mobile Development Company" />
            </div>
            <p class="lato mt-5 text-justify">
                According to the folklore, elves have a reputation of creating brilliant, magical things which are out of this world. Though we are not the elves speaking Quenya or Sindarin, we believe in the craft of creating efficient, super-performing, scalable products and long lasting relationships with organisations or individuals who seek our services.
            </p>
            <p class="lato text-justify">
                To get you familiar with our work process, we will go through a process of product fabrication called “I.C.E A.G.E” (Inspection, Consultation, Estimation, Assessment, Guidelines, Engage).
            </p>
            <ul class="text-justify">
                <li>
                    <strong>Inspection:</strong> Study the product-to-make in great length and try getting insight on every small detail. After gathering all requirements, we create a business canvas.
                </li>
                <li>
                    <strong>Consultation:</strong> Once the project and business goals are outlined, we share our consultation on how we could enhance your product guided by our skillful team of business developers.
                </li>
                <li>
                    <strong>Estimation:</strong> Depending upon client’s timeframe and budget, we make an estimation about how many elves are required for your product and the costing for the same.
                </li>
                <li>
                    <strong>Architecture:</strong> Here we decide on the architecture and relevant technologies on which our elves shall be working along with resource allocation.
                </li>
                <li>
                    <strong>Guidelines:</strong> Here our elves perform in-depth research of the project and prepare key milestones to guide the project timeline.
                </li>
                <li>
                    <strong>Engage:</strong> Once you're on board with the project mile-stones and architecture, we start working on Digitizing your business idea.
                </li>
            </ul>
            <p class="lato mt-5 text-justify">
                So as you can see, we at WebElves don't just sit back and code. We work together with our clients as a team to help develop unique and easy to scale solutions to the obstacles they may encounter.<br>
                WebElves achieves this by following the ICEAGE code of conduct in a stringent manner and always presents our client a single clean and effective code which solves multiple problems of their business.
            </p>
            <p class="lato vue-subheaders text-justify">
                Whether you’re working on a small project with modest business goals or a large, multi-departmental initiative with high corporate implications, understanding the project management life cycle is essential. Every project has essential milestones at the beginning, in the middle, and at the end, following a path from initiation to completion to evaluation.
            </p>
            <p class="lato text-justify">
                Working with an understanding of the project management cycle helps you keep your project organized and on track from ideation to completion.
            </p>
            <p class="lato vue-subheaders text-justify">
                Key Milestones of an effective project development strategy:
            </p>
            <ul class="text-justify">
                <li>
                    <strong>Discovery & Planning:</strong> This phase is the foundation upon which the entire project is built. It is the most crucial step we undertake in determining every key piece of information associated with the project. We list out the scope and objective and start wireframing all the functional requirements. We do this because we don’t want any uncertainty during our development process.
                </li>
                <li>
                    <strong>Design & UI Coding:</strong> Wireframes and guidelines gathered in the previous phase are passed onto our skilled UI UX elves. The look and feel is very important for successful engagement and retention of target audience. Our frontend elves henceforth take up converting designs to code which would match the aesthetic preferences of our clients.
                </li>
                <li>
                    <strong>Development:</strong> This phase of the project is purely converting business logic to modular  reusable functions which are extended and used by the client side. Our main focal point in any development project is first the quality and second the scalability.
                </li>
                <li>
                    <strong>Quality Control:</strong> Before the newly built website can be reviewed, it is mandatory to check the quality of the work. Our stingy elves make sure that no developer writes vague or detrimental code. At this stage our dev elves and quality elves work very closely to ensure a bug free feature rich product. Successful completion of this phase would mean that the product is ready for client review.
                </li>
                <li>
                    <strong>User Acceptance Testing (A/B testing):</strong> This step provides an opportunity for clients to perform a pilot test on the application with actual users, and get real time feedback, suggestions for improvement thereby reducing or eliminating the opportunity for any major change requests once the application is rolled out to production.
                </li>
                <li>
                    <strong>Launch:</strong> This is the final step. This is christmas to us elves. We take great care from the starting to ensure that our hand-made product  is rolled out for production smoothly. This step involves our devops elves who undertake process like data migration, server setup , domain name purchase and redirection, sanity test etc. based on the requirements.
                </li>
                <li>
                    <strong>Maintenance:</strong> This is where we believe half the products die. An application, be it web or mobile requires continuous maintenance, support, enhancements and periodic updates. We offer this free of cost for the  first 6 months to ensure a healthy transition.
                </li>
            </ul>
            <p class="lato text-justify">
                In conclusion, when it comes to building a robust, scalable and state of the art web application there really is no alternative to well  structured proven Application development process.
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
        title: 'Our Development Process | WebElves',
        meta: [
            { hid: 'description', name: 'description', content: 'WebElves is a premier website development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
            { hid: 'keywords', name: 'keywords', content: 'web application development services, web development services, web developers, hire developers, custom software development services, Ecommerce Website Development Company, mobile app development services, cms development, mobile app development company, react native development services' },
        ]
        }
    },
    data() {
        return {

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
.react-native {
    margin-top: 65px;
}
.service-content > ul > li {
    font-size: 20px;
    line-height: 35px;
}
.vue-subheaders {
    font-weight: bold;
}
.blog-img-wrapper {
    width: 830px;
    margin: 0 auto;
    height: auto;
}
</style>
