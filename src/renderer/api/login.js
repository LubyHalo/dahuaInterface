import request from '@/utils/request'

let Api = function () {}
let axiosRequest = request.axiosIntercept()

Api.prototype = {
  // 用户登录
  login (params, successFn, errorFn) {
    axiosRequest.post('/mock/user/login', params).then(res => {
      if (res.status === 200) {
        successFn(res.data)
      }
    }).catch(error => {
      errorFn(error)
    })
  },
  // 获取用户信息
  getUserInfo (token, fn) {
    axiosRequest.get('/mock/user/info').then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 用户登出
  logout (fn) {
    axiosRequest.get('/mock/user/logout').then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  }
}
export default new Api()
