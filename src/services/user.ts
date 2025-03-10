import request from '@/utils/request'
import {
  type ArticleItem,
  type LoginParams,
  type NewArticle,
  type Response,
  type ResToken,
  type UserProfile,
} from '@/types/index'

export const getCode = async (mobile: string) => {
  return request.get('/sms/codes/' + mobile)
}
export const login = async (data: LoginParams) => {
  return request.post<LoginParams, Response<ResToken>>('/authorizations', data)
}
export const getProfile = () => {
  return request.get<null, UserProfile>('/user/profile')
}
export const getDetailById = (id: string) => {
  return request.get<null, NewArticle>('/mp/articles/' + id)
}
