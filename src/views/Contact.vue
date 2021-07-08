<template>
  <div>
    <landing-banner>
      <template v-slot:title>
        Got a Question? <br> <span @click="$router.push({ name: 'contact'})">Contact Us</span>
      </template>

      <template v-slot:subTitle>
        Call us on between 9am – 5pm weekdays to get FREE support.
        Alternatively, view our FAQ’s for already answered questions.
      </template>

      <template v-slot:image>
        <img :src="require('../assets/About/banner.png')" alt="Home banner image">
      </template>

      <template v-slot:main>
        <v-form ref="form" v-model="valid" class="contact-form">
          <v-row no-gutters class="form-row">
            <v-col md="6" class="left-col">
              <v-text-field v-model="name" label="Name" :rules="nameRules" outlined required/>
            </v-col>
          </v-row>

          <v-row no-gutters class="form-row">
            <v-col :md="$vuetify.breakpoint.xsOnly ? 12 : 6" cols="12" class="left-col">
              <v-text-field v-model="email" label="Email" :rules="emailRules" outlined required/>
            </v-col>

            <v-col :md="$vuetify.breakpoint.xsOnly ? 12 : 6" cols="12" class="right-col">
              <v-text-field v-model="contactNo" label="Contact no" outlined required/>
            </v-col>
          </v-row>

          <v-row no-gutters class="form-row">
            <v-textarea v-model="message" label="Enquiry" :rules="messageRules" outlined required/>
          </v-row>

          <v-btn elevation="0" color="secondary" width="200" height="42" :block="$vuetify.breakpoint.xsOnly"
                 :disabled="!valid" @click="validate">
            Submit Request
          </v-btn>
           <span style="color:red;padding-left: 20px;" v-html="demoEmailError"></span>
            <span style="color:green;padding-left: 20px;" v-html="demoEmailSuccess"></span>
        </v-form>
      </template>
    </landing-banner>

    <v-container class="faq-notice-container">
      <div class="left-imgs">
        <img :src="require('../assets/Contactus/1.jpg')">
        <img :src="require('../assets/Contactus/2.jpg')">
      </div>

      <div class="faq-content">
        <p class="faq-content__title">Still need help? Send us an email!</p>
        <p class="faq-content__desc">
          For any other questions, please write us at
          <a href = "mailto:info@recordtime.com.au">info@recordtime.com.au</a> or
          <a href="tel:0421955630">0421 955 630</a>
        </p>
      </div>

      <div class="right-imgs">
        <img :src="require('../assets/Contactus/3.jpg')">
        <img :src="require('../assets/Contactus/4.jpg')">
      </div>
    </v-container>
  </div>
</template>

<style lang="scss">
.contact-form {
  @media only screen and (max-width: 600px) {
    margin-bottom: 32px;
  }

  .form-row {
    margin-bottom: 16px;

    @media only screen and (max-width: 600px) {
      margin-bottom: 0;
    }

    @media only screen and (min-width: 600px) and (max-width: 960px) {
      padding-right: 32px;
    }

    .left-col {
      padding-right: 10px;

      @media only screen and (max-width: 960px) {
        padding-right: 0;
      }
    }

    .right-col {
      padding-left: 10px;

      @media only screen and (max-width: 960px) {
        padding-left: 0;
      }
    }
  }
}

.faq-notice-container {
  margin-top: 80px;
  @media only screen and (max-width: 600px) {
    margin-top: 24px;
    flex-direction: column;
  }

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    margin-top: 40px;
  }

  display: flex;
  justify-content: space-between;

  > div {
    height: 144px;

    @media only screen and (min-width: 600px) and (max-width: 960px) {
      height: 100px;
    }
  }

  .faq-content {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 600px) {
      max-width: unset;
    }

    &__title {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.44;
      text-align: center;
      color: $black-pearl;
      margin-bottom: 12px;
    }

    &__desc {
      font-size: 14px;
      line-height: 1.57;
      text-align: center;
      color: $black-pearl;

      a {
        color: $faux-dark-turquoise;
        text-decoration: underline;
      }
    }
  }

  .left-imgs, .right-imgs {
    img {
      height: 100%;
      object-fit: cover;
      object-position: top;

      @media only screen and (max-width: 600px) {
        width: 50%;
      }
    }
  }

  .left-imgs {
    @media only screen and (max-width: 600px) {
      margin-bottom: 20px;
    }
  }
}
</style>

<script>
// @ is an alias to /src
import LandingBanner from '@/components/LandingBanner.vue';
import axios from 'axios';

export default {
  metaInfo: {
    title: 'Contact',
    titleTemplate: 'Record Time → %s',
    meta: [
      {name: 'name', content: ''},
      {name: 'description', content: ''}
    ]
  },
  components: {
    LandingBanner
  },
  data() {
    return {
      valid: false,
      name: "",
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      contactNo: '',
      message: '',
      messageRules: [
        v => !!v || 'Enquiry is required'
      ],
      demoEmailError: '',
      demoEmailSuccess: ''
    }
  },
  methods: {
    validate() {
      this.demoEmailError = '';
      this.demoEmailSuccess = '';
      if(this.$refs.form.validate()){
        let formData = new FormData();

        formData.append('email', this.email);
        formData.append('name', this.name);
        formData.append('subject', 'Contact us');
        formData.append('contact_no', this.contactNo);
        formData.append('message',  this.message);
        formData.append('to', 'info@recordtime.com.au');
        formData.append('for', 'contact');
              
        axios.post('https://recordtimeapp.com.au/backend/api/rt-frontend/send/mail',formData).then((res) => {
          if(res.data.status){
            this.demoEmailSuccess = res.data.message;
            this.demoEmail = '';
          }else{
            this.demoEmailError = res.data.message;
          }
        })
        .catch((error) => {
          console.log(error);
        })
      }

      // Reset form & reset form validation
      // this.$refs.form.reset();
      // this.$refs.form.resetValidation();
    }
  }
}
</script>
