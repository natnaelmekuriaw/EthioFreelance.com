import { RouteRecordRaw } from 'vue-router'
import Applicant from '../../views/Applicants.vue'
import CurrentJob from '../../components/jobs/CurrentJob.vue'
import EmpProfileInfo from '../../views/EmpProfileInfo.vue'
import EmployerDashboard from '../../views/EmployerDashboard.vue'
import EmployerProfile from '../../views/EmployerProfile.vue'
import PostJob from '../../views/PostJob.vue'

export const employerRoutes: RouteRecordRaw[] = [
  {
    path: '/job/post',
    name: 'PostJob',
    component: PostJob,
    meta: { requiresAuth: true, employerAuth: true }
  },
  {
    path: '/manage-jobs',
    name: 'ManageJobs',
    component: CurrentJob,
    meta: { requiresAuth: true, employerAuth: true }
  },
  {
    path: '/mangejobs',
    redirect: '/manage-jobs'
  },
  {
    path: '/employerProfile',
    name: 'EmployerProfile',
    component: EmployerProfile,
    meta: { requiresAuth: true, employerAuth: true}

  },
  {
    path: '/applicants/:id',
    name: 'Applicant',
    component: Applicant,
    meta: { requiresAuth: true, employerAuth: true}
  },
  {
    path: '/applicant:id',
    redirect: to => ({ name: 'Applicant', params: { id: to.params.id } })
  },
  {
    path: '/employer/dashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard,
    meta: { requiresAuth: true, employerAuth: true}

  },
  {
    path:'/empprofile',
    name: 'empprofile',
    component: EmpProfileInfo,
  }
]
