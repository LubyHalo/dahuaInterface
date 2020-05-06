import request from '@/utils/request'
import JSEncrypt from 'jsencrypt'

let Api = function () {}
let axiosRequest = request.axiosIntercept()
let token = ''
let userID = ''

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
  // // 获取用于加密参数的公钥
  // gerPublickeyForParam (url, fn) {
  //   axiosRequest.get('/interfaceApi' + url).then(res => {
  //     if (res.status === 200) {
  //       fn(res.data)
  //     }
  //   })
  // },
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
        token = res.data.token
        userID = res.data.id
        fn(res.data)
      }
    })
  },
  // 获取所有接口列表
  getInterfaceList (url, fn) {
    axiosRequest.get('/api' + url).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 根据分类ID获取接口列表
  getInterfaceListByCategoryId (url, categoryId, fn) {
    axiosRequest.get('/api' + url + '/' + categoryId).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 添加接口
  addInterface (url, param, fn) {
    axiosRequest.post('/api' + url, param).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 修改接口
  updateInterface (url, param, fn) {
    axiosRequest.post('/api' + url, param).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 删除接口
  deleteInterface (url, fn) {
    axiosRequest.post('/api' + url).then(res => {
      if (res.status === 200) {
        fn(res.data)
      }
    })
  },
  // 接口测试请求POST
  // interfaceRequestPost (url, param, fn) {
  //   axiosRequest.post('/interfaceApi' + url + '?token=' + token, param).then(res => {
  //     if (res.status === 200) {
  //       fn(res.data)
  //     }
  //   })
  // },
  interfaceRequestPost (url, param, fn, hasUserID = false) {
    if (hasUserID) {
      axiosRequest.post('/interfaceApi' + url + '?token=' + token + '&userId=' + userID, param).then(res => {
        if (res.status === 200) {
          fn(res.data)
        }
      })
    } else {
      axiosRequest.post('/interfaceApi' + url + '?token=' + token, param).then(res => {
        if (res.status === 200) {
          fn(res.data)
        }
      })
    }
  },
  // 接口测试请求GET
  interfaceRequestGet (url, param, fn, hasUserID = false) {
    // axiosRequest.get('/interfaceApi' + url + '?token=' + token, param).then(res => {
    //   if (res.status === 200) {
    //     fn(res.data)
    //   }
    // })
    if (hasUserID) {
      axiosRequest.get('/interfaceApi' + url + '?token=' + token + '&userId=' + userID, param).then(res => {
        if (res.status === 200) {
          fn(res.data)
        }
      })
    } else {
      axiosRequest.get('/interfaceApi' + url + '?token=' + token, param).then(res => {
        if (res.status === 200) {
          fn(res.data)
        }
      })
    }
  }
}
export default new Api()
