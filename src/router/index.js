import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from "../components/Login";
import Main from "../components/Main";
import Music from "../components/Music";
import List from "../components/List";
import Profile from "../components/Profile";

Vue.use(VueRouter)


export default new VueRouter({
    routes: [
        {path: '/login', component: Login},
        {path: '/main', component: Main},
        {path: '/music', component: Music},
        {path: '/list', component: List},
        {path: '/profile', component: Profile},
        {path: '/', redirect: '/login'},
    ]
})
