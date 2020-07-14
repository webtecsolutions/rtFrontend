<template>
    <v-footer class="footer-with-nav mt-16" color="transparent">
        <v-container>
            <v-layout justify-start column align-center fill-height class="app-store-banner">
                <img src="../assets/shape-1.svg" class="shape-1">
                <img src="../assets/shape-2.svg" class="shape-2">
                <img src="../assets/shape-3.svg" class="shape-3">

                <p class="text-uppercase">check our mobile app interaction</p>
                <h2>Download Record Time App Now</h2>

                <div class="store-logo-container">
                    <div class="google" @click="goToGoogleAppStore">
                        <img src="../assets/apple_logo.webp" alt="Apple Store Logo">
                        <div class="text-wrapper">
                            <p>Download on the</p>
                            <p>App Store</p>
                        </div>
                    </div>

                    <div class="apple" @click="goToAppleAppStore">
                        <img src="../assets/google_play_logo.webp" alt="Google Play Store Logo">
                        <div class="text-wrapper">
                            <p>Get it on</p>
                            <p>App Store</p>
                        </div>
                    </div>
                </div>

                <div class="devices-container">
                    <img src="../assets/how-it-works.png" alt="Record time docketing system">

                    <div class="btn-container">
                        <p>How it works?</p>

                        <div class="play-btn-container">
                            <img src="../assets/btn-blur.svg" alt="Background blur">

                            <v-btn fab color="accent">
                                <v-icon dark>{{mdiPlay}}</v-icon>
                            </v-btn>
                        </div>
                    </div>
                </div>
            </v-layout>

            <v-row no-gutters class="sitemap-row" :class="$vuetify.breakpoint.smAndDown ? '' : 'pb-12'">
                <v-col sm="12" md="4" cols="12" class="tagline-col">
                    <a @click="$router.push({ name: 'home'})">
                        <v-img :src="require('@/assets/logo-light.webp')" width="110"
                               :class="$vuetify.breakpoint.smAndDown ? 'mx-auto' : ''" height="42"/>
                    </a>

                    <p class="mt-4 text-justify">
                        Record TIME is a mobile docketing system, that will replace your tedious paper systems
                        and allow you to spend less time chasing paper docket approvals.
                    </p>

                    <p :class="$vuetify.breakpoint.smAndDown ? 'text-center' : ''">Support: 0421 955 630</p>
                </v-col>

                <v-col sm="12" md="2" :offset="$vuetify.breakpoint.xsOnly ? 0 : 1" cols="12"
                       class="sitemap-col hidden-sm-and-down">
                    <h3>Company</h3>

                    <ul class="mt-6">
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Our Blogs</li>
                    </ul>
                </v-col>

                <v-col sm="12" md="2" cols="12" class="sitemap-col hidden-sm-and-down">
                    <h3>Resource</h3>

                    <ul class="mt-6">
                        <li>FAQs</li>
                        <li>Contact Us</li>
                        <li>Terms of Use</li>
                        <li>License Agreement</li>
                        <li>How To's</li>
                    </ul>
                </v-col>

                <v-col sm="12" md="3" cols="12" class="sitemap-col hidden-sm-and-down">
                    <h3>Our Address</h3>

                    <p class="mt-6">
                        ABN: 99 604 582 649 | Unit 5, 9 Beaconsfield Street Fyshwick ACT 2609 Support: 0421 955 630
                    </p>

                    <div class="mt-10">
                        <v-hover v-slot:default="{ hover }">
                            <v-avatar size="40">
                                <v-icon :color="hover ? '#00c8d8' : '#8298a8'" size="30">{{mdiFacebook}}</v-icon>
                            </v-avatar>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-avatar size="40" class="mx-4">
                                <v-icon :color="hover ? '#00c8d8' : '#8298a8'" size="30">{{mdiGoogle}}</v-icon>
                            </v-avatar>
                        </v-hover>
                        <v-hover v-slot:default="{ hover }">
                            <v-avatar size="40">
                                <v-icon :color="hover ? '#00c8d8' : '#8298a8'" size="30">{{mdiTwitter}}</v-icon>
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
                                    <li>About Us</li>
                                    <li>FAQ</li>
                                    <li>Our Blogs</li>
                                </ul>
                            </v-expansion-panel-content>
                        </v-expansion-panel>

                        <v-expansion-panel>
                            <v-expansion-panel-header :expand-icon="mdiPlus" class="pl-0">
                                Resource
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                    <li>FAQs</li>
                                    <li>Contact Us</li>
                                    <li>Terms of Use</li>
                                    <li>License Agreement</li>
                                    <li>How To's</li>
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
                                    <v-avatar size="40">
                                        <v-icon color="#8298a8" size="30">{{mdiFacebook}}</v-icon>
                                    </v-avatar>
                                    <v-avatar size="40" class="mx-4">
                                        <v-icon color="#8298a8" size="30">{{mdiGoogle}}</v-icon>
                                    </v-avatar>
                                    <v-avatar size="40">
                                        <v-icon color="#8298a8" size="30">{{mdiTwitter}}</v-icon>
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
    </v-footer>
</template>

<style lang="scss">
    .footer-with-nav {
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
                    text-align: center;
                }
            }

            .store-logo-container {
                display: flex;

                @media only screen and (max-width: 600px) {
                    flex-direction: column;
                }

                .google {
                    display: flex;
                    border: solid 1.3px $faux-alice-blue;
                    padding: 11px 15px 9px 15px;
                    border-radius: 7px;
                    margin-right: 16px;
                    cursor: pointer;

                    &:hover, &:focus {
                        border: solid 1.3px $faux-dark-turquoise;
                    }

                    @media only screen and (max-width: 600px) {
                        margin-right: 0;
                        margin-bottom: 30px;
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

                .apple {
                    display: flex;
                    border: solid 1.3px $faux-alice-blue;
                    padding: 11px 15px 9px 15px;
                    border-radius: 7px;
                    cursor: pointer;

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
            }

            .devices-container {
                width: 60%;
                height: 90%;
                position: relative;

                @media only screen and (max-width: 600px) {
                    width: 100%;
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
  import { mdiFacebook } from '@mdi/js';
  import { mdiGoogle } from '@mdi/js';
  import { mdiTwitter } from '@mdi/js';
  import { mdiPlus } from '@mdi/js';
  import { mdiPlay } from '@mdi/js';


  export default {
    data() {
      return {
          mdiFacebook: mdiFacebook,
          mdiGoogle: mdiGoogle,
          mdiTwitter: mdiTwitter,
          mdiPlus: mdiPlus,
          mdiPlay: mdiPlay
      }
    },
      methods: {
          goToGoogleAppStore() {
              window.open('','_blank');
          },
          goToAppleAppStore() {
              window.open('','_blank');
          }
      }
  }
</script>
