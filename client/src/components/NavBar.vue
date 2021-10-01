<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark  ethio">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <img src="../assets/ELogo.svg" class="logo" />
          <span class="name-logo gothic">thioFreelance</span>
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          v-if="!loggedIn"
          class="collapse  navbar-collapse"
          id="navbarTogglerDemo01"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              <div class="search_browse  ">
                <div>
                  <SearchComponent />
                </div>
                
                <!-- <input
                type="search"
                placeholder="Search"
                class=" search form-control"
              /> -->
                
              </div>
            </li>
            <li class="nav-item ml-4 pl-2">
              <router-link
                class="nav-link"
                active-class="active"
                exact
                to="/viewJobs"
                id='browse'
              >
                Browse jobs
                  
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link"
                active-class="active"
                exact
                :to="{ name: 'Login' }"
              >
                <button type="button" value="Log In" class="loginbtn">
                  Log In
                </button>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                active-class="active"
                exact
                to="/register"
              >
                <button type="button" value="Sign Up" class="signupbtn">
                  Sign Up
                </button>
              </router-link>
            </li>
          </ul>
        </div>
        <div v-else class="collapse  navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            
             <li class="nav-item ">
              <div class="search_browse  ">
                <div class="pr-4 mr-4">
                  <SearchComponent />
                </div>
                
                <!-- <input
                type="search"
                placeholder="Search"
                class=" search form-control"
              /> -->
                
              </div>
            </li>
            <li v-if='userRole == roleEmployer' class="nav-item">
              <router-link
                class="nav-link"
                active-class="active"
                exact
                to="/job/post"
              >
                PostJob
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                active-class="active"
                exact
                to="/viewJobs"
              >
                Browse
              </router-link>
            </li>
          </ul>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{ Name }}</span>
                  <img class="img-profile rounded-circle" src="../assets/img/undraw_profile.svg">
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                     <a v-if="userRole == roleEmployer" class="dropdown-item" href="#">
                      <router-link
                      
                      exact
                      to="/employer/dashboard"
                    >
                      Dashboard
                    </router-link>
                    </a>
                    <a v-if="userRole == roleFreelancer" class="dropdown-item" href="#">
                      <router-link
                      
                      exact
                      to="/freelancer/dashboard"
                    >
                      Dashboard
                    </router-link>
                    </a>
              </li>
                <li>
                  <a class="dropdown-item" @click="logout">
                      Logout
                   
                  </a>
                </li>
                
              </ul>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <!-- <nav class="navbar navbar-expand-md  navbar-dark ethio">
    <img src="../assets/ELogo.svg" class="logo" />
    <a class="navbar-brand" href="#">{{ name }}</a>
    <input type="search" placeholder="Search" class="search" />
    <a class="navbar-brand" href="#">{{ browsejob }}</a>
    <img src="../assets/browsejobs.svg" class="browsejobimg" />

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
      </ul>
    </div> 
    <button type="button" value="Log In" class="loginbtn">{{ login }}</button>
    <button type="button" value="Sign Up" class="signupbtn">
      {{ signup }}
    </button>
  </nav>-->

</template>
<script>
import { authComputed, userType, fullName } from "../store/helpers.js";
import SearchComponent from "./SearchComponent";
import { Role } from '../helpers/role.js'


export default {
  name: "NavBar",
  components: {
    SearchComponent,
  },
  data() {
    return {
      name: "EthioFreelance",
      browsejob: "Browse jobs",
      login: "Log In",
      signup: "Sign Up",
      roleEmployer: null,
      roleFreelancer: null,
    };
  },
  computed: {
    ...authComputed,
    ...userType,
    ...fullName,
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
      this.$forceUpdate()
    },
  },
  created() {
    this.roleEmployer = Role.Employer
    this.roleFreelancer = Role.Freelancer
  },
};
</script>

<style>
.nav-bar {
  margin-top: 0%;
}
.ethio {
  background-color: #182c41;

}
.search {
  display: inline !important;
  height: 40px !important;
  width: 400px !important;
  background: inherit !important;
  border: 2px solid #ffffff !important;
  color: #ffffff !important;
  border-radius: 100px !important;
}
.search::placeholder {
  color: #ffffff !important;
  font-family: "Century Gothic Regular";
  text-align: right;
}
.browse-job {
  margin-left: 10px;
  font-size: 18px !important;
}
.browsejobimg {
  margin-left: 8px;
  height: 30px;
  margin-bottom: 0px;
}
.search_browse {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.logo {
  margin-left: 50px;
  margin-right: 5px;
  margin-bottom: 10px;
  height: 30px;
}
.name-logo {
  margin-top: 0px;
}
.loginbtn {
  background: #1097af;
  margin-right: 10px;
  width: 100px;
  border: #00ccff;
  padding: 5px;
  font-size: 10;
  color: #ffffff;
}
.signupbtn {
  background: #1c90c3;
  margin-right: 50px;
  width: 100px;
  border: #00ccff;
  padding: 5px;
  font-size: 10;
  color: #ffffff;
}
.gothic {
  font-family: "Century Gothic Regular";
  font-size: 23px;
}

.img-profile{
  width:32px;
  height: 32px;
}
#browse{
    color:#ffffff;
}

@media screen and (min-width: 500px) {
  .top-left-nav{
    display:flex;
  }
}
</style>
