const System = () => import(/* webpackChunkName: "System" */ '@/container/System/index')
// 用户管理
const UserManage = () => import(/* webpackChunkName: "System/User" */ '@/container/System/user')
const UserForm = () => import(/* webpackChunkName: "System/User/Add" */ '@/container/System/form')

/*
 所有container/System目录下的路径都配置在此路由children下，避免混乱
 */
let routes = [{
  path: '/system',
  name: 'System',
  meta: {
    title: '系统功能'
  },
  component: System,
  children: [{
    path: 'user',
    name: 'User',
    meta: {
      title: '用户管理'
    },
    component: UserManage,
    children: [{
      path: 'add',
      name: 'userAdd',
      meta: {
        title: '添加用户',
        type: 'add'
      },
      component: UserForm
    }, {
      path: 'detail',
      name: 'userDetail',
      meta: {
        title: '用户详情',
        type: 'detail'
      },
      component: UserForm
    }, {
      path: 'edit',
      name: 'userEdit',
      meta: {
        title: '编辑用户',
        type: 'edit'
      },
      component: UserForm
    }]
  }]
}]

export {
  routes
}
