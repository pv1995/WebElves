<template>
  <no-ssr>
    <footer class="footer-wrapper primary-bg tertiary-color">
      <div class="container-fluid">
        <div class="row align-items-end">
          <div class="col-6 footer-logo-col">
            <h4 class="footer-about-heading">About Us</h4>
            <!-- <div class="footer-logo-wrapper">
              <img src="../static/images/web_elves_logo.png" class="footer-logo" alt="webelves">
            </div> -->
            <div class="webelves-caption">
              <span
                style="font-size:16px;"
              >We are a digital strategy consulting boutique that leads digital transformations for global brands, leading consultancies, startups, fortune 500s and governments.</span>
            </div>
            <div class="mail">
              <a href="mailto:contact@webelves.co" class="link tertiary-color">
                <h5 class="point tertiary-color">contact@webelves.co</h5>
              </a>
              <a href="tel:+14242314438" class="link tertiary-color">
                <h5 class="point tertiary-color india"><span><img src="/images/india.jpeg" class="flag-img" alt="Web Application Development Services"/></span>+91-956-004-2308</h5>
              </a>
              <a href="tel:+91-8217859825" class="link tertiary-color">
                <h5 class="point tertiary-color india"><span><img src="/images/india.jpeg" class="flag-img" alt="React.js Development Services"/></span>+91-821-785-9825</h5>
              </a>
            </div>
          </div>
          <div class="col-4 footer-logo-col">
            <h4 class="footer-about-heading">Quick Links</h4>
            <div class="quick-links">
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='web-application-development' class="quick-link-btn">
                  Web Application Development
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='mobile-app-development' class="quick-link-btn">
                  Mobile Application Development
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='react-native-development' class="quick-link-btn">
                React Native Development
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='ecommerce-development' class="quick-link-btn">
                E-commerce Application Development
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='hybrid-app-development' class="quick-link-btn">
                Hybrid App Development
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='erp-development' class="quick-link-btn">
                ERP Development
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='digital-marketing' class="quick-link-btn">
                Digital Marketing
                </router-link>
              </b-button>
              <!-- <b-button variant="link" class="quick-link-btn text-left">Cross Platform App Development</b-button> -->
            </div>
          </div>
          <div class="col-2 footer-logo-col company-heading-wrapper text-left">
            <h4 class="footer-about-heading">Company</h4>
            <div class="quick-links">
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='contactus' class="quick-link-btn">
                Contact Us
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='careers' class="quick-link-btn">
                Careers
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='blogs' class="quick-link-btn">
                Blogs
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='aboutus' class="quick-link-btn">
                About Us
                </router-link>
              </b-button>
              <b-button variant="link" class="quick-link-btn text-left">
                <router-link to='privacy-policy' class="quick-link-btn">
                Privacy Policy
                </router-link>
              </b-button>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between social-mob">
          <div class="social-media-wrapper">
              <a target="_blank" 
              href="https://twitter.com/WebElves"
              class="no-text-decoration tertiary-color">
                <span>
                 <font-awesome-icon :icon="['fab', 'twitter']" />
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/webelves/"
                class="no-text-decoration tertiary-color"
              >
                <span>
                  <font-awesome-icon :icon="['fab', 'facebook']" />
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/webelves/?hl=en"
                class="no-text-decoration tertiary-color"
              >
                <span>
                  <font-awesome-icon :icon="['fab', 'instagram']" />
                </span>
              </a>
              <!-- <a target="_blank" href class="no-text-decoration tertiary-color">
                <span>
                  <font-awesome-icon :icon="['fab', 'google']" />
                </span>
              </a> -->
              <a
                target="_blank"
                href="https://www.linkedin.com/company/webelves/"
                class="no-text-decoration tertiary-color"
              >
                <span>
                  <font-awesome-icon :icon="['fab', 'linkedin']" />
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.pinterest.com/webelves/"
                class="no-text-decoration tertiary-color"
              >
                <span>
                  <font-awesome-icon :icon="['fab', 'pinterest']" />
                </span>
              </a>
              <a
                target="_blank"
                href="https://www.tumblr.com/blog/webelves"
                class="no-text-decoration tertiary-color"
              >
                <span>
                  <font-awesome-icon :icon="['fab', 'tumblr']" />
                </span>
              </a>
            </div>
            <div class="footer-tc-wrapper mt-4">
              <span class="copyrights">© 2019 WebElves Co. Ltd. | All rights reserved | <span class="copyrights sitemap">Sitemap</span> | <span class="copyrights disclaimer" @click="goToDisclaimer">Disclaimer</span></span>
            </div>
        </div>
      </div>
    </footer>
  </no-ssr>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goToDisclaimer() {
      this.$router.push({name: 'disclaimer'});
    },
    goToPage(name) {
      this.$router.push({name: name});
    }
  }
};
</script>

<style scoped>
  .footer-about-heading {
    margin-bottom: 2rem;
  }
  .quick-links {
    width: 350px;
    display: block;
  }
  .quick-link-btn {
    font-size: 16px;
    text-decoration: none;
    color: #a5a5a5;
    width: 100%;
    padding-left: 0 !important;
  }
  .quick-link-btn:hover {
    text-decoration: underline;
  }
  .footer-logo-col {
    min-height: 400px;
  }
  .company-heading-wrapper {
    padding-left: 3rem;
  }
  .mail {
    margin-top: 5rem;
    margin-left: 18px;
  }
  .mail, .mail > a {
    color: #a5a5a5;
  }
  .mail > a {
    width: 100%;
    text-align: left;
  }
  .flag-img {
      height: 24px;
      width: 24px;
      margin-right: 10px;
  }
  .usa, .india {
    padding-top: 3px;
  }
  .sitemap, .disclaimer {
    cursor: pointer;
  }
  .sitemap:hover, .disclaimer:hover {
    text-decoration: underline;
  }
</style>


