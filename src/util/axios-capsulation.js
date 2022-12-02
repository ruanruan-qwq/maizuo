import axios from 'axios'
import { Toast } from 'vant'

const axiosCapsulation = axios.create({
  // 固定请求地址
  baseURL: 'https://m.maizuo.com/',
  // 1000 之后数据没有回来会超时
  timeout: 10000,
  // 固定请求头
  headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16666865834317825111949313","bc":"310100"}' }
})

// 在请求发起之前拦截
axiosCapsulation.interceptors.request.use(function (config) {
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
})

// 在请求成功之后 调用之前拦截
axiosCapsulation.interceptors.response.use(function (response) {
  Toast.clear()
  return response
})

export default axiosCapsulation
