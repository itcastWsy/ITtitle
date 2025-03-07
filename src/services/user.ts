import request from '@/utils/request'

export const getCode = async (mobile: string) => {
  return request.get('/sms/codes/' + mobile)
}
