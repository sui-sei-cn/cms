import request from '@/utils/request'

export const userRegisterService = ({ username, password, repassword }) => {
  console.log(username, password, repassword)
  return request.post('/api/reg', { username, password, repassword })
}

export const userLoginService = ({ username, password }) => {
  return request.post('/api/login', { username, password })
}
