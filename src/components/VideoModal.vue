<template>
  <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">
    <v-card elevation="0" flat tile width="100%" height="100%">
      <v-toolbar dark color="secondary" flat tile>
        <v-spacer/>
        <v-btn icon dark @click="dialog = false">
          <v-icon @click="closeModal">{{mdiClose}}</v-icon>
        </v-btn>
      </v-toolbar>

      <iframe class="video-container" :src="url"/>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
  .video-container {
    height: calc(100% - 66px);
    width: 100%;
  }
</style>

<script>
// @ is an alias to /src
import {mdiClose} from '@mdi/js';

export default {
  data() {
    return {
      mdiClose: mdiClose,
      dialog: true
    }
  },
  props: {
    url: {
      type: String,
      default: ""
    }
  },
  methods: {
    closeModal() {
      this.$emit('showModal', false);
    }
  }
}
</script>
