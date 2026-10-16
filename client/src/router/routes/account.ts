import { RouteRecordRaw } from 'vue-router'
import ChangePassword from '../../views/ChangePassword.vue'
import ForgotPassword from '../../views/ForgotPassword.vue'
import Profile from '../../views/Profile.vue'
import Reset from '../../views/Reset.vue'

export const accountRoutes: RouteRecordRaw[] = [
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
  },
  {
    path: '/ChangePassword',
    redirect: '/change-password'
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    path:'/reset',
    name: 'reset',
    component: Reset,
  }
]
