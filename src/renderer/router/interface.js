const Interface = () => import(/* webpackChunkName: "interface" */ '@/container/interface/index')

/*
 所有container/interface目录下的路径都配置在此路由children下，避免混乱
 */
let routes = [{
  path: '/interface',
  name: 'interface',
  component: Interface,
  children: [{
    path: 'interfacedemo',
    component: Interface
  }]
}]

export {
  routes
}
