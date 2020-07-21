<template>
<div class='container-fluid' v-if="services">
    <div class="row" >
        <div class="col-sm-3 mx-auto" v-for="service in services" :key="service.id">
            <div class="flip-card flex lato align-items-center" v-if="service.name === 'E-Commerce Application Development' || service.name === 'Web Portal Development' || service.name === 'ERP Development' || service.name === 'Custom Web Development'" style="min-width:360px;width:100%">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="flip-card-front-inner">
                            <div class="flip-card-image-wrapper">
                                <img :src="service.img" width="100%" alt="Web Development Services" v-if="service.name === 'Mean Stack Development'" style="width:150px;margin-bottom:1rem">
                                <img :src="service.img" width="100%" alt="Web Development Services" v-else>
                            </div>
                            <p class="primary-color raleway card-heading heading3">{{service.name}}</p>
                            <div class="card-content-wrapper" style="width:100%">
                                <p class="card-content lato">{{service.content}}</p>
                            </div>
                            <button class="card-learnmore" @click="goToService(service.route)">Learn more <span style="padding-left:1rem"><i class="fas fa-arrow-right"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flip-card flex lato align-items-center" v-else>
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="flip-card-front-inner">
                            <div class="flip-card-image-wrapper">
                                <!-- <img :src="service.img" width="100%" alt="Web Development Services" v-if="service.name === 'Mean Stack Development'" style="width:150px;margin-bottom:1rem"> -->
                                <img :src="service.img" width="100%" alt="Web Development Services" v-if="service.name === 'SailsJS Development'" style="width:125px;margin-bottom:1.5rem">
                                <img :src="service.img" width="100%" alt="Web Development Services" v-else-if="service.name === 'MEAN Stack Development'" style="width:125px;margin:0.8rem">
                                <img :src="service.img" width="100%" alt="Web Development Services" v-else-if="service.name === 'MERN Stack Development'" style="width:175px;margin-bottom:0.5rem">
                                <img :src="service.img" width="100%" alt="Web Development Services" v-else-if="service.name === 'Ionic App Development' || service.name === 'Hybrid Application Development'" style="width:125px;margin:1rem 0">
                                <img :src="service.img" width="100%" alt="Web Development Services" v-else>
                            </div>
                            <p class="primary-color raleway card-heading heading3">{{service.name}}</p>
                            <div class="card-content-wrapper">
                                <p class="card-content lato">{{service.content}}</p>
                            </div>
                            <button class="card-learnmore" @click="goToService(service.route)">Learn more <span style="padding-left:1rem"><i class="fas fa-arrow-right"></i></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props: {
        services: {
            type: Array,
            required: true
        }
    },
  data() {
    return {
    };
  },
  methods: {
      goToService(name) {
          this.$emit('clicked', name);
      }
  }
};
</script>
<style>
/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */
.flip-card {
  background-color: transparent;
  margin-top: 80px !important;
  margin: 0 auto;
  cursor: pointer;
  width: 100%;
  height: 360px;
  width: 360px;
  /* box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); */
  /* box-shadow: 0 5px 5px -5px #333; */
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
/* .flip-card:hover {
  box-shadow: none;
} */
.flip-card-front > p {
  font-size: 20px;
  font-weight: 500;
  position: relative;
  top: 40%;
  text-transform: uppercase;
  padding: 10px 5px;
  backface-visibility: hidden;
}
.flip-card-back > p {
  font-size: 20px;
  font-weight: 800;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}
.flip-card-back > ul {
  position: relative;
}
/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  border-radius: 0.25rem;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
/* .flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
} */

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  color: black;
}
.flip-card-front-inner {
  width: 100%;
  height: 100%;
  padding: 25px;
    padding-top: 2.5rem;
}
/* .flip-card-front-inner > p,
.flip-card-back-inner > p {
  font-size: 24px;
} */
/* Style the back side */
.flip-card-back {
  padding: 15px;
  color: black;
  transform: rotateY(180deg);
  background: #ffe867;
}
.flip-card-back-inner {
  width: 100%;
  height: 100%;
  padding: 25px;
padding-top: 60px;
  border: 2px solid #111;
}
.flip-card-image-wrapper {
  padding: 2rem;
  padding-top: 0;
}
.flip-card-image-wrapper > img {
  width: 75px;
}
.card-content-wrapper {
    width: 310px;
    height: 85px;
}
.card-content {
    display: -webkit-box;
    max-width: 100%;
    height: 55px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 25px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
}
.card-heading {
    width: 85px;
    margin: 0 auto;
    margin-bottom: 1rem;
    font-size: 19px;
    border-bottom: 3px solid #ffe867;
}
.card-learnmore {
    display: inline-block;
    position: relative;
    padding: 0.5em;
    padding-top: 0.45em;
    text-decoration: none;
    font-size: 15px;
    width: 150px;
    height: 40px;
    color: #fff;
    outline: 0 !important;
    border-radius: 3px;
    background: #232931;
    cursor: pointer;
}
.card-learnmore:hover {
    background: #ffe867;
    color: #232931;
}
.heading2 {
    width: 300px;
}
.heading3 {
    width: max-content;
}
.heading4 {
    width: 200px;
}
</style>
