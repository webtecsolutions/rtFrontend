<template>
    <v-navigation-drawer v-model="drawer" temporary app @transitionend="closeDrawer" width="100%">
        <v-icon size="35" color="primary" @click="closeDrawer">
            {{mdiClose}}
        </v-icon>
        <v-layout justify-center align-center fill-height column>
            <ul>
                <li v-for="(item, index) in $attrs.items" :key="index"
                             @click="$router.push({ name: item.linkTo, params: { id: item.linkParams }})">
                    {{item.title}}
                </li>
            </ul>

            <div class="btn-container">
                <primary-btn width="100%"/>
            </div>

            <a>Sign In</a>
        </v-layout>
    </v-navigation-drawer>
</template>

<style lang="scss">
    nav.v-navigation-drawer {
        .v-navigation-drawer__content {
            background-color: $black-pearl;
            button.v-icon {
                position: absolute;
                right: 10px;
                top: 10px
            }

            div.layout {
                ul {
                    width: 100%;
                    list-style: none;
                    padding: 0;

                    li {
                        text-align: center;
                        opacity: 0.6;
                        font-size: 16px;
                        color: #ffffff;
                        padding: 16px 0;
                        margin: 0 16px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);

                        &:hover,
                        &:focus {
                            opacity: 1;
                        }
                    }
                }

                .btn-container {
                    width: calc(100% - 32px);
                    text-align: center;
                }

                a {
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 1.5;
                    letter-spacing: 1px;
                    color: #ffffff;
                    padding-top: 16px;
                    border-bottom: 1px solid #ffffff;
                }
            }
        }
    }
</style>

<script>
    import { mdiClose } from '@mdi/js';
    import PrimaryBtn from '@/components/PrimaryBtn.vue';

    export default {
        components: {
            PrimaryBtn
        },
        data() {
            return {
              drawer: true,
              mdiClose: mdiClose
            }
        },
        methods: {
            closeDrawer() {
                this.$emit('showDrawer', false);
            }
        }
    }
</script>

