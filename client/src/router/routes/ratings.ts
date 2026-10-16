import { RouteRecordRaw } from 'vue-router'
import Rating from '../../components/profiles/Rating.vue'
import ShowRating from '../../components/profiles/ShowRating.vue'

export const ratingsRoutes: RouteRecordRaw[] = [
  {
    path: '/Rating',
    name: 'Rating',
    component: Rating,
  },
  {
    path:'/showrating',
    name: 'showrating',
    component: ShowRating,
  }
]
