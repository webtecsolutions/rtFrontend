<template>
    <v-footer class="footer-with-nav" color="transparent">
        <v-container>
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


  export default {
    data() {
      return {
          mdiFacebook: mdiFacebook,
          mdiGoogle: mdiGoogle,
          mdiTwitter: mdiTwitter,
          mdiPlus: mdiPlus
      }
    }
  }
</script>
