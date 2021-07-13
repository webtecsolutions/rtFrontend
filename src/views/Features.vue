<template>
  <div>
    <landing-banner>
      <template v-slot:title>
        Explore some of our <span>core features</span>
      </template>

      <template v-slot:subTitle>
        Our Application is suitable for a wide variety of applications across all industries
        where paper docket approvals are needed. Check our Various Features.
      </template>

      <template v-slot:image>
        <img :src="require('../assets/About/banner.png')" alt="Home banner image">
      </template>

      <template v-slot:main>
        <div class="thumbnail-container">
          <div class="thumbnail-row">
            <div class="thumbnail" @click="firstThumbnailClicked">
              <v-btn fab color="accent" @click="firstThumbnailClicked">
                <v-icon dark>{{ mdiPlay }}</v-icon>
              </v-btn>
              <img :src="require('../assets/Features/thumb1.png')">
              <div class="thumbnail-action">
                <div>Bundy Clock</div>
                <div>
                  <v-icon color="error" size="12">{{ mdiHeart }}</v-icon>
                  <span>1,453</span>
                </div>
              </div>
            </div>

            <div class="thumbnail" @click="secondThumbnailClicked">
              <v-btn fab color="accent" @click="secondThumbnailClicked">
                <v-icon dark>{{ mdiPlay }}</v-icon>
              </v-btn>
              <img :src="require('../assets/Features/thumb2.png')">
              <div class="thumbnail-action">
                <div>Remote Docketing</div>
                <div>
                  <v-icon color="error" size="12">{{ mdiHeart }}</v-icon>
                  <span>1,453</span>
                </div>
              </div>
            </div>
          </div>

          <a class="see-more-link" @click="scrollToFeaturesSection">
            <div class="icon-shadow">
              <v-icon color="primary" size="20">
                {{ mdiArrowDown }}
              </v-icon>
            </div>
            Scroll down to See More!
          </a>
        </div>
      </template>
    </landing-banner>

    <div class="features-featured-section">
      <v-container class="features-container">
        <p>Suitable across all industries</p>

        <h2>Our Popular Features</h2>

        <p>
          Below are some of the important features of Record TIME
        </p>

        <v-row no-gutters class="feature-list-container">
          <v-col :sm="$vuetify.breakpoint.xsOnly ? 12 : 6" cols="12">
            <div class="feature-item" v-for="(featureItem, index) in featureItems" :key="index">
              <v-avatar size="74" color="primary">
                <img :src="require('../assets/Features/' + featureItem.imgPath)" style="width:65%;height:65%;border-radius: unset;">
              </v-avatar>
              <div class="feature-item-content">
                <h3 class="feature-item-content__title">{{ featureItem.title }}</h3>
                <p class="feature-item-content__desc">{{ featureItem.description }}</p>
              </div>
            </div>

            <v-btn color="primary" block elevation="0" height="50" class="text-capitalize" @click="watchLink()">
              Watch an Overview of Record TIME 
            </v-btn>
          </v-col>

          <v-col :sm="$vuetify.breakpoint.xsOnly ? 12 : 6" cols="12" class="feature-img-container">
            <img :src="require('../assets/Features/docketing.png')" class="img-1">
            <img :src="require('../assets/Features/scheduler.jpg')" class="img-2">
            <img :src="require('../assets/Features/exportMapperImage.png')" class="img-3">
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="organisations-container">
      <p>suitable across all industries</p>

      <h3><span>Organisations</span> That Rely on Record TIME:</h3>

      <vueper-slides :arrows="false"
      class="no-shadow"
      :visible-slides="4"
      slide-multiple
      :gap="4"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 200: { visibleSlides: 2, slideMultiple: 2 } }" style="height: 100px;">
      <vueper-slide v-for="(item,i) in organisationsLogo" :key="i" :image="require('@/assets/Home/Testimonials/' + item)" style="height: 100px;background-size: contain;" />
    </vueper-slides>
    </v-container>

    <video-modal v-if="showModal" @showModal="transitionend" :url="url"/>
  </div>
</template>

<style lang="scss">
.thumbnail-container {
  .thumbnail-row {
    display: flex;

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .thumbnail {
      position: relative;
      width: 50%;
      max-width: 400px;
      margin-bottom: 24px;

      &:hover, &:focus {
        transform: scale(0.99);
        cursor: pointer;
      }

      @media only screen and (max-width: 600px) {
        width: unset;
        max-width: unset;
      }

      &:nth-of-type(1) {
        margin-right: 15px;

        @media only screen and (max-width: 600px) {
          margin-right: 0;
        }
      }

      &:nth-of-type(2) {
        margin-left: 15px;

        @media only screen and (max-width: 600px) {
          margin-left: 0;
        }
      }

      img {
        height: 190px;
        width: 100%;
      }

      > button.v-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-80%);
      }

      .thumbnail-action {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media only screen and (max-width: 600px) {
          margin-top: 0;
        }

        div {
          &:nth-of-type(1) {
            font-size: 18px;
            font-weight: bold;
            color: $black-pearl;
          }

          &:nth-of-type(2) {
            font-size: 14px;
            color: $faux-roman-silver;

            span.v-icon {
              transform: translateY(-2px);
            }
          }
        }
      }
    }
  }

  a.see-more-link {
    font-size: 16px;
    line-height: 1.5;
    color: $faux-dark-turquoise;
    display: flex;
    align-items: center;
    width: fit-content;

    @media only screen and (max-width: 600px) {
      margin-bottom: 34px;
      width: 100%;
      justify-content: center;
    }

    &:hover, &:focus {
      color: $black-pearl;
      text-decoration: underline;

      .icon-shadow {
        span {
          color: white !important;
          box-shadow: inset 20px 20px 0 20px $black-pearl;
        }
      }
    }

    .icon-shadow {
      border-radius: 50%;
      height: 20px;
      width: 20px;
      position: relative;
      overflow: hidden;
      margin-right: 8px;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 10;
        box-shadow: inset 20px 20px 0 20px rgba(0, 200, 216, 0.3);
      }
    }
  }
}

.features-featured-section {
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
        margin: 0 auto;
        margin-top: 16px;
        max-width: 60%;

        span {
          color: $black-pearl;
        }

        @media only screen and (max-width: 600px) {
          font-size: 14px;
          line-height: 1.86;
          max-width: unset;
        }
      }
    }

    & > h2 {
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      color: #021222;
    }

    .feature-list-container {
      margin-top: 60px;

      @media only screen and (max-width: 600px) {
        margin-top: 0;
      }

      .feature-item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 26px 0;
        border-bottom: 0.5px solid $faux-sw-paint;

        @media only screen and (max-width: 600px) {
          flex-direction: column;
        }

        .feature-item-content {
          padding-left: 23px;

          &__title {
            font-size: 24px;
            font-weight: bold;
            color: $black-pearl;
            padding-bottom: 18px;

            @media only screen and (max-width: 600px) {
              font-size: 18px;
              font-weight: bold;
              text-align: center;
              color: $black-pearl;
              padding-top: 18px;
            }
          }

          &__desc {
            font-size: 14px;
            line-height: 1.57;
            color: $black-pearl;
            text-align: justify;

            @media only screen and (max-width: 600px) {
              opacity: 0.5;
              line-height: 1.57;
              text-align: center;
              color: $black-pearl;
            }
          }
        }
      }

      .feature-img-container {
        position: relative;

        @media only screen and (max-width: 600px) {
          margin-top: 40px;
          height: 450px;
        }

        .img-1 {
          position: absolute;
          height: 30%;
          opacity: 0.9;
          top: 0;
          right: 0;

          @media only screen and (min-width: 960px) and (max-width: 1264px) {
            height: 20%;
            top: 50%;
            transform: translateY(-80%);
          }

          @media only screen and (min-width: 600px) and (max-width: 960px) {
            height: 200px;
            top: 50%;
            transform: translateY(-80%);
          }

          @media only screen and (max-width: 600px) {
            position: absolute;
            height: 180px;
            top: 0;
            right: 0;
          }
        }

        .img-2 {
          position: absolute;
          height: 40%;
          opacity: 0.9;
          top: 50%;
          right: 0;

          @media only screen and (min-width: 1904px) {
            transform: translateX(-50%) translateY(-50%);
          }

          @media only screen and (min-width: 1264px) and (max-width: 1904px) {
            transform: translateX(-70px) translateY(-50%);
          }

          @media only screen and (min-width: 960px) and (max-width: 1264px) {
            height: 25%;
            top: 50%;
            transform: translateX(-50px);
          }

          @media only screen and (min-width: 600px) and (max-width: 960px) {
            height: 300px;
            transform: translateX(-40px);
          }

          @media only screen and (max-width: 600px) {
            position: absolute;
            height: 230px;
            top: 0;
            left: 0;
            transform: translateY(100px);
          }
        }

        .img-3 {
          position: absolute;
          height: 35%;
          bottom: 0;
          right: 0;

          @media only screen and (min-width: 960px) and (max-width: 1264px) {
            height: 25%;
            top: 50%;
            transform: translateY(90%);
          }

          @media only screen and (min-width: 600px) and (max-width: 960px) {
            height: 250px;
            top: 50%;
            transform: translateY(90%);
          }

          @media only screen and (max-width: 600px) {
            position: absolute;
            height: 224px;
            bottom: 0;
            right: 0;
          }
        }
      }
    }
  }
}

.organisations-container {
  margin-top: 80px;

  p {
    opacity: 0.3;
    font-size: 16px;
    letter-spacing: 4px;
    text-align: center;
    color: $black-pearl;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: $black-pearl;
    margin-bottom: 60px;

    @media only screen and (max-width: 600px) {
      margin-bottom: 24px;
    }

    span {
      color: $faux-dark-turquoise;
    }
  }

  .organisations-row {
    display: flex;
    justify-content: space-between;
    overflow: hidden;

    @media only screen and (max-width: 600px) {
      flex-wrap: wrap;
      justify-content: space-around;
    }

    img {
      height: 50px;
      margin-right: 40px;
      flex-grow: 1;

      @media only screen and (min-width: 600px) and (max-width: 960px) {
        margin-right: 20px;
      }

      @media only screen and (max-width: 600px) {
        flex-grow: unset;
        width: 80px;
        margin-bottom: 25px;
        margin-right: 0;
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src
import LandingBanner from '@/components/LandingBanner.vue';
import VideoModal from '@/components/VideoModal.vue';
import {mdiHeart} from '@mdi/js';
import {mdiPlay} from '@mdi/js';
import {mdiArrowDown} from '@mdi/js';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  metaInfo: {
    title: 'Features',
    titleTemplate: 'Record Time → %s',
    meta: [
      {name: 'name', content: ''},
      {name: 'description', content: ''}
    ]
  },
  components: {
    LandingBanner, VideoModal,VueperSlides, VueperSlide
  },
  data() {
    return {
      mdiHeart: mdiHeart,
      mdiPlay: mdiPlay,
      mdiArrowDown: mdiArrowDown,
      featureItems: [
        {
          'imgPath': 'icon/dockets.png',
          'title': 'Digital Dockets and Forms',
          'description': 'Record Time allows you to easily create docket templates. You can design your dockets and forms to look and work exactly the way you want it. It is straightforward to use and can replace your business processes.'
        },
        {
          'imgPath': 'icon/job-scheduler.png',
          'title': 'Job Scheduler',
          'description': 'The scheduler allows you to assign jobs to your staff. Here you can add job details, comments, location of the job and assign forms and dockets that need to be filled as part of the job. You can also allocate plant and view resource utilisation.'
        },
        {
          'imgPath': 'icon/plant-manaagement.png',
          'title': 'Plant Management',
          'description': 'You can add all your plant using our plant manager. You can also tag out plants that are not currently in use or are in repair. Further, use our scheduler to assign plants to particular jobs. You can also set registration expiry reminders with our system.'
        },
        {
          'imgPath': 'icon/invoicing.png',
          'title': 'Invoicing',
          'description': 'With Record TIME, you can easily design invoice templates. Personalise your invoices by adding photographs and signatures. Use our App to easily create and send invoices on the fly. Never worry about invoicing again.'
        },
        {
          'imgPath': 'icon/bundy-clock.png',
          'title': 'Bundy Clock/Timer',
          'description': 'Our Timer allows your staff to sign in to a location and start a job timer. You can easily see where your staff are on a map and whether they have clocked. You can generate time reports and use this as a more advanced timesheet!'
        },
        {
          'imgPath': 'icon/export-maping.png',
          'title': 'Export Mapper',
          'description': 'We understand that you use other platforms to run your business. The export mapper is a simple and efficient way to generate csv data out of your forms. You can specify which fields and how your exported data should look like and import them into other platforms.'
        }
      ],
      organisationsLogo: [
        'fortify-geotech1558673676.jpg',
        'geotechnical-engineers1558673481.jpg',
        'large-concerete-pumpling1557205496.jpg',
        'alexander-symonds1557205465.jpg',
      ],
      showModal: false,
      url: ""
    }
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    }
  },
  methods: {
    firstThumbnailClicked() {
      this.showModal = true;
      this.url = "https://www.youtube.com/embed/0CZk9VPPy78";
    },
    secondThumbnailClicked() {
      this.showModal = true;
      this.url = "https://www.youtube.com/embed/UBakWdI5Qzk";
    },
    transitionend() {
      this.showModal = false;
    },
    scrollToFeaturesSection() {
      this.$vuetify.goTo(
          document.getElementsByClassName('features-featured-section')[0], {
            offset: 0
          }
      );
    },
    watchLink(){
      window.open('https://www.youtube.com/watch?v=oNZhKfyQbr8&t=1291s&ab_channel=RecordTime', '_blank');
    }
  }
}
</script>
