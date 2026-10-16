import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { authGuard } from './guards'
import { publicRoutes } from './routes/public'
import { accountRoutes } from './routes/account'
import { jobsRoutes } from './routes/jobs'
import { freelancerRoutes } from './routes/freelancer'
import { employerRoutes } from './routes/employer'
import { adminRoutes } from './routes/admin'
import { ratingsRoutes } from './routes/ratings'
import { fallbackRoutes } from './routes/fallback'

const routes: RouteRecordRaw[] = [
  ...publicRoutes,
  ...accountRoutes,
  ...jobsRoutes,
  ...freelancerRoutes,
  ...employerRoutes,
  ...adminRoutes,
  ...ratingsRoutes,
  ...fallbackRoutes
]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  }
})

router.beforeEach(authGuard)

export default router
