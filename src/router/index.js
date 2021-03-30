import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import MenuDetail from '../views/MenuDetail.vue'
import Breakfast from '../views/Breakfast.vue'
import Lunch from '../views/Lunch.vue'
import Drink from '../views/Drink.vue'
import Basket from '../views/Basket.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu
    },
    {
        path: '/menu/:id',
        name: 'MenuDetail',
        component: MenuDetail
    },
    {
        path: '/breakfast',
        name: 'Breakfast',
        component: Breakfast
    },
    {
        path: '/lunch',
        name: 'Lunch',
        component: Lunch
    },
    {
        path: '/drink',
        name: 'Drink',
        component: Drink
    },
    {
        path: '/basket',
        name: 'Basket',
        component: Basket
    },
    {
        path: '/success',
        name: 'Success',
        component: Success
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router