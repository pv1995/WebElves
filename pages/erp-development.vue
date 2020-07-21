<template>
    <div class="erp">
        <section class="service-banner banner1 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <h1 class="text-center raleway tertiary-color">ERP Application Development</h1>
                <h4 class="text-center raleway white-color">End-to-end Enterprise Solutions</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                Enterprise Resource Planning (ERP) software is any of a number of software platforms that bring together customer relationship management, accounting, core HR, and supply chain management features together in a single software. Because of the complexity and number of features available through ERP software, it has been traditionally adopted by large enterprise corporations, but recent years have proved that ERP software is useful even for small and medium-sized businesses (SMBs).
            </p>
            <h5 class="solutions-heading">Benefits</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="benefit in benefits" :key="benefit.id">
                    <div class="solution-card benefit-cards d-block">
                        <h5 class="lato">{{benefit.name}}</h5>
                        <p class="lato text-justify">{{benefit.content}}</p>
                    </div>
                </div>
            </div>
            <h5 class="how-heading">Why Choose WebElves?</h5>
            <p class="lato mt-5">
                Well-versed in custom web application development, we help companies develop, implement and effectively use multifaceted enterprise solutions. We deliver a full spectrum of business web applications that accelerate enterprise activities while enabling employees to fulfill their daily tasks with less effort and time spent.<br><br>
                We develop comprehensive enterprise app development software that provides a complete management suite in terms of production, management, distribution, inventory, finance and human resource that scales and supports application evolution.
            </p>
            <div class="mt-5">
                <a class="request-button"  @click="goToRequestQuote">
                    Request A Quote
                </a>
            </div>
            <h5 class="mid-headers" style="margin-top:6rem !important">Explore Related Services</h5>
            <div class="service-cards">
                <ServiceCard :services="services" @clicked="goToService"/>
            </div>
        </section>
    </div>
</template>
<script>
import ServiceCard from "~/components/service-card.vue";

export default {
    components: {
        ServiceCard
    },
    head () {
        return {
            title: 'ERP Development | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'Enterprise Mobility Services , Enterprise Mobility Solutions, Enterprise Mobile App Development Company, Enterprise Mobility Development, Enterprise Mobility Solutions Companies , Enterprise Mobility Companies ' },
            ]
        }
    },
    data() {
        return {
            benefits: [
                {
                    id: 1,
                    name: 'Reduced Software Overhead',
                    content: 'ERP software allows teams to consolidate their tools into one unified system. Instead of paying for separate subscriptions for a supply chain management, core HR, CRM, shipping, and inventory software, teams pay for a single platform that handles each of these tasks in a centralized system. Depending on the company’s size and complexity, reducing the number of software system subscriptions can significantly cut the monthly overhead.'
                },
                {
                    id: 2,
                    name: 'Increased Communication',
                    content: 'When all sectors of the company gather in a single software to plan and track business events, all of the business data can then be made available for team review. Many modern ERP systems invest heavily in analysis tools and visualizations that let team members create reports that show progress, indicate inventory levels, and notify colleagues of wins. ERP software then acts as the single source of truth for stakeholders to compare successes and prepare for bumps in the road.'
                },
                {
                    id: 3,
                    name: 'Silo Reduction',
                    content: 'While still useful for storing grain, business silos–where teams work independent of one another to everyone’s detriment–are a luxury no one can afford. An ERP helps to bring business goals and planning out into the light of day where teams can share effortlessly with one another. This allows teams to compare notes across departments, helping everyone move toward those big business goals.'
                },
                {
                    id: 4,
                    name: 'Standardization of manufacturing processes',
                    content: 'For large manufacturing corporations with several facilities, sharing manufacturing plans and best practices can be vital for product and process standardization. ERP systems allow manufacturing teams to store manuals, blueprints, regulatory information, and vital statistics for each process in a single, searchable location. This allows processes to be replicated across county and country lines without sacrificing quality or speed.'
                },
                {
                    id: 5,
                    name: 'Inventory reduction',
                    content: 'ERP solutions provide inventory tracking and analysis that allows companies to run leaner. Using technology like RFID tags, geofencing, and biometric data, ERP systems can track assets through their entire lifecycle from supply to sale, and many ERP systems will suggest inventory improvements over time.  With reduced inventories, companies can repurpose storage space and cut down on their payroll costs.'
                },
                {
                    id: 6,
                    name: 'Standardization of human resources information',
                    content: 'ERP solutions provide Core HR products like payroll, scheduling, time clock, and benefits management. These were a logical extension of the types of software that connected the front of house, warehouse, and c-suite. With Core HR features, an ERP system can use the time clock software to calculate payroll and benefits, and managers can access employee information when building schedules.'
                }
            ],
            services: [
                {
                    id: 1,
                    name: 'Custom Web Development',
                    img: '/images/custom-web.jpeg',
                    content: "Companies are investing a lot of effort in customizing their applications to improve customer experience and make the overall application surfing intuitive and engaging. Since every company is completely different with its own custom needs, custom web application development company should invest considerable amount of time in learning the business model, key activities of business and then propose a custom app development solution tailored to specific needs.",
                    route: 'ecommerce-development'
                },
                {
                    id: 2,
                    name: 'Web Portal Development',
                    img: '/images/web-portal.jpeg',
                    content: "Under the hood of web portal development services, we develop proper architecture to provide solutions for functional extensions, enhancement and integrating a new system. No matter what kind of web portal you need - enterprise, knowledge or corporate - developers at WebElves are the masters in developing all kinds of web portals, ranging from multi-functional B2B/B2C/C2C portals to portals offering a specific functionality, like social networking, dating, online jobs, price comparison, real estate, food ordering, etc.",
                    route: 'web-portal-development'
                },
                {
                    id: 3,
                    name: 'E-Commerce Application Development',
                    img: '/images/ecommerce.jpeg',
                    content: "We understand that the business of the present and future relies heavily on your e-Commerce transactions as there is an exponential  increase of purchases being made on computers and mobile devices whether it's for B2C or B2B. E-commerce draws on technologies such  as electronic funds transfer, mobile commerce, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems.",
                    route: 'ecommerce-development'
                }
            ]
        }
    },
    methods: {
        goToRequestQuote() {
            this.$router.push({name: 'request-quote'});
        },
        goToService(value) {
            this.$router.push({name: value})
        }
    }
}
</script>
<style scoped>
.erp {
    margin-top: 65px;
}
.benefit-cards {
    height: 540px !important;
    padding-top: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
.benefit-cards:hover {
    background: #232921;
    color: white;
}
.benefit-cards > h5 {
    height: 60px;
    padding-top: 1rem;
}
.benefit-cards > p {
    margin-top: 2rem;
}
</style>
