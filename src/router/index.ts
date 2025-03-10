import { useUserStore } from '@/stores'
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layout/Layout.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: { title: '数据统计', icon: 'Histogram' },
      },
      {
        path: '/article',
        name: 'Article',
        redirect: '/article/index',
      },
      {
        path: '/article/index',
        name: 'ArticleIndex',
        component: () => import('@/views/article/Index.vue'),
      },
      {
        path: '/article/add/:id?',
        name: 'ArticleAdd',
        component: () => import('@/views/article/Add.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
// 路由守卫
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const token = userStore.token
  if (to.path === '/login') {
    next()
  } else {
    if (token) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router
