<template>
    <div>
        <section class="technologies-banner primary-bg tertiary-color d-flex justify-content-center align-items-center">
            <h2 class="text-center raleway">Technologies</h2>
        </section>
        <section class="technologies-content">
            <div class="backend">
                <h5 class="text-center raleway primary-color">Backend Engineering</h5>
                <p class="lato primary-color">
                    We deliver backend development services by using the latest technologies and modern frameworks like NodeJs, SailsJs, Golang, MEAN Stack, MERN stack and MongoDB.<br>
                    Our team focuses on delivering <strong>secure</strong>, <strong>robust</strong> and <strong>highly scalable</strong> solutions for your business.
                </p>
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/node.jpeg" width="75px" height="75px" alt="Node.js Development Services"/>
                            </div>
                            <h6 class="lato font-weight-bold">NodeJS</h6>
                            <p class="text-justify">
                                Node.js is an open-source, cross-platform JavaScript run-time environment that is used to build server-side as well as network applications. Node is highly scalable and extensible, which means that you can customise and further extend NodeJS as per requirements.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('nodejs-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/sails.jpeg" width="90px" height="50px" class="sails" alt="Sails.js Development Company"/>
                            </div>
                            <h6 class="lato font-weight-bold">SailsJS</h6>
                            <p class="text-justify">
                                Sails.js is a Model-View-Controller web application framework developed atop the Node.js environment. Sails offers a host of features out of the box and leads as the generally accepted Node.js framework for both full-stack development and REST APIs.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('sailsjs-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/go.jpeg" width="75px" height="75px" alt="Golang Development Services"/>
                            </div>
                            <h6 class="lato font-weight-bold">Golang</h6>
                            <p class="text-justify">
                                Go, also called Golang, is a staticly typed, compiled programming language designed at Google. Golang was designed keeping in mind useful characteristics like static typing and runtime efficiency (like C, C++), readability and usability (like Python & JavaScript) and high performance networking and multiprocessing.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('golang-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/elixir.jpeg" width="75px" height="70px" alt="Elixir Development Services"/>
                            </div>
                            <h6 class="lato font-weight-bold">Elixir</h6>
                            <p class="text-justify">
                                Elixir is a dynamic, functional language designed for building scalable and maintainable applications. It leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems, while also being successfully used in web development and the embedded software domain.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('elixir-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/erlang.jpeg" width="75px" height="75px" alt="Erlang Development Services"/>
                            </div>
                            <h6 class="lato font-weight-bold">Erlang</h6>
                            <p class="text-justify">
                                Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution and fault tolerance.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('erlang-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/mean.jpeg" width="75px" height="75px" class="mean" alt="MEAN Stack Development Company"/>
                            </div>
                            <h6 class="lato font-weight-bold">MEAN Stack</h6>
                            <p class="text-justify">
                                MEAN is an acronym for MongoDB, Express.js, Angular.js and Node.js. It is a free and open source JavaScript software stack for building dynamic websites and web applications.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('mean-stack-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/mern.jpeg" width="75px" height="75px" class="mern" alt="MERN Stack Development Company"/>
                            </div>
                            <h6 class="lato font-weight-bold">MERN Stack</h6>
                            <p class="text-justify">
                                MERN is an acronym for MongoDB, Express.js, React.js and Node.js. It is a free and open source JavaScript software stack to develop highly efficient web applications.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('mern-stack-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/mongodb.jpeg" width="75px" height="75px" class="mongo" alt="MongoDB Development Services"/>
                            </div>
                            <h6 class="lato font-weight-bold">MongoDB</h6>
                            <p class="text-justify">
                                MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. It is used by millions of developers to power the world's most innovative products and services.<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="frontend">
                <h5 class="text-center raleway primary-color">Frontend Engineering</h5>
                <p class="text-cjustify">
                    We design and develop amazing user experiences using latest technologies and modern frameworks like VueJS, Nuxt.js, React.js, Quasar Framework and Angular.js.<br>
                    We are awesome frontend developers focused on engineering highly <strong>intuitive</strong>, <strong>interactive</strong> and <strong>engaging</strong> web applications and user experiences.
                </p>
                <div class="row justify-content-center align-items-center">
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/vue.jpeg" width="75px" height="75px" alt="Vuejs Development Agency"/>
                            </div>
                            <h6 class="lato font-weight-bold">VueJS</h6>
                            <p class="text-justify">
                               VueJS is an open-source JavaScript framework for building user interfaces and single-page applications. It features an incrementally adoptable architecture that focuses on declarative rendering and component composition.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('vuejs-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/nuxt.jpeg" width="75px" height="75px" alt="Nuxt.js Development Company"/>
                            </div>
                            <h6 class="lato font-weight-bold">Nuxt.js</h6>
                            <p class="text-justify">
                               Nuxt.js is an open-source web application framework based on VueJS, Node.js, Webpack and Babel.js. The framework is advertised as "meta-framework for universal applications".<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('nuxtjs-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/quasar.jpeg" width="75px" height="75px" alt="Quasar Framework Application Development"/>
                            </div>
                            <h6 class="lato font-weight-bold">Quasar Framework</h6>
                            <p class="text-justify">
                               Quasar Framweork is an MIT licensed open-source VueJS based framework, which allows you as a web developer to quickly create responsive++ websites/apps in many flavours like SPAs, SSR, PWAs, Mobile Apps and Cross Platform Apps. Quasar is “SPA front-end on steroids.”<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('quasar-framework')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/react.jpeg" width="75px" height="75px" alt="Reactjs Development Company"/>
                            </div>
                            <h6 class="lato font-weight-bold">React.js</h6>
                            <p class="text-justify">
                               React.js is an open-source JavaScript library designed by Facebook for creating rich and engaging web apps fast and efficiently with minimal coding. React can be used as a base in the development of single-page or mobile applications.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('reactjs-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/angular.jpeg" width="75px" height="75px" alt="Angularjs Web Development Company"/>
                            </div>
                            <h6 class="lato font-weight-bold">Angular.js</h6>
                            <p class="text-justify">
                               AngularJS is a JavaScript-based open-source front-end web framework designed by Google to address many of the challenges encountered in developing single-page applications.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('angularjs-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/ionic.jpeg" width="75px" height="75px" alt="ionic mobile development"/>
                            </div>
                            <h6 class="lato font-weight-bold">Ionic Framework</h6>
                            <p class="text-justify">
                               Ionic Framework is the free, open source mobile UI toolkit for developing high-quality cross-platform apps for native iOS, Android, and the web—all from a single codebase.<br>
                            </p>
                            <button class="square_btn tech-btn" @click="goToTechnology('ionic-app-development')">Learn More</button>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 col-top">
                        <div class="tech-wrapper text-center">
                            <div class="tech-image-wrapper">
                                <img src="/images/html5.jpeg" width="75px" height="75px" alt="HTML5 Development Services"/>
                            </div>
                            <h6 class="lato font-weight-bold">HTML</h6>
                            <p class="text-justify">
                               HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it. HTML 5 is the fifth and current major version of HTML, and subsumes XHTML.<br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

export default {
    components: {
    },
    head () {
        return {
            title: 'Technologies | WebElves',
            meta: [
                { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
                { hid: 'keywords', name: 'keywords', content: 'VueJS, reactjs, nodejs, angularjs, sailsjs, nuxtjs, quasar framework, react native, nativescript, elixir, erlang, MEAN stack, MERN Stack, MEVN Stack, web development company, web development services, web developers, hire developers, node.js development services, react.js development services, VueJS development services, react native development, Ecommerce Website Development Company, mobile app development services, mobile app development company, cross platform app development services, hybrid mobile app development company, cms development, wordpress development services, custom software development services' },
            ]
        }
    },
    methods: {
        goToTechnology(name) {
            this.$router.push({name: name})
        }
    }
}
</script>
<style scoped>
.technologies-banner {
    margin-top: 65px;
    height: 500px;

}
.technologies-content {
    padding: 50px 150px;
}
.backend > h5, .frontend > h5 {
    font-size: 32px;
    width: 325px;
    margin: 0 auto;
    padding-bottom: 5px;
    border-bottom: 3px solid #ffe867;
}
.frontend {
    margin-top: 5rem;
}
.frontend > h5 {
    width: 330px !important;
}
.backend > p, .frontend > p {
    font-size: 18px;
    text-align: center;
    margin-top: 2rem;
}
.backend > .row {
    margin-top: 2rem;
}
.backend > .row > .col-top, .frontend > .row > .col-top {
    margin-top: 3rem;
}
.tech-image-wrapper {
    height: 80px;
}
.sails {
    padding-top: 1rem;
}
.mean {
    width: 100px;
    height: 50px;
    margin-top: 1rem;
}
.mern {
    width: 145px;
    height: 55px;
    margin-top: 1rem;
}
.mongo {
    width: 150px;
    height: 50px;
    margin-top: 1rem;
}
.tech-wrapper {
    width: 400px;
    margin: 0 auto;
}
.tech-wrapper > p {
    min-height: 230px;
    max-height: 230px;
    margin-top: 1.5rem;
}
.tech-btn {
    width: 150px !important;
}
</style>
