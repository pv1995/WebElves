<template>
  <div placeholder='..webapp'>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top main-nav cursor-pointer" id="top-nav">
      <a class="navbar-brand mob-hidden" @click="pushTo('index')" >
        <img src="../static/images/logo_shadow1 (1).jpeg" style="border-radius:50%;height:45px;width:45px;cursor:pointer" alt="Web Development Company">
      </a>
      <div class="collapse navbar-collapse container-fluid mob-hidden" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item" :class="checkPage('index')">
              <router-link class="nav-link" to='/' exact>
                Home
              </router-link>
            </li>
            <li class="nav-item service-collapse" :class="checkPage('services')">
              <router-link class="nav-link" id="service-dropdown" data-toggle="collapse" to='services'>
              Services
              </router-link>
              <div class="collapse services-dropdown" aria-labelledby="navbarDropdown" id="serviceCollapse">
                <div class="row service-row justify-content-center">
                  <div class="col-4 service-list">
                    <router-link class="text-uppercase service-head" to='web-application-development'>Web Application Development</router-link>
                    <ul class="inner-service-list">
                      <li>
                        <router-link class="nav-link" to='custom-web-applications'>
                          Custom Web Applications
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='web-portal-development'>
                          Web Portal Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='ecommerce-development'>
                        E-Commerce Application Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='erp-development'>
                        ERP Development
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link class="nav-link" to='cms-development'>
                        CMS Development
                        </router-link>
                      </li> -->
                    </ul>
                  </div>
                  <div class="col-4 service-list">
                    <router-link class="text-uppercase service-head" to='mobile-app-development'>Mobile App Development</router-link>
                    <ul class="inner-service-list" style="margin-bottom:2rem !important">
                      <li>
                        <router-link class="nav-link" to='react-native-development'>
                        React Native Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='nativescript-development'>
                        NativeScript App Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='hybrid-app-development'>
                        Hybrid App Development
                        </router-link>
                      </li>
                    </ul>
                    <router-link class="text-uppercase service-head" to='design'>UI/UX & Product Design</router-link>
                    <ul class="inner-service-list">
                      <li>
                        <router-link class="nav-link" to='design'>
                        Branding & UX Strategy
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='design'>
                        Mobile & Web Design
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='design'>
                        Graphic Design
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-4 service-list">
                    <router-link class="text-uppercase service-head" to='digital-marketing'>Digital Marketing</router-link>
                    <ul class="inner-service-list">
                      <li>
                        <router-link class="nav-link" to='digital-marketing'>
                        Search Engine Optimisation (SEO)
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='digital-marketing'>
                        Social Media Marketing (SMM)
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='digital-marketing'>
                        Social Media Optimisation (SMO)
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='digital-marketing'>
                        E-Mail & SMS Marketing
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='digital-marketing'>
                        Conversion Rate Optimisation (CRO)
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link" to='digital-marketing'>
                        Reporting
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item tech-collapse" :class="checkPage('technologies')">
              <a class="nav-link">
                Technologies
              </a>
              <div class="collapse tech-dropdown" aria-labelledby="navbarDropdown" id="techCollapse">
                <div class="row service-row tech-row justify-content-center">
                  <div class="col-6 service-list tech-list">
                    <h5 class="text-uppercase tech-head">Backend Engineering</h5>
                    <ul class="inner-service-list">
                      <li>
                        <router-link class="nav-link"  to='nodejs-development'>
                          NodeJS Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='sailsjs-development'>
                        SailsJS Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='golang-development'>
                        Golang Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='elixir-development'>
                        Elixir Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='erlang-development'>
                        Erlang Development
                        </router-link>
                      </li>
                      <!-- <li>
                        <router-link class="nav-link"  to='mongodb'>
                        MongoDB Database
                        </router-link>
                      </li> -->
                      <li>
                        <router-link class="nav-link"  to='mean-stack-development'>
                        MEAN Stack Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='mern-stack-development'>
                        MERN Stack Development
                        </router-link>
                      </li>
                    </ul>
                  </div>
                  <div class="col-6 service-list tech-list">
                    <h5 class="text-uppercase tech-head">Frontend Engineering</h5>
                    <ul class="inner-service-list">
                      <li>
                        <router-link class="nav-link"  to='vuejs-development'>
                        VueJS Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='nuxtjs-development'>
                        NuxtJS Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='quasar-framework'>
                        Quasar Framework Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='reactjs-development'>
                        ReactJS Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='angularjs-development'>
                        AngularJS Development
                        </router-link>
                      </li>
                      <li>
                        <router-link class="nav-link"  to='ionic-app-development'>
                        Ionic App Development
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item" :class="checkPage('portfolio')">
              <router-link class="nav-link"  to='portfolio'>
                Portfolio
              </router-link>
            </li>
            <li class="nav-item" :class="checkPage('contactus')">
              <router-link class="nav-link"  to='contactus'>
                Contact us
              </router-link>
            </li>
            <li class="nav-item" :class="checkPage('aboutus')">
              <router-link class="nav-link" to='aboutus'>
               Company
              </router-link>
            </li>
            <li class="nav-item" :class="checkPage('careers')">
              <router-link class="nav-link"  to='careers'>
                Careers
              </router-link>
            </li>
            <li class="nav-item" :class="checkPage('blogs')">
              <router-link class="nav-link" to='blogs'>
                Blogs
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link requestButton"  to='request-quote'>
                Request A Quote
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
     <nav class="fixed-top tertiary-bg desktop-hidden" id="scroll-nav" >
      <div class="logoWrapper navbar-brand animated fadeInLeft" id="left-top">
        <img src="../static/images/logo_shadow1 (1).jpeg"  @click="pushTo('index')" alt="Web Application Development Agency">
      </div>
      <div
        class="logoWrapper-right tertiary-bg primary-color animated fadeInRight"
        id="right-top"
        @click="showMenu"
      >
        <!--<font-awesome-icon  prefix="fab"  icon="faBuromobelexperte"  class=" top-right-icon width-100" />-->
        <img src="../static/images/hamburger.jpeg" class="top-right-icon width-100">
        <!--<i class="fab fa-buromobelexperte "></i>-->
      </div>
    </nav>
    <div id="mySidenav" class="sidenav primary-bg">
      <a href="javascript:void(0)" class="closebtn tertiary-color" @click="hideMenu">&times;</a>
          <router-link to='index' class="raleway tertiary-color">
          Home
          </router-link>
          <router-link to='services' class="raleway tertiary-color">
          Services
          </router-link>
          <a class="raleway tertiary-color" @click="pushTo('technologies')">
          Technologies
          </a>
          <router-link to='portfolio' class="raleway tertiary-color">
          Portfolio
          </router-link>
          <router-link to='contactus' class="raleway tertiary-color">
          Contact us
          </router-link>
          <router-link to='aboutus' class="raleway tertiary-color">
          Company
          </router-link>
          <router-link to='careers' class="raleway tertiary-color">
          Careers
          </router-link>
          <router-link class="raleway tertiary-color"  to='blogs'>
          Blogs
          </router-link>
          <router-link class="raleway tertiary-color"  to='request-quote'>
          Request A Quote
          </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      scrolled: false
    };
  },
  computed: {
    
  },
  methods: {
    checkPage(page) {
      var x = this.$route.name;
      if(x === page) {
        return 'active'
      }
    },
    navBarManipulator() {
      this.scrolled = window.scrollY > 100;
    },
    pushTo(url) {
       this.$router.push({ name: url });
       this.hideMenu()
    },
    showMenu() {
      document.getElementById("mySidenav").style.width = "65%";
    },
    hideMenu() {
      document.getElementById("mySidenav").style.width = "0";
    },
    goToServiceInner(name) {
      this.$router.push({name: name})
    }
  },
  mounted() {
    if(process.client){
       this.navBarManipulator();
    }
   
  },
  beforeMount() {
    window.addEventListener("scroll", this.navBarManipulator);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.navBarManipulator);
  }
};
</script>


<style>
.webleves-text {
  font-size: 20px !important;
  text-transform: none;
}
.main-nav {
  background: #ffe867;
  padding: 0 1rem;
}
.top-20 {
  margin-top: -40px !important;
}
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 999999; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

.navbar-nav {
  height: 100%;
  align-items: center;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 35px;
  color: #232931;
  display: block;
  transition: 0.3s;
  /*text-align:center;*/
  cursor: pointer;
  text-transform: uppercase;
}
.grey > a {
  color: #232931 !important;
}
.active > a {
  color: #232931 !important;
  font-weight: 900;
  border-bottom: 1px solid #232931;
  padding-bottom: 5px;
}
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  text-shadow: 2px 2px #ffe867;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

.nav-item {
    height: 100%;
    display: flex;
    align-items: center;
}

.nav-item > a {
  color: #232931 !important;
}

.dropdown:hover .dropdown-menu {
    display: block;
    border: none;
    opacity: 1;
    transition: all ease-in 0.5s;
 }
 .dropdown-menu {
   opacity: 0;
 }
 .service-row, .tech-row {
   height: 100%;
   padding-top: 3rem;
 }
 .service-row {
   width: 1200px !important;
 }
 .tech-row {
   width: 800px !important;
   padding-top: 2rem !important;
   float: right;
 }
 .service-collapse:hover .services-dropdown{
   display: block !important;
 }
 .tech-collapse:hover .tech-dropdown {
   display: block !important;
 }
 .services-dropdown, .tech-dropdown {
    position: absolute;
    left: 0;
    width: 100%;
    top: 65px;
    min-width: 100%;
    min-width: 100vw;
    height: 450px;
    padding: 5rem;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;
    transition: all ease-in 1s;
    background-color: white;
    border-bottom: 2px solid #232931;
    border-top: 2px solid #232931;
 }
 .tech-dropdown {
   height: 450px;
   background-image: url('/images/techno_header.jpeg') !important;
   background-repeat: no-repeat;
   background-size: cover;
 }
 .services-dropdown {
   background-image: url('/images/service_header.jpeg') !important;
   background-repeat: no-repeat;
   background-size: cover;
 }
 .service-list {
    min-height: 275px;
    max-height: 275px;
 }
 .tech-list {
   /* text-align: center; */
 }
 .service-head {
   font-size: 20px;
    padding: 20px;
    cursor: pointer;
    padding-bottom: 10px;
    color: #232931;
    font-weight: 600;
 }
 .tech-head {
   font-size: 20px;
    padding: 20px;
    cursor: pointer;
    padding-bottom: 10px;
 }
 .inner-service-list {
   list-style: none;
   padding-left: 20px !important;
 }
 .inner-service-list > li {
   /* padding: 5px 0; */
   cursor: pointer;
 }
 .inner-service-list > li > .nav-link {
   padding-left: 0 !important;
 }
 .inner-service-list > li:hover, .service-head:hover {
   text-decoration: underline;
 }

#navbarTogglerDemo01 {
  height: 65px !important;
}
.requestButton {
  border-radius: 3px;
  border: 1px solid #232931;
  margin-left: 1rem;
  font-size: 14px !important;
}
.requestButton:hover {
  text-shadow: none !important;
}
.logoWrapper > img {
  padding-left: 9px !important;
}
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>

