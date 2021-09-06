import axios from 'axios'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getSession, clearSession } from './storage'
import router from '../router'

export const baseURL = 'http://192.168.0.190:8085'

// 创建一个 axios 实例
const request = axios.create({
  baseURL,
  timeout: 60000,
  headers: { 'Content-Type': 'application/json' }
})

// 添加请求拦截器
request.interceptors.request.use(config => {
  if (getSession('voucher')) {
    config.headers.common[getSession('userInfo').tokenName] = `${getSession('voucher')}`
  }
  return config
}, error => {
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use(response => {
  const res = response.data
  if (res.code && res.code !== 0) {
    if (res.message=="未登录,没有权限访问!" || res.code === 4001) {
      clearSession()
      router.push('/login')
      ElMessageBox.alert('你已被登出，请重新登录', '提示', {})
    }
    return res
  } else {
    return Promise.reject(request.interceptors.response)
  }
}, error => {
  if (error.message.indexOf('timeout') === -1) {
    ElMessage.error('网络超时')
  } else if (error.message === 'Network Error') {
    ElMessage.error('网络连接错误')
  } else {
    if (error.response.data) {
      ElMessage.error(error.response.statusText)
    } else {
      ElMessage.error('接口路径找不到')
    }
  }
  return Promise.reject(error)
})

export default request
