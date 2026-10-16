import { RouteRecordRaw } from 'vue-router'
import About from '../../views/About.vue'
import Home from '../../views/Home.vue'
import FindTalent from '../../views/FindTalent.vue'
import HelpCenter from '../../views/HelpCenter.vue'
import Login from '../../views/Login.vue'
import PolicyInfo from '../../views/PolicyInfo.vue'
import Register from '../../views/RegisterUser.vue'

export const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/talent',
    name: 'FindTalent',
    component: FindTalent
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/help',
    name: 'HelpCenter',
    component: HelpCenter,
  },
  {
    path: '/policies',
    name: 'PolicyInfo',
    component: PolicyInfo,
  }
]
