import request from '@/utils/request'
import { type LoginParams } from '@/types/index'

export const getCode = async (mobile: string) => {
  return request.get('/sms/codes/' + mobile)
}
export const login = async (data: LoginParams) => {
  return request.post('/authorizations', data)
}
