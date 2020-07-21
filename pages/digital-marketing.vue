<template>
    <div class="digital-marketing">
        <section class="service-banner banner2 primary-bg d-flex justify-content-center align-items-center">
            <div>
                <h1 class="text-center raleway tertiary-color">Digital Marketing</h1>
                <h4 class="text-center raleway white-color">Strategies that work!</h4>
            </div>
        </section>
        <section class="service-content">
            <p class="lato">
                We provide a 360° approach to Digital Marketing to help brands navigate any and all planes of the digital landscape, identify growth opportunities, analyse competitive advantages and implement customer engagement strategies.
            </p>
            <h5 class="solutions-heading">Solutions</h5>
            <div class="row">
                <div class="col-sm-12 col-md-4 mx-auto" v-for="(type) in types" :key="type.id">
                    <div class="solution-card" @click="scrollTo(type.scrollId)">
                        <img :src="type.img" width="100%" class="tech-card-img" style="margin-bottom: 0.5rem"/>
                        <h5 class="lato">{{type.name}}</h5>
                    </div>
                </div>
            </div>
            <div id="seo" style="margin-top: 3rem ">
                <h5 class="dm-heading">Search Engine Optimisation (SEO)</h5>
                <p class="lato">
                    Our team of experienced and highly qualified SEO experts, copywriters and digital marketers know what it takes to make your website stand out and rise to the top of the search engines.
                </p>
                <p class="lato">
                    Search engine optimization (SEO) starts with knowing where you currently stand; only then can you determine where you want to be. Our 6-step SEO audit allows us to perform in-depth research on your existing site and provide specific recommendations to improve your current rankings. We monitor your site's search performance and optimize the content for driving maximum traffic as well as help you in establishing your brand name as reputed & trustworthy.
                </p>
            </div>
        </section>
        <section class="audit-section">
            <div class="audit-inner">
                <h5 class="audit-timeline text-center">Our 6 Step Audit Methodology</h5>
                <div class="row justify-content-center" style="padding: 50px 0">
                    <div class="col col-md-2" v-for="step in steps" :key="step.id">
                        <div class="step-wrapper">
                            <div class="center_square">
                                <div class="centric_circle"></div> 
                                <div class="centric_circle centric_circle_2"></div>
                                <div class="centric_circle centric_circle_3"></div>
                                <div class="core_circle animated methodology-pulsate-bck" style="background: #ffe867;"></div>
                                <div class="step_number">0{{step.id}}</div>
                            </div>
                            <div class="step-content-wrapper">
                                <h5 class="step-header">{{step.header}}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="service-content">
            <div id="smm">
                <h5 class="smo-heading">Social Media Marketing & Optimisation (SMM & SMO)</h5>
                <p class="lato">
                    Our social media marketing and optimisation strategy aims to promote and optimise social profiles for your business and brand.
                </p>
                <p class="lato">
                    Both organic and paid social media techniques are essential to delivering content to your target audience. We use a variety of tools to deliver content across a mix of social networks, including Facebook, Instagram, Twitter, and LinkedIn amongst others. These tools allow us to deliver the right message to the right person at the right time. How, you might ask? We make sure you're in the loop with a content calendar that defines what goes where, when & to whom.
                </p>
                <p class="lato">
                    Here is how:
                </p>
                <ul class="lato smo-list">
                    <li>Identify business goals, baseline, and metrics for performance monitoring.</li>
                    <li>Ascertain which social media channels match the business needs best.</li>
                    <li>Implement SMO techniques in coordination with the client’s generic marketing plan.</li>
                    <li>Measure and track results of SMO activities.</li>
                    <li>Deliver result reports and continuous improvement recommendations on a regular basis.</li>
                </ul>
                <h6 class="inner-heading" style="margin-top:2rem">Social Media Paid Advertising</h6>
                <p class="lato">
                    Organic social media and Email marketing are great distribution channels, but they're limited by their reach of your target audience. In order to extend the reach of your messaging further than your email lists and social media followers, we will employ sophisticated paid advertising techniques to distribute your content to your target audience via paid search, paid social media, sponsored content, and display advertising.
                </p>
            </div>
            <div id="email">
                <h5 class="email-heading">Email Marketing & SMS</h5>
                <p class="lato">
                    You've got mail! Well, currently you have a list of emails, but we'll make sure that list receives the right content when it's most appropriate. You may think email marketing is passé, but with a 4400% ROI and $44 returned for every $1 spent, email is still one of the most effective digital marketing techniques.
                </p>
                <p class="lato">
                    With nearly three-quarters of the population owning smartphones, SMS is an excellent way to these reach customers directly. Moreover, with 90% of SMS messages read within 3 minutes of receiving them. This makes SMS very helpful in delivering critical information with a high success rate.
                </p>
            </div>
            <div id="cro">
                <h5 class="cro-heading">Conversion Rate Optimisation (CRO)</h5>
                <p class="lato">
                    Before we can implement a complete conversion rate optimization plan, we implement the appropriate web analytics tracking tools on your website to gain insight into user behaviour. We set up conversion tracking for both macro and micro conversions to accurately measure digital marketing success and return on investment.
                </p>
                <p class="lato">
                    Once analytics tracking is in place, we implement a thorough optimization plan to improve conversion rates. Web page testing methods such as A/B tests and multivariate tests that allow us to optimize each of your landing pages to ensure the page design and copy is delivering the most conversions possible. We also track numerous engagement metrics such as your bounce rate, pages per session, and average time on-site to ensure the best user experience.
                </p>
            </div>
            <div id="reporting">
                <h5 class="reporting-heading">Reporting</h5>
                <p class="lato">
                    How do you know if all of this is working? Don't worry - we provide monthly reports including valuable campaign metrics and results, as well as a summary of all the awesome optimizations and insights we gained from the previous month. We'll let you know which pieces of content, social channels, and paid media tactics are performing the best, how many conversions you are getting, and what we are doing to deliver those conversions as effectively as possible.
                </p>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    data() {
        return {
            types: [
                {
                    id: 1,
                    name: 'Search Engine Optimisation (SEO)',
                    scrollId: 'seo',
                    img: '/images/seo.jpeg'
                },
                {
                    id: 2,
                    name: 'Social Media Marketing (SMM)',
                    scrollId: 'smm',
                    img: '/images/smm.jpeg'
                },
                {
                    id: 3,
                    name: 'Social Media Optimisation (SMO)',
                    scrollId: 'smm',
                    img: '/images/smo.jpeg'
                },
                {
                    id: 4,
                    name: 'E-Mail & SMS Marketing',
                    scrollId: 'email',
                    img: '/images/email.jpeg'
                },
                {
                    id: 5,
                    name: 'Conversion Rate Optimisation (CRO)',
                    scrollId: 'cro',
                    img: '/images/cro.jpeg'
                },
                {
                    id: 6,
                    name: 'Reporting',
                    scrollId: 'reporting',
                    img: '/images/reporting.jpeg'
                }
            ],
            steps: [
                {
                    id: 1,
                    header: 'Market Analysis & Keyword Research'
                },
                {
                    id: 2,
                    header: 'Competitor Analysis'
                },
                {
                    id: 3,
                    header: 'Website Audit & Optimization'
                },
                {
                    id: 4,
                    header: 'Content Development & Promotion'
                },
                {
                    id: 5,
                    header: 'High Quality Link Building'
                },
                {
                    id: 6,
                    header: 'Reporting and Analysis'
                }
            ]
        }
    },
    methods: {
        scrollTo(scrollId) {
            document.getElementById(scrollId).scrollIntoView(false);
        }
    }
}
</script>
<style scoped>
.digital-marketing {
    margin-top: 65px;
}
.dm-card {
    width: 100% !important;
}
.dm-heading {
    width: 480px;
}
.audit-section {
    padding: 30px 0;
    background: #1b1b1d;
    color: #fff;
    min-height: 550px;
}
.audit-inner {
    width: 1140px;
    margin: 0 auto;
    margin-top: 5rem !important;
}
.audit-timeline {
    width: 430px;
    margin: 0 auto;
}
.center_square {
    position: relative;
    width: 100px;
    height: 100px;
    background: transparent;
    left: 0;
    right: 0;
    margin: 20px auto;
    display: flex;
    transition: all .3s;
}
.centric_circle, .core_circle {
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: auto;
}
.centric_circle {
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: transparent;
    border: 2px solid hsla(0,0%,100%,.08);
}
.centric_circle_2 {
    width: 60px;
    height: 60px;
}
.centric_circle_3 {
    width: 80px;
    height: 80px;
}
.core_circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: all .3s;
    z-index: 2;
    border: 5px solid #ffe867;
}
.step_number {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 50%;
    transform: translateY(-50%);
    font-size: 4.5rem;
    font-weight: 700;
    color: rgba(40,40,40,.7);
    transition: all .5s ease-in-out;
    text-align: center;
}
.step-wrapper:hover > .center_square {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
}
.step-wrapper:hover > .centric_circle {
    display: block;
}
.step-wrapper:hover > .core_circle {
    background: #fff!important;
    transform: translateY(-50%) scale(1.3);
}
.step-wrapper:hover > .step_number {
    transform: translateY(-110%);
}
.step-header {
    font-size: 18px;
    font-weight: 300;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    -webkit-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
    color: rgb(255, 255, 255);
    text-align: center;
}
.smo-heading {
    width: 750px
}
.smo-list, .inner-heading {
    font-size: 20px;
    line-height: 35px;
}
.email-heading {
    width: 330px;
}
.cro-heading {
    width: 510px;
}
.reporting-heading {
    width: 150px
}
#seo > p, #smm > p, #email > p, #cro > p, #reporting > p {
    font-size: 20px;
    line-height: 35px;
} 
#seo > h5, #smm > h5, #email > h5, #cro > h5, #reporting > h5 {
    margin-top: 3rem;
    padding-bottom: 0.5rem;
    border-bottom: 3px solid #ffe867;
}
</style>