<template>
    <v-footer class="footer-with-nav pa-0" color="transparent">
        <div class="background-layer">
<!--            <img :src="require('@/assets/shape-6.svg')" class="shape-6"/>-->
        </div>

        <div class="foreground-layer">
            <v-layout fill-height justify-center align-center column class="pa-0">
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="12" md="3" sm="12" class="text-center">
                            <div class="d-flex justify-center">
                                <v-img :src="require('@/assets/logo-light.webp')" width="200px" contain/>
                            </div>
                        </v-col>

                        <v-col cols="12" md="6" sm="12">
                            <div id="contactus-list">
                                <div class="contactus-item">
                                    <v-icon color="primary">{{mdiMapMarker}}</v-icon>
                                    <p class="body-2">
                                        Unit 5, 9 Beaconsfield Street Fyshwick ACT 2609
                                    </p>
                                </div>

                                <div class="contactus-item">
                                    <v-icon color="primary">{{mdiPhone}}</v-icon>
                                    <p class="body-2">0421 955 630</p>
                                </div>

                                <div class="contactus-item">
                                    <v-icon color="primary">{{mdiEmail}}</v-icon>
                                    <p class="body-2">
                                        contact@recordtime.com.au
                                    </p>
                                </div>
                            </div>
                        </v-col>

                        <v-col cols="12" md="3" sm="12" class="text-center">
<!--                            <h3 class="pb-6 body-1 font-weight-bold">Company</h3>-->

                            <v-layout fill-height align-center justify-center>
                                <ul id="sitemap-links" class="pt-0">
                                    <li v-for="(item, index) in $attrs.items" :key="index"
                                        @click="$router.push({ name: item.linkTo})" class="body-2">
                                        {{item.title}}
                                    </li>
                                </ul>
                            </v-layout>
                        </v-col>
                    </v-row>
                </v-container>

                <p class="text-center body-2 font-weight-bold mt-5">
                    © Copyright 2020 Record Time Pty Ltd. All rights reserved
                </p>
            </v-layout>
        </div>
    </v-footer>
</template>

<style lang="scss">
    .footer-with-nav {
        position: relative;

        .background-layer {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 5;

            .shape-6 {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
            }
        }

        .foreground-layer {
            position: relative;
            z-index: 15;
            width: 100%;

            #sitemap-links {
                list-style-type: none;
                margin: 0 auto;
                padding: 20px;
                overflow: hidden;

                @media screen and (max-width: 600px) {
                    padding: 0;
                }

                li {
                    padding: 0 15px;
                    float: left;
                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                        color: #F50E02;
                    }
                }
            }

            #contactus-list {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                .contactus-item {
                    width: 350px;
                    padding-bottom: 20px;
                    display: flex;
                    i {
                        align-self: center;
                    }

                    p {
                        padding: 0;
                        margin: 0 0 0 20px;
                        text-align: left;
                        text-justify: auto;
                    }
                }
            }
        }
    }
</style>

<script>
  // @ is an alias to /src
  import { mdiMapMarker } from '@mdi/js'
  import { mdiPhone } from '@mdi/js';
  import { mdiEmail } from '@mdi/js';

  export default {
    data() {
      return {
        mdiMapMarker: mdiMapMarker,
        mdiPhone: mdiPhone,
        mdiEmail: mdiEmail
      }
    }
  }
</script>
