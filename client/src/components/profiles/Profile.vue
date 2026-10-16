<template>
        
  <div class="container content-wrapper">
    <div class="main-body content main">
      <!-- Breadcrumb -->
      <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active" aria-current="page">
            User Profile
          </li>
        </ol>
      </nav>
      <!-- /Breadcrumb -->

      <div class="row gutters-sm">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <img
                  src="../../assets/img/undraw_profile.svg"
                  alt="Admin"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h4>{{firstName}} {{lastName}}</h4>
                  <p class="text-secondary mb-1">Full Stack Developer</p>
                  <p class="text-muted font-size-sm">
                    Kilinto, Addis Ababa, Ethiopia
                  </p>
                  <button class="btn btn-primary">
                    <!-- <vue3starRatings v-model="rating" />Rate -->
                  </button>
                  <button class="btn btn-outline-primary" @click="display">Message</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Full Name</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{firstName}} {{lastName}}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Email</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{email}}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Username</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  {{userName}}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">mobile phone</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  (+251) 967-638-5**
                </div>
              </div>
              <hr />

              <div class="row">
                <div class="col-sm-3">
                  <h6 class="mb-0">Address</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                  Kilinto, Addis Ababa, Ethiopia{{userid}}
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-sm-12">
                  <router-link :to="{ name: 'UpdateFreelancerProfile' }">
                    <a class="btn btn-info " target="__blank">Edit</a>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>



             

        <!-- <div class="row gutters-sm">
          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="d-flex align-items-center mb-3">
                  <i class="material-icons text-info mr-2">User</i>
                  Reviews
                </h6>
                <div>
                  <p>user 1</p>
                  <p>you are very good</p>
                  <p>user 1</p>
                  <p>you are very good</p>
                  <p>user 1</p>
                  <p>you are very good</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6 mb-3">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="d-flex align-items-center mb-3">
                  <i class="material-icons text-info mr-2">User</i>
                  Rating
                </h6>
                <div>
                  <p>you are very good</p>
                  <p>user 1</p>
                  <p>you are very good</p>
                  <p>user 1</p>
                  <p>you are very good</p>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { fetchFreelancerProfile } from '../../services/users'
import { defineComponent } from "vue";
import { userIds } from "../../store/helpers";

// import { userIds } from "../../store/helpers";
// import vue3starRatings from "vue3-star-ratings";
export default defineComponent({
  components: {
    // vue3starRatings,
  },
  
  data() {
    return {
      freelancerName: "freelancerName",
      user: null,
      firstName: null,
      lastName: null,
      userName: null,
      email: null
    };
  },
  computed: {
    ...userIds,
  },
  methods: {
    display(){
      // console.log(`role: ${userid}`)
    }
  },
   created() {
    fetchFreelancerProfile(this.userId).then((data) => {
      console.log('refresheds')
      console.log(this.userId)
      
        this.userName = data.data.user.username
        this.email = data.data.user.email
        this.lastName = data.data.user.lastname
        this.firstName = data.data.user.firstname
      }).catch(err => {
            console.log(`Error: ${err}`)
        })
  },
});
</script>
<style scoped>
body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body {

  padding-left: 150px;
  padding-top: 100px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
.headertitle {
  text-align: center;
  font-size: 25px;
}
.profileinfo {
  width: 100%;
  /* box-shadow: 0 0 1px 0px #0080ff; */
}
.btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.btns button {
  border-radius: 5px;
  background-color: #1097af;
  border-color: #1097af;
  font-family: Century Gothic Regular;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
  color: #ffffff;
}
.btns button:hover {
  opacity: 70%;
  /* color: rgb(36, 226, 19); */
}

/* href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills" */
</style>
