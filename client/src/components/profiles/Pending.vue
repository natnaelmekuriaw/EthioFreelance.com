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

    <div v-if="loading" class="data-state" role="status">Loading pending jobs…</div>
    <div v-else-if="!userInfo.length" class="data-state" role="status">No pending jobs to show right now.</div>
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
<script lang="ts">
import { fetchUserProfile } from '../../services/users'
import { fetchJob } from '../../services/jobs'
import { userIds } from "../../store/helpers";


export default {

        data () {
        return {
            jobTitle: null,
            message: null,
            jobID: null,
            userInfo: [],
            just: null,
            loading: true
            
        }
    },
    computed: {
    ...userIds,
  },
    created() {
        fetchUserProfile(this.userId).then((res) => {
        // this.jobTitle = res.data.job.title
        // this.jobID = res.data.hired.jobId,
        console.log(`ypyp: ${res.data}`)
        var applicants = res.data?.user?.appliedJobs || [];
        let remaining = applicants.length;
        if (!remaining) this.loading = false;

        applicants.forEach(element => {
            console.log(`mesage: ${element.message}`)
            console.log(`id: ${element.jobId}`)
            fetchJob(element.jobId).then((res) => {
            
            if (!res.data?.job || !Array.isArray(res.data.job.applicants)) return;
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
                }).finally(() => { if (--remaining === 0) this.loading = false; })
        });

            
      }).catch(err => {
            console.log(`Error: ${err}`)
            this.loading = false;
        })
    },
    
}
</script>
<style scoped>
.data-state { width: 100%; margin: 20px; padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); color: var(--muted); text-align: center; }
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
