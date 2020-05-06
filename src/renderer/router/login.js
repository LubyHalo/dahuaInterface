const Login = () => import(/* webpackChunkName: "login" */ '@/container/login/index')

/*
 所有container/blog目录下的路径都配置在此路由children下，避免混乱
 */
let routes = [{
  path: '/login',
  name: 'login',
  component: Login,
  children: [{
    path: 'logindemo',
    component: Login
  }]
}]

export {
  routes
}

/* webpackChunkName: "login" */
// 是为了后面的路由懒加载
