import { RouteRecordRaw } from 'vue-router'
import Complete from '../../views/Complete.vue'
import FreelancerDashboard from '../../views/FreelancerDashboard.vue'
import FreelancerProfile from '../../views/FreelancerProfile.vue'
import Onboarding from '../../views/Onboarding.vue'
import UpdateFreelancerProfile from '../../views/UpdateFreelancerProfile.vue'

export const freelancerRoutes: RouteRecordRaw[] = [
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: Onboarding,
    meta: { requiresAuth: true, freelancerAuth: true}
  },
  {
    path: '/freelancerProfile',
    name: 'FreelancerProfile',
    component: FreelancerProfile,
    meta: { requiresAuth: true, freelancerAuth: true}
  },
  {
    path: '/updateFreelancerProfile',
    name: 'UpdateFreelancerProfile',
    component: UpdateFreelancerProfile,
    meta: { requiresAuth: true, freelancerAuth: true}

  },
  {
    path: '/freelancer/dashboard',
    name: 'FreelancerDashboard',
    component: FreelancerDashboard,
    meta: { requiresAuth: true, freelancerAuth: true}

  },
  {
    path: '/job/complete-:id',
    name: 'Complete',
    component: Complete,
    meta: { requiresAuth: true, freelancerAuth: true}
  }
]
