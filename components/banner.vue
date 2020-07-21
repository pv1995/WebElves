<template>
  <no-ssr>
    <div v-if="homepage">
      <section class="banner">
        <div class="wrapper-3d animated bounceInRight">
          <img src="/images/home3D.jpeg" width="100%" alt="Web Development Company">
        </div>
        <div class="banner-text text-center white-color">
          <h2>{{bannerText}}</h2>
          <h5 class="animated rubberBand">{{bannerSubText}}</h5>
          <no-ssr>
            <vue-typer
              :text="typer"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="50"
              :pre-erase-delay="1000"
              :erase-delay="50"
              erase-style="backspace"
              :erase-on-complete="false"
              caret-animation="smooth"
              style="font-weight:900;text-transform:uppercase;font-size:28px;"
            ></vue-typer>
          </no-ssr>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          class="d-none"
        >
          <polygon fill="white" points="0,100 100,0 100,100"></polygon>
        </svg>
        <no-ssr>
          <vue-particles
            color="#ffdb00"
            :particleOpacity="0.7"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dedede"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push"
            style="position: absolute;
            top: 10%;
            left: 0;
            width: 100%;
            height: 60%;"
          ></vue-particles>
        </no-ssr>
      </section>
    </div>
    <div v-else>
      <section class="banner">
        <div class="row banner-row" v-if="!bannerBackground">
          <div class="col tertiary-color">
            <div class="container">
              <div class="banner-content white-color">
                <h1 class="banner-heading tertiary-color animated fadeIn delay-1s">{{bannerText}}</h1>
                <h5 class="banner-subheading animated rubberBand delay-1s">{{bannerSubText}}</h5>
                    <no-ssr>
                <vue-typer
                  :text="typer"
                  :repeat="Infinity"
                  :shuffle="false"
                  initial-action="typing"
                  :pre-type-delay="70"
                  :type-delay="70"
                  :pre-erase-delay="1000"
                  :erase-delay="70"
                  erase-style="backspace"
                  :erase-on-complete="false"
                  caret-animation="smooth"
                ></vue-typer></no-ssr>
              </div>
            </div>
          </div>
          <div class="col mob-hidden">
            <div class="banner-image-wrapper">
              <img :src="imageURL" width="100%" alt="Web Development Agency">
            </div>
          </div>
        </div>
        <div v-else class="row banner-row">
          <div class="banner-image-wrapper" style="position: absolute;width: 100%;">
            <img :src="imageURL" width="100%" alt="Web Application Development Services">
          </div>
          <div class="container">
            <div class="banner-content white-color mob-about-banner">
              <h1 class="banner-heading tertiary-color animated fadeIn delay-1s">{{bannerText}}</h1>
              <h5 class="banner-subheading animated rubberBand delay-1s">{{bannerSubText}}</h5>
                  <no-ssr>
              <vue-typer
                :text="typer"
                :repeat="Infinity"
                :shuffle="false"
                initial-action="typing"
                :pre-type-delay="70"
                :type-delay="70"
                :pre-erase-delay="1000"
                :erase-delay="70"
                erase-style="backspace"
                :erase-on-complete="false"
                caret-animation="smooth"
              ></vue-typer></no-ssr>
            </div>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          class="d-none"
        >
          <polygon fill="white" points="0,100 100,0 100,100"></polygon>
        </svg>
      </section>
    </div>
  </no-ssr>
</template>

<script>


export default {
  props: [
    "bannerText",
    "bannerSubText",
    "typerText",
    "homepage",
    "imageURL",
    "altBG",
    "bannerBackground"
  ],
  components: {
   
  },
  data() {
    return {};
  },
  computed: {
    typer() {
      if (this.typerText) {
        return this.typerText;
      } else {
        return [];
      }
    },
    bannerClass() {
      return this.background;
    }
  }
};
</script>
<style>
.banner > svg {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5vw;
}

.banner {
  height: 75vh;
  background: #232931;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
}
.banner-alternate {
  height: 100vh;
  background: url("~assets/alternateBG.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.wrapper-3d {
  position: relative;
  top: 65px;
  width: 35%;
  margin: 0 auto;
}
.banner-image-wrapper {
  height: 650px;
  overflow: hidden;
}

.banner-text {
  margin-top: 10rem;
  font-size: 30px !important;
}
.banner-text > h5 {
  margin-bottom: 3rem;
}

/* Styles for vue-typer */
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }
  ,
  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer > .left {
  font-size: 28px;
}
.vue-typer .custom.char.typed {
  color: #ffe867;
}
.vue-typer .custom.char.selected {
  color: #232931;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: #ffe867;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #232931;
}

/* Vue-typer styles end  */
.banner-row {
  position: relative;
  top: 10%;
}
.banner-row > .col > .container {
  min-height: 80vh;
}
/* .banner-content {
  position: relative;
  top: 200px;
  left: 30px;
} */
.banner-subheading {
  font-size: 24px;
}
</style>

