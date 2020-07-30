<template>
  <div>
    <landing-banner>
      <template v-slot:title>
        Record Time, Explore some of our <span>core features</span>
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
                <div>Bundy Clock</div>
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
          Our solution is suitable for a wide variety of industries,
          where paperwork and dockets are utilized. Below are some of the key features:
        </p>

        <v-row no-gutters class="feature-list-container">
          <v-col :sm="$vuetify.breakpoint.xsOnly ? 12 : 6" cols="12">
            <div class="feature-item" v-for="(featureItem, index) in featureItems" :key="index">
              <v-avatar size="74" color="primary"></v-avatar>
              <div class="feature-item-content">
                <h3 class="feature-item-content__title">{{ featureItem.title }}</h3>
                <p class="feature-item-content__desc">{{ featureItem.description }}</p>
              </div>
            </div>

            <v-btn color="primary" block elevation="0" height="50" class="text-capitalize">
              See all features now
            </v-btn>
          </v-col>

          <v-col :sm="$vuetify.breakpoint.xsOnly ? 12 : 6" cols="12" class="feature-img-container">
            <img src="https://via.placeholder.com/400x400" class="img-1">
            <img src="https://via.placeholder.com/400x400" class="img-2">
            <img src="https://via.placeholder.com/400x400" class="img-3">
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container class="organisations-container">
      <p>suitable across all industries</p>

      <h3>Over <span>100,000+</span> Organizations Rely on Record Time</h3>

      <div class="organisations-row">
        <img :src="logo" v-for="(logo, index) in organisationsLogo" :key="index">
      </div>
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
    LandingBanner, VideoModal
  },
  data() {
    return {
      mdiHeart: mdiHeart,
      mdiPlay: mdiPlay,
      mdiArrowDown: mdiArrowDown,
      featureItems: [
        {
          'imgPath': '',
          'title': 'Xero Integration',
          'description': 'Record Time allows you to easily create docket templates. ' +
              'You can design your docket to look and work exactly the way you want it. ' +
              'It is straightforward to use and can replace your business processes. ' +
              'The difficulties with getting dockets signed and storing them are a thing of the past.'
        },
        {
          'imgPath': '',
          'title': 'Xero Integration',
          'description': 'Record Time allows you to easily create docket templates. ' +
              'You can design your docket to look and work exactly the way you want it. ' +
              'It is straightforward to use and can replace your business processes. ' +
              'The difficulties with getting dockets signed and storing them are a thing of the past.'
        },
        {
          'imgPath': '',
          'title': 'Xero Integration',
          'description': 'Record Time allows you to easily create docket templates. ' +
              'You can design your docket to look and work exactly the way you want it. ' +
              'It is straightforward to use and can replace your business processes. ' +
              'The difficulties with getting dockets signed and storing them are a thing of the past.'
        },
        {
          'imgPath': '',
          'title': 'Xero Integration',
          'description': 'Record Time allows you to easily create docket templates. ' +
              'You can design your docket to look and work exactly the way you want it. ' +
              'It is straightforward to use and can replace your business processes. ' +
              'The difficulties with getting dockets signed and storing them are a thing of the past.'
        },
        {
          'imgPath': '',
          'title': 'Xero Integration',
          'description': 'Record Time allows you to easily create docket templates. ' +
              'You can design your docket to look and work exactly the way you want it. ' +
              'It is straightforward to use and can replace your business processes. ' +
              'The difficulties with getting dockets signed and storing them are a thing of the past.'
        }
      ],
      organisationsLogo: [
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400',
        'https://via.placeholder.com/400x400'
      ],
      showModal: false,
      url: ""
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
    }
  }
}
</script>
