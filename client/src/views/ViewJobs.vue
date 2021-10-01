<template>
  
    <div class="all">
      <div><NavBar /></div>
      <div>
        <div class="wrapper">
          <div class="left">
            <div class="leftwrapper">
              <div class="jobtype">
                <div>
                  <h3><b>Filters</b></h3>
                </div>
                <div>
                  <h5><b>Job Type</b></h5>
                </div>
                <div><input type="checkbox" /> <label>Contract Job</label></div>
                <div><input type="checkbox" /> <label>Hourly Rate</label></div>
              </div>
              <div class="jobcategory">
                <h5><b>Category</b></h5>
                <div>
                  <input name="webdesign" type="checkbox" />
                  <label>Web Design</label>
                </div>
                <div><input type="checkbox" /> <label>Translation</label></div>
                <div><input type="checkbox" /> <label>Web Design</label></div>
                <div><input type="checkbox" /> <label>Translation</label></div>
                <div><input type="checkbox" /> <label>Web Design</label></div>
                <div><input type="checkbox" /> <label>Translation</label></div>
                <div><input type="checkbox" /> <label>Web Design</label></div>
                <div><input type="checkbox" /> <label>Translation</label></div>
                <div><input type="checkbox" /> <label>Web Design</label></div>
                <div><input type="checkbox" /> <label>Translation</label></div>
              </div>
            </div>
          </div>
          <div class="right">
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

<div class="bordered" v-for="(job, index) in searchedjob" :key="index">

                   <div class="jobsbody"  v-if="job.status=='active'">
                  <div class="jobs">
                    <!-- <p>jkl</p> -->
                    <h5 class="text">{{ job.title }}</h5>
                    
                    <!-- <p>{{ job.jobDateHistory.time }}</p> -->
                  
                  <div>
                    <div class="jobdescription">
                      <p class="textitalic description">
                        
                      </p>

                       
                    </div>
                    <div class="skills">
                      <p>{{job.title}}</p>
                      
                      <p>{{job.duration}}</p>
                      <p>{{job.skillLevel}}</p>
                      <p>{{job.jobStatus}}</p>
                    </div>
                    <div class="footer">
                      <p>{{ job.budgetType }}</p>
                      <p>{{job.budget}}{{ job.currency}}</p>
                      
                      <p style='color:green'>{{job.status}}</p>
                      
                        <router-link v-if="status ==='active' " :to="{ name: 'JobDetails', params: { id: job._id } }">View Details</router-link>
                      

                    </div>
                  </div>
                  </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Pagination /></div>
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
  
    <div><Footer /></div>
  </div>

</template>
<script>
// import { jobstore } from "./jobstore";
import axios from "axios";
import Pagination from "../components/Pagination";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { searchedjobs, userIds } from "../store/helpers.js";

// import store from "../store";

// import { mapState } from "vuex";
// import {mapAction} from "vue"
export default {
  components: {
    NavBar,
    Footer,
    Pagination,
  },
  data() {
    return {
      currentPage: 1,
      sendjob: [],
      status: null,
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

  name: "view",

computed: {
    ...searchedjobs,
    ...userIds,
  },
  // computed: {
  //   // ...mapState(["jobs"]),
  //   ...mapState("searchedjobs"),

  //   // viewjob() {

  //   //   //return this.$store.state.jobstore.count;
  //   // },
  // },
  created() {
    // this.$store.dispatch("jobstore/loadJobs");
    // this.$store.dispatch("searchedjobstore/loadSearchedJobs");
    console.log(this.searchedjob)

    this.$store.dispatch("loadSearchedJobs", {
      search: "",
    });

 
    axios.get('//localhost:8081/api/user/freelancer/'+ this.userId ).then((data) => {
          console.log('refresheds')
          console.log(this.userId)
          
            this.status = data.data.user.accountStatus
          }).catch(err => {
                console.log(`Error: ${err}`)
            })


  },

  // data() {
  //   return {
  //     Jobs: [],
  //   };
  // },
  // mounted() {
  //   axios
  //     .get("http://localhost:8081/api/job/get")
  //     .then((response) => {
  //       console.log(response.data);
  //       this.Jobs = response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>
<style scoped>
.all {
  width:100%;
  background-color:#f2f2f2;
  flex-direction: column;
  margin-top: 70px;
  
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
  margin-left: 7%;
  margin-right: 5%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  text-align: left;
}
.left {
  /* border: 1px solid #999999; */
  /* box-shadow: 0 0 2px 1px #999999; */
 border-radius: 10px; box-shadow: 0 0.15rem 1.75rem 0 rgb(20 20 255 / 25%);
display: inline-block; background-color: #ffffff;


  width: 25%;
  height: 1000px;
  padding: 20px;
}
.bordered
{


}
.right {
  
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
  
  border-style: outset;
  border:0px;
  border-radius: 10px!important; box-shadow: 0 0.15rem 1.75rem 0 rgb(20 20 255 /
25%); background-color: #ffffff;


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
  /*display: flex;*/
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
</style>
