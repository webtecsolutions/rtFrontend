<template>
  <div class="secondary-btn-row2">
    <v-btn height="55" :width="$vuetify.breakpoint.xsOnly ? '' : '275'"
           @click="btnClicked1" class="btn-1" elevation="0">
      {{ text1 }}
    </v-btn>

    <v-btn color="secondary" height="55" :width="$vuetify.breakpoint.xsOnly ? '' : '275'"
           class="btn-2" :class="$vuetify.breakpoint.xsOnly ? '' : 'ml-n1'" @click="btnClicked2" elevation="0">
      {{ text2 }}
    </v-btn>
  </div>
</template>

<style lang="scss">
.secondary-btn-row2 {
  margin-bottom: 80px;

  @media only screen and (max-width: 600px) {
    margin-bottom: 30px;
  }

  @media only screen and (min-width: 960px) and (max-width: 1264px) {
    margin-bottom: 60px;
  }

  button.btn-1 {
    background-color: rgba(2, 18, 34, 0.1) !important;
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
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    @media only screen and (max-width: 600px) {
      width: 100%;
    }

    @media only screen and (min-width: 960px) and (max-width: 1264px) {
      margin-left: 0 !important;
    }

    & span.v-btn__content {
      font-size: 16px;
      font-weight: bold;
      line-height: 1.5;
      letter-spacing: 1px;
    }
  }
}
</style>

<script>
import {mdiPlay} from '@mdi/js';

export default {
  props: {
    text1: {
      type: String,
      default: ""
    },
    text2: {
      type: String,
      default: ""
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
