import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

// container分路由引入
// import { routes as loginRoutes } from './login'
import { routes as blogRoutes } from './blog'
import { routes as taskRoutes } from './task'
import { routes as interfaceRoutes } from './interface'
import { routes as systemRoutes } from './system'

Vue.use(Router)

let route = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: []
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('container/login/index'),
    hidden: true,
    children: []
  }
]
// route[0].children = route[0].children.concat(loginRoutes)
route[0].children = route[0].children.concat(blogRoutes)
route[0].children = route[0].children.concat(taskRoutes)
route[0].children = route[0].children.concat(interfaceRoutes)
route[0].children = route[0].children.concat(systemRoutes)

export default new Router({
  routes: route,
  linkActiveClass: 'active'
})
