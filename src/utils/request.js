import axios from 'axios'
import { useUserStore } from '@/stores'
import { ElMessage } from 'element-plus'
import router from '@/router'

const BASE_URL = 'http://big-event-vue-api-t.itheima.net'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    const useStore = useUserStore()
    if (useStore.token) {
      config.headers.Authorization = useStore.token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 0) {
      return res
    }
    ElMessage.error(res.data.message || '请求失败')
    return Promise.reject(res.data)
  },
  (err) => {
    if (err.response?.status === 401) {
      router.push('/login')
    }
    ElMessage.error(err.response.data.message || '请求失败')
    return Promise.reject(err)
  },
)
export default instance
export { BASE_URL }
