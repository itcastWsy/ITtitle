import type { ArticleData, ArticleParam } from '@/types'
import request from '@/utils/request'

export const getArticles = (params: ArticleParam) => {
  return request.get<ArticleParam, ArticleData>('/mp/articles', { params })
}

export const uploadImage = (file: File) => {
  const fd = new FormData()
  fd.append('image', file)
  return request.post<FormData, { url: string }>('/upload', fd)
}
