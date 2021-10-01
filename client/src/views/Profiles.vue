
<template>

<div id="page-top" >

    <!-- Page Wrapper -->
    <div id="wrapper">
        <div class=" left-right">
        <!-- Sidebar -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion left-side-nav scroll" :class="[minimize ? toggler : '']" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">

                    <!-- <i class="fas fa-laugh-wink"></i> -->
                    <img src="../assets/img/ELogo.svg" style='width: 28px;height: 28px;margin-left: 5px;'>

                <div class="sidebar-brand-text mx-3" style="margin-left:0.2rem!important;font-size: 17px;">thioFreelance<sup style="font-size: 12px;"><sup>Admin</sup></sup></div>
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
                        <a class="drop-item" @click="changeDisplay('ViewJobs')">All Jobs</a>
                        <a class="drop-item" href="#">job sub cat2</a>
                        <a class="drop-item" href="#">job sub cat3</a>
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
                        <a class="drop-item" href="#">Close Jobs</a>
                        <a class="drop-item" href="#">Delete Jobs</a>
                        <a class="drop-item" href="#">Update Jobs</a>

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
                        <a class="drop-item" href="#"> All</a>
                        <a class="drop-item" href="#">Banned</a>
                        <a class="drop-item" href="#">Pending </a>
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
                        <a class="drop-item" href="#">All</a>
                        <a class="drop-item" href="#">Banned</a>
                        <a class="drop-item" href="#">Pending</a>
                       
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
                <a class="nav-link" href="#">
                    <i class="fas fa-headset"></i>
                    <span>Customer Support</span></a>
            </li>

            <!-- Nav Item - Tables -->
            

            <!-- Divider -->
            <hr class="sidebar-divider d-none d-md-block">

            
            <li id="add-ls">
                <div class="sidebar-card d-none d-lg-flex" id="add-div">
                    
                   <!-- <router-link class="btn btn-success btn-sm" :to="{name : 'AddAdmin' }" id="add-btn">Add Admin</router-link>-->
                   <input type="button" class="btn btn-success btn-sm"
 @click="changeDisplay('AddAdmin')" value="Add Admin">
                </div>
            </li>

        </ul>
    </div>
        <!-- End of Sidebar -->
        
        <component :is="adminBody"></component>

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

<script>
import AdminChart from '../components/AdminChart.vue'
import AddAdmin from '../components/AddAdmin.vue'
import ViewJobs from '../views/ViewJobs.vue'
import {mapState, mapMutations} from 'vuex'

export default {
 name : 'AdminDashboard',
 components:{
     AdminChart,AddAdmin,ViewJobs,
 },
 data () {
     return {
         active : [false,false,false,false],
         collapsed : "collapsed",
         toggler : "toggled",
         minimize : false,
         max_btn : "max-btn",
         scroll : false,
         display : 'chart',
     }
 },
computed:{
    ...mapState(["minMax"]),
    adminBody(){
        //  alert('haha');
         if(this.display==='chart'){
            return AdminChart; 
            }
        else if(this.display==='ViewJobs'){
            return  ViewJobs;
        }

        return AddAdmin; },
},
methods: {
    ...mapMutations(["min"]),
    changeDisplay(value){
        this.display=value;
    },
   
    toggle(i) {

     
        if(this.active[i]){
            this.active[i]=false;
            this.scroll = !this.scroll;
            return;
        }
    
        this.active = this.active.map(val =>{
        var falsee= false;console.log(val);
        if(falsee){
        console.log(val)}
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
}
.drop-header{
    margin: 0;
    white-space: nowrap;
    padding: .5rem 1.5rem;
    text-transform: uppercase;
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
}
.scroll::-webkit-scrollbar{
    display: none;
}

   </style>