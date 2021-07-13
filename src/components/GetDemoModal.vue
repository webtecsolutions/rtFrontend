<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <v-card elevation="0" flat tile width="100%" height="100%">
      <v-toolbar dark color="secondary" flat tile>Request a Demo
        <v-spacer/>
        <v-btn icon dark @click="dialog = false">
          <v-icon @click="closeModal">{{mdiClose}}</v-icon>
        </v-btn>
      </v-toolbar>

        <div class="email-input-container" style="position: relative;text-align: center;">
            <br>
            <div class="demoField">
                <div class="form-group">
                    <v-text-field filled background-color="#d4d4d4" v-model="demoEmail" clearable flat height="55" solo placeholder="Email Address"/>
                    <span style="color:red" v-html="demoEmailError"></span>
                </div>
                <div class="form-group">
                    <v-text-field filled background-color="#d4d4d4" v-model="name" clearable flat height="55" solo placeholder="Name"/>
                    <span style="color:red" v-html="nameError"></span>
                </div>
                <div class="form-group">
                    <v-text-field filled background-color="#d4d4d4" v-model="phoneNumber" clearable flat height="55" solo placeholder="Phone Number"/>
                    <span style="color:red" v-html="phoneNumberError"></span>
                </div>
                <div class="form-group">
                    <v-text-field filled background-color="#d4d4d4" v-model="company" clearable flat height="55" solo placeholder="Company Name"/>
                    <span style="color:red" v-html="companyError"></span>
                </div>
                <v-btn height="56" class="get-demo-btn" tile color="primary" @click="getDemo()">
                    Get Demo Now
                </v-btn>
            </div>
        </div>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
    .video-container {
        height: calc(100% - 66px);
        width: 100%;
    }

    .demoField{
        width: 30%;
        margin: auto;
    }

    @media only screen and (max-width: 600px) {
        .demoField{
            width: 90%;
        }
    }
</style>

<script>
// @ is an alias to /src
import {mdiClose} from '@mdi/js';
import axios from 'axios';

export default {
  data() {
    return {
        mdiClose: mdiClose,
        dialog: true,
        name: '',
        phoneNumber: '',
        company: '',
        demoEmailError: '',
        nameError: '',
        phoneNumberError: '',
        companyError: ''
    }
  },
  props: {
    url: {
      type: String,
      default: ""
    },
    demoEmail:{
      type: String,
      default: ""
    }
  },
  methods: {
    closeModal() {
      this.$emit('getDemoModalClose', false);
    },
    getDemo(){
        this.demoEmailError = '';
        this.nameError = '';
        this.phoneNumberError = '';
        this.companyError = '';
        var errorStatus = false;
        if(this.demoEmail == ''){
            this.demoEmailError = "Enter your email address first.";
            errorStatus = true;
        }
        if(this.name == ''){
            this.nameError = "Enter your name first.";
            errorStatus = true;
        }
        if(this.phoneNumber == ''){
            this.phoneNumberError = "Enter your phone number first.";
            errorStatus = true;
        }
        if(this.company == ''){
            this.companyError = "Enter your company Name first.";
            errorStatus = true;
        }
        if(errorStatus){
            return;
        }

        let formData = new FormData();
        formData.append('email', this.demoEmail);
        formData.append('name', this.name);
        formData.append('contact_no', this.phoneNumber);
        formData.append('company', this.company);
        formData.append('subject', 'New Demo Request.');
        formData.append('message',  this.demoEmail + ' has requested a demo.');
        formData.append('to', 'info@recordtime.com.au');
                
        axios.post('https://recordtimeapp.com.au/backend/api/rt-frontend/send/mail',formData).then((res) => {
          if(res.data.status){
            this.demoEmailSuccess = res.data.message;
            this.demoEmail = '';
            this.name = '';
            this.phoneNumber = '';
            this.company = '';
            this.$emit('demoResponse', res.data.message);
            this.closeModal();
          }else{
            this.demoEmailError = res.data.message;
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>
