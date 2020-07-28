<template>
  <v-container class="landing-banner-container">
    <v-layout fill-height>
      <v-flex class="text-section" sm9 md7>
        <h1>
          <slot name="title"/>
        </h1>
        <p>
          <slot name="subTitle"/>
        </p>

        <slot name="main"/>
      </v-flex>
    </v-layout>
    <slot name="image"/>
  </v-container>
</template>

<style lang="scss" scoped>
.landing-banner-container {
  padding-top: 120px;
  overflow: hidden;
  position: relative;

  & > img {
    position: absolute;
    height: 470px;
    right: 0;
    top: 100px;
    transform: translateX(50%);
  }

  @media only screen and (max-width: 600px) {
    padding-top: 20px;

    & > img {
      position: unset;
      height: 288px;
      transform: unset;
      width: inherit;
    }
  }

  @media only screen and (min-width: 600px) and (max-width: 960px) {
    padding-top: 40px;
    & > img {
      transform: translateX(65%);
    }
  }

  @media only screen and (min-width: 960px) and (max-width: 1264px) {
    padding-top: 60px;
  }

  div.layout {
    .text-section {
      h1 {
        font-size: 58px;
        font-weight: bold;
        line-height: 1.21;
        color: $black-pearl;
        padding-bottom: 30px;

        span {
          color: $faux-dark-turquoise;
          text-decoration: underline;
        }

        @media only screen and (max-width: 600px) {
          text-align: center;
          font-size: 32px;
          padding-bottom: 24px;
        }
      }

      p {
        opacity: 0.6;
        font-size: 18px;
        line-height: 1.44;
        letter-spacing: normal;
        color: $black-pearl;
        padding-top: 0;
        padding-bottom: 70px;
        margin: 0;

        @media only screen and (max-width: 600px) {
          opacity: 0.6;
          font-size: 14px;
          line-height: 1.86;
          text-align: center;
          padding-bottom: 40px;
        }

        @media only screen and (min-width: 600px) and (max-width: 1264px) {
          max-width: 90%;
        }

        @media only screen and (min-width: 960px) and (max-width: 1264px) {
          padding-bottom: 40px;
        }
      }
    }
  }
}
</style>

<script>
// @ is an alias to /src

export default {
  metaInfo: {
    title: 'Record Time',
    titleTemplate: 'Record Time → %s',
    meta: [
      {name: 'name', content: ''},
      {name: 'description', content: ''}
    ]
  }
}
</script>
