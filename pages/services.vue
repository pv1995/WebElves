<template>
    <div>
        <Banner
            :bannerText="bannerHeading"
            :bannerSubText="bannerSubHeading"
            :altBG="background"
            :homepage="homePage"
            :imageURL="image"
        />
        <section class="services text-center">
            <div class="services-content ">
                <h1 class="services-head primary-color">Services We Offer</h1>
                <div class="service-cards">
                    <ServiceCard :services="services" @clicked="goToService"/>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Banner from "~/components/banner.vue";
import ServiceCard from "~/components/service-card.vue";

export default {
  components: {
    Banner,
    ServiceCard
  },
  head () {
    return {
    title: 'Services | WebElves',
    meta: [
        { hid: 'description', name: 'description', content: 'WebElves is a premier web and mobile application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
        { hid: 'keywords', name: 'keywords', content: 'Mobile App Development Agency, Web Application Development Services, Web Development Agency, web application development company, hybrid mobile app development company, hybrid mobile application development services, react native development agency, react native development company, Reactjs Development Company , cms development company, Backend Development Services, Backend Development Company, Node Js Development Company, Node Js Development Services , Ecommerce Website Development Services, Custom Ecommerce Website Development Company, cross platform mobile app development company, Frontend Development Services, Golang Development company, ui ux agency, ui ux design company india, Graphic Design Firm, Graphic Design Agency, Vuejs development agency, vuejs development company' },
    ]
    }
  },
  data() {
    return {
      homePage: false,
      background: "banner",
      bannerHeading: "Blending Creativity, Strategy and Innovation",
      bannerSubHeading:
        "Wielding innovation and technology to transform your business",
      image: "/images/services_img.jpeg",
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
          route: 'mobile-app-development'
        },
        {
          id: 4,
          name: 'Digital Marketing',
          img: '/images/growth.png',
          content: 'We provide a 360° approach to Digital Marketing to help brands navigate any...',
          route: 'digital-marketing'
        }
      ]
    };
  },
   methods:{
      goToService(value) {
        this.$router.push({name: value})
      }
  }
};
</script>
<style>
.services {
  padding: 0 50px;
}
.services-content {
  margin-top: 6rem;
  margin-bottom: 6rem;
}
.services-content > h1 {
  margin-bottom: 0;
  font-size: 36px;
}
.service-cards {
  min-height: 100% !important;
}
.service-left-wrapper {
  min-height: 400px;
  padding: 2rem;
  padding-top: 0;
}
.service-col-left {
  padding-right: 0;
}
.service-col-right {
  padding-left: 0;
}
</style>

