import request from '@/utils/request'
import JSEncrypt from 'jsencrypt'

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
  // 登录接口，获取登录Token
  login (param, fn) {
    let encrypt = new JSEncrypt()
    encrypt.setPublicKey(param.publicKey)
    let passwordEncode = encrypt.encrypt(param.loginPass)
    axiosRequest.post('/interfaceApi/WPMS/login', {
      loginName: param.loginName,
      loginPass: passwordEncode
    }).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  }
}
export default new Api()
