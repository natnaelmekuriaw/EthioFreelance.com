import { NavigationGuard } from 'vue-router'
import { Role } from '../helpers/role'
import { getStoredUser } from '../helpers/session'

export const authGuard: NavigationGuard = (to, from) => {
  const user = getStoredUser()
  const blocked = () => from.matched.length ? false : { name: 'Home' }

  if (to.matched.some(record => record.meta.requiresAuth) && !user) return blocked()
  if (to.meta.freelancerAuth && user?.accountType !== Role.Freelancer) return blocked()
  if (to.meta.employerAuth && user?.accountType !== Role.Employer) return blocked()
  if (to.meta.adminAuth && user?.accountType !== Role.Admin) return blocked()
}
