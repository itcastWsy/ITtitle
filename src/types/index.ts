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
export type ArticleParam = {
  status: string
  channel_id: string
  begin_pubdate: string
  end_pubdate: string
  page: number
  per_page: number
}
// 定义文章封面的类型
export type ArticleCover = {
  type: string // 封面类型，0-无封面，1-1张封面图片，3-3张封面
  images: string // 封面图片
}

// 定义文章项的类型
export type ArticleItem = {
  id: string // 文章id
  title: string // 文章标题
  status: string // 文章状态
  comment_count: string // 评论数量
  pubdate: string // 发布时间
  cover: ArticleCover // 封面
  like_count: number // 点赞数
  read_count: string // 阅读数
}

// 定义 data 对象的类型
export type ArticleData = {
  page: number // 当前页数
  per_page: number // 每页数量
  results: ArticleItem[] // 文章项数组
  total_count: number // 文章总数
}
