import { RouteRecordRaw } from 'vue-router'
import AdminChart from '../../components/admin/shared/AdminChart.vue'
import AdminDashboard from '../../views/AdminDashboard.vue'

export const adminRoutes: RouteRecordRaw[] = [
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true, adminAuth: true }
  },
  {
    path: '/AdminChart',
    name: 'AdminChart',
    component: AdminChart,
    meta: { requiresAuth: true, adminAuth: true }
  }
]
