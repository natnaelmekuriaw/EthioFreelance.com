
<template>

<div id="page-top" >

    <!-- Page Wrapper -->
    <div id="wrapper">
        <div class=" left-right">
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion left-side-nav scroll" :class="[minimize ? toggler : 'untoggled']" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" @click="changeDisplay('chart')"
>

                    <!-- <i class="fas fa-laugh-wink"></i> -->
                    <img src="/brand/mark.svg" alt="" style="width: 30px; height: 30px;">

                <div class="sidebar-brand-text mx-2" style="font-size: 14px;">EthioFreelance<small class="d-block" style="font-size: 11px;">Admin</small></div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" @click="changeDisplay('chart')">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span >Dashboard</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Jobs
            </div>

            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link" :class="[active[0] ? '' : collapsed ]" href="#" @click="toggle(0)" data-toggle="collapse" data-target="#collapseViewJobs"
                    aria-expanded="true" aria-controls="collapseViewJobs"  >
                    <i class="fas fa-briefcase"></i>
                    <span>View Jobs</span>
                </a>
                
                <div v-if="active[0]" :class="[minimize ? 'drop_minimized' : 'drop']" >
                    <div class="bg-white py-2 drop-inner rounded" :class="'drop-minimized'">
                        <h6 class="drop-header">Jobs:</h6>
                        <a class="drop-item" @click="changeDisplay('allJobs')">All Jobs</a>
                        <a class="drop-item" @click="changeDisplay('activeJobs')">Active Jobs</a>
                        <a class="drop-item" @click="changeDisplay('pendingJobs')">Pending Jobs</a>
                        <a class="drop-item" @click="changeDisplay('closedJobs')">Closed Jobs</a>
                        <a class="drop-item" @click="changeDisplay('deletedJobs')">Deleted Jobs</a>
                    </div>
                </div>
            </li>
            

            <!-- Nav Item - Utilities Collapse Menu -->
            <li class="nav-item">


                <a class="nav-link" :class="[active[1] ? '' : collapsed ]" href="#"  @click="toggle(1)" data-toggle="collapse" data-target="#collapsemanagejobs"
                    aria-expanded="true" aria-controls="collapsemanagejobs">
                    <i class="fas fa-fw fa-wrench"></i>
                    <span>Manage Jobs</span>
                </a>
                <div v-if="active[1]" :class="[minimize ? 'drop_minimized' : 'drop']">
                    <div class="bg-white py-2 drop-inner rounded" :class="'drop-minimized'">
                        <h6 class="drop-header">Manage:</h6>
                        <a class="drop-item" @click="changeDisplay('approve')">Approve Job</a>
                        <a class="drop-item" @click="changeDisplay('close')">Close Job</a>
                        <a class="drop-item" @click="changeDisplay('delete')">Delete Job</a>

                    </div>
                </div>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">

            <!-- Heading -->
            <div class="sidebar-heading">
                Users<!-- Sidebar Toggler (Sidebar) -->
            <span class="text-center d-none d-md-inline maxBtn minimize" :class="[minimize  ? max_btn : '' ]" id="minMax">
                <button @click="onMinimize();min()" class="rounded-circle border-0"  id="sidebarToggle"></button>
            </span>
            </div>



            <!-- Nav Item - Pages Collapse Menu -->
            <li class="nav-item">
                <a class="nav-link" :class="[active[2] ? '' : collapsed ]" href="#"  @click="toggle(2)" data-toggle="collapse" data-target="#collapseFreelancers"
                    aria-expanded="true" aria-controls="collapseFreelancers">
                    <i class="fas fa-user-tie"></i>
                    <span>Freelancers</span>
                </a>
                <div v-if="active[2]" :class="[minimize ? 'drop_minimized' : 'drop']" >
                    <div class="bg-white py-2 drop-inner rounded" :class="'drop-minimized'">
                        <h6 class="drop-header">Freelancers:</h6>
                        <a class="drop-item" @click="changeDisplay('allFreelancers')"> All</a>
                        <a class="drop-item" @click="changeDisplay('pending')">Pending </a>
                        <a class="drop-item" @click="changeDisplay('active')">Active </a>
                        <a class="drop-item" @click="changeDisplay('banned')">Banned</a>
                        
                    </div>
                </div>
            </li>


            <li class="nav-item">
                <a class="nav-link " :class="[active[3] ? '' : collapsed ]" href="#"  @click="toggle(3)"  data-toggle="collapse" data-target="#collapseEmployers"
                    aria-expanded="true" aria-controls="collapseEmployers">
                    <i class="fas fa-building"></i>
                    <span>Employers</span>
                </a>
                <div v-if="active[3]" :class="[minimize ? 'drop_minimized' : 'drop']" >
                    <div class="bg-white py-2 drop-inner rounded" :class="'drop-minimized'">
                        <h6 class="drop-header">Employers:</h6>
                        <a class="drop-item" @click="changeDisplay('allEmployers')">All</a>
                        <a class="drop-item" @click="changeDisplay('pendingEmployers')">Pending</a>
                        <a class="drop-item" @click="changeDisplay('activeEmployers')">Active</a>
                        <a class="drop-item" @click="changeDisplay('bannedEmployers')">Banned</a>
                       
                    </div>
                </div>
            </li>

            <li class="nav-item">
                    <a class="nav-link" htef="#">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>Payment</span>
                    </a>
            </li>



            <!-- Nav Item - Charts -->
            <li class="nav-item">
                <router-link class="nav-link" to="/help#support">
                    <i class="fas fa-headset"></i>
                    <span>Customer Support</span></router-link>
            </li>

            <!-- Nav Item - Tables -->
            

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            
            <li id="add-ls">
                <div class="sidebar-card d-none d-lg-flex" id="add-div" v-if="addOn">
                    
                   <!-- <router-link class="btn btn-success btn-sm" :to="{name : 'AddAdmin' }" id="add-btn">Add Admin</router-link>-->
                   <input type="button" class="btn btn-success btn-sm"
 @click="changeDisplay('addAdmin')" value="Add Admin">
                </div>
            </li>

        </ul>
    </div>
        <!-- End of Sidebar -->
        <div :class="[minMax ? 'wider' : 'thin']">
            <component :is="adminBody"></component>
        </div>
    </div>

    

    <!-- End of Page Wrapper -->

    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
        <i class="fas fa-angle-up"></i>
    </a>

    <!-- Logout Modal-->
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="#">Logout</a>
                </div>
            </div>
        </div>
    </div>


<router-view />
</div>

   </template>

<script lang="ts">
import AdminChart from '../components/admin/shared/AdminChart.vue'
import AddAdmin from '../components/admin/shared/AddAdmin.vue'
import AllFreelancers from '../components/admin/freelancers/AllFreelancers.vue'
import BannedFreelancers from '../components/admin/freelancers/BannedFreelancers.vue'
import PendingFreelancers from '../components/admin/freelancers/PendingFreelancers.vue'
import ActiveFreelancers from '../components/admin/freelancers/ActiveFreelancers.vue'

import AllEmployers from '../components/admin/employers/AllEmployers.vue'
import BannedEmployers from '../components/admin/employers/BannedEmployers.vue'
import PendingEmployers from '../components/admin/employers/PendingEmployers.vue'
import ActiveEmployers from '../components/admin/employers/ActiveEmployers.vue'

import AllJobs from '../components/admin/jobs/lists/AllJobs.vue'
import ActiveJobs from '../components/admin/jobs/lists/ActiveJobs.vue'
import PendingJobs from '../components/admin/jobs/lists/PendingJobs.vue'
import ClosedJobs from '../components/admin/jobs/lists/ClosedJobs.vue'
import DeletedJobs from '../components/admin/jobs/lists/DeletedJobs.vue'

import ApproveJob from '../components/admin/jobs/actions/ApproveJob.vue'
import CloseJob from '../components/admin/jobs/actions/CloseJob.vue'
import DeleteJob from '../components/admin/jobs/actions/DeleteJob.vue'


import {mapState, mapMutations, mapActions} from 'vuex'

export default {
 name : 'AdminDashboard',
 components:{
     AdminChart,AddAdmin,
     AllFreelancers,PendingFreelancers,BannedFreelancers,ActiveFreelancers,
     AllEmployers,PendingEmployers,BannedEmployers,ActiveEmployers,
     AllJobs,ActiveJobs,PendingJobs,ClosedJobs,DeletedJobs,
     ApproveJob,CloseJob,DeleteJob




 },
 data () {
     return {
         active : [false,false,false,false],
         collapsed : "collapsed",
         toggler : "toggled",
         minimize : false,
         max_btn : "max-btn",
         scroll : false,
         addOn: true,
         display : 'chart',
     }
 },
computed:{
    ...mapState(["minMax"]),
    adminBody(){
        
         if(this.display==='addAdmin'){return AddAdmin;}
        else if(this.display==='allFreelancers'){return AllFreelancers; }
        else if(this.display==='banned'){ return BannedFreelancers;}
        else if(this.display==='pending'){ return PendingFreelancers;}
        else if(this.display==='active'){return ActiveFreelancers;}
        
        else if(this.display==='allEmployers'){ return AllEmployers; } 
        else if(this.display==='bannedEmployers'){ return BannedEmployers; } 
        else if(this.display==='pendingEmployers'){ return PendingEmployers; } 
        else if(this.display==='activeEmployers'){ return ActiveEmployers; }
        
        else if(this.display==='allJobs'){return  AllJobs;}
        else if(this.display==='activeJobs'){ return ActiveJobs; }
        else if(this.display==='pendingJobs'){ return PendingJobs; }
        else if(this.display==='closedJobs'){ return ClosedJobs; }
        else if(this.display==='deletedJobs'){ return DeletedJobs; }
        
        else if(this.display==='approve'){ return ApproveJob; }
        else if(this.display==='close'){ return CloseJob; }
        else if(this.display==='delete'){ return DeleteJob; }
        return AdminChart; },
},
created(){
    this.displayFreelancers()
    this.getJobs()
},
methods: {
    ...mapMutations(["min"]),
    ...mapActions(["displayFreelancers","getJobs"]),

    changeDisplay(value){
        this.display=value;
        if(value==="addAdmin"){
            this.addOn=false;
        }
        else{
            this.addOn=true;
        }
    },
   
    toggle(i) {

     
        if(this.active[i]){
            this.active[i]=false;
            this.scroll = !this.scroll;
            return;
        }
    
        this.active = this.active.map(() =>{
        //var falsee= false;
        // if(falsee){
        // }
        return false;
        })
        this.active[i] = true; 
    },
    onMinimize(){
        this.minimize = !this.minimize;
    }
},
}

</script>

<style scoped>
body{
    font-family: Nunito,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
#wrapper{
    background:#f8f9fc;

}
.drop{
    position: relative;
    left: 0;
    z-index: 1;
    top: 0;
        margin: 0 1rem;

}
.drop_minimized{
position: absolute;
    left: calc(6.5rem + 1.5rem / 2);
    z-index: 1;
    top: 2px;
    transition:2s;
    padding: .5rem 0;
    min-width: 10rem;
    font-size: .85rem;
    margin: 0 0 1rem 0;
}
.drop-minimized{
    box-shadow : 0 0.15rem 1.75rem 0 rgb(58 59 69 / 25%);
}
.drop-inner{
font-size: .85rem;
}
.drop-item{
    padding: .5rem 1rem;
    margin: 0 .5rem;
    display: block;
    color: #3a3b45;
    text-decoration: none;
    border-radius: .35rem;
    white-space: nowrap;
    text-align: left;
}
.drop-header{
    margin: 0;
    white-space: nowrap;
    padding: .5rem 1.5rem;
    text-transform: uppercase;
    text-align: left;
    font-weight: 800;
    font-size: .65rem;
    color: #b7b9cc;
}
.max-btn{
    margin-left: -150px;
}
.wider{
    margin-left:100px;
    width:93%;
    transition:2s;
}
.thin{
 margin-left:255px;
 width:100%;
 transition:2s;
}
.scroll{
    overflow-x: hidden;
    overflow-y:scroll;
    width: 16rem !important;
    height : 300px;

}
.maxBtn{
    z-index: 999;
    position:fixed;
    transition:2s;

}
.scroll::-webkit-scrollbar{
    display: none;
}
.admin{
    margin-left:0px!important;
}
.toggled{
    transition:2s;
}
.untoggled{
    transition:2s;
}
   </style>
