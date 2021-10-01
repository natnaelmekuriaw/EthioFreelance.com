<template>
  <div class="container">
    <div class="row container main-body content main">
      <!-- Dashboard Box -->
      <div class="col-12">
        <nav aria-label="breadcrumb" class="main-breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              My Jobs Listings
            </li>
          </ol>
        </nav>
        <div class="dashboard-box margin-top-0">
          <div class="content">
            <ul class="dashboard-box-list">
              <li v-for="(value, index) in Job" :key="index">
                <!-- Job Listing -->
                <div class="job-listing">
                  <!-- Job Listing Details -->
                  <div class="job-listing-details">
                    <!-- Details -->
                    <div class="job-listing-description">
                      <h3 class="job-listing-title">
                        <a>{{ value.title }}</a>
                        <!-- <span class="dashboard-status-button yellow"
                          >Expiring</span> -->
                        
                      </h3>
                      <!-- Job Listing Footer -->
                      <div class="job-listing-footer">
                        <div class="icon-material-outline-date-range">
                          {{ value.discription }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Buttons -->
                <div class="buttons-to-right always-visible">
                  <a class="button ripple-effect"
                    ><i class="icon-material-outline-supervisor-account"></i>
                    <router-link :to="{ name: 'Applicant', params: { id: value._id } }">Manage Applicants</router-link> <span class="button-info">{{value.numberofApplicants}}</span></a
                    >
                  <!-- <a
                    href="#"
                    class="button gray ripple-effect ico"
                    data-tippy-placement="top"
                    data-tippy=""
                    data-original-title="Edit"
                    ><i class="fas fa-edit"></i
                  ></a>
                  <a
                    href="#"
                    class="button gray ripple-effect ico"
                    data-tippy-placement="top"
                    data-tippy=""
                    data-original-title="Remove"
                  >
                    <i class="fas fa-trash-alt"></i
                  ></a> -->
                </div>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
import axios from "axios";
import { userIds } from "../store/helpers.js";

export default {
  components: {},
  computed: {
    ...userIds,
  },
  data() {
    return {
      Job: null,
    };
  },

  created() {
    console.log('created')
    axios.get('//localhost:8081/api/job/find/'+ this.userId ).then((res) => {
        console.log(`datas: ${res.data}`)
        this.Job = res.data.job
      }).catch(err => {
            console.log(`Error: ${err}`)
        })
  },
};
</script>

<style scoped>
.main-body{
  margin-left: 150px;
  padding-top: 100px;
}
.margin-top-0 {
  margin-top: 0px !important;
}
.content {
  width: 80%;
}
a:hover {
  background: #333;
}

div {
  display: block;
}

body {
  color: #666;
  font-size: 16px;
  line-height: 27px;
  background-color: #fff;
}


ul.dashboard-box-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.dashboard-box-list {
  box-shadow: none;
}
ul.dashboard-box-list > li {
  border-bottom: 1px solid #e4e4e4;
  padding: 0;
  line-height: 26px;
  padding: 22px 30px;
}
.job-listing .job-listing-footer ul li {
  display: inline-block;
  color: #777;
}

li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.dashboard-box .job-listing {
  box-shadow: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.job-listing {
  display: block;
  border-radius: 4px;
  box-shadow: 0 2px 12px rgb(0 0 0 / 12%);
  margin-bottom: 35px;
  background-color: #fff;
  transition: 0.3s;
  position: relative;
}

.dashboard-box .job-listing-details {
  box-shadow: none;
  padding: 10px 0;
  align-items: center;
  flex: auto;
}
.job-listing-details {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 35px;
  padding-bottom: 32px;
}

.dashboard-box .job-listing .job-listing-description {
  padding-top: 0;
}
.job-listing .job-listing-description {
  flex: 1;
  padding-top: 3px;
}
.job-listing h3.job-listing-title {
  font-size: 20px;
  color: #333;
  line-height: 30px;
}
h3 {
  font-size: 22px;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #333;
  font-weight: 500;
  margin: 0;
  padding: 0;
}
.dashboard-box .job-listing h3 a {
  color: #333;
  font-size: 18px;
}
.dashboard-status-button.green {
  background: #e0f5d7;
  color: #449626;
}
.dashboard-status-button {
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  line-height: 21px;
  padding: 2px 8px;
  display: inline-block;
  position: relative;
  top: -2px;
  margin: 0 0 4px 4px;
}
.dashboard-status-button.yellow {
  background-color: #fbf6dd;
  color: #a18d29;
}

.dashboard-box-list .buttons-to-right.always-visible .button {
  margin: 0 3px 0 0;
}
.dashboard-box-list .buttons-to-right .button {
  margin: 0 0 -6px 2px;
}
.dashboard-box-list .button {
  box-shadow: 0 3px 8px rgb(42 65 232 / 15%);
}
.dashboard-box-list .button {
  padding: 6px 15px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  display: inline-block;
  box-shadow: 0 3px 8px rgb(102 103 107 / 15%);
}
.dashboard-box-list .button i[class*="icon-material"] {
  font-size: 18px;
  top: 3px;
  margin-right: 2px;
  margin-left: -2px;
}
.dashboard-box-list a.button i {
  margin: 0;
  padding: 0;
  position: relative;
  top: 1px;
  font-size: 14px;
  line-height: 0;
  margin-left: -2px;
}
</style>
