<template>
    <div>
        <Banner
            :bannerText="bannerHeading"
            :altBG="background"
            :typerText="array"
            :homepage="homePage"
            :imageURL="image"
        />
        <section class="webelves-culture">
            <h2 class="culture-heading text-center primary-color">
                The
                <!-- <span class="tertiary-color" style="font-size:36px;">webElf</span>  -->
                WebElf culture
            </h2>
            <div class="container culture-content">
                <div class="col-md-12">
                    <div class="row culture-row culture-row1" style="margin-bottom:5rem;">
                        <div class="col culture-para">
                            <div class="row culture-inner-row">
                                <div class="col-md-3">
                                    <div class="culture-img-wrapper">
                                        <img src="../static/images/unique.jpeg" width="100%">
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="culture-inner-content">
                                        <h5 class="culture-inner-heading primary-color">Uniqueness</h5>
                                        <p
                                            class="culture-inner-para"
                                        >It's one thing to code and brand. It's another to do it in our own uique way: WebElves first. Be open, honest and constructive.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col culture-para">
                            <div class="row culture-inner-row">
                                <div class="col-md-3">
                                    <div class="culture-img-wrapper">
                                        <img src="../static/images/responsibility.jpeg" width="100%">
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="culture-inner-content">
                                        <h5 class="culture-inner-heading primary-color">Responsibility</h5>
                                        <p
                                            class="culture-inner-para"
                                        >Demand excellence, take intelligent risks, act like an owner.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row culture-row culture-row2">
                        <div class="col culture-para">
                            <div class="row culture-inner-row">
                                <div class="col-md-3">
                                    <div class="culture-img-wrapper">
                                        <img src="../static/images/pride.jpeg" width="100%">
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="culture-inner-content">
                                        <h5 class="culture-inner-heading primary-color">Pride</h5>
                                        <p
                                            class="culture-inner-para"
                                        >We take great pride in our culture and work. We always go an extra mile for the quality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col culture-para">
                            <div class="row culture-inner-row">
                                <div class="col-md-3">
                                    <div class="culture-img-wrapper">
                                        <img src="../static/images/unity.jpeg" width="100%">
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="culture-inner-content">
                                        <h5 class="culture-inner-heading primary-color">Unity</h5>
                                        <p
                                            class="culture-inner-para"
                                        >It is the collective personality of our organization. It sets us apart, shapes us into what we aspire to be.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="freelancers">
            <div class="freelancers-content">
                <div class="freelance-inner-wrapper">
                    <h4 class="freelance-heading text-center primary-color">
                        Want to be a contract
                        <span class="white-color mob-career-inline" style="font-size:45px;">Elf?</span>
                    </h4>
                    <p class="freelance-para">
                        WebElves combines the flexibility of freelancing with the support of a close-knit team.
                        Elves decide when, where and how much they want to work and in doing so, deliver far more than our clients expect.
                    </p>
                </div>
            </div>
        </section>
        <section class="interns primary-bg">
            <div class="interns-content">
                <div class="intern-inner-wrapper">
                    <h4 class="intern-heading white-color text-center">
                        Intern at
                        <span class="tertiary-color mob-career-inline" style="font-size:36px;">WebElves</span>
                    </h4>
                    <p class="intern-para">
                        Interns(Elf Juniors) are given an opportunity to work on live projects, solve real-time problems and learn from our elves, hence procruing immense amount of experience and expertise. We are always encouraging elves to bring something new to the table.
                        Stay ahead in the race by becoming an
                        <span
                            class="tertiary-color"
                            style="font-size:18px;"
                        >Elf Junior</span> at
                        <span class="tertiary-color" style="font-size:20px;">WebElves</span>.
                    </p>
                </div>
            </div>
        </section>
        <section class="work">
            <div class="work-content">
                <h4 class="work-heading primary-color text-center">
                    We are still building our
                    <span
                        class="tertiary-color mob-army-inline"
                        style="font-size:36px;text-transform:uppercase"
                    >army</span>
                </h4>
                <div class="row work-row">
                    <div class="col">
                        <div class="work-image-wrapper">
                            <img src="../static/images/career_army.jpeg" width="100%">
                        </div>
                    </div>
                    <div class="col">
                        <div class="work-inner-wrapper">
                            <p
                                class="work-para"
                            >We are always looking for amazing people who challenge
                            the status quo and who want to make a difference.
                            We are looking for people to join our team of smart, creative, modest, fun and energetic elves to do wonders in the digital world.
                            </p>
                        </div>
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
    title: 'Careers | WebElves',
    meta: [
        { hid: 'description', name: 'description', content: 'WebElves is a premier website development company. Work with our skilled web developers, designers and mobile developers.' },
        { hid: 'keywords', name: 'keywords', content: 'web development company, web development services, web developers, hire developers, node.js development services, react.js development services, vuejs development services, react native development, Ecommerce Website Development Company, mobile app development services, mobile app development company, cross platform app development services, hybrid mobile app development company, cms development, wordpress development services, custom software development services' },
    ]
    }
  },
  data() {
    return {
      homePage: false,
      background: "banner",
      bannerHeading: "Be a part of ELF-LAND",
      array: [
        "We dont sell products. We solve problems.",
        "We get our hands dirty",
        "We value our elves more than (as much as) our costumers",
        "Our culture defines us",
        "Our values are our foundation"
      ],
      image: "/images/career-banner.jpeg"
    };
  },
  methods: {
    highlight() {
      document.querySelector("h1").innerHTML =
        "BE A PART OF  <span class='highlight'>ELFLAND</span>";
    }
  },
  mounted() {
  //  this.highlight();
  }
};
</script>
<style>
.webelves-culture {
  padding: 2rem;
  background-color: #fff;
  color: #111;
  margin: 5rem 0;
  padding-top: 4rem;
  margin-bottom: 5rem;
  height: 100%;
}
.culture-heading {
  margin-bottom: 2rem;
  font-size: 36px;
}
.culture-content {
  margin-top: 5rem;
  padding: 2rem;
  text-align: left !important;
  display: block !important;
  min-height: 100%;
}
.culture-inner-row {
  padding: 1rem;
}
.culture-inner-heading {
  margin-bottom: 2rem;
  font-size: 24px;
}
.culture-inner-para {
  font-size: 18px;
  /* color: darkgrey; */
}
.freelancers {
  height: 100%;
  /* min-height: 81vh; */
  background: #ffe867;
  background-repeat: no-repeat;
  background-size: cover;
}
.freelancers > svg {
  bottom: 0;
  width: 100%;
  height: 4vw;
}
.freelancers-content,
.interns-content {
  min-height: 50vh;
}
.work {
    padding: 0 200px;
}
.work-content {
  display: block;
  margin-top: 5rem;
  /* min-height: 50vh !important; */
}
.freelance-inner-wrapper {
  padding: 5rem;
  /* padding-top: 15rem; */
}
.freelance-heading,
.intern-heading,
.work-heading {
  margin-bottom: 4rem;
  font-size: 36px;
}
.freelance-para,
.intern-para,
.work-para {
  font-size: 18px;
  text-align: justify;
  color: #111;
  width: 50%;
  margin: 0 auto;
  line-height: 35px;
}
.intern-inner-wrapper {
  padding: 5rem;
}
.work-inner-wrapper {
    padding-top: 10rem;
}
.intern-para {
  color: #fafafa;
}
.work-para {
  
  width: 100%;
}
</style>

