import axios, { AxiosError, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios'
import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading.js'

// 创建axios实例
const request = axios.create({
  baseURL: 'https://geek.itheima.net/v1_0/',
  timeout: 5000,
})
let loadingInstance1: LoadingInstance | null = null
// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    loadingInstance1 = ElLoading.service({ fullscreen: true })
    // 从localStorage获取token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  (response: { data: AxiosResponse }) => {
    loadingInstance1?.close()
    return response.data
  },
  (error: AxiosError) => {
    loadingInstance1?.close()
    return Promise.reject(error)
  },
)

export default request
