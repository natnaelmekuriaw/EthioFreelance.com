import { fetchUsers, updateUserStatus } from '../../services/users';

export const state = {
  users: [],
  freelancers: [],
  activeFreelancers: [],
  pendingFreelancers: [],
  bannedFreelancers: [],
  employers: [],
  activeEmployers: [],
  pendingEmployers: [],
  bannedEmployers: [],
};

export const mutations = {
  getUsers(state, payload) {
    state.freelancers = [];
    state.activeFreelancers = [];
    state.pendingFreelancers = [];
    state.bannedFreelancers = [];
    state.employers = [];
    state.activeEmployers = [];
    state.pendingEmployers = [];
    state.bannedEmployers = [];
    state.users = payload;

    state.users.forEach(element => {
      if (element['accountType'] == "freelancer")
        state.freelancers.push(element);
      else
        state.employers.push(element);
    });
    state.freelancers.forEach(element => {
      if (element['accountStatus'] == "pending")
        state.pendingFreelancers.push(element);
      else if (element['accountStatus'] == "active")
        state.activeFreelancers.push(element);
      else if (element['accountStatus'] == "banned")
        state.bannedFreelancers.push(element);
    });
    state.employers.forEach(element => {
      if (element['accountStatus'] == "pending")
        state.pendingEmployers.push(element);
      else if (element['accountStatus'] == "active")
        state.activeEmployers.push(element);
      else if (element['accountStatus'] == "banned")
        state.bannedEmployers.push(element);
    });
  },
};

export const actions = {
  async approve(context, payload) {
    const user_id = payload;
    await updateUserStatus('approve', user_id).then(result => console.log(result)).catch(err => console.log(err));
    const users = await fetchUsers();
    context.commit('getUsers', users['data']);
  },
  async ban(context, payload) {
    const user_id = payload;
    await updateUserStatus('ban', user_id).then(result => console.log(result)).catch(err => console.log(err));
    const users = await fetchUsers();
    context.commit('getUsers', users['data']);
  },
  async unBan(context, payload) {
    const user_id = payload;
    await updateUserStatus('unban', user_id).then(result => console.log(result)).catch(err => console.log(err));
    const users = await fetchUsers();
    context.commit('getUsers', users['data']);
  },
  async displayFreelancers(context) {
    const users = await fetchUsers();
    context.commit('getUsers', users['data']);
  },
};
