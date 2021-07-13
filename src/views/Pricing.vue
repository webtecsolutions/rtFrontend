<template>
  <div>
    <landing-banner>
      <template v-slot:title>
        Flexible <span>pricing</span> to suit your needs
      </template>

      <template v-slot:subTitle>
        Please sign up  <a href="https://www.recordtimeapp.com.au/backend/registration" target="_blank">here</a> to view custom plans to suit your needs.
      </template>

      <template v-slot:image>
        <img :src="require('../assets/pricing.jpg')" alt="Home banner image" style="height: 300px;object-fit: contain;width: 350px;transform: none;">
      </template>

      <!-- <template v-slot:main>
        <secondary-btn-row text1="Less then 5 members" text2="More members"
                           @firstBtnClicked="firstBtnClicked" @secondBtnClicked="secondBtnClicked"/>
      </template> -->
    </landing-banner>

    <!-- <v-container class="pricing-cards-wrapper">
      <div class="pricing-card" v-for="(pricingCard, index) in computedPricingCards" :key="index">
        <div class="pre-title-border"/>
        <h3>{{ pricingCard.users }} Users Plan</h3>
        <div class="post-title-border"/>
        <div class="price-tile">
                    <span>
                        <sup>$</sup>{{ pricingCard.price }}<sub>/month</sub>
                    </span>
        </div>
        <div class="employee-info">
          Suitable for small businesses with up to {{ pricingCard.employeeCount }} employees
        </div>
        <div class="post-title-border"/>
        <div class="feature-list-wrapper">
          <h5>Features:</h5>

          <ul>
            <li>Send Unlimited Dockets</li>
            <li>Receive Unlimited Dockets</li>
          </ul>

          <div class="read-more">
            <a>Read More</a>
          </div>
        </div>
        <v-btn color="primary" block height="42" class="mt-10">
          Sign up now
        </v-btn>
      </div>
    </v-container> -->

    <v-container class="plan-notice-container">
      <p>Looking to speak to someone?</p>

      <p>
        Please get in touch for a customised plan and pricing.
        Call us on <a>0421 955 630</a> or email at <a>info@recordtime.com.au</a>
      </p>
    </v-container>
  </div>
</template>

<style lang="scss">
.pricing-cards-wrapper {
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    padding-top: 35px;
    padding-bottom: 35px;
  }

  .pricing-card {
    padding: 30px;
    border: 1px solid $faux-sw-paint;
    max-width: 260px;
    margin-right: 25px;

    @media only screen and (max-width: 600px) {
      padding: 45px;
    }

    &:last-of-type {
      margin-right: 0;
    }

    &:hover, &:focus {
      border: 2px solid $faux-dark-turquoise;
      box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.2);
      transform: scale(1.05);
    }

    .pre-title-border {
      width: 30%;
      height: 1px;
      border: 1px solid $black-pearl;
      margin: 0 auto;
    }

    h3 {
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: $black-pearl;
      padding-top: 24px;
      padding-bottom: 33px;
    }

    .post-title-border {
      width: 70%;
      height: 1px;
      border: 1px solid $black-pearl;
      opacity: 0.1;
      margin: 0 auto;
    }

    .price-tile {
      padding: 20px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 200, 216, 0.05);
      margin-top: 12px;
      margin-bottom: 12px;

      span {
        font-size: 42px;
        font-weight: bold;
        line-height: 1;
        text-align: right;
        color: $faux-dark-turquoise;
        position: relative;

        sup {
          position: absolute;
          top: 0;
          transform: translateX(-100%) translateX(-50%);
          font-size: 18px;
          font-weight: bold;
          line-height: 1.33;
        }

        sub {
          font-size: 18px;
          font-weight: bold;
          line-height: 1.33;
        }
      }
    }

    .employee-info {
      font-size: 12px;
      font-weight: 500;
      line-height: 1.33;
      letter-spacing: normal;
      text-align: center;
      color: $faux-dark-turquoise;
      padding: 0 20px;
      margin-bottom: 8px;
    }

    .feature-list-wrapper {
      margin-top: 16px;

      h5 {
        font-size: 14px;
        font-weight: 500;
        line-height: 2;
        text-align: center;
        color: $black-pearl;
      }

      ul {
        list-style: none;
        padding-left: 0;

        li {
          font-size: 14px;
          line-height: 1.71;
          text-align: center;
          color: $faux-roman-silver;
        }
      }

      .read-more {
        text-align: center;

        a {
          font-size: 14px;
          line-height: 1.71;
          color: $black-pearl;
          text-decoration: underline;
        }
      }
    }
  }
}

.plan-notice-container {
  margin-top: 80px;
  border-top: 1px solid rgba(2, 18, 34, 0.1);
  border-bottom: 1px solid rgba(2, 18, 34, 0.1);
  padding: 24px 0;

  @media only screen and (max-width: 600px) {
    margin-top: 24px;
  }

  p {
    &:nth-of-type(1) {
      font-size: 18px;
      font-weight: bold;
      line-height: 1.44;
      text-align: center;
      color: $black-pearl;
      margin-bottom: 12px;
    }

    &:nth-of-type(2) {
      font-size: 14px;
      line-height: 1.57;
      text-align: center;
      color: $black-pearl;
      padding-bottom: 0;
      margin-bottom: 0;
      max-width: 500px;
      margin: 0 auto;

      a {
        color: $faux-dark-turquoise;
        text-decoration: underline;
      }

      @media only screen and (max-width: 600px) {
        max-width: 80%;
      }
    }
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
}
</style>

<script>
// @ is an alias to /src
import LandingBanner from '@/components/LandingBanner.vue';
import SecondaryBtnRow from '@/components/SecondaryBtnRow2.vue';

export default {
  metaInfo: {
    title: 'Pricing',
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
      defaultPricingCards: [
        {
          users: "2-4",
          price: "70",
          employeeCount: "4"
        },
        {
          users: "5-9",
          price: "100",
          employeeCount: "5-9"
        },
        {
          users: "10-14",
          price: "140",
          employeeCount: "10-14"
        }
      ],
      computedPricingCards: []
    }
  },
  mounted() {
    this.computedPricingCards = this.defaultPricingCards;
  },
  methods: {
    firstBtnClicked() {
      this.computedPricingCards = this.defaultPricingCards.slice(0, 1);
      this.$vuetify.goTo(
          document.getElementsByClassName('pricing-cards-wrapper')[0], {
            offset: 50
          }
      );
    },
    secondBtnClicked() {
      this.computedPricingCards = this.defaultPricingCards.slice(1, 3);
      this.$vuetify.goTo(
          document.getElementsByClassName('pricing-cards-wrapper')[0], {
            offset: 50
          }
      );
    }
  }
}
</script>
