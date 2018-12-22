const Task = () => import(/* webpackChunkName: "task" */ '@/container/task/index')

/*
 所有container/blog目录下的路径都配置在此路由children下，避免混乱
 */
let routes = [{
  path: '/task',
  name: 'task',
  component: Task,
  children: [{
    path: 'taskdemo',
    component: Task
  }]
}]

export {
  routes
}
