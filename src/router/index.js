import Vue from 'vue'
import VueRouter from 'vue-router'

const Deliveries = () => import(/* webpackChunkName: "deliveries" */ '@@/Deliveries.vue')
const Sobre = () => import(/* webpackChunkName: "sobre" */ '@@/Sobre.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: { name: 'deliveries' }
    },
    {
        path: '/',
        redirect: { name: 'deliveries' }
    },
    {
        path: '/deliveries',
        name: 'deliveries',
        component: Deliveries
    },
    {
        path: '/sobre',
        name: 'sobre',
        component: Sobre
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
