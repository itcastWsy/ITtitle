import request from '@/utils/request'
import { type LoginParams, type Response, type ResToken, type UserProfile } from '@/types/index'

export const getCode = async (mobile: string) => {
  return request.get('/sms/codes/' + mobile)
}
export const login = async (data: LoginParams) => {
  return request.post<LoginParams, Response<ResToken>>('/authorizations', data)
}
export const getProfile = async () => {
  return request.get<null, Response<UserProfile>>('/user/profile')
}
