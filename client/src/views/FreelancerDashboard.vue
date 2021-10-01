
<template>

<div id="page-top " class="" >
    <NavBar />

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


            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <a class="nav-link" @click="changeDisplay('profile')">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span >Profile</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">


            <!-- <li class="nav-item">
                    <a class="nav-link" htef="#" @click="changeDisplay('notifications')">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>Notifications</span>
                    </a>
            </li> -->
            <li class="nav-item">
                    <a class="nav-link" htef="#" @click="changeDisplay('pending')">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>Pending Jobs</span>
                    </a>
            </li>
            <li class="nav-item">
                    <a class="nav-link" htef="#" @click="changeDisplay('ongoing')">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>On going Jobs</span>
                    </a>
            </li>
            <!-- <li class="nav-item">
                    <a class="nav-link" htef="#" @click="changeDisplay('history')" >
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>Job Application History</span>
                    </a>
            </li>
            <li class="nav-item">
                    <a class="nav-link" htef="#" @click="changeDisplay('review')">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>Reviews</span>
                    </a>
            </li> -->

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
import Profile from '../components/Profile.vue'
import AddAdmin from '../components/AddAdmin.vue'
import pending from '../components/Pending.vue'
import NavBar from "../components/NavBar.vue";
import List from "../views/List.vue";

import {mapState, mapMutations} from 'vuex'

export default {
 name : 'AdminDashboard',
 components:{
     Profile,AddAdmin,pending,NavBar,List
 },
 data () {
     return {
         active : [false,false,false,false],
         collapsed : "collapsed",
         toggler : "toggled",
         minimize : false,
         max_btn : "max-btn",
         scroll : false,
         display : 'profile',
     }
 },
computed:{
    ...mapState(["minMax"]),
    adminBody(){
        //  alert('haha');
        
        if(this.display==='profile'){
        return Profile; 
        }
        else if(this.display==='ongoing'){
            return List ;
        }
        else if(this.display==='pending'){
            return pending ;
        }
        //<!--
        //else if(this.display === 'notifications'){
          //  return notifications
        //}
       // else if(this.display === 'ongoing'){
          //  return ongoing
        //}
       // else if(this.display === 'history'){
           // return history
       // }
       // else if(this.display === 'review'){
        //    return review
        //} -->


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
.top{
  margin-top: 120px;
        
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