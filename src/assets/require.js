/*
* 使用方法
* import { appRequire, myAxios } from '@/coMethods/require.js'
* appRequire.get(apiUrl, callback)
*
* myAxios.get(apiUrl, callback)
*
*/

/*
*
* 提供三种请求方式，get、post、postText
* 其中postText是发送form表单类型的请求。需先转换数据格式
* 数据格式为：body=xxx&title=xxx&id=0
*
*/

const modal = weex.requireModule('modal')

// 实例化stream模块对象
const stream = weex.requireModule('stream')

// 引入axios依赖
import axios from 'axios';

// 封装模块，使用方式
export const appRequire = {
  get (apiUrl, header, callback) {
    // let header = {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Content-Type': 'application/json; charset=utf-8'
    // }
    // if (nheader.token) {
    //   for (let obj in nheader) {
    //     header[obj] = nheader[obj]
    //   }
    // }
    return stream.fetch({
      method: 'GET',
      type: 'json',
      headers: header,
      url: apiUrl
    }, res => {
      if (res.ok) {
        return callback(res)
      } else {
        modal.toast({
          message: '网络错误，请稍后再试',
          duration: 0.3
        })
      }
    })
  },
  post (apiUrl, sentData, header, callback) {
    // let header = {
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'Content-Type': 'application/json; charset=utf-8'
    // }
    // if (nheader.token) {
    //   for (let obj in nheader) {
    //     header[obj] = nheader[obj]
    //   }
    // }
    return stream.fetch({
      method: 'POST',
      type: 'json',
      headers: header,
      body: sentData,
      url: apiUrl
    }, res => {
      if (res.ok) {
        // modal.toast({
        //   message: res,
        //   duration: 0.3
        // })
        return callback(res)
      } else {
        modal.toast({
          message: '网络错误，请稍后再试',
          duration: 0.3
        })
      }
    })
  },
  postText (apiUrl, sentData, header, callback) {
    // let ret = ''
    // for (let it in sendData) {
    //   if (ret !== '') {
    //     ret += '&'
    //   }
    //   ret += encodeURIComponent(it) + '=' + encodeURIComponent(sendData[it])
    // }
    return stream.fetch({
      method: 'POST',
      type: 'text',
      headers: header,
      body: sentData,
      url: apiUrl
    }, res => {
      if (res.ok) {
        return callback(res)
      } else {
        modal.toast({
          message: '网络错误，请稍后再试',
          duration: 0.3
        })
      }
    })
  }
}

export const myAxios = {
  get (apiUrl, header, callback) {
      axios.get(apiUrl, {headers: header}).then(callback).catch(res => {
        modal.toast({
          message: '网络错误，请稍后再试',
          duration: 0.3
        })
      })
    // if (nheader.token) {
    //   console.log(nheader)
    //   axios.get(apiUrl, {headers: nheader}).then(callback)
    // } else {
    //   axios.get(apiUrl).then(callback)
    // }
  },
  post (apiUrl, sendData, header, callback) {
      axios.post(apiUrl, sendData, {headers: header}).then(callback).catch(res => {
        modal.toast({
          message: '网络错误，请稍后再试',
          duration: 0.3
        })
      })
    // if (nheader.token) {
    //   console.log(nheader)
    //   axios.post(apiUrl, sendData, {headers: nheader}).then(callback)
    // } else {
    //   axios.post(apiUrl, sendData).then(callback)
    // }
  },
  postText (apiUrl, sendData, header, callback) {
    axios({
      url: apiUrl,
      method: 'post',
      data: sendData,
      // transformRequest: [function (sendData) {
      //   // Do whatever you want to transform the data
      //   let ret = ''
      //   for (let it in sendData) {
      //     if (ret !== '') {
      //       ret += '&'
      //     }
      //     ret += encodeURIComponent(it) + '=' + encodeURIComponent(sendData[it])
      //   }
      //   // ret = ret.Substring(0,ret.Length - 1)
      //   console.log(ret)
      //   return ret
      // }],
      transformRequest: [function (sendData) {
        let ret = sendData
        return ret
      }],
      headers: header
    }).then(callback).catch(res => {
      modal.toast({
        message: '网络错误，请稍后再试',
        duration: 0.3
      })
    })
  }
}
