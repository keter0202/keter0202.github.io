import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index' // 首页
import fanLing from '@/views/fan_ling/index' // fan ling

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fan-ling',
      name: 'fanLing',
      component: fanLing
    }
  ]
})
