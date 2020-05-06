import request from '@/utils/request'

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
  // 获取所有接口列表
  getTaskList (url, fn) {
    axiosRequest.get('/api' + url).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  }
}
export default new Api()
