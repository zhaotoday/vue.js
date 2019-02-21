import env from 'jt-env'

// 基础地址
const BASE_URL = env.isDev() ? 'http://localhost:3002' : 'https://api.cmsx.cn'

// 接口地址
const API_URL = BASE_URL + '/api/v1/admin'

// 公开接口地址
const PUBLIC_API_URL = BASE_URL + '/api/v1/public'

// 分页大小
const PAGE_SIZE = 10

export default {
  BASE_URL,
  API_URL,
  PUBLIC_API_URL,
  PAGE_SIZE
}
