import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

// container分路由引入
import { routes as blogRoutes } from './blog'
import { routes as taskRoutes } from './task'
import { routes as interfaceRoutes } from './interface'

Vue.use(Router)

let route = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: []
  }
]
route[0].children = route[0].children.concat(blogRoutes)
route[0].children = route[0].children.concat(taskRoutes)
route[0].children = route[0].children.concat(interfaceRoutes)

export default new Router({
  routes: route,
  linkActiveClass: 'active'
})
