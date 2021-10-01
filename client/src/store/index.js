import { createStore } from 'vuex'

// import pdf from 'pdf-creator-node'
// import fs from 'fs'

import axios from 'axios'
import router from '../router'



export default createStore({


  state: {
    user: null,
    minMax: false,
    id: 1,
    jobId:0,
    users: [],
    allJobs: [],
    freelancers: [],
    pending: false,
    activeFreelancers: [],
    pendingFreelancers: [],
    bannedFreelancers: [],
    employers: [],
    activeEmployers: [],
    pendingEmployers: [],
    bannedEmployers: [],
    searchedjobs:[],
  },
  mutations: {
    generateReport(){
      alert("Generating a report, Pleas wait.......")
    //   let freelancers = fs.readFile("hello.html","utf-8")
    //   let users = [
    //     { name: "nhatty", age: 200 }
    //   ];
    //   let document = {
    //     html: freelancers,
    //     data: {
    //       users: users
    //     },
    //     path: "./report.pdf",
    //     type: ""
    //   };
    //     var options = {
    //     format: "A3",
    //     orientation: "portrait",
    //     border: "10mm",
    //     header: {
    //         height: "45mm",
    //         contents: '<div style="text-align: center;">Author: Shyam Hajare</div>'
    //     },
    //     footer: {
    //         height: "28mm",
    //         contents: {
    //             first: 'Cover page',
    //             2: 'Second page', // Any page number is working. 1-based index
    //             default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
    //             last: 'Last Page'
    //         }
    //     }
    // };

    //   pdf.create(document, options).then(()=>console.log("report generated successfully")).catch(()=>console.log("Error generating report"))
        },

      min(state) {
      // state.minMax = !state.minMax;
      state.minMax = !state.minMax;
    },
    getUsers(state, payload) {
      state.freelancers= [];
      state.activeFreelancers= [];
      state.pendingFreelancers= [];
      state.bannedFreelancers = [];
      state.employers= [],
      state.activeEmployers= [],
      state.pendingEmployers= [],
      state.bannedEmployers= [],
      state.users = payload;

      state.users.forEach(element => {
        if (element['accountType'] == "freelancer")
          state.freelancers.push(element)
        else
          state.employers.push(element)
      }
      );
      state.freelancers.forEach(element => {
        if (element['accountStatus'] == "pending")
          state.pendingFreelancers.push(element)
        else if (element['accountStatus'] == "active")
          state.activeFreelancers.push(element)
        else if (element['accountStatus'] == "banned")
          state.bannedFreelancers.push(element)
      })
       state.employers.forEach(element => {
        if (element['accountStatus'] == "pending")
          state.pendingEmployers.push(element)
        else if(element['accountStatus'] == "active")
          state.activeEmployers.push(element)
        else if(element['accountStatus'] == "banned")
          state.bannedEmployers.push(element)

       })
      
           
       
    },
    SET_USER_DATA(state, userData) {
      state.user = userData
      localStorage.setItem('user', JSON.stringify(userData))
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        userData.token
      }`
    },
    CLEAR_USER_DATA () {
      localStorage.removeItem('user')
      // location.reload()
      router.go('Home')
    },
    SET_SEARCHEDJOBS(state, data) {
      state.searchedjobs = data
    }
  },
  actions: {
    async approveJob( context , payload) {
        const jobId = payload;
      const user = { jobId };
      console.log(user)
        let allJobs = await axios.put("http://localhost:8081/api/job/approve", user).then(result => console.log(result)).catch((err) => console.log(err));
      allJobs = await axios.get('http://localhost:8081/api/job/search');
      context.commit('SET_SEARCHEDJOBS', allJobs['data'])
  
    },
    async closeJob(context, payload) {
        const jobId = payload;
       console.log("closing a job with id",jobId)  
      const user = { jobId };
        let allJobs = await axios.put("http://localhost:8081/api/job/close", user).then(result => console.log(result)).catch((err) => console.log(err));
      allJobs = await axios.get('http://localhost:8081/api/job/search');
      context.commit('SET_SEARCHEDJOBS', allJobs['data'])
  
    },
      async deleteJob(context, payload) {
        const jobId = payload;
       console.log("deleting a job with id",jobId)  
      const user = { jobId };
        let allJobs = await axios.put("http://localhost:8081/api/job/delete", user).then(result => console.log(result)).catch((err) => console.log(err));
      allJobs = await axios.get('http://localhost:8081/api/job/search');
      context.commit('SET_SEARCHEDJOBS', allJobs['data'])
  
        },
       async approve( context, payload) {
      const user_id = payload;
       const user = { user_id };


      await axios.put("http://localhost:8081/api/user/approve", user).then(result => console.log(result)).catch(err => console.log(err))
      let users = await axios.get("http://localhost:8081/api/users");
      context.commit('getUsers',users['data'])
    },
    
       async ban( context, payload) {
      const user_id = payload;
       const user = { user_id };

      await axios.put("http://localhost:8081/api/user/ban", user).then(result => console.log(result)).catch(err => console.log(err))
      let users = await axios.get("http://localhost:8081/api/users");
      context.commit('getUsers',users['data'])
    },
          async unBan( context, payload) {
      const user_id = payload;
       const user = { user_id };

      
      await axios.put("http://localhost:8081/api/user/unban", user).then(result => console.log(result)).catch(err => console.log(err))
      let users = await axios.get("http://localhost:8081/api/users");
      context.commit('getUsers',users['data'])
    },
       async displayFreelancers(context) {

         let users = await axios.get("http://localhost:8081/api/users");
         
     context.commit('getUsers',users['data'])
    },
    async getJobs(context) {
      const allJobs = await axios.get('http://localhost:8081/api/job/search');
      console.log(`just do ot: ${allJobs['data']}`)
      context.commit('SET_SEARCHEDJOBS', allJobs['data'])
    },
    register({commit}, credentials) {


      return axios.post('//localhost:8081/api/signup', credentials).then(({ data }) => {
        commit('SET_USER_DATA', data)
      })
    },
    deposite({commit}, credentials) {
      return axios.post('//localhost:8081/api/payment/deposite', credentials).then(({data}) => {
        console.log(data)
        console.log(commit)
    })
    },
    jobPost({commit}, credentials){
      return axios.post('//localhost:8081/api/job/post', credentials).then(({data}) => {
        console.log(data)
        console.log(commit)
      })
    },
    login({commit}, credentials) {
      return axios.post('//localhost:8081/api/login', credentials).then(({data}) => {
        commit('SET_USER_DATA', data)
      })
    },
    
    jobComplete({commit}, credentials){
      return axios.post('//localhost:8081/api/job/complete', credentials).then(({data}) => {
        console.log(data)
        console.log(commit)
      })
    },
    createProfile({commit}, credentials){
      return axios.post('//localhost:8081/api/profile/create', credentials).then(({data}) => {
        // commit('SET_USER_PROFILE', data)
        console.log(commit)
        console.log(data)
      })
    },
    logout ({ commit }) {
      commit('CLEAR_USER_DATA')
    },
    secureRoute({ commit }){
      return axios.get('//localhost:8081/api/user/profile').then(res => {
        console.log(commit)
        console.log(`response-from-secure: ${res.data}`)
      }).catch(error => console.log(error))
    },
    loadSearchedJobs({ commit }, search) {
      return axios.post('http://localhost:8081/api/job/search', search).then(({ data }) => {
        console.log(`datasssssssss: ${data}`)
        commit('SET_SEARCHEDJOBS', data)
      })
    }
},
  getters: {
    loggedIn (state) {
      return !!state.user
    },
    userRole (state) {
      return state.user.accountType
    },
    userId (state){
      return state.user.id
    },
    searchedjob (state){
      return state.searchedjobs
    },
    isprofile (state){
      return state.user.profile_created
    },
    Name (state){
      var fullname = state.user.firstname + ' ' + state.user.lastname
      return fullname
    }
  }

}
)
