<template>
    <div>
        <landing-banner bg-image="About/banner.png">
            <template v-slot:title>
                Record Time Contact Us
            </template>

            <template v-slot:subTitle>
                Call us on between 9am – 5pm weekdays to get FREE support.
                Alternatively, view our FAQ’s for already answered questions.
            </template>

            <template v-slot:main>
                <v-form ref="form" v-model="valid" class="contact-form">
                    <v-row no-gutters class="form-row">
                        <v-col md="6" class="left-col">
                            <v-text-field v-model="name" label="Name" :rules="nameRules" outlined required/>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="form-row">
                        <v-col :md="$vuetify.breakpoint.xsOnly ? 12 : 6" cols="12" class="left-col">
                            <v-text-field v-model="email" label="Email" :rules="emailRules" outlined required/>
                        </v-col>

                        <v-col :md="$vuetify.breakpoint.xsOnly ? 12 : 6" cols="12" class="right-col">
                            <v-text-field v-model="contactNo" label="Contact no" outlined required/>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="form-row">
                        <v-textarea v-model="message" label="Enquiry" :rules="messageRules" outlined required/>
                    </v-row>

                    <v-btn elevation="0" color="secondary" width="200" height="42" :block="$vuetify.breakpoint.xsOnly"
                           :disabled="!valid" @click="validate">
                        Submit Request
                    </v-btn>
                </v-form>
            </template>
        </landing-banner>

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
    .contact-form {
        @media only screen and (max-width: 600px) {
            margin-bottom: 32px;
        }

        .form-row {
            margin-bottom: 16px;

            @media only screen and (max-width: 600px) {
                margin-bottom: 0;
            }

            @media only screen and (min-width: 600px) and (max-width: 960px) {
                padding-right: 32px;
            }

            .left-col {
                padding-right: 10px;

                @media only screen and (max-width: 960px) {
                    padding-right: 0;
                }
            }

            .right-col {
                padding-left: 10px;

                @media only screen and (max-width: 960px) {
                    padding-left: 0;
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
            LandingBanner
        },
        data() {
            return {
                valid: false,
                name: "",
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters'
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
                ],
                contactNo: '',
                message: '',
                messageRules: [
                    v => !!v || 'Enquiry is required'
                ],
            }
        },
        methods: {
            validate() {
                console.log(this.$refs.form.validate());

                // Reset form & reset form validation
                // this.$refs.form.reset();
                // this.$refs.form.resetValidation();
            }
        }
    }
</script>