import Vue from 'vue'
import VueRouter from 'vue-router'

const Friburgo = () => import(/* webpackChunkName: "friburgo" */ '@@/Friburgo.vue')
const Contato = () => import(/* webpackChunkName: "contato" */ '@@/Contato.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: { name: 'index' }
    },
    {
        path: '/',
        name: 'index',
        component: Friburgo
    },
    {
        path: '/contato',
        name: 'contato',
        component: Contato
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
