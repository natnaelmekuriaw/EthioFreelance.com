import { createStore } from 'vuex'

import * as layout from './modules/layout'
import * as jobs from './modules/jobs'
import * as users from './modules/users'
import * as auth from './modules/auth'
import * as payments from './modules/payments'
import * as profile from './modules/profile'
import * as reports from './modules/reports'

export default createStore<any>({
  state: {
    ...auth.state,
    ...layout.state,
    ...jobs.state,
    ...users.state,
  },
  mutations: {
    ...reports.mutations,
    ...layout.mutations,
    ...users.mutations,
    ...auth.mutations,
    ...jobs.mutations,
  },
  actions: {
    ...users.actions,
    ...jobs.actions,
    ...auth.actions,
    ...payments.actions,
    ...profile.actions,
  },
  getters: {
    ...auth.getters,
    ...jobs.getters,
  },
})
