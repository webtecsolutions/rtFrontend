<template>
    <v-btn color="primary" height="42" :width="width" :text="!backgroundColor" :outlined="outlined"
           :disabled="disabled" :loading="loading" @click="btnClicked">
        {{text}}
    </v-btn>
</template>

<style lang="scss">
    button.v-btn {

        & span.v-btn__content {
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.71;
            letter-spacing: 0.5px;
        }
        &.primary {
            box-shadow: 0 10px 25px 0 rgba(0, 200, 216, 0.3);
        }
    }
</style>

<script>
    export default {
      props: {
        text: {
          type: String,
          default: "Get started"
        },
        backgroundColor: {
          type: Boolean,
          default: true
        },
        outlined: {
          type: Boolean,
          default: false
        },
        disabled: {
          type: Boolean,
          default: false
        },
        loading: {
          type: Boolean,
          default: false
        },
        width: {
          type: String,
          default: "140"
        }
      },
      methods: {
        btnClicked() {
          this.$emit('click');
        }
      }
    }
</script>
