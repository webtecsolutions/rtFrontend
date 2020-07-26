<template>
    <div>
        <landing-banner bg-image="About/banner.png">
            <template v-slot:title>
                Record Time Frequently Asked <span>Questions</span>
            </template>

            <template v-slot:subTitle>
                This page provides help with the most common questions about Record Time.
                Below you will find an answers to the questions.
            </template>

            <template v-slot:main>
                <secondary-btn-row text1="General" text2="Docket"/>
            </template>
        </landing-banner>

        <v-container class="accordions-wrapper">
            <v-row no-gutters>
                <v-col md="10" lg="10" xl="8">
                    <v-expansion-panels accordion flat>
                        <v-expansion-panel v-for="(faq, index) in faqs" :key="index">
                            <v-expansion-panel-header color="#f8f9fb" :expand-icon="mdiPlus">
                                {{faq.title}}
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>{{faq.desc}}</v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="faq-notice-container">
            <div class="left-imgs">
                <img src="https://via.placeholder.com/400x400">
                <img src="https://via.placeholder.com/400x400">
            </div>

            <div class="faq-content">
                <p class="faq-content__title">Still need help? Send us an email!</p>
                <p class="faq-content__desc">
                    For any other questions, please write us at
                    <span>info@recordtime.com.au</span> or <span>0421 955 630</span>
                </p>
            </div>

            <div class="right-imgs">
                <img src="https://via.placeholder.com/400x400">
                <img src="https://via.placeholder.com/400x400">
            </div>
        </v-container>
    </div>
</template>

<style lang="scss">
    .accordions-wrapper {
        .v-expansion-panels {
            > .v-expansion-panel {
                margin-bottom: 24px;

                > button.v-expansion-panel-header {
                    padding-top: 20px;
                    padding-bottom: 20px;
                    font-size: 24px;
                    font-weight: 500;
                    line-height: 1.33;
                    color: $black-pearl;

                    div.v-expansion-panel-header__icon {
                        span.v-icon {
                            color: $faux-dark-turquoise;
                        }
                    }
                }

                .v-expansion-panel-content {
                    .v-expansion-panel-content__wrap {
                        padding-top: 30px;
                        opacity: 0.6;
                        font-size: 18px;
                        line-height: 1.78;
                        letter-spacing: normal;
                        color: $black-pearl;
                    }
                }
            }
        }
    }

    .faq-notice-container {
        margin-top: 80px;
        @media only screen and (max-width: 600px) {
            margin-top: 24px;
            flex-direction: column;
        }

        @media only screen and (min-width: 600px) and (max-width: 960px) {
            margin-top: 40px;
        }

        display: flex;
        justify-content: space-between;
        > div {
            height: 144px;

            @media only screen and (min-width: 600px) and (max-width: 960px) {
                height: 100px;
            }
        }

        .faq-content {
            max-width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;

            @media only screen and (max-width: 600px) {
                max-width: unset;
            }
            &__title {
                font-size: 18px;
                font-weight: bold;
                line-height: 1.44;
                text-align: center;
                color: $black-pearl;
                margin-bottom: 12px;
            }

            &__desc {
                font-size: 14px;
                line-height: 1.57;
                text-align: center;
                color: $black-pearl;

                span {
                    color: $faux-dark-turquoise;
                    text-decoration: underline;
                }
            }
        }

        .left-imgs, .right-imgs {
            img {
                height: 100%;

                @media only screen and (max-width: 600px) {
                    width: 50%;
                }
            }
        }

        .left-imgs{
            @media only screen and (max-width: 600px) {
                margin-bottom: 20px;
            }
        }
    }
</style>

<script>
    // @ is an alias to /src
    import LandingBanner from '@/components/LandingBanner.vue';
    import SecondaryBtnRow from '@/components/SecondaryBtnRow2.vue';
    import { mdiPlus } from '@mdi/js';

    export default {
        metaInfo: {
            title: 'Record Time',
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
                faqs: [
                    {
                        title: "Can I cancel my subscription at any time?",
                        desc: "Once you have logged in to the back end with your username and " +
                            "password you can then go to the Employees Tab and select Update from the " +
                            "far right hand side. This then allows you to make changes to Employees Passwords " +
                            "and other associated information."
                    },
                    {
                        title: "How many employees can I have on the system?",
                        desc: "Once you have logged in to the back end with your username and " +
                            "password you can then go to the Employees Tab and select Update from the " +
                            "far right hand side. This then allows you to make changes to Employees Passwords " +
                            "and other associated information."
                    },
                    {
                        title: "How can I change my password and my employees from the backend?",
                        desc: "Once you have logged in to the back end with your username and " +
                            "password you can then go to the Employees Tab and select Update from the " +
                            "far right hand side. This then allows you to make changes to Employees Passwords " +
                            "and other associated information."
                    },
                    {
                        title: "What hours does Record Time offer support?",
                        desc: "Once you have logged in to the back end with your username and " +
                            "password you can then go to the Employees Tab and select Update from the " +
                            "far right hand side. This then allows you to make changes to Employees Passwords " +
                            "and other associated information."
                    },
                    {
                        title: "Can I send a docket from an Iphone to an Android Phone?",
                        desc: "Once you have logged in to the back end with your username and " +
                            "password you can then go to the Employees Tab and select Update from the " +
                            "far right hand side. This then allows you to make changes to Employees Passwords " +
                            "and other associated information."
                    }
                ],
                mdiPlus: mdiPlus
            }
        }
    }
</script>
