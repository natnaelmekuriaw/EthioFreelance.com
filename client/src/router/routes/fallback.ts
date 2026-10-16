import { RouteRecordRaw } from 'vue-router'
import PageNotFound from '../../views/PageNotFound.vue'

export const fallbackRoutes: RouteRecordRaw[] = [
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]
