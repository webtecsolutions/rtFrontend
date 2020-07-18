<template>
    <div>
        <landing-banner/>

        <div class="features-section">
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
    </div>
</template>

<style lang="scss" scoped>
    .features-section {
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
            }
        }
    }
</script>
