/*
* 使用方法
* import { appRequire, myAxios } from '@/coMethods/require.js'
* appRequire.get(apiUrl, callback)
*
* myAxios.get(apiUrl, callback)
* 
*/

// 实例化stream模块对象
const stream = weex.requireModule('stream')

// 引入axios依赖
import axios from 'axios';

// 封装模块，使用方式
export const appRequire = {
  get (apiUrl, callback) {
    return stream.fetch({
      method: 'GET',
      type: 'json',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Type': 'application/json; charset=utf-8'
      },
      url: apiUrl
    }, callback)
  },
  post (apiUrl, sentData, callback) {
    return stream.fetch({
      method: 'POST',
      type: 'json',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: sentData,
      url: apiUrl
    }, callback)
  }
}

export const myAxios = {
  get (apiUrl, callback) {
    axios.get(apiUrl).then(callback)
  },
  post (apiUrl, sendData, callback) {
    axios.post(apiUrl, sendData).then(callback)
  }
}
