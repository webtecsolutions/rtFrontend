<template>
    <div>
        <landing-banner>
            <template v-slot:title>
                Record Time, The Ultimate digital <span>docketing solution</span>
            </template>

            <template v-slot:subTitle>
                Record Time is a fully customisable mobile software application suitable for Android or
                IOS enabled smartphones or tablets. Together with its comprehensive back-end web site,
                Record Time will provide you with a fully mobile digital docketing and invoice system.
            </template>

            <template v-slot:main>
                <secondary-btn-row/>

                <p class="customers-container-prefix">
                    +1.000 people around the world using Record Time app
                </p>
                <div class="customers-container" :style="{ 'width': landingBannerContainerWidth + 'px' }">
                    <img v-for="(path, index) in clientLogoPaths"
                         :src="require('../assets/About/Customers/' + path)"
                         :key="index" :alt="'Customer logo ' + index">
                </div>
            </template>
        </landing-banner>

        <div class="features-about-section">
            <v-container class="features-container">
                <p>Complete Docketing Solution</p>

                <h2>Core Features of Record Time</h2>

                <p>
                    Record Time will make your tiresome paper-based system obsolete.
                    It will also allow <span>Pre-start checks, WH&S Safety Checklists, Proof of Delivery,
                    and Inspection validation</span> of work completed. Our Application is suitable for a wide
                    variety of applications across all industries where paper docket approvals are needed.
                </p>

                <div class="checklist-row">
                    <div class="checklist-col">
                        <v-avatar size="24" color="primary">
                            <v-icon size="12" color="white">{{mdiCheck}}</v-icon>
                        </v-avatar>
                        <p>WH&S Safety Checklists</p>
                    </div>
                    <div class="checklist-col">
                        <v-avatar size="24" color="primary">
                            <v-icon size="12" color="white">{{mdiCheck}}</v-icon>
                        </v-avatar>
                        <p>Allow Pre-start Checks</p>
                    </div>
                    <div class="checklist-col">
                        <v-avatar size="24" color="primary">
                            <v-icon size="12" color="white">{{mdiCheck}}</v-icon>
                        </v-avatar>
                        <p>Inspection Validation of work</p>
                    </div>
                </div>

                <div class="features-row">
                    <img src="../assets/About/ipadnmobile.png">
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
                    <img src="../assets/About/laptop.png">
                </div>

                <div class="features-row">
                    <img src="../assets/About/ipadonly.png">
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

            &:last-of-type {
                margin-right: 0;
            }
        }
    }

    .features-about-section {
        background-color: $alice-grey;
        margin-top: 110px;

        @media only screen and (max-width: 600px) {
            margin-top: 50px;
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
    import { mdiCheck } from '@mdi/js';
    import bannerImage from '@/assets/About/banner.png';

    export default {
        metaInfo: {
            title: 'About',
            titleTemplate: 'Record Time → %s',
            meta: [
                { name: 'name', content: '' },
                { name: 'description', content: '' }
            ]
        },
        components: {
            LandingBanner, SecondaryBtnRow
        },
        data() {
            return {
                testimonialWindow: 0,
                mdiCheck: mdiCheck,
                clientLogoPaths: [
                    '1.png',
                    '2.png',
                    '3.png',
                    '4.png',
                    '5.png',
                    '6.png',
                    '7.png',
                    '8.png'
                ],
                landingBannerContainerWidth: 0,
                bannerImage: bannerImage
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
