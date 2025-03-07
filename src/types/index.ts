export type LoginParams = {
  mobile: string
  code: string
}
export type ResToken = {
  token: string
}
export type LeftMenuType = { path: string; title: string; icon: string }
export type Response<T> = {
  message: string
  data: T
}
export type UserProfile = {
  id: string
  name: string
  photo: string
  mobile: string
  gender: string
  birthday: string
}
