<template>
  <div id="app">
    <v-app>

      <nav-drawer :items="navItems" v-if="showDrawer" @showDrawer="transitionend" />

      <!-- App bar -->
      <v-app-bar app color="#FFFFFF" tile height="70px" fixed>
        <v-container class="d-flex align-center">
          <v-app-bar-nav-icon @click="showDrawer = true" v-if="$vuetify.breakpoint.mdAndDown">
            <slot>
              <v-icon size="32" color="primary">{{mdiText}}</v-icon>
            </slot>
          </v-app-bar-nav-icon>
          <a @click="$router.push({ name: 'home'})">
            <v-img :src="require('@/assets/logo-light.jpg')" :width="$vuetify.breakpoint.mdAndDown ? 100 : 160"/>
          </a>

          <div class="hidden-md-and-down ml-md-14">
            <a v-for="(item, index) in navItems" :key="index" class="nav-link pr-md-8"
               :class="item.linkTo === $route.name ? 'route-active': ''"
               v-if="item.isMainNavItem" @click="$router.push({ name: item.linkTo, params: { id: item.linkParams }})">
              {{item.title}}
            </a>
          </div>

          <v-spacer></v-spacer>

          <a class="sign-in-link mr-8 hidden-xs-only">
            Sign In
          </a>
          <primary-btn @click="$router.push(
          { name: 'about',
            params: {
              navigateToFormOnMobile: true
            }
          })"/>
        </v-container>
      </v-app-bar>
      <!-- App bar -->

      <!-- Router content -->
      <v-main>
        <router-view/>
      </v-main>
      <!-- Router content -->

      <!-- Footer -->
      <footer-comp :items="navItems"/>
      <!-- Footer -->

    </v-app>
  </div>
</template>

<style lang="scss">
  /*@import "scss/variables";*/
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    header.v-app-bar {
      z-index: 40;

      @media only screen and (max-width: 1264px) {
        padding-top: 0;
        div.v-toolbar__content {
          padding: 0;
        }
      }
    }

    .v-navigation-drawer {
      z-index: 50;
    }

    .nav-link {
      cursor: pointer;
      color: $black-pearl;
      opacity: 0.4;

      &.route-active {
        font-weight: bold;
        opacity: unset;
        color: $faux-dark-turquoise;
      }

      &:hover {
        opacity: 1;
      }
    }

    .sign-in-link {
      font-weight: bold;
      line-height: 1.5;
      letter-spacing: 1px;
      color: $black-pearl;

      &:hover {
        border-bottom: 2px solid $black-pearl;
      }
    }
  }
</style>

<script>
  import NavDrawer from '@/components/NavDrawer.vue';
  import PrimaryBtn from '@/components/PrimaryBtn.vue';
  import FooterComp from '@/components/Footer.vue';
  import { mdiText } from '@mdi/js';

  export default {
    components: {
      NavDrawer, PrimaryBtn, FooterComp
    },
    data() {
      return {
        showDrawer: false,
        mdiText: mdiText,
        navItems: [
          { title: "Home", isMainNavItem: true, linkTo: 'home'},
          { title: "About Us", isMainNavItem: true, linkTo: 'about'},
          { title: "Features", isMainNavItem: true, linkTo: 'features'},
          { title: "Pricing", isMainNavItem: true, linkTo: 'pricing'},
          { title: "FAQs", isMainNavItem: true, linkTo: 'faq'},
          { title: "Contact", isMainNavItem: true, linkTo: 'contact'}
        ]
      }
    },
    methods: {
      transitionend() {
        this.showDrawer = false;
      }
    }
  }
</script>
