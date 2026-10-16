import { RouteRecordRaw } from 'vue-router'
import Apply from '../../views/Apply.vue'
import JobDetails from '../../views/JobDetails.vue'
import List from '../../views/List.vue'
import Pay from '../../views/Pay.vue'
import ViewJobs from '../../views/ViewJobs.vue'

export const jobsRoutes: RouteRecordRaw[] = [
  {
    path: '/apply-:id',
    name: 'Apply',
    component: Apply
  },
  {
    path: '/payment',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/jobs',
    name: 'BrowseJobs',
    component: ViewJobs,
  },
  {
    path: '/viewJobs',
    redirect: '/jobs'
  },
  {
    path: '/job/details/:id',
    name: 'JobDetails',
    component: JobDetails,
  },
  {
    path: '/job/detials-:id',
    redirect: to => ({ name: 'JobDetails', params: { id: to.params.id } })
  },
  {
    path:'/jobdetails',
    name: 'jobdetails',
    component: JobDetails,
  },
  {
    path:'/list',
    name: 'List',
    component: List,
  }
]
