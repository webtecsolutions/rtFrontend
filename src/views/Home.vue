<template>
  <div>
    <landing-banner>
      <template v-slot:title>
        Easy <span>document solution</span> in your smartphone
      </template>

      <template v-slot:subTitle>
        Record TIME will replace your tedious paper systems and allow you to spend less time chasing paper docket
        approvals.
      </template>

      <template v-slot:image>
        <img :src="require('../assets/Home/banner.png')" alt="Home banner image">
      </template>

      <template v-slot:main>
        <secondary-btn-row/>

        <div class="client-logo-container">
          <img v-for="(path, index) in clientLogoPaths" :src="require('../assets/' + path)"
               :key="index" :alt="'Client logo ' + index">
        </div>
      </template>
    </landing-banner>

    <div class="features-home-section">
      <v-container class="features-container">
        <p>Complete Docketing Solution</p>

        <h2>Core Features of Record Time</h2>

        <div class="features-row">
          <img src="../assets/Home/laptop-docket.png">
          <div class="text-section">
            <p>1. Easy Docket Templates</p>
            <h3>Modular Dockets</h3>
            <p>
              Record Time allows you to easily create docket templates.
              You can design your docket to look and work exactly the way you want it.
            </p>
            <a>See all features</a>
          </div>
        </div>

        <div class="features-row">
          <div class="text-section">
            <p>2. Tested and Industry Approved</p>
            <h3>Industry Proven Solution</h3>
            <p>
              Record time is designed and proven in the construction industry,
              with the flexibility to be used in any industry.
              With record time you can recreate any of your paper work.
            </p>
            <a>See all features</a>
          </div>
          <img src="../assets/Home/ipad.png">
        </div>

        <div class="features-row">
          <img src="../assets/Home/laptop-docket2.png">
          <div class="text-section">
            <p>3. Easy Docket Templates</p>
            <h3>Modular Dockets</h3>
            <p>
              Record Time allows you to easily create docket templates.
              You can design your docket to look and work exactly the way you want it.
            </p>
            <a>See all features</a>
          </div>
        </div>
      </v-container>
    </div>

    <div class="demo-section">
      <div class="shape-layer">
        <img src="../assets/Home/demo-shape1.svg" alt="Shape 1">
        <img src="../assets/Home/demo-shape2.svg" alt="Shape 2">
        <img src="../assets/Home/demo-shape3.svg" alt="Shape 3">
      </div>
      <v-container>
        <div class="iphone-container">
          <img src="../assets/Home/iphone.png" alt="Get record time demo"/>
        </div>

        <div class="text-section">
          <h2>Get a Demo and Try Record Time Today!</h2>
          <p>Try RECORD TIME for free for a month and start saving money!</p>

          <div class="email-input-container">
            <v-text-field filled background-color="white" clearable flat full-width height="55" solo/>
            <v-btn height="56" class="get-demo-btn" tile color="primary">
              Get Demo Now
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>

    <v-container class="testimonial-section">
      <p>Complete Docketing Solution</p>

      <h2>Core Features of Record Time</h2>

      <v-window v-model="testimonialWindow" vertical show-arrows :prev-icon="mdiArrowLeft" :next-icon="mdiArrowRight">
        <v-window-item v-for="(chunkedTestimonial, index1) in computedTestimonials" :key="index1">
          <v-row no-gutters>
            <v-col :cols="12/(chunkedTestimonial.length)" v-for="(testimonial, index2) in chunkedTestimonial"
                   :key="index2">
              <v-card class="testimonial-card">
                <v-card-text>
                  "{{ testimonial.content }}"
                </v-card-text>

                <v-card-actions>
                  <v-avatar size="80">
                    <v-img :src="require('@/assets/Home/Testimonials/' + testimonial.image)"/>
                  </v-avatar>
                  <p>{{ testimonial.jobTitle }}</p>
                  <p>{{ testimonial.name }}</p>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-container>
  </div>
</template>

<style lang="scss">
.client-logo-container {
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    img {
      margin-right: 10px;
      margin-bottom: 24px;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 1264px) {
    text-align: center;
    img {
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }

  @media only screen and (min-width: 1264px) {
    margin-bottom: 30px;
    img {
      margin-right: 30px;
    }
  }

  img {
    width: 90px;
    height: 30px;

    &:last-of-type {
      margin-right: 0;
    }
  }
}

.features-home-section {
  background-color: $alice-grey;
  margin-top: 110px;

  .features-container {
    padding-top: 40px;

    & > p {
      opacity: 0.3;
      letter-spacing: 4px;
      text-align: center;
      color: $black-pearl;
      margin: 0;
      padding-top: 0;
      text-transform: uppercase;
      padding-bottom: 10px;
    }

    & > h2 {
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      color: #021222;
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

.demo-section {
  height: 340px;
  background-color: $faux-oxford-blue;
  position: relative;

  .shape-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow: hidden;

    img {
      &:nth-of-type(1) {
        position: absolute;
        top: -20px;
        left: -110px;
      }

      &:nth-of-type(2) {
        position: absolute;
        top: 0;
        left: 0;
        transform: translateX(14%) translateY(-40%);
      }

      &:nth-of-type(3) {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(40%) translateY(-6%);

        @media only screen and (max-width: 600px) {
          top: unset;
          bottom: 0;
          transform: translateX(10%) translateY(60%);
        }
      }
    }
  }

  @media only screen and (max-width: 600px) {
    height: unset;
  }

  .container {
    height: 100%;
    padding-top: 66px;
    padding-bottom: 66px;
    display: flex;
    justify-content: space-around;
    position: relative;

    @media only screen and (max-width: 600px) {
      flex-direction: column-reverse;
      padding-top: 34px;
      padding-bottom: 0;
    }

    @media only screen and (min-width: 600px) and (max-width: 960px) {
      padding-top: 45px;
      padding-bottom: 45px;
    }

    .iphone-container {
      position: relative;
      @media only screen and (max-width: 600px) {
        text-align: center;
        margin-left: 30px;
      }

      img {
        position: relative;
        height: 460px;
        transform: translateY(-110px);

        @media only screen and (max-width: 600px) {
          height: 410px;
          transform: unset;
        }
      }
    }

    .text-section {
      width: fit-content;

      @media only screen and (max-width: 600px) {
        padding-left: 34px;
        padding-right: 34px;
      }

      h2 {
        font-size: 32px;
        font-weight: bold;
        color: #ffffff;
        padding-bottom: 16px;
        max-width: 366px;

        @media only screen and (max-width: 600px) {
          text-align: center;
          max-width: unset;
          font-size: 26px;
        }
      }

      p {
        margin: 0;
        padding: 0;
        padding-bottom: 28px;
        font-size: 16px;
        line-height: 1.63;
        opacity: 0.6;
        color: #ffffff;

        @media only screen and (max-width: 600px) {
          text-align: center;
          font-size: 14px;
          line-height: 1.57;
        }
      }

      .email-input-container {
        width: 555px;
        display: flex;

        @media only screen and (max-width: 600px) {
          width: unset;
          flex-direction: column;

          & > .v-input {
            width: 100% !important;
          }

          .get-demo-btn {
            border: 4px solid crimson;
            width: 100%;
          }
        }

        @media only screen and (min-width: 600px) and (max-width: 960px) {
          width: 400px;
        }

        & > .v-input {
          width: 60%;
        }

        .get-demo-btn {
          width: 40%;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;

          @media only screen and (max-width: 600px) {
            width: unset;
          }

          span.v-btn__content {
            font-size: 16px;
            font-weight: bold;
            letter-spacing: 1px;
          }
        }
      }
    }
  }
}

.testimonial-section {
  margin-top: 110px;
  margin-bottom: 70px;
  padding-top: 40px;

  & > p {
    opacity: 0.3;
    letter-spacing: 4px;
    text-align: center;
    color: $black-pearl;
    margin: 0;
    padding-top: 0;
    text-transform: uppercase;
    padding-bottom: 10px;
  }

  & > h2 {
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #021222;
    padding-bottom: 40px;
  }

  div.v-window.v-item-group {
    .v-window__container {
      position: relative;

      [class*="next"], [class*="prev"] {
        background: transparent;
        position: relative;

        > button.v-btn {
          position: absolute;
          bottom: -70px;

          .v-icon {
            color: $black-pearl;
          }
        }
      }

      [class*="next"] {
        > button.v-btn {
          right: 0;
        }
      }

      [class*="prev"] {
        > button.v-btn {
          right: 50px;
        }
      }

      .v-window-item {
        .row {
          .col {
            padding: 0 10px;

            .testimonial-card {
              padding: 0;
              border-radius: 5px;
              box-shadow: 0 2px 12px 0 rgba(2, 18, 34, 0.08);

              div.v-card__text {
                padding: 21px 30px 63px 30px;
                font-size: 14px;
                font-style: italic;
                line-height: 1.71;
                color: $black-pearl;
              }

              div.v-card__actions {
                padding: 48px 0 36px 0;
                background-color: $faux-dark-turquoise;
                border-radius: 5px;
                position: relative;
                display: flex;
                flex-direction: column;

                > div.v-avatar {
                  position: absolute;
                  top: 0;
                  left: 50%;
                  transform: translateX(-50%) translateY(-50%);
                }

                p {
                  padding: 0;
                  margin: 0;
                  text-align: center;

                  &:nth-of-type(1) {
                    font-size: 18px;
                    font-weight: 600;
                    color: #ffffff;
                  }

                  &:nth-of-type(2) {
                    opacity: 0.8;
                    font-size: 14px;
                    color: #ffffff;
                  }
                }
              }
            }
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
import {mdiArrowLeft} from '@mdi/js';
import {mdiArrowRight} from '@mdi/js';

export default {
  metaInfo: {
    title: 'Home',
    titleTemplate: 'Record Time → %s',
    meta: [
      {name: 'name', content: ''},
      {name: 'description', content: ''}
    ]
  },
  components: {
    LandingBanner, SecondaryBtnRow
  },
  data() {
    return {
      testimonialWindow: 0,
      mdiArrowLeft: mdiArrowLeft,
      mdiArrowRight: mdiArrowRight,
      testimonials: [
        {
          content: "Now that safety on work sites (particularly in construction), is such a big issue for employers to" +
              "be aware of, my employees can also customize the dockets to become a Job Safety Assessment (JSA)," +
              " that can be filled out before working on site. This covers both employers and employees in case of" +
              " a safety breach, and again, it is all accessible on the back end. The JSA can be sent to both the supervisor and the client.",
          image: "1.jpg",
          jobTitle: "CEO at Fortify Geotech",
          name: "Dean Robinson"
        },
        {
          content: "Now that safety on work sites (particularly in construction), is such a big issue for employers to" +
              "be aware of, my employees can also customize the dockets to become a Job Safety Assessment (JSA)," +
              " that can be filled out before working on site. This covers both employers and employees in case of" +
              " a safety breach, and again, it is all accessible on the back end. The JSA can be sent to both the supervisor and the client.",
          image: "1.jpg",
          jobTitle: "CEO at Fortify Geotech",
          name: "Dean Robinson"
        },
        {
          content: "Now that safety on work sites (particularly in construction), is such a big issue for employers to" +
              "be aware of, my employees can also customize the dockets to become a Job Safety Assessment (JSA)," +
              " that can be filled out before working on site. This covers both employers and employees in case of" +
              " a safety breach, and again, it is all accessible on the back end. The JSA can be sent to both the supervisor and the client.",
          image: "1.jpg",
          jobTitle: "CEO at Fortify Geotech",
          name: "Dean Robinson"
        },
        {
          content: "Now that safety on work sites (particularly in construction), is such a big issue for employers to" +
              "be aware of, my employees can also customize the dockets to become a Job Safety Assessment (JSA)," +
              " that can be filled out before working on site. This covers both employers and employees in case of" +
              " a safety breach, and again, it is all accessible on the back end. The JSA can be sent to both the supervisor and the client.",
          image: "1.jpg",
          jobTitle: "CEO at Fortify Geotech",
          name: "Dean Robinson"
        },
        {
          content: "Now that safety on work sites (particularly in construction), is such a big issue for employers to" +
              "be aware of, my employees can also customize the dockets to become a Job Safety Assessment (JSA)," +
              " that can be filled out before working on site. This covers both employers and employees in case of" +
              " a safety breach, and again, it is all accessible on the back end. The JSA can be sent to both the supervisor and the client.",
          image: "1.jpg",
          jobTitle: "CEO at Fortify Geotech",
          name: "Dean Robinson"
        },
        {
          content: "Now that safety on work sites (particularly in construction), is such a big issue for employers to" +
              "be aware of, my employees can also customize the dockets to become a Job Safety Assessment (JSA)," +
              " that can be filled out before working on site. This covers both employers and employees in case of" +
              " a safety breach, and again, it is all accessible on the back end. The JSA can be sent to both the supervisor and the client.",
          image: "1.jpg",
          jobTitle: "CEO at Fortify Geotech",
          name: "Dean Robinson"
        }
      ],
      clientLogoPaths: [
        'logo-light.jpg',
        'logo-light.jpg',
        'logo-light.jpg',
        'logo-light.jpg',
        'logo-light.jpg'
      ]
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
    chunkArray(myArray, chunk_size) {
      let results = [];
      while (myArray.length) {
        results.push(myArray.splice(0, chunk_size));
      }
      return results;
    }
  }
}
</script>
