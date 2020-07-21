<template>
  <div>
    <Banner
      :bannerText="bannerHeading"
      :bannerSubText="bannerSubHeading"
      :altBG="background"
      :homepage="homePage"
      :imageURL="image"
    />
    <section class="locations">
      <div class="">
        <h1 class="text-center raleway office-heading">OUR OFFICES</h1>
        <div class="row offices">
          <div class="col-sm-12 col-md-4 location-card-col">
            <div class="location-card-wrapper">
              <img src="../static/images/ny-icon.jpeg" width="100%" class="ny-icon-img">
              <h4 class="city primary-color mt-2">New York</h4>
              <h6 class="country primary-color">United States</h6>
              <div class="location-card-details">
                <div class="primary-color">99 Wall Street, #511
                  <br>New York, NY - 10005
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 location-card-col">
            <div class="location-card-wrapper">
              <img src="../static/images/bangalore_icon.jpeg" width="100%">
              <h4 class="city primary-color">Bangalore</h4>
              <h6 class="country primary-color">India</h6>
              <div class="location-card-details">
                <div class="primary-color">1115, Mahaveer Maple, Brookefield
                  <br>Bangalore - 560066, KA
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4 location-card-col">
            <div class="location-card-wrapper">
              <img src="../static/images/delhi_icon.jpeg" width="100%">
              <h4 class="city primary-color">Gurgaon (NCR)</h4>
              <h6 class="country primary-color">India</h6>
              <div class="location-card-details">
                <div class="primary-color">I-601, Besttech Park View Grand Spa
                  <br>Sector-81, Gurgaon - 122004, HR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="contactus-form">
      <div class="container d-block p-4 shadow-container">
        <h2 class="form-heading text-center primary-color">Fill in the below form to get connect with us!</h2>
      <h4 class="form-subheading text-center primary-color">It becomes a lot more amazing when we get together.</h4>
        <div class="row justify-content-center">
          <div class="form-wrapper">
            <section>
              <form class="raleway" @submit.prevent="validatebeforeSubmit">
                <div class="form-group">
                  <label for="exampleInputName1" class="primary-color">Full Name</label>
                  <input
                    type="text"
                    class="form-control lato primary-color"
                    id="exampleInputName1"
                    placeholder="Enter your name"
                    v-model="fullname"
                    v-validate="'required'"
                    name="name"
                  >
                  <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" class="primary-color">Email address</label>
                  <input
                    type="email"
                    class="form-control lato primary-color"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    v-model="emailaddress"
                    v-validate="'required|email'"
                    name="email"
                  >
                <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputNumber1" class="primary-color">Phone Number</label>
                  <input
                    type="text"
                    class="form-control lato primary-color"
                    id="exampleInputNumber1"
                    placeholder="Enter your number"
                    v-model="phonenumber"
                    v-validate="'required'"
                    name="number"
                  >
                  <span v-show="errors.has('number')" class="help is-danger">{{ errors.first('number') }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1" class="primary-color">Your Message</label>
                  <textarea
                    class="form-control lato primary-color"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter your message"
                    v-model="message"
                    v-validate="'required'"
                    name="message"
                  ></textarea>
                <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn contact-submit">Submit</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";
import Banner from "~/components/banner.vue";
import db from "../firebase/firebaseInit.js";

export default {
  components: {
    Logo,
    Banner
  },
  head () {
    return {
    title: 'Contact Us | WebElves',
    meta: [
        { hid: 'description', name: 'description', content: 'WebElves is a premier web application development company. Our team of skilled web developers, designers and mobile developers focus on delivering intuitive, innovative and engaging web and mobile applications. Request for a quote!' },
        { hid: 'keywords', name: 'keywords', content: 'web development agency, web development services, web developers, hire developers, node.js development services, react.js development services, vuejs development services, react native development, Ecommerce Website Development Company, mobile app development services, mobile app development company, cross platform app development services, hybrid mobile app development company, cms development, wordpress development services, custom software development services, contact' },
    ]
    }
  },
  data() {
    return {
      homePage: 0,
      background: "banner",
      bannerHeading: "Call us, mail us, or just drop by",
      bannerSubHeading: "Talk to us for project development, building business partnerships, staffing requirements and anything technology.",
      image: "/images/contactUs1.jpeg",
      fullname: null,
      emailaddress: null,
      phonenumber: null,
      message: null
    };
  },
  methods: {
    consultus() {
      db.collection("consultations")
        .add({
          fullname: this.fullname,
          emailaddress: this.emailaddress,
          phonenumber: this.phonenumber,
          message: this.message
        })
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          console.log("HELLOOOO");
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    showAlert() {
      this.$swal({
        title: "<h4>Thankyou for reaching out to us!</h4",
        text: "We shall get back to you at the earliest.",
        position: "center",
        showConfirmButton: true,
        confirmButtonText: "OK",
        confirmButtonClass: "sweetalert-button",
        buttonsStyling: false
      });
    },
    validatebeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.showAlert();
          this.consultus();
          this.fullname = null;
          this.emailaddress = null;
          this.phonenumber = null;
          this.message = null;
          return;
        }
      });
    }
  },
  mounted() {
  // this.highlight();
    const dict = {
      custom: {
        email: {
          required: "Please enter your e-mail address"
        },
        name: {
          required: () => "Please enter your name"
        },
        number: {
          required: () => "Please enter your number"
        },
        message: {
          required: () => "Please enter something, even a hi would do"
        }
      }
    };
    // or use the instance method
    this.$validator.localize("en", dict);
  }
};
</script>
<style>
.locations {
  min-height: 65vh;
}
.locations > .container {
  min-height: 65vh;
}
.shadow-container {
  box-shadow: 1px 1px 26px 11px rgba(201,191,191,0.67);
}
.office-heading {
  margin-top: 5rem;
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 0;
}
.offices {
  width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
}
.location-card-col {
  position: relative;
}
.location-card-wrapper {
  text-align: center;
  padding: 3rem 1rem;
  position: relative;
  transition: ease 1s;
  width: 80%;
  min-height: 310px;
  margin: 0 auto;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border: 2px solid #ffdb00;
  border-radius: 5px;
}
.location-card-wrapper > img {
  vertical-align: middle;
  border-style: none;
  height: 100px;
  width: auto;
  transition: ease-in 0.5s;
}
.location-card-wrapper > h4 {
  margin: 0;
  padding: 1rem 0;
  transition: all 0.5s;
  opacity: 1;
}
.location-card-wrapper > h6 {
  transition: all 0.5s;
  opacity: 1;
}
.location-card-wrapper:hover {
  top: -20px;
}
.location-card-wrapper:hover > .location-card-details {
  opacity: 1;
}
.location-card-details {
  /* opacity: 0; */
  position: absolute;
  padding: 1rem;
  top: 70%;
  left: 0;
  text-align: center;
  background: #fff;
  transition: padding 0.5s;
  width: 100%;
}
/* .contactus-form {
  min-height: 100vh;
  margin-bottom: 5rem;
} */
.contactus-form > container {
  text-align: left;
}
.form-wrapper {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;
}
.form-heading {
  margin-top: 1rem;
}
.form-subheading {
  font-size: 20px;
  margin-top: 1rem;
}
.contactus-form > .container {
  min-height: 80vh;
}
.contactus-form > .container > .row {
  text-align: left;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group > label {
  font-size: 18px;
}
.form-control {
  border: none;
  /* border-bottom: 1px solid #495057; */
  border-radius: 0;
  outline: 0 !important;
  height: 50px;
  background: lightgray;

}
.form-control > input {
  outline: 0 !important;
}
.contact-submit {
  border: 1px solid #232931;
  border-radius: 2px;
  width: 136px;
  height: 46px;
  font-size: 18px;
}
.contact-submit:hover {
  background-color: #ffe867;
  color: #232931;
}
.sweetalert-modal > .swal2-header > h2 {
  color: #111 !important;
}
.sweetalert-modal > .swal2-content {
  color: #111 !important;
}
.sweetalert-button {
  border: 1px solid #111;
  border-radius: 0;
  width: 100px;
  box-shadow: 0 2px #111;
  outline: 0 !important;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 900;
}
.sweetalert-button:hover {
  background-color: #ffe867;
}
.help {
  font-size: smaller;
  color: red;
}
.ny-icon-img {
    border: 2px solid !important;
    border-radius: 50% !important;
    height: 90px !important;
}
</style>


