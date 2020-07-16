<template>
    <div class="secondary-btn-row1">
        <v-btn color="secondary" height="55" :width="$vuetify.breakpoint.xsOnly ? '' : '236'"
               @click="btnClicked1" class="mr-7 btn-1">
            Start my free trial
        </v-btn>

        <v-btn color="white" height="55" :width="$vuetify.breakpoint.xsOnly ? '' : '236'"
               class="btn-2" text @click="btnClicked2">
            <div class="icon-shadow">
                <v-icon color="primary" size="20">{{mdiPlay}}</v-icon>
            </div>
            How Record TIME Works?
        </v-btn>
    </div>
</template>

<style lang="scss">
    .secondary-btn-row1 {
        margin-bottom: 80px;

        @media only screen and (max-width: 600px) {
            margin-bottom: 30px;
        }

        @media only screen and (min-width: 960px) and (max-width: 1264px) {
            margin-bottom: 60px;
        }

        button.btn-1 {
            @media only screen and (max-width: 600px) {
                width: 100%;
                margin-bottom: 20px;
            }
            & span.v-btn__content {
                font-size: 16px;
                font-weight: bold;
                line-height: 1.5;
                letter-spacing: 1px;
            }
        }

        button.btn-2 {
            @media only screen and (max-width: 600px) {
                width: 100%;
            }
            & span.v-btn__content {
                font-size: 16px;
                line-height: 1.5;
                letter-spacing: normal;
                color: $faux-dark-turquoise;
                text-transform: none;

                .icon-shadow {
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                    position: relative;
                    overflow: hidden;
                    margin-right: 5px;
                    span {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translateX(-50%) translateY(-50%);
                        z-index: 10;
                        box-shadow: inset 20px 20px 0 20px rgba(0,200,216,0.3);
                    }
                }
            }
        }
    }
</style>

<script>
    import {mdiPlay} from '@mdi/js';

    export default {
        props: {
            text: {
                type: String,
                default: "Get started"
            }
        },
        data() {
            return {
                mdiPlay: mdiPlay
            }
        },
        methods: {
            btnClicked1() {
                this.$emit('click1');
            },
            btnClicked2() {
                this.$emit('click2');
            }
        }
    }
</script>
