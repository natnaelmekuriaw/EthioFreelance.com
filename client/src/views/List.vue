<template>
<div class="mainbody container-fluid">
    <div class="row m-4">

        <nav aria-label="breadcrumb" class="main-breadcrumb">
        <ol class="breadcrumb">
          
          <li class="breadcrumb-item active" aria-current="page">
            Ongoing Jobs
          </li>
        </ol>
      </nav>

    <div v-if="loading" class="data-state" role="status">Loading ongoing jobs…</div>
    <div v-else-if="!userInfo.length" class="data-state" role="status">No ongoing jobs to show right now.</div>
    <div v-for="(value, index) in userInfo" :key="index"  >
    <div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
        <div class="panel panel-default">
                <div class="panel-body">
                    <hr style="width: 600px">

                    <span>
                        <h1 class="panel-title pull-left" style="font-size:30px;">{{ value.jobTitle }}</h1>
                        <h3></h3>
                        
                        <span>Employer Message:</span><p class="msg"> {{ value.message}}</p>
                    </span>
                    <hr style="width: 600px">
                    <span class="pull-left">
                        <div class="submitbtn">
                            <router-link :to="{ name: 'Complete', params: { id: value.jobId } }">
                                <button
                                    type="submit"
                                    class=" w-100 btn btn-dark btn-lg sub"
                                    >
                                    Complete
                                </button>

                            </router-link>
                            
                        </div>
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
import { fetchUserProfile } from '../services/users'
import { fetchJob } from '../services/jobs'
import { userIds } from "../store/helpers";


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
        var applicants = res.data?.user?.hired || [];
        let remaining = applicants.length;
        if (!remaining) this.loading = false;

        applicants.forEach(element => {
            console.log(`mesage: ${element.message}`)
            console.log(`id: ${element.jobId}`)
            fetchJob(element.jobId).then((res) => {
            

                if (!res.data?.job) return;
                this.userInfo.push({
                    message: element.message,
                    jobTitle: res.data.job.title,
                    jobId: res.data.job._id
                })
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

.submitbtn {
  margin-left: 40%;
  margin-right: 20%;
  border-radius: 500px;
}

.sub {
  transition: 2s;
  margin: 10px;
}
.sub:hover {
  transition: 2s;
  color: #000000;
  background-color: #ffffff;
  border-radius: 100px;
  border: 1px solid #000000;
}
button {
  align-content: right;
  background: #000000;
  width: 150px;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 10px 10px;
  font-size: 20px;
  cursor: pointer;
}

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
