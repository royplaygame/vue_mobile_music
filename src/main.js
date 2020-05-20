import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App.vue'
import router from './router'
import 'mint-ui/lib/style.css'
import store from "./store";

Vue.use(MintUI)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if (store.state.userInfo || to.path == "/login") {
        next()
    } else {
        next({
            path: '/login'
        })
    }
})


new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
