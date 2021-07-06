<template>
  <div>
    <landing-banner>
      <template v-slot:title>
        Developed For the <span>Construction Industry</span>
      </template>

      <template v-slot:subTitle>
        Record TIME was born out of the Civil Industry in order to improve the docketing process. It was initially used for docketing and remote approvals of dockets. Today, Record TIME has grown into a management platform that any industry can use.
      </template>

      <template v-slot:image>
        <img :src="require('../assets/About/banner.png')" alt="Home banner image">
      </template>

      <template v-slot:main>
        <secondary-btn-row @firstBtnClicked="firstBtnClicked" @secondBtnClicked="secondBtnClicked"/>

        <p class="customers-container-prefix">
          +1.000 people around the world using Record Time app
        </p>
        <div class="customers-container" :style="{ 'width': landingBannerContainerWidth + 'px' }">
          <img v-for="(path, index) in clientLogoPaths"
               :src="require('../assets/About/' + path)"
               :key="index" :alt="'Customer logo ' + index">
        </div>
      </template>
    </landing-banner>

    <div class="features-about-section">
      <v-container class="features-container">
        <p>Complete Docketing Solution</p>

        <h2>Why Record TIME?</h2>

        <p>
          Record TIME is more than a docketing app. This powerful management system will allow you to create
          <span>Pre-start checklists, WH&S Safety Checklists, Timesheets, Proof of Delivery</span> 
          and much more. Our application is suitable for a wide variety of usage across all industries where paper docket approvals are needed.
        </p>

        <div class="checklist-row">
          <div class="checklist-col">
            <v-avatar size="24" color="primary">
              <v-icon size="12" color="white">{{ mdiCheck }}</v-icon>
            </v-avatar>
            <p>Flexible & Adaptable</p>
          </div>
          <div class="checklist-col">
            <v-avatar size="24" color="primary">
              <v-icon size="12" color="white">{{ mdiCheck }}</v-icon>
            </v-avatar>
            <p>Easy to Use</p>
          </div>
          <div class="checklist-col">
            <v-avatar size="24" color="primary">
              <v-icon size="12" color="white">{{ mdiCheck }}</v-icon>
            </v-avatar>
            <p>Industry Proven</p>
          </div>
        </div>

        <h2>THE RECORD TIME JOURNEY</h2>
        <div class="features-row">
          <img src="../assets/About/ipadnmobile.png">
          <div class="text-section">
            <p>1. Birth of Record Time</p>
            <h3>2014</h3>
            <p>
              The first version of Record TIME was released in 2014. It was a prototype that we used to understand the needs and wants of our customers. We spoke to over 100+ Companies from different industries such as plumbing, concreting, earthworks and civil engineers to test our prototype
            </p>
          </div>
        </div>

        <div class="features-row">
          <div class="text-section">
            <p>2. Record Time Re-Launched</p>
            <h3>2018</h3>
            <p>
              Record TIME re-launches with a key feature: The Modular Form / Docket capability. This key innovation allowed us to replicate any forms into its digital equivalent. Further, armed with our market research, we released highly demanded features such as the bundy clock and job management tools.
            </p>
          </div>
          <img src="../assets/About/laptop.png">
        </div>

        <div class="features-row">
          <img src="../assets/About/ipadonly.png">
          <div class="text-section">
            <p>3. Record Time Today</p>
            <h3>App Used by Thousands</h3>
            <p>
             Record TIME has now evolved into a fully fledged docketing and job management system. It is used everyday by thousands of users across the construction industry. It is constantly evolving and the features that we build/release are features that customers want.
            </p>
          </div>
        </div>
      </v-container>
    </div>
    <video-modal v-if="showModal" @showModal="transitionend" url="https://www.youtube.com/embed/62kV7CIU_F4"/>
  </div>
</template>

<style lang="scss">
.customers-container-prefix {
  font-size: 14px;
  line-height: 1.86;
  color: $faux-roman-silver;
}

.customers-container {
  position: relative;
  display: flex;
  transform: translateY(-40px);

  img {
    height: 144px;
    min-width: 10px;
    flex-grow: 1;

    @media only screen and (max-width: 600px) {
      object-fit: cover;
      object-position: top;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
}

.features-about-section {
  background-color: $alice-grey;
  margin-top: 110px;

  @media only screen and (max-width: 600px) {
    margin-top: 20px;
  }

  .features-container {
    padding-top: 40px;

    & > p {
      &:nth-of-type(1) {
        opacity: 0.3;
        letter-spacing: 4px;
        text-align: center;
        color: $black-pearl;
        margin: 0;
        padding-top: 0;
        text-transform: uppercase;
        padding-bottom: 10px;
      }

      &:nth-of-type(2) {
        font-size: 18px;
        line-height: 1.44;
        text-align: center;
        color: $faux-roman-silver;
        margin-top: 16px;

        span {
          color: $black-pearl;
        }

        @media only screen and (max-width: 600px) {
          font-size: 14px;
          line-height: 1.86;
        }
      }
    }

    & > h2 {
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      color: #021222;
    }

    .checklist-row {
      display: flex;
      justify-content: center;
      padding-top: 40px;
      padding-bottom: 24px;
      border-bottom: 1px solid $faux-sw-paint;
      margin-bottom: 50px;
      @media only screen and (max-width: 600px) {
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 0;
        flex-direction: column;
      }

      .checklist-col {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
        margin: 0 44px;
        @media only screen and (max-width: 600px) {
          width: unset;
          margin: 0 0 34px 0;
        }

        p {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.56;
          text-align: center;
          color: $black-pearl;
          margin-top: 8px;
        }
      }
    }

    .features-row {
      display: flex;
      justify-content: center;
      align-items: stretch;
      height: 308px;
      margin-bottom: 80px;

      @media only screen and (max-width: 600px) {
        flex-direction: column;
        height: unset;
        display: block;
        margin-bottom: 45px;

        img {
          height: 190px;
          width: 100%;
          padding-top: 34px;
        }

        &:nth-of-type(1) {
          img {
            padding-left: 20px;
          }
        }

        &:nth-of-type(2) {
          margin-bottom: 0;

          img {
            padding-right: 20px;
          }
        }

        &:nth-of-type(3) {
          img {
            padding-left: 20px;
          }
        }

        .text-section {
          margin-top: 34px;
          align-items: center;
          max-width: unset;

          p {
            text-align: justify;

            &:nth-of-type(2) {
              padding-bottom: 24px !important;
            }
          }

          h3 {
            padding-bottom: 16px;
          }
        }
      }

      img {
        height: 100%;
      }

      .text-section {
        max-width: 370px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media only screen and (max-width: 600px) {
          max-width: unset;
        }

        * {
          margin: 0;
          padding: 0;
        }

        p {
          &:nth-of-type(1) {
            font-size: 14px;
            letter-spacing: 1px;
            color: $faux-dark-turquoise;
            padding: 6px;
          }

          &:nth-of-type(2) {
            opacity: 0.5;
            font-size: 14px;
            line-height: 1.57;
            color: $black-pearl;
            padding-bottom: 30px;
          }
        }

        h3 {
          font-size: 24px;
          font-weight: bold;
          color: $black-pearl;
          padding-bottom: 30px;
        }

        a {
          font-size: 16px;
          line-height: 1.5;
          color: $black-pearl;
          padding-bottom: 3px;
          border-bottom: 1px solid $black-pearl;
          width: fit-content;

          &:hover, &:focus {
            color: $faux-dark-turquoise;
            border-bottom: 1px solid $faux-dark-turquoise;
          }
        }
      }
    }

  }
}
</style>

<script>
// @ is an alias to /src
import LandingBanner from '@/components/LandingBanner.vue';
import SecondaryBtnRow from '@/components/SecondaryBtnRow1.vue';
import {mdiCheck} from '@mdi/js';
import bannerImage from '@/assets/About/banner.png';
import VideoModal from '@/components/VideoModal.vue';

export default {
  metaInfo: {
    title: 'About',
    titleTemplate: 'Record Time → %s',
    meta: [
      {name: 'name', content: ''},
      {name: 'description', content: ''}
    ]
  },
  components: {
    LandingBanner, SecondaryBtnRow, VideoModal
  },
  data() {
    return {
      testimonialWindow: 0,
      mdiCheck: mdiCheck,
      clientLogoPaths: [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg'
      ],
      landingBannerContainerWidth: 0,
      bannerImage: bannerImage,
      showModal: false
    }
  },
  mounted() {
    if (document.getElementsByClassName("landing-banner-container").length > 0) {
      this.landingBannerContainerWidth =
          document.getElementsByClassName("landing-banner-container")[0].clientWidth;
    }
  },
  computed: {
    computedTestimonials() {
      let result = [];
      if (this.$vuetify.breakpoint.lgAndUp) {
        result = this.chunkArray(this.testimonials, 3);
      } else if (this.$vuetify.breakpoint.mdOnly) {
        result = this.chunkArray(this.testimonials, 3);
      } else if (this.$vuetify.breakpoint.smOnly) {
        result = this.chunkArray(this.testimonials, 2);
      } else if (this.$vuetify.breakpoint.xsOnly) {
        result = this.chunkArray(this.testimonials, 1);
      }
      return result;
    }
  },
  methods: {
    firstBtnClicked() {
    },
    secondBtnClicked() {
      this.showModal = true;
    },
    transitionend() {
      this.showModal = false;
    }
  }
}
</script>
