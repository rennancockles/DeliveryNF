import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

console.log(process.env.NODE_ENV)

Vue.use(VueAnalytics, {
    id: 'UA-161791729-1',
    router
})

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
