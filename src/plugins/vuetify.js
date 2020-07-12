import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VueMeta from 'vue-meta'

Vue.use(Vuetify)
Vue.use(VueMeta)

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#00C8D8',
                secondary: '#021222'
            },
        },
    }
})

