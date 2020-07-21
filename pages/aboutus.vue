<template>
  <div>
    <Banner
      :bannerText="bannerHeading"
      :bannerSubText="bannerSubHeading"
      :altBG="background"
      :homepage="homePage"
      :imageURL="image"
      :bannerBackground="bannerBackground"
    />
    <section class="pitch-section">
      <div class="pitch">
        <h2 class="pitch-heading raleway text-center primary-color">
          <!-- <span class="raleway tertiary-color" style="font-size:36px;padding-right:10px;">Wizards</span> -->
          Wizards in the Digital Space
        </h2>
        <p
          class="pitch-para"
        >We are a digital strategy consulting boutique who do stellar work to enable organizations to be more digitally effective. Our elves go an extra mile for code quality and well-designed and tested software to create applications that delight the end users. 
        We believe in establishing trust amongst our clients and building relationships that last.
        </p>
      </div>
    </section>
    <section class="aboutus-strategy-section">
      <div class="aboutus-strategy">
        <p
          class="aboutus-strategy-heading primary-color"
        >We help transform your business by connecting these three dots of efficacy and merit.</p>
        <div class="row aboutus-strategy-info">
          <img src="../static/images/infograph.jpeg" style="width:80%;margin:0 auto" alt="Web Application Development Services">
        </div>
      </div>
    </section>
    <section class="our-mantra">
      <h4 class="mantra-heading text-center">OUR MANTRA</h4>
      <div class="row align-items-center">
        <div class="col-sm-12 col-md-6">
          <div class="left-mantra">
            <div class="mantra-icon text-center my-4">
              <img src="../static/images/growth1.jpeg" height="50px" width="50px" />
            </div>
            <h5 class="text-center">HYPER FOCUSED ROI</h5>
            <p>We architect digital solutions that are built to succeed. We study human patterns and we play close attention to digital technology trends that are making noise. We leave no stone unturned in the quest to identify performance gaps, and we refine and iterate until we reach your KPIs.</p>
          </div>
        </div>
        <div class="col-sm-12 col-md-6">
          <div class="right-mantra">
            <div class="mantra-icon text-center my-4">
              <img src="../static/images/group.jpeg" height="50px" width="50px" alt="Web Development Agency"/>
            </div>
            <h5 class="text-center">A SEASONED TEAM</h5>
            <p>Our collaborative approach helps guide our client partners to become true product owners, learning the lifecycle of digital technology products and platforms, in an effort to better understand expectations and plan for realistic growth.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Banner from "~/components/banner.vue";

export default {
  components: {
    Banner
  },
  head () {
    return {
    title: 'About Us | WebElves',
    meta: [
        { hid: 'description', name: 'description', content: 'WebElves is a premier web development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications.' },
        { hid: 'keywords', name: 'keywords', content: 'web development agency, web development services, web developers, hire developers, nodejs development services, reactjs development services, vuejs development services, react native development, Ecommerce Website Development Company, mobile app development services, mobile app development company, cross platform app development services, hybrid mobile app development company, cms development, wordpress development services, custom software development services' },
    ]
    }
  },
  data() {
    return {
      homePage: false,
      background: "banner-alternate",
      bannerHeading: `Dedicated to being valuable and purposeful`,
      bannerSubHeading:
        "Our elves are eager to face our next hurdle, conquer it and establish your trust",
      image: "/images/aboutus-banner.jpeg",
      bannerBackground: true
    };
  },
  methods: {
    highlight() {
      document.querySelector("h1").innerHTML =
        "Dedicated to being valuable and purposeful";
    }
  },
  mounted() {
   // this.highlight();
  }
};
</script>
<style>
.pitch-section {
  /* min-height: 50vh; */
  padding-bottom: 4rem;
}
.pitch {
  /* width: 70%; */
  margin: 0 auto;
  padding: 0 100px;
  margin-top: 8rem;
  margin-bottom: 5rem;
}
.pitch-heading {
  margin-bottom: 4rem;
  font-weight: 900;
  padding: 0 5rem;
  font-size: 36px;
}
.pitch-para {
  /* color: darkgrey; */
  padding: 0 15rem;
  font-size: 20px;
  line-height: 35px;
  text-align: justify;
}
.aboutus-strategy-section {
  /* min-height: 100vh; */
  /* margin-top: 3rem; */
  margin-bottom: 5rem;
}
.aboutus-strategy-info {
  width: 55%;
  height: 380px;
  margin: 0 auto;
}
.aboutus-strategy-heading {
  text-align: center;
  font-size: 36px;
  padding: 0 5rem;
  padding-bottom: 0rem;
  width: 55%;
  font-weight: 100 !important;
  margin: 0 auto;
  font-family: inherit;
}
.leadership-para {
  font-size: 24px;
}
.leadership-row {
  margin-right: 0;
  margin-left: 0;
  margin-top: 5rem;
}
.leader-card {
  width: 100%;
  height: 480px;
  padding: 20px;
  background-size: cover;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: overlay;
  overflow: hidden;
  background-position: 50%;
  margin-bottom: 10px;
}
.leader-content {
  padding: 10px 0;
  position: relative;

  top: 75%;
}
.leader-content > h3 {
  font-weight: 600;
}
.our-mantra {
  min-height: 55vh;
  margin-top: 10rem;
}
.our-mantra > .row {
  width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
}
.mantra-heading {
  font-weight: 900;
  font-size: 36px;
}
.left-mantra, .right-mantra {
  min-height: 300px;
}
.left-mantra > p, .right-mantra > p {
  padding: 0 3rem;
  text-align: justify;
  margin-top: 2rem !important;
  line-height: 35px;
}
</style>
