<template>
<div class="mainbody container-fluid">
    <div class="row m-4">
        <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          
          <li class="breadcrumb-item active" aria-current="page">
            Pending Jobs
          </li>
        </ol>
      </nav>

    <div v-for="(value, index) in userInfo" :key="index"  >
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div class="panel panel-default">
                <div class="panel-body">

                    <span>
                        <h1 class="panel-title pull-left" style="font-size:30px;">{{ value.jobTitle }}</h1>
                        <span>Your Bid: </span> {{ value.bid}} <br/>
                        <span>Your Proposal: </span> {{ value.proposal}}
                        <h5></h5>
                        
                    </span>
                    
                </div>
            </div>
        <hr style="width: 600px">
            
    </div>
    </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import { userIds } from "../store/helpers.js";


export default {

        data () {
        return {
            jobTitle: null,
            message: null,
            jobID: null,
            userInfo: [],
            just: null
            
        }
    },
    computed: {
    ...userIds,
  },
    created() {
        axios.get('//localhost:8081/api/user/profile/'+ this.userId ).then((res) => {
        // this.jobTitle = res.data.job.title
        // this.jobID = res.data.hired.jobId,
        console.log(`ypyp: ${res.data}`)
        var applicants = res.data.user.appliedJobs;

        applicants.forEach(element => {
            console.log(`mesage: ${element.message}`)
            console.log(`id: ${element.jobId}`)
            axios.get('//localhost:8081/api/job/fetch/'+ element.jobId ).then((res) => {
            
            for (var i=0; i < res.data.job.applicants.length; i++){
                if (res.data.job.applicants[i].freelancer == this.userId ) {
                    this.userInfo.push({
                    message: element.message,
                    jobTitle: res.data.job.title,
                    proposal: res.data.job.applicants[i].proposal,
                    bid: res.data.job.applicants[i].bid,
                })
                }
            }
                
            }).catch(err => {
                    console.log(`Error: ${err}`)
                })
        });

            
      }).catch(err => {
            console.log(`Error: ${err}`)
        })
    },
    
}
</script>
<style scoped>
.msg{
    text-indent: 30px;
    line-break: auto;
    color: #9D9D9D;
}
    .brand_network {
    color: #9D9D9D;
    float: left;
    position: absolute;
    left: 70px;
    top: 30px;
    font-size: smaller;
}

.post-content {
    margin-left:58px;
}

.badge-important {
    margin-top: 3px;
    margin-left: 25px;
    position: absolute;
}

body {
    background-color: #e8e8e8;
}
.mainbody{
    text-align: initial;
    align-items: initial;
    padding-left: 300px;
    padding-top: 100px;
}

</style>