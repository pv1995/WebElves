<template>
    <div class="request-quote">
        <section class="contactus-form">
      <div class="container d-block p-4 shadow-container">
        <h2 class="form-heading request-heading text-left primary-color">Get a Quote</h2>
      <h4 class="form-subheading request-subheading text-left primary-color">Fill in the below form to get connect with us</h4>
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
                    class="form-control lato primary-color request-textarea"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter your message"
                    v-model="message"
                    v-validate="'required'"
                    name="message"
                  ></textarea>
                <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
                </div>
                <div class="text-center submit-wrapper">
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
export default {
    data() {
        return {
            fullname: null,
            emailaddress: null,
            phonenumber: null,
            message: null
        }
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
    }
}
</script>
<style scoped>
.request-quote {
  margin-top: 65px;
  padding-top: 4rem;
}
.shadow-container {
  box-shadow: 1px 1px 26px 11px rgba(201,191,191,0.67);
}
.form-wrapper {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;
}
.form-heading {
  margin-top: 1rem;
  margin-left: 4rem;
  padding-bottom: 5px;
  border-bottom: 3px solid #ffe867;
  width: 230px
}
.form-subheading {
  font-size: 20px;
  margin-top: 1rem;
  margin-left: 4rem;
}
.contactus-form > .container {
  min-height: 80vh;
}
.contactus-form > .container > .row {
  width: 100%;
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
}
.submit-wrapper {
  margin-top: 2rem;
}
.request-textarea {
  min-height: 120px;
}
.help {
  font-size: 12px;
  font-weight: 100;
  color: red;
}
</style>
