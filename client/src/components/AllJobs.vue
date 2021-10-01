<template>
  <div>
    <div class="all">
      <!-- Topbar -->
<nav
  class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow "
>

                    <!-- Sidebar Toggle (Topbar) -->
                    <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                        <i class="fa fa-bars"></i>
                    </button>

                    <!-- Topbar Search -->
                    <form
                        class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for user, job"
                                aria-label="Search" aria-describedby="basic-addon2">
                            <div class="input-group-append" >
                                <button class="btn btn-primary search-btn" type="button">
                                    <i class="fas fa-search fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </form>

                    <!-- Topbar Navbar -->
                    <ul class="navbar-nav ml-auto">

                        <!-- Nav Item - Search Dropdown (Visible Only XS) -->
                        <li class="nav-item dropdown no-arrow d-sm-none">
                            <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-search fa-fw"></i>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                aria-labelledby="searchDropdown">
                                <form class="form-inline mr-auto w-100 navbar-search">
                                    <div class="input-group">
                                        <input type="text" class="form-control bg-light border-0 small"
                                            placeholder="Search for..." aria-label="Search"
                                            aria-describedby="basic-addon2">
                                        <div class="input-group-append">
                                            <button class="btn btn-primary" type="button">
                                                <i class="fas fa-search fa-sm"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>

                        <!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                <span class="badge badge-primary badge-counter">3+</span>
                            </a>
                            <!-- Dropdown - Alerts -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-primary">
                                            <i class="fas fa-file-alt text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">October 12, 2021</div>
                                        <span class="font-weight-bold">A new job has been posted</span>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-success">
                                            <i class="fas fa-donate text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">October 7, 2021</div>
                                        $290.29 has been deposited into your account!
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle bg-warning">
                                            <i class="fas fa-exclamation-triangle text-white"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">October 2, 2021</div>
                                        A new report has been sent.
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>

                        <!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-primary badge-counter">7</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div class="font-weight-bold">
                                        <div class="text-truncate">Hi there! I am i need some help with your freelance system.</div>
                                        <div class="small text-gray-500">Garedew Zeberfa</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                            alt="...">
                                        <div class="status-indicator"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">Can i use your system for free</div>
                                        <div class="small text-gray-500">Semonun Dubale</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                            alt="...">
                                        <div class="status-indicator bg-warning"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">EthioFreelance is the best freelance system i ever used</div>
                                        <div class="small text-gray-500">Solmon Aschenik</div>
                                    </div>
                                </a>
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">I want to work with EthioFreelance</div>
                                        <div class="small text-gray-500">Demlew Gelagle</div>
                                    </div>
                                </a>
                                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>

                        <div class="topbar-divider d-none d-sm-block"></div>

                        <!-- Nav Item - User Information -->
                        <li class="nav-item dropdown no-arrow">
                            <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="mr-2 d-none d-lg-inline text-gray-600 small">Natnael Mekuriaw</span>
                                <img class="img-profile rounded-circle"
                                    src="../assets/img/undraw_profile.svg">
                            </a>
                            <!-- Dropdown - User Information -->
                            <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Profile
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Settings
                                </a>
                                <a class="dropdown-item" href="#">
                                    <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Activity Log
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                    Logout
                                </a>
                            </div>
                        </li>

                    </ul>

                </nav>
<!-- End of Topbar -->

      <div>
        <div class="wrapper">
          
          <div class="right ">
            <div class="rightwrapper">
              <!-- <div class="results">
                <p><b>Available jobs</b></p>
                <p>{{ searchedjobs.length }} available jobs</p>
              </div> -->
              <div>
                <!-- <div v-for="job in jobs" :key="job._id">
              <h2>{{ job.jobName }}</h2>
            </div> -->
                <h1>All Jobs</h1>

              <div class="jobsbody" v-for="(job, index) in searchedjob" :key="index">

                  <div class="jobs">
                    <!-- <p>jkl</p> -->
                    <h5 class="text">{{ job.title }}</h5>
                    
                    <!-- <p>{{ job.jobDateHistory.time }}</p> -->
                  </div>
                  <div>
                    <div class="jobdescription">
                      <p class="textitalic description">
                        
                      </p>

                     
                    </div>
                    <div class="skills">
                      <p>{{job.title}}</p>
                      
                      <p>{{job.duration}}</p>
                      <p>{{job.skillLevel}}</p>
          
                    </div>
                    <div class="footer">
                      <p>{{ job.budgetType }}</p>
                      <p>{{job.budget}}{{ job.currency}}</p>
                      <p>{{job.status}}</p>
                      <router-link active-class="active" exact to="/jobDetails">
                        <button @click="clickReadmore" class="btn">
                          View Details
                        </button>
                      </router-link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- <nav aria-label="Page navigation example" class="paginationplacement">
      <ul class="pagination justify-content-end">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>

        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>

        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav> -->
    </div>
    <div><Footer /></div>
  </div>
</template>
<script>
// import { jobstore } from "./jobstore";
// import axios from "axios";
//import AdminNavBar from "../components/AdminNavBar";

import Footer from "../components/Footer";
import { searchedjobs } from "../store/helpers.js";

// import store from "../store";

// import { mapState } from "vuex";
// import {mapAction} from "vue"
export default {
  name: "AllJobs",
  components: {
 //   AdminNavBar,
    Footer,
    
  },
  data() {
    return {
      currentPage: 1,
      sendjob: [],
    };
  },
  methods: {
    onPageChanges(page) {
      console.log(page);
      this.currentPage = page;
    },
    clickReadmore() {
      console.log(this.sendjob);
      console.log("hahahah");

    },
  },


computed: {
    ...searchedjobs,
  },
  
  created() {
    console.log(this.searchedjob)

    this.$store.dispatch("loadSearchedJobs", {
      search: "",
    });


  },

};
</script>
<style scoped>
.search-btn{
  width:30px;
  color:#ffffff!important;
}
.all {
  display: flex;
  flex-direction: column;
  
}
.text {
  font-weight: bold;
}
.textitalic {
  font-style: italic;
  color: #000000;
}
.description {
  width: 80%;
}
.wrapper {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 15%;
  margin-right: 5%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  text-align: left;
}
.left {
  /* border: 1px solid #999999; */
  /* box-shadow: 0 0 2px 1px #999999; */
  border-style: outset;
  border-color: #034ce9;

  width: 25%;
  height: 1000px;
  padding: 20px;
}
.right {
  /* border: 1px solid #999999; */
  /* box-shadow: 0 0 2px 1px #999999; */
  width: 73%;
  height: auto;

  /* padding: 3px; */
}
.pagination {
  display: flex;
  flex-direction: column;
}
.rightwrapper {
  /* border: 1px solid #000000; */
  display: flex;
  flex-flow: column;
  cursor: pointer;
  /* height: 300px; */
}
.right:hover {
  /* color: #999999; */
}
.results {
  border-style: outset;
  border-color: #034ce9;
  /* border: 1px solid #999999; */
  /* box-shadow: 0px 0px 0px 0px #999999; */
  padding: 20px;
  padding-top: 17px;
  height: 60px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 20px;
}
.jobsbody {
  /* border: 1px groove #000000; */
border-style: outset; border:0px; border-radius: 10px!important; box-shadow: 0
0.15rem 1.75rem 0 rgb(20 20 255 / 25%); background-color: #ffffff;


  /* border-bottom: 1px solid #999999; */
  /* box-shadow: 0 0 2px 0px #999999; */
  padding: 20px;
  padding-top: 25px;
  /* padding-bottom: 20px; */
  /* height: 240px; */
  height: auto;
  margin-bottom: 20px;
}
.jobs {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 10px;
  /* color: #034ce9; */
  color: #000000;
}
.skills {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #5d8741;
  width: 70%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.footer {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  width: 70%;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  /* fill-opacity: 50%; */
}
.btn {
  outline: none;
  border: 0px;
  padding: 0px;
  border: 0px !important;
  border: none;
  color: #034ce9;
  pointer-events: none;
  font-weight: italic;
  /* background: none; */
}
/* button:hover {
  opacity: 50% !important;
} */

.buttons {
  margin-top: 100%;
  margin-left: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.buttons button {
}
.paginationplacement {
  margin-right: 5%;
}
.fixed-top{
  background:red!important;
  display:inline-block;
  width:200px;
}
</style>
