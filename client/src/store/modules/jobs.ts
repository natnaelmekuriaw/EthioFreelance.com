import { searchJobs, searchJobsWithFilters, updateJobStatus, postJob, completeJob } from '../../services/jobs';

export const state = {
  jobId: 0,
  allJobs: [],
  pending: false,
  searchedjobs: [],
};

export const mutations = {
  SET_SEARCHEDJOBS(state, data) {
    state.searchedjobs = data;
  },
};

export const getters = {
  searchedjob(state) {
    return state.searchedjobs;
  },
};
export const actions = {
  jobPost({ commit }, credentials) {
    return postJob(credentials).then(({ data }) => {
      console.log(data);
      console.log(commit);
    });
  },
  jobComplete({ commit }, credentials) {
    return completeJob(credentials).then(({ data }) => {
      console.log(data);
      console.log(commit);
    });
  },
  async approveJob(context, payload) {
    const jobId = payload;
    const user = { jobId };
    console.log(user);
    let allJobs: any = await updateJobStatus('approve', jobId).then(result => console.log(result)).catch(err => console.log(err));
    allJobs = await searchJobs();
    context.commit('SET_SEARCHEDJOBS', allJobs['data']);
  },
  async closeJob(context, payload) {
    const jobId = payload;
    console.log('closing a job with id', jobId);
    let allJobs: any = await updateJobStatus('close', jobId).then(result => console.log(result)).catch(err => console.log(err));
    allJobs = await searchJobs();
    context.commit('SET_SEARCHEDJOBS', allJobs['data']);
  },
  async deleteJob(context, payload) {
    const jobId = payload;
    console.log('deleting a job with id', jobId);
    let allJobs: any = await updateJobStatus('delete', jobId).then(result => console.log(result)).catch(err => console.log(err));
    allJobs = await searchJobs();
    context.commit('SET_SEARCHEDJOBS', allJobs['data']);
  },
  async getJobs(context) {
    const allJobs = await searchJobs();
    console.log(`just do ot: ${allJobs['data']}`);
    context.commit('SET_SEARCHEDJOBS', allJobs['data']);
  },
  loadSearchedJobs({ commit }, search) {
    return searchJobsWithFilters(search).then(({ data }) => {
      console.log(`datasssssssss: ${data}`);
      commit('SET_SEARCHEDJOBS', data);
    });
  },
};
