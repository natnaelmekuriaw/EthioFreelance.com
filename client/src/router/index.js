import { createRouter, createWebHistory } from 'vue-router'
import { Role } from '../helpers/role.js'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/RegisterUser.vue'
import About from '../views/About.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import AdminChart from '../components/AdminChart.vue'

import Onboarding from '../views/Onboarding.vue'
import PostJob from '../views/PostJob.vue'
import Pay from '../views/Pay.vue'
import Apply from '../views/Apply.vue'

import ViewJobs from '../views/ViewJobs.vue'
import FreelancerProfile from '../views/FreelancerProfile.vue'
import EmployerProfile from '../views/EmployerProfile.vue'
import Rating from '../components/Rating.vue'
import UpdateFreelancerProfile from '../views/UpdateFreelancerProfile.vue'
import Applicant from '../views/Applicants.vue'
import ChangePassword from '../views/ChangePassword.vue'
import FreelancerDashboard from '../views/FreelancerDashboard.vue'
import EmployerDashboard from '../views/EmployerDashboard.vue'
import CurrentJob from '../components/CurrentJob.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Reset from '../views/Reset.vue'
import EmpProfileInfo from '../views/EmpProfileInfo.vue'
import JobDetails from '../views/JobDetails.vue'
import Profile from '../views/Profile.vue'
import List from '../views/List.vue'
import Complete from '../views/Complete.vue'

import ShowRating from '../components/ShowRating.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/job/post',
    name: 'PostJob',
    component: PostJob,
    meta: { requiresAuth: true, employerAuth: true }
  },
  {
    path: '/mangejobs',
    name: 'MangeJobs',
    component: CurrentJob,
    meta: { requiresAuth: true, employerAuth: true }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
  },

  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
  //  meta: { requiresAuth: true, adminAuth: true}
  },
  {
    path: '/AdminChart',
    name: 'AdminChart',
    component: AdminChart,
    meta: { requiresAuth: true, adminAuth: true }
  },
  {
    path: '/onboarding',
    name: 'Onboarding',
    component: Onboarding,
    meta: { requiresAuth: true, freelancerAuth: true}
  },
    {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound,
  },
  {
    path: '/viewJobs',
    name: 'ViewJobs',
    component: ViewJobs,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
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
    path: '/employerProfile',
    name: 'EmployerProfile',
    component: EmployerProfile,
    meta: { requiresAuth: true, employerAuth: true}

  },
  {
    path: '/applicant:id',
    name: 'Applicant',
    component: Applicant,
    meta: { requiresAuth: true, employerAuth: true}
  },
  {
    path: '/job/detials-:id',
    name: 'JobDetails',
    component: JobDetails,
  },
  
 
  {
    path: '/Rating',
    name: 'Rating',
    component: Rating,
  },
  {
    path: '/ChangePassword',
    name: 'ChangePassword',
    component: ChangePassword,
  },
  // {
  //   path: '/apply',
  //   name: 'Apply',
  //   component: Apply,
  // },
  {
    path: '/freelancer/dashboard',
    name: 'FreelancerDashboard',
    component: FreelancerDashboard,
    meta: { requiresAuth: true, freelancerAuth: true}

  },
  {
    path: '/employer/dashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard,
    meta: { requiresAuth: true, employerAuth: true}

  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    // path: '/reset/:token',
    path:'/reset',
    name: 'reset',
    component: Reset,
  },
  {
    path:'/empprofile',
    name: 'empprofile',
    component: EmpProfileInfo,
  },
  {
    path:'/jobdetails',
    name: 'jobdetails',
    component: JobDetails,
  },
  {
    path:'/showrating',
    name: 'showrating',
    component: ShowRating,
  },
  {
    path:'/list',
    name: 'List',
    component: List,
  },
  {
    path: '/job/complete-:id',
    name: 'Complete',
    component: Complete,
    meta: { requiresAuth: true, freelancerAuth: true}
  }
  


]

const router = createRouter({
  // eslint-disable-next-line no-undef
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const loggedIn = JSON.parse(localStorage.getItem('user'))

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    next(from)
  }
  if(to.meta.freelancerAuth && !(loggedIn.accountType == Role.Freelancer) ){
      next(from)
  }
  if(to.meta.employerAuth && !(loggedIn.accountType == Role.Employer) ){
    next(from)
}
  if(to.meta.adminAuth && !(loggedIn.accountType == Role.Admin) ){
    next(from)
  }

// if (to.matched.some(record => record.meta.authorize.includes(loggedIn.accountType) )) {
//   // role not authorised so redirect to home page
//     return next(from);
// }
next()
})

export default router
