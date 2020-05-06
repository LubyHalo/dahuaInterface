import request from 'utils/request'

let Api = function () {}
let axiosRequest = request.axiosIntercept()

Api.prototype = {
  // 获取公钥用以加密密码字符串
  getPublickey (loginName, fn) {
    axiosRequest.post('/interfaceApi/WPMS/getPublicKey', {
      loginName: loginName
    }).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 获取所有用户列表
  getUserList (fn) {
    axiosRequest.get('/api/User/list').then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 获取所有用户列表
  addUser (form, fn) {
    axiosRequest.post('/api/User/Insert', form).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 获取所有用户列表
  updateUser (form, fn) {
    axiosRequest.post('/api/User/Update', form).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 获取所有用户列表
  deleteUser (id, fn) {
    axiosRequest.post('/api/User/Delete?id=' + id).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  }
}
export default new Api()
