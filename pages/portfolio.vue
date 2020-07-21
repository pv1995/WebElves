<template>
    <div class="portfolio">
        <section class="service-banner primary-bg d-flex justify-content-center align-items-center">
            <h1 class="text-center raleway tertiary-color">Our Portfolio</h1>
        </section>
        <section class="service-content">
            <div class="row">
                <div class="col-6 portfolio-col" v-for="p in portfolios" :key="p.id">
                    <div class="portfolio-wrapper" @click="goToPage(p.route)">
                        <img :src="p.img" :alt="p.alt"/>
                        <div class="portfolio-content">
                            <h4 class="primary-color">{{p.name}}</h4>
                            <p class="primary-color lato">{{p.tech}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    head () {
    return {
    title: 'Portfolio | WebElves',
    meta: [
        { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
        { hid: 'keywords', name: 'keywords', content: 'web development company, web development services, web developers, hire developers, node.js development services, react.js development services, VueJS development services, react native development, Ecommerce Website Development Company, mobile app development services, mobile app development company, cross platform app development services, hybrid mobile app development company, cms development, wordpress development services, custom software development services, html5 development services' },
    ]
    }
  },
    data() {
        return {
            portfolios: [
                {
                    id: 1,
                    img: '/images/s4carlisle.jpeg',
                    name: 'S4Carlisle',
                    tech: 'HTML, CSS, JavaScript, jQuery, Bootstrap',
                    route: 's4carlisle',
                    alt: 'Web Development Company'
                },
                {
                    id: 2,
                    img: '/images/drrama.jpeg',
                    name: `Dr.Rama's Test Tube Baby Centre`,
                    tech: 'HTML, CSS, JavaScript, VueJS, Nuxt.js, Node.js, Firebase',
                    route: 'drrama',
                    alt: 'React.js Development Services'
                },
                {
                    id: 3,
                    img: '/images/usee.jpeg',
                    name: 'USEE - Shop what you see',
                    tech: 'HTML, CSS, JavaScript, VueJS, BootstrapVue, Node.js, Express.js, SQL',
                    route: 'usee',
                    alt: 'Ecommerce Website Development Company'
                },
                // {
                //     id: 4,
                //     img: '',
                //     name: 'TRACRE',
                //     tech: 'Node.js, Express.js, MongoDB, VueJS, Quasar Framework, Sketch, Figma',
                //     route: 'tracre',
                //     alt: 'Custom Software Development Services'
                // },
                {
                    id: 5,
                    img: '/images/nehamondal.jpeg',
                    name: 'Neha Mondal Chakravarthy',
                    tech: 'HTML, CSS, JavaScript, VueJS, Quasar Framework, Node.js, Sketch, Figma',
                    route: 'nehamondal',
                    alt: 'Node.js Development Services'
                },
                {
                    id: 6,
                    img: '/images/shadowzone.jpeg',
                    name: 'Shadowz One Dance',
                    tech: 'Logo Design, Newsletter Design, Business Card Design',
                    route: 'shadowzone',
                    alt: 'UI/UX Design Agency'
                }
            ]
        }
    },
    methods: {
        goToPage(name) {
            this.$router.push({name: name})
        }
    }
}
</script>
<style scoped>
.portfolio {
    margin-top: 65px;
}
.portfolio-col {
    margin: 2rem 0;
}
.portfolio-wrapper {
    position: relative;
    cursor: pointer;
}
.portfolio-wrapper > img {
        width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: top;
    transition: .5s ease;
    opacity: 1;
}
.portfolio-content {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
}
.portfolio-content > h4 {
    font-size: 24px;
}
.portfolio-wrapper:hover {
    background: #ffe867;
}
.portfolio-wrapper:hover > img {
    opacity: 0.2;
}
.portfolio-wrapper:hover > .portfolio-content {
    opacity: 1;
}
</style>
