import { setAuthToken } from '../../services/http';
import router from '../../router';
import { registerAccount, loginAccount, fetchCurrentUser } from '../../services/auth';

export const state = {
  user: null,
};

export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData;
    localStorage.setItem('user', JSON.stringify(userData));
    setAuthToken(userData.token);
  },
  CLEAR_USER_DATA() {
    localStorage.removeItem('user');
    router.go('Home' as any);
  },
};

export const getters = {
  loggedIn(state) {
    return !!state.user;
  },
  userRole(state) {
    return state.user.accountType;
  },
  userId(state) {
    return state.user.id;
  },
  isprofile(state) {
    return state.user.profile_created;
  },
  Name(state) {
    return state.user.firstname + ' ' + state.user.lastname;
  },
};

export const actions = {
  register({ commit }, credentials) {
    return registerAccount(credentials).then(({ data }) => {
      commit('SET_USER_DATA', data);
    });
  },
  login({ commit }, credentials) {
    return loginAccount(credentials).then(({ data }) => {
      commit('SET_USER_DATA', data);
    });
  },
  logout({ commit }) {
    commit('CLEAR_USER_DATA');
  },
  secureRoute({ commit }) {
    return fetchCurrentUser().then(res => {
      console.log(commit);
      console.log(`response-from-secure: ${res.data}`);
    }).catch(error => console.log(error));
  },
};
