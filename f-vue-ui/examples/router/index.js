import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Button.vue')
  },
  {
    path: '/divider',
    name: 'Divider',
    component: () => import('../views/DividerTest.vue')
  },
  {
    path: '/slider',
    name: 'Slider',
    component: () => import('../views/SliderTest.vue')
  }
]

const router = new VueRouter({
  // 删掉这两行就转为hash模式了
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
