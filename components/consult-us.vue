<template>
<no-ssr>
  <div class="consult-us-wrapper m-h-400">
    <div class="" style="padding: 150px 350px;">
      <img src="../static/images/contactus_updated.jpeg" width="100%" class="mob-hidden">
      <div class="consult-us">
        <div class="inner-consult-us">
          <h2 class="primary-color" style="font-size:32px">Transform your business with our support</h2>
          <h5 class="primary-color lato" style="font-size:24px">Contact us for a consultation</h5>
          <!-- <button @click="openModal" class="btn tertiary-bg primary-color btn-consult-us lato z-index-9990">Consult Now</button> -->
          <!-- Modal 1 -->
          <div>
            <b-btn
              v-b-modal.modal-center
              class="btn primary-color btn-consult-us lato"
            >Consult Now</b-btn>
            <!-- Modal Component -->
          </div>
        </div>
      </div>
    </div>
    <b-modal
              id="modal-center"
              header-class="text-center"
              title="Reach out to us!"
              hide-footer
              centered
              size="lg"
            >
              <form class="raleway" @submit.prevent="validatebeforeSubmit">
                <div class="form-group">
                  <label for="exampleInputName1" >Full Name</label>
                  <input
                    type="text"
                    class="form-control lato"
                    id="exampleInputName1"
                    placeholder="Enter your name"
                    v-model="fullname"
                    v-validate="'required'"
                    name="name"
                  >
                  <span
                    v-show="errors.has('name')"
                    class="help1 is-danger"
                  >{{ errors.first('name') }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    class="form-control lato"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    v-model="emailaddress"
                    v-validate="'required|email'"
                    name="email"
                  >
                  <span
                    v-show="errors.has('email')"
                    class="help1 is-danger"
                  >{{ errors.first('email') }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputNumber1">Phone Number</label>
                  <input
                    type="text"
                    class="form-control lato"
                    id="exampleInputNumber1"
                    placeholder="Enter your number"
                    v-model="phonenumber"
                    v-validate="'required'"
                    name="number"
                  >
                  <span
                    v-show="errors.has('number')"
                    class="help1 is-danger"
                  >{{ errors.first('number') }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Your Message</label>
                  <textarea
                    class="form-control lato"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter your message"
                    v-model="message"
                    v-validate="'required'"
                    name="message"
                  ></textarea>
                  <span
                    v-show="errors.has('message')"
                    class="help1 is-danger"
                  >{{ errors.first('message') }}</span>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn contact-submit">Submit</button>
                </div>
              </form>
            </b-modal>
  </div>
</no-ssr>
</template>
<script>
import db from "../firebase/firebaseInit.js";

export default {
  data() {
    return {
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
    },
    hideModal() {
      this.$root.$emit("bv::hide::modal", "modal-center");
    }
  },
  mounted() {
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
.consult-us {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  font-weight: 600;
  font-size: 30px;
  padding-left: 10px;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  z-index: 0;
}

.m-h-400 {
  height: 400px;
  overflow: hidden;
}
.consult-us-wrapper {
  position: relative;
  height: 100%;
  /* min-height: 80vh; */
}
.inner-consult-us {
  position: relative;
}
.btn-consult-us {
  font-size: 18px !important;
  border: 2px solid #232931 !important;
  border-radius: 3px;
  position: relative;
  margin-top: 20px;
  transition: 0.5s;
  width: 160px;
  outline: 0 !important;
  background: rgba(255, 232, 103, 0.2) !important;
}
.btn-consult-us:focus {
  outline: 0 !important;
}
.btn-consult-us:hover {
  background: #232931 !important;
  color: white !important;
  border: 2px solid 232931 !important;
}
.sweetalert1-button {
  border: 1px solid #232931;
  border-radius: 0;
  width: 200px;
  box-shadow: 0 2px #232931;
  outline: 0 !important;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 900;
}
.sweetalert1-button:hover {
  background-color: #ffdb00;
}
.sweet-input {
  height: 2.5rem !important;
}
.help1 {
  font-size: 12px;
  font-weight: 100;
  color: red;
}
.contact-submit {
  font-size: 16px !important;
  background: #232931;
  color: white;
  font-weight: normal;
  width: 100px;
}
</style>
