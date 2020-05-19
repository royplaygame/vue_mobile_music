import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
