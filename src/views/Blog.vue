<template>
  <div>
      <v-container class="faq-notice-container" style="display: block;">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <v-card elevation="2" shaped style="padding: 20px;" @click="$router.push({ name: 'blogDetail',  params: { id: 'how-can-record-time-help-an-owner-operator' }})">
                <img :src="require('../assets/blog.jpg')" alt="Home banner image" style="width:100%">
                <h1>How can Record TIME help an Owner Operator?</h1>
                <p>If you own a business and operate machinery such as an Backhoes, Excava...</p>
            </v-card>
        </div>
    </v-container>
  </div>
</template>

<style lang="scss">

</style>

<script>
// @ is an alias to /src

export default {
  metaInfo: {
    title: 'Contact',
    titleTemplate: 'Record Time → %s',
    meta: [
      {name: 'name', content: ''},
      {name: 'description', content: ''}
    ]
  },
  components: {
      
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
