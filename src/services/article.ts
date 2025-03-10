import type { ArticleData, ArticleParam, Channels, NewArticle } from '@/types'
import request from '@/utils/request'

export const getArticles = (params: ArticleParam) => {
  return request.get<ArticleParam, ArticleData>('/mp/articles', { params })
}

export const uploadImage = (file: File) => {
  const fd = new FormData()
  fd.append('image', file)
  return request.post<FormData, { url: string }>('/upload', fd)
}
export const getChannels = async () => {
  const res = await request.get<null, { channels: Channels[] }>('/channels')
  return res.channels
}
export const publishArticle = (data: NewArticle) => {
  return request.post<NewArticle, null>('/mp/articles', data)
}

export const updateArticle = (data: NewArticle, id: string) => {
  return request.put<NewArticle, null>('/mp/articles/' + id, data)
}
export const deleteArticle = (id: string) => {
  return request.delete<null, null>('/mp/articles/' + id)
}
