<template>
  <v-footer class="footer-with-nav" color="transparent">
    <v-container>
      <v-layout justify-start column align-center fill-height class="app-store-banner">
        <!-- <img src="../assets/Footer/shape-1.svg" class="shape-1">
        <img src="../assets/Footer/shape-2.svg" class="shape-2">
        <img src="../assets/Footer/shape-3.svg" class="shape-3"> -->

        <p class="text-uppercase">CHECK OUT OUR MOBILE APPS</p>
        <h2>Download the Record Time App Today:</h2>

        <div class="store-logo-container">
          <a class="google" @click="goToAppleAppStore">
            <img src="../assets/Footer/apple_logo.png" alt="Apple Store Logo">
            <div class="text-wrapper">
              <p>Download on the</p>
              <p>App Store</p>
            </div>
          </a>

          <a class="apple" @click="goToGoogleAppStore">
            <img src="../assets/Footer/google_play_logo.png" alt="Google Play Store Logo">
            <div class="text-wrapper">
              <p>Get it on</p>
              <p>App Store</p>
            </div>
          </a>
        </div>

        <div class="devices-container">
          <img src="../assets/Footer/how-it-works.png" alt="Record time docketing system">

          <div class="btn-container">
            <p>What is Record TIME?</p>

            <div class="play-btn-container">
              <img src="../assets/Footer/btn-blur.svg" alt="Background blur">

              <v-btn fab color="accent" @click="showModal = true">
                <v-icon dark>{{ mdiPlay }}</v-icon>
              </v-btn>
            </div>
          </div>
        </div>
      </v-layout>

      <v-row no-gutters class="sitemap-row" :class="$vuetify.breakpoint.smAndDown ? '' : 'pb-12'">
        <v-col sm="12" md="4" cols="12" class="tagline-col">
          <a @click="$router.push({ name: 'home'})">
            <v-img :src="require('@/assets/logo-light.jpg')" width="110"
                   :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''" height="42"/>
          </a>

          <p class="mt-4 text-justify">
            Record TIME is a mobile docketing system, that will replace your tedious paper systems
            and allow you to spend less time chasing paper docket approvals.
          </p>

          <p :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''">
            Support: <a href="tel:0421955630">0421 955 630</a>
          </p>
        </v-col>

        <v-col sm="12" md="2" :offset="$vuetify.breakpoint.xsOnly ? 0 : 1" cols="12"
               class="sitemap-col hidden-sm-and-down">
          <h3>Company</h3>

          <ul class="mt-6">
            <li @click="$router.push({ name: 'about'})">About Us</li>
            <li @click="$router.push({ name: 'faq'})">FAQ</li>
            <li>Our Blogs</li>
          </ul>
        </v-col>

        <v-col sm="12" md="2" cols="12" class="sitemap-col hidden-sm-and-down">
          <h3>Resources</h3>

          <ul class="mt-6">
            <li @click="$router.push({ name: 'contact'})">Contact Us</li>
            <li @click="link('https://recordtime.com.au/terms-of-use')">Terms of Use</li>
            <li @click="link('https://recordtime.com.au/license-agreement')">License Agreement</li>
            <li @click="link('https://help.recordtime.com.au/hc/en-us/categories/360000153516-How-to-use-the-website')">How To's</li>
          </ul>
        </v-col>

        <v-col sm="12" md="3" cols="12" class="sitemap-col hidden-sm-and-down">
          <h3>Our Address</h3>

          <p class="mt-6">
            ABN: 99 604 582 649 | Unit 5, 9 Beaconsfield Street Fyshwick ACT 2609 Support: 0421 955 630
          </p>

          <div class="mt-10">
            <v-hover v-slot:default="{ hover }">
              <v-avatar size="40" @click="link('https://www.facebook.com/recordtimeapp')">
                <v-icon :color="hover ? '#00c8d8' : '#8298a8'" size="30">{{ mdiFacebook }}</v-icon>
              </v-avatar>
            </v-hover>
            <v-hover v-slot:default="{ hover }">
              <v-avatar size="40" class="mx-4" @click="link('https://www.instagram.com/recordtimeapp')">
                <v-icon :color="hover ? '#00c8d8' : '#8298a8'" size="30">{{ mdiInstagram }}</v-icon>
              </v-avatar>
            </v-hover>
            <v-hover v-slot:default="{ hover }">
              <v-avatar size="40" @click="link('https://twitter.com/recordtimeappau')">
                <v-icon :color="hover ? '#00c8d8' : '#8298a8'" size="30">{{ mdiTwitter }}</v-icon>
              </v-avatar>
            </v-hover>
            <v-hover v-slot:default="{ hover }" style="margin-left: 10px;">
              <v-avatar size="40" @click="link('https://www.youtube.com/channel/UCXq1gBEIy4P4FXjYf9ZLd-w/featured')">
                <v-icon :color="hover ? '#00c8d8' : '#8298a8'" size="30">{{ mdiYoutube }}</v-icon>
              </v-avatar>
            </v-hover>
          </div>
        </v-col>

        <!-- Mobile only accordions -->
        <v-col sm="12" md="3" cols="12" class="sitemap-col hidden-md-and-up">
          <v-expansion-panels flat>
            <v-expansion-panel>
              <v-expansion-panel-header :expand-icon="mdiPlus" class="pl-0">
                Company
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li @click="$router.push({ name: 'about'})">About Us</li>
                  <li @click="$router.push({ name: 'faq'})">FAQ</li>
                  <li>Our Blogs</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header :expand-icon="mdiPlus" class="pl-0">
                Resources
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <ul>
                  <li @click="$router.push({ name: 'contact'})">Contact Us</li>
                  <li @click="link('https://recordtime.com.au/terms-of-use')">Terms of Use</li>
                  <li @click="link('https://recordtime.com.au/license-agreement')">License Agreement</li>
                  <li @click="link('https://help.recordtime.com.au/hc/en-us/categories/360000153516-How-to-use-the-website')">How To's</li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel>
              <v-expansion-panel-header :expand-icon="mdiPlus" class="pl-0">
                Our Address
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p>
                  ABN: 99 604 582 649 | Unit 5, 9 Beaconsfield Street Fyshwick ACT 2609 Support: 0421 955 630
                </p>

                <div :class="$vuetify.breakpoint.smAndDown ? 'text-center' : 'mt-10'">
                  <v-avatar size="40" @click="link('https://www.facebook.com/recordtimeapp')">
                    <v-icon color="#8298a8" size="30">{{ mdiFacebook }}</v-icon>
                  </v-avatar>
                  <v-avatar size="40" class="mx-4" @click="link('https://www.instagram.com/recordtimeapp')">
                    <v-icon color="#8298a8" size="30">{{ mdiInstagram }}</v-icon>
                  </v-avatar>
                  <v-avatar size="40" @click="link('https://twitter.com/recordtimeappau')">
                    <v-icon color="#8298a8" size="30">{{ mdiTwitter }}</v-icon>
                  </v-avatar>
                  <v-avatar size="40" @click="link('https://www.youtube.com/channel/UCXq1gBEIy4P4FXjYf9ZLd-w/featured')" style="margin-left: 10px;">
                    <v-icon color="#8298a8" size="30">{{ mdiYoutube }}</v-icon>
                  </v-avatar>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <v-row no-gutters class="copyright-row pt-4">
        <v-col cols="12" sm="12" md="6">
          © 2015-2020 Record Time Pty Ltd. All rights reserved.
        </v-col>

        <v-col cols="12" sm="12" md="6">Privacy Policy</v-col>
      </v-row>
    </v-container>

    <video-modal v-if="showModal" @showModal="transitionend" url="https://www.youtube.com/embed/62kV7CIU_F4"/>
  </v-footer>
</template>

<style lang="scss">
.footer-with-nav {
  margin-top: 80px;

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }

  .app-store-banner {
    @media only screen and (max-width: 600px) {
      height: 570px;
      padding: 30px 0;
      position: relative;
      width: 100vw;
      left: -28px;
    }

    height: 480px;
    padding: 42px 0;
    margin-bottom: 65px;
    background-color: $black-pearl;
    position: relative;
    overflow: hidden;

    > img.shape-1 {
      position: absolute;
      transform: translateY(-45%);
      left: 0;
    }

    > img.shape-2 {
      position: absolute;
      transform: translateX(-20%) translateY(20%);
      bottom: 0;
      left: 0;
    }

    > img.shape-3 {
      position: absolute;
      transform: translateX(20%) translateY(10%);
      bottom: 0;
      right: 0;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }

    > p {
      color: $faux-alice-blue;
      opacity: 0.4;
      font-size: 16px;
      letter-spacing: 4px;
      margin-bottom: 10px;
      text-align: center;

      @media only screen and (max-width: 600px) {
        font-size: 12px;
        letter-spacing: 3px;
      }
    }

    h2 {
      font-size: 32px;
      font-weight: bold;
      color: $faux-alice-blue;
      padding-bottom: 34px;

      @media only screen and (max-width: 600px) {
        font-size: 26px;
        width: 70%;
        text-align: center;padding-bottom: 15px;
      }
    }

    .store-logo-container {
      display: flex;

      @media only screen and (max-width: 600px) {
        flex-direction: column;
      }

      .apple {
        display: flex;
        border: solid 1.3px $faux-alice-blue;
        padding: 11px 15px 9px 15px;
        border-radius: 7px;
        cursor: pointer;
        height: 60px;

        &:hover, &:focus {
          border: solid 1.3px $faux-dark-turquoise;
        }

        img {
          width: 30px;
          height: 34px;
        }

        div.text-wrapper {
          padding-left: 10px;
          padding-top: 2px;

          p {
            color: #ffffff;
            margin: 0;

            &:nth-of-type(1) {
              font-size: 8px;
              text-transform: uppercase;
            }

            &:nth-of-type(2) {
              font-size: 22px;
              line-height: 0.9;
            }
          }
        }
      }

      .google {
        display: flex;
        border: solid 1.3px $faux-alice-blue;
        padding: 11px 15px 9px 15px;
        border-radius: 7px;
        margin-right: 16px;
        cursor: pointer;
        height: 60px;

        &:hover, &:focus {
          border: solid 1.3px $faux-dark-turquoise;
        }

        @media only screen and (max-width: 600px) {
          margin-right: 0;
          margin-bottom: 20px;
        }

        @media only screen and (min-width: 600px) and (max-width: 768px) {
          margin-bottom: 0;
        }

        img {
          width: 27px;
          height: 34px;
        }

        div.text-wrapper {
          padding-left: 10px;
          padding-top: 2px;

          p {
            color: #ffffff;
            margin: 0;

            &:nth-of-type(1) {
              font-size: 8px;
            }

            &:nth-of-type(2) {
              font-size: 20px;
              line-height: 0.9;
            }
          }
        }
      }
    }

    .devices-container {
      width: 60%;
      height: 90%;
      position: relative;

      @media only screen and (max-width: 600px) {
        width: 100%;
        max-height: 260px;
        transform: translateY(40px);
      }

      @media only screen and (min-width: 1904px) {
        width: 50%;
        height: 100%;
      }

      & > img {
        height: 100%;
        width: 100%;
        background-position: top;
        background-size: contain;
        background-repeat: no-repeat;
        position: relative;
        left: -30px;

        //@media only screen and (max-width: 600px) {
        //  max-height: 260px;
        //}
      }

      .btn-container {
        position: absolute;
        top: 130px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;

        @media only screen and (max-width: 768px) {
          top: 80px;
        }

        p {
          font-size: 18px;
          line-height: 1.44;
          text-align: center;
          color: $black-pearl;
          position: relative;
          z-index: 1;
        }

        .play-btn-container {
          position: relative;
          width: 100%;
          height: 100%;
          transform: translateY(-40%);

          img {
            position: relative;
          }

          button.v-btn {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
        }
      }
    }
  }

  .sitemap-row {
    border-bottom: 1px solid $whisper;

    .tagline-col {
      > p {

        &:nth-of-type(1) {
          color: $black-pearl;
          line-height: 1.71;
          font-size: 14px;
        }

        &:nth-of-type(2) {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.63;
          color: $black-pearl;
        }
      }
    }

    .sitemap-col {
      h3 {
        font-size: 18px;
        font-weight: 600;
        color: $black-pearl;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          font-size: 14px;
          line-height: 2.14;
          color: $faux-roman-silver;
          text-decoration: underline;
          cursor: pointer;

          &:hover {
            color: $faux-dark-turquoise;
          }
        }
      }

      p {
        font-size: 14px;
        line-height: 1.71;
        color: $faux-roman-silver;
      }

      .v-expansion-panels {
        .v-expansion-panel {
          &:nth-of-type(3) {
            button.v-expansion-panel-header {
              border: none;
            }
          }

          button.v-expansion-panel-header {
            border-bottom: 1px solid $whisper;
            font-size: 16px;
            font-weight: 600;
            color: $black-pearl;
          }

          .v-expansion-panel-content {
            .v-expansion-panel-content__wrap {
              padding: 16px 0;

              ul {
                padding: 0;
                text-align: center;

                li {
                  display: inline-flex;
                  padding: 0 16px;
                }
              }
            }
          }
        }
      }
    }
  }

  .copyright-row {
    div[class*="col"] {
      font-size: 14px;
      font-weight: 500;
      color: $faux-roman-silver;

      &:nth-of-type(2) {
        text-align: right;
      }
    }

    @media only screen and (max-width: 768px) {
      div[class*="col"] {
        font-size: 12px;
        text-align: center;

        &:nth-of-type(2) {
          padding-top: 16px;
          text-align: center;
        }
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
import {mdiFacebook , mdiGoogle, mdiInstagram, mdiTwitter, mdiPlus, mdiPlay, mdiYoutube} from '@mdi/js';
import VideoModal from '@/components/VideoModal.vue';


export default {
  components: {
    VideoModal
  },
  data() {
    return {
      mdiFacebook: mdiFacebook,
      mdiInstagram: mdiInstagram,
      mdiTwitter: mdiTwitter,
      mdiPlus: mdiPlus,
      mdiPlay: mdiPlay,
      mdiGoogle: mdiGoogle,
      mdiYoutube: mdiYoutube,
      showModal: false
    }
  },
  methods: {
    goToGoogleAppStore() {
      window.open('https://play.google.com/store/apps/details?id=com.webtecsolutions.recordtimeapp', '_blank');
    },
    goToAppleAppStore() {
      window.open('https://itunes.apple.com/au/app/record-time/id971035780', '_blank');
    },
    transitionend() {
      this.showModal = false;
    },
    link(link){
      window.open(link, '_blank');
    }
  }
}
</script>
