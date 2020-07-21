<template>

  <div>
    <Banner
      :bannerSubText="bannerHeading"
      :altBG="background"
      :typerText="array"
      :homepage="homePage"
    ></Banner>
    <section class="about-us container-fluid">
      
      <div class="row no-gutters">
        <h1 class="services-heading text-center">About Us</h1>
   
        <div class=" col-md-6 col-sm-12 ">
          
          <div class=" about-us-image-wrapper">
            <img src="../static/images/about-us-image.png" width="100%" alt="Vuejs Development Services">
          </div>
        </div>
             <div class=" col-md-6 col-sm-12 ">
          <div class=" about-us-content">
           
            <p class="about-us-text text-justify lato">
              We are a digital strategy consulting firm that develops excellent product and help our client scale in the digital arena. With digital transformation being the need of the hour, we help our partners make significant and lasting improvements in their business.<br>
              Our agency excels in branding, digital marketing and all kinds of Web, Mobile &amp; Cross Platform App development. We are entrepreneurs, makers, futurists, and together, we ignite growth within our partners.
            </p>
            <button class="square_btn" @click='goToAboutUs'>More about us <span style="padding-left:1rem"><i class="fas fa-arrow-right"></i></span></button>
          </div>
        </div>
      </div>
    </section>
    <section class="our-services text-center">
      <div class="our-services-bg">
        <h1 class="services-heading">Our Services</h1>
        <h5
          class="services-subheading lato"
        >We create digital solutions that you need</h5>
        <div class="service-cards">
          <ServiceCard :services="services" @clicked="goToService"/>
        </div>
      </div>
    </section>
    <section class="strategy-section tertiary-bg container-fluid">
      <div class="row strategy no-gutters">
        
            <h1 class='text-center services-heading' style="margin-top:100px;font-size:36px;margin-bottom:30px">  We turn ideas into a reality
            </h1>
        
         <div class="col-md-6 col-sm-12 ">
          <div class="width-sm-100 strategy-image-wrapper">
            <img src="../static/images/strategy_info.png" width="100%" alt="Reactjs Development Company">
          </div>
        </div>
        <div class="col-md-6 col-sm-12 ">
          <div class="container-fluid strategy-content">
            <!-- <h4 class="strategy-heading">We don’t just build
              <br>We aim for the moon with all our clients
            </h4> -->
            <p
              class="strategy-para lato text-justify"
            >We deploy smart agile process that facilitate transparent and effective communication to optimise digital growth and development . Our strategy reflects your company goals, keeping in mind your competitor's digital strategies and future plans. We are a team of dreamers and doers united by a simple idea: If we make a difference for your customers we will make a difference for your business too.
            </p>
          </div>
        </div>
       
      </div>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" >
        <polygon fill="black" points="0,100 100,0 100,100"></polygon>
      </svg> -->
    </section>
    <section class="careers-section primary-bg">
      <div class="row careers no-gutters">
        <div class="col-md-6 col-sm-12">
          <div class="careers-image-wrapper">
            <img src="../static/images/career_updated.png" class="width-sm-100" alt="Node Js Development Services">
            <h4 class="careers-image-text white-color">
              Work |
              <span class="tertiary-color">
                <h4 class="careers-image-inner-text">Freelance</h4>
              </span> | Intern
            </h4>
          </div>
        </div>
        <div class="col-md-6 col-sm-12 container-fluid careers-text">
          <div class="row slick mob-hidden">
            <!-- <div class="col careers-heading-left text-center">
              <vue-slick ref="slick" :options="slickOptions">
                <h4 class="red">Build</h4>
                <h4 class="tertiary-color">Create</h4>
                <h4 class="green">Design</h4>
                <h4 class="blue">Code</h4>
                <h4 class="tertiary-color">Grow</h4>
              </vue-slick>
            </div> -->
            <div class="col careers-heading-right tertiary-color">
              <h4 class="text-center">Grow</h4>
            </div>
            <span class="careers-heading-middle white-color">
              <h4 class="text-center"> with</h4>
            </span>
            <div class="col careers-heading-right tertiary-color">
              <h4 class="text-center">WebElves</h4>
            </div>
          </div>
          <div class="row careers-content">
            <p
              class="careers-para white-color text-justify"
            >At webElves, we love diversity. We are a team of thinkers, writers, talkers, coders, makers, gamers, analysts and more. Together we take on every hurdle that comes our way and never back down.
              <br>We believe in creating a better future for you, for us, for the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import ServiceCard from "~/components/service-card.vue";
import Banner from "~/components/banner.vue";

import jQuery from "jquery";



export default {
  components: {
    Logo,
    ServiceCard,
    Banner,
  },
  head () {
    return {
    title: 'Home | WebElves',
    meta: [
        { hid: 'p:domain_verify', name: 'p:domain_verify', content: '615d58b7fa714b296deacd70da9cd586'},
        { hid: 'google-site-verification', name: 'google-site-verification', content: 'pZXviGYAZsC21AkzbCESiaQFRCVQiUGAJsNNzDWNqMU'},
        { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile App Development Agency, Web Application Development Services, Web Development Agency, web application development company, hybrid mobile app development company, hybrid mobile application development services, react native development agency, react native development company, Reactjs Development Company , cms development company, Backend Development Services, Backend Development Company, Node Js Development Company, Node Js Development Services , Ecommerce Website Development Services, Custom Ecommerce Website Development Company, cross platform mobile app development company, Frontend Development Services, Golang Development company, ui ux agency, ui ux design company india, Graphic Design Firm, Graphic Design Agency, Vuejs development agency, vuejs development company, Reactjs Development Company, React Js Development Services , Angularjs Web Development Company, Angularjs Development Services, nativescript development company, Enterprise Mobile App Development Company, Enterprise Mobility Development, cross platform mobile app development company, Mean Stack Development Services, Mean Stack Development Company, wordpress development services, wordpress development agency, ' },
    ]
    }
  },
  data() {
    return {
      homePage: 1,
      background: "banner",
      bannerHeading:
        "Developing & Delivering what the digital age demands.",
      array: [
        "Web Application Development",
        "Mobile Application Development",
        "Vuejs Development", 
        "Reactjs Development",
        "Nodejs Development",
        "Sailsjs Developmemt",
        "Golang Development", 
        "Elixir Development",
        "Erlang Development", 
        "React Native Development", 
        "NativeScript Development",
        "MEAN Stack Development", 
        "MERN Stack Development", 
        "MEVN Stack Development",
        "Hybrid App Development", 
        "Ionic App Development",
        "HTML5/CSS3 Development", 
        "Bootstrap Development",
        "Wordpress Development",
        "CMS Development"
      ],
      slickOptions: {
        autoplay: true,
        draggable: false,
        vertical: true,
        arrows: false
      },
      services: [
        {
          id: 1,
          name: 'Web Development',
          img: '/images/web-dev.jpeg',
          content: 'Webelves is a premier website development company. We’re in the business of aweso... web development.',
          route: 'web-application-development'
        },
        {
          id: 2,
          name: 'UI/UX Design',
          img: '/images/website-design-symbol.jpeg',
          content: 'Simply put, our core strengths lie in the simplicity of the design yet providing...',
          route: 'design'
        },
        {
          id: 3,
          name: 'Mobile App Development',
          img: '/images/mobile_icon_black.jpeg',
          content: 'We build beautiful, user-centric, engaging and responsive applications with a coal...',
          route: 'mobile-application-development'
        }
      ]
    };
  },
  methods:{
    goToAboutUs(){
      this.$router.push({name:'aboutus'})
    },
    goToService(value) {
      console.log(value);
      this.$router.push({name: value})
    }
  }
};
</script>

<style>
@import "node_modules/slick-carousel/slick/slick.css";

.about-us-content,
.strategy-content {
  display: block !important;
  /* margin-top: 150px; */
  /* margin-left: 100px; */
  padding-top: 5rem;
  min-height: 100% !important;
  width: 460px;
  margin: 0 auto;
}
.about-us {
  margin-top: 100px;
  padding: 0 100px;
}
.about-us-heading {
  text-transform: uppercase;
      width: 100%;
}
.about-us-text {
  line-height: 35px;
  font-size: 18px;
}
.about-us-image-wrapper,
.strategy-image-wrapper {
  /* width: 600px; */
  margin: 0 auto;
  /* min-height: 70vh !important; */
}
.about-us-image-wrapper {
  height: 500px;
}

.about-us-image-wrapper > img {
  height: 500px;
  object-fit: cover;
  object-position: top;
}

.our-services {
  padding: 0 50px;
  margin-top: 100px;
  width: 100%;
  height: 100%;
}

.services-heading {
  margin-bottom: 3rem;
  padding: 0 5rem;
  font-size: 36px;
  color: #232931;
}
.services-subheading {
  font-weight: lighter;
  font-size: 24px;
}
.service-cards {
  display: block !important;
}
.strategy {
  /* margin-top: 100px; */
  margin-bottom: 30px;
}
.strategy-section {
  height: 100%;
  min-height: 80vh;
  /* background: #ffe867; */
  margin-top: 5rem;
  padding: 0 100px;
  background-repeat: no-repeat;
  background-size: cover;
}
.strategy-section > svg {
  bottom: 0;
  width: 100%;
  height: 4vw;
}
.strategy-content {
  /* height: 50vh !important;
  padding: 7rem; */
}
.strategy-para {
  /* padding-left: 25px;
  padding-top: 25px; */
  line-height: 35px;
  font-size: 18px;
}
.strategy-image-wrapper {
  
  /* height: 50vh !important; */
}
.careers-section {
  padding: 0 100px;
}
.careers {
  position: relative;
  padding: 3rem 0;
  padding-top: 6rem; 
  min-height: 740px;
  /* top: 50px; */
  /* height: 70vh; */
}
.careers-head-left {
  position: relative;
  top: 30px;
}
.careers-head-right {
  position: relative;
  top: 310px;
}
.careers-image-wrapper {
  /* width: 500px; */
  position: relative;
  top: 20%;
  text-align: center;
  margin: 0 auto;
}
.careers-image-text {
  text-transform: uppercase;
  font-size: 36px;
  margin-top: 0.5rem;
}
.careers-image-text > span {
  display: inline-block;
}
.careers-image-inner-text {
  font-size: 36px;
}
.careers-text {
  width: 100% !important;
  display: inline-block !important;
  padding: 3rem 0;
  padding-top: 8rem;
  /* margin-top: 100px; */
}
.careers-content {
  margin: 0 auto;
  position: relative;
  padding: 2rem 5rem;
  padding-top: 1rem !important;
}
.careers-heading-left {
  text-align: right;
  text-transform: uppercase;
}
.careers-heading-right {
  text-align: left;
  text-transform: uppercase;
}
.careers-para {
  font-size: 18px;
  line-height: 35px;
  /* padding: 3rem 0;
  padding-top: 5rem; */
}
.slick {
  margin: 0 auto;
  position: relative;
  /* right: 65px; */
}
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.square_btn:hover {
  background: #ffe867;
  color: #232931;
}
</style>
