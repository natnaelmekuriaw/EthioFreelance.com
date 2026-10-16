<template>
<div>
    <NavBar />
    <div class="container containsall mt-4">
        <div class="page-content page-container main-body content main pr-4 mr-4" id="page-content">
            <div class="padding">
                <div class="row">
                    <div class="col-sm-12 mainapplicant">
                        <nav aria-label="breadcrumb" class="main-breadcrumb">
                            <ol class="breadcrumb">
                            
                            <li class="breadcrumb-item active" aria-current="page">
                                Applicant List of  {{jobTitle}}
                                
                            </li>
                            </ol>
                        </nav>
                        <div v-if="loading" class="data-state" role="status">Loading applicants…</div>
                        <div v-else-if="error" class="data-state" role="alert">Applicants are unavailable right now. <button type="button" @click="loadApplicants">Try again</button></div>
                        <div v-else-if="!applicantList.length" class="data-state" role="status">No applicants to show yet.</div>
                        <div v-else class="list list-row block">
                            <div v-for="(value, index) in applicantList" :key="index"  class="list-item" data-id="19">
                                <div class="d-flex justify-content-between list-item">
                                    <div class=""><a href="#" data-abc="true"><span class="w-48 avatar gd-warning">B</span></a> <span>{{value.firstname}} {{value.lastname}}</span></div>
                                    <div class="flex col  proposal">                                         
                                        <div class="item-except text-muted text-sm h-1x">Proposal : {{value.proposal}}</div>
                                        <a href="#" class="item-author text-color" data-abc="true">
                                                       <!-- The Modal -->
                                            <div>
                                            <button class="submitbtn" @click="display(index)">Hire</button>

                                                <div :id="String(index)" class="modal modes">
                                                <form
                                                    class="modal-content animate"
                                                    @submit.prevent="hire(value.id)"
                                                    method="post"
                                                >
                                                    <div class="imgcontainer">
                                                    <span
                                                        onclick="document.getElementsByClassName('modes').style.display='none'"
                                                        class="close"
                                                        title="Close Modal"
                                                        >&times;</span
                                                    >
                                                    </div>
                                                    <div class="container">
                                                        <label for="uname"><b>Message</b></label>
                                                         <div class="col-12">
                                                            <textarea
                                                                v-model="message"
                                                                id="aboutyou"
                                                                placeholder="Leave Message for Freelancer"
                                                                rows="7"
                                                                name="description"
                                                                class="textarea⤍TextArea⤚3cYmx is-full-width⤍TextArea⤚2Fttq"
                                                            ></textarea>
                                                        </div>
                                                         <button type="submit" class="m-3 pb-3">Hire</button>
                                                    </div>

                                                   
                                                    <div class="container mt-4 " style="background-color:#f1f1f1">
                                                    <button type="button" @click="none(index)" class="cancelbtn">
                                                        Cancel
                                                    </button>
                                                    </div>
                                                </form>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                
                                <div class="no-wrap">
                                    <div class="item-date text-muted text-sm d-none d-md-block">Bid:  {{value.bid}}</div>
                                    <div class="item-date text-muted text-sm d-none d-md-block"></div>
                                </div>
                            </div>
                         
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import NavBar from "../components/layout/NavBar.vue";
import { fetchJob, hireFreelancer } from '../services/jobs'
import { findFreelancer } from '../services/users'

export default {
    data () {
        return {
            id: null,
            Job: null,
            jobTitle: null,
            freelancer: null,
            applicantList: [],
            message: null,
            jobID: null,
            id_freelancer: null,
            loading: false,
            error: false
            
        }
    },
    created() { this.id = this.$route.params.id; this.loadApplicants() },
    components:{
     NavBar,
    },
    methods: {
        async loadApplicants() {
            this.loading = true;
            this.error = false;
            this.applicantList = [];
            try {
                if (!this.id) return;
                const response = await fetchJob(this.id);
                const job = response.data && response.data.job;
                if (!job) return;
                this.jobTitle = job.title;
                this.jobID = job._id;
                const applicants = Array.isArray(job.applicants) ? job.applicants : [];
                const profiles = await Promise.all(applicants.map(async element => {
                    try {
                        const result = await findFreelancer(element.freelancer);
                        const freelancer = result.data && result.data.freelancer;
                        if (!freelancer) return null;
                        return { bid: element.bid, proposal: element.proposal, firstname: freelancer.firstname, lastname: freelancer.lastname, email: freelancer.email, id: freelancer._id };
                    } catch { return null; }
                }));
                this.applicantList = profiles.filter(Boolean);
            } catch { this.error = true; }
            finally { this.loading = false; }
        },
        hire(freelancerId){
            hireFreelancer({
                jobID: this.jobID,
                hiredFreelancerID: freelancerId,
                message: this.message,
            })
            .then(() => {
                console.log('hello')
                  this.$router.push({name: 'EmployerDashboard'})
            }).catch((err) => {
          console.log(`Error: ${err}`);
          console.log(err.response.data.error.message);
        });
        },
        none(index) {
        document.getElementById(String(index)).style.display = "none";
        },
        display(index) {
        document.getElementById(String(index)).style.display = "block";
        },
    },
}
</script>
<style scoped>






button {
  align-content: right;
  background: #000000;
  width: 150px;
  color: #ccc4c4;
  border: 1px solid #000000;
  border-radius: 100px;
  padding: 10px 10px;
  font-size: 20px;
  cursor: pointer;
}
button:hover {
  color: #ffffff;
  background-image: linear-gradient(to right, #382e2e, #821717);
  border-radius: 100px;
  border: 1px solid #382e2e;
}

form {
  background: #fff;
}
img {
  border: 5px solid #000;
  width: 480px;
  height: 300px;
  border-radius: 2px;
  text-align: left;
  padding: 0px;
  align-content: left;
  margin-bottom: 10px;
}

/* Full-width input fields */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.4285714286;
    color: #212529;
    text-align: left;
    background-color: #f9f9fa
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
.mainapplicant{
    margin-left: 100px;
}

#page-content {
    margin-top: 100px
}
.containsall{
    width: 100%;
}
a {
    color: #448bff;
    text-decoration: none;
    background-color: transparent
}

a:hover {
    color: #005ef7;
    text-decoration: underline
}

a:not([href]):not([tabindex]) {
    color: inherit;
    text-decoration: none
}

a:not([href]):not([tabindex]):focus,
a:not([href]):not([tabindex]):hover {
    color: inherit;
    text-decoration: none
}

a:not([href]):not([tabindex]):focus {
    outline: 0
}

@media (min-width:576px) {
    .col-sm {
        flex-basis: 0;
        flex-grow: 1;
        max-width: 100%
    }

    .col-sm-auto {
        flex: 0 0 auto;
        width: auto;
        max-width: 100%
    }

    .col-sm-1 {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }

    .col-sm-2 {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-sm-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-sm-4 {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .col-sm-5 {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }

    .col-sm-6 {
        flex: 0 0 100%;
        max-width: 70%;
    }

    .col-sm-7 {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }

    .col-sm-8 {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }

    .col-sm-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-sm-10 {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }

    .col-sm-11 {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }

    .col-sm-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-sm-first {
        order: -1
    }

    .order-sm-last {
        order: 13
    }

    .order-sm-0 {
        order: 0
    }

    .order-sm-1 {
        order: 1
    }

    .order-sm-2 {
        order: 2
    }

    .order-sm-3 {
        order: 3
    }

    .order-sm-4 {
        order: 4
    }

    .order-sm-5 {
        order: 5
    }

    .order-sm-6 {
        order: 6
    }

    .order-sm-7 {
        order: 7
    }

    .order-sm-8 {
        order: 8
    }

    .order-sm-9 {
        order: 9
    }

    .order-sm-10 {
        order: 10
    }

    .order-sm-11 {
        order: 11
    }

    .order-sm-12 {
        order: 12
    }

    .offset-sm-0 {
        margin-left: 0
    }

    .offset-sm-1 {
        margin-left: 8.3333333333%
    }

    .offset-sm-2 {
        margin-left: 16.6666666667%
    }

    .offset-sm-3 {
        margin-left: 25%
    }

    .offset-sm-4 {
        margin-left: 33.3333333333%
    }

    .offset-sm-5 {
        margin-left: 41.6666666667%
    }

    .offset-sm-6 {
        margin-left: 50%
    }

    .offset-sm-7 {
        margin-left: 58.3333333333%
    }

    .offset-sm-8 {
        margin-left: 66.6666666667%
    }

    .offset-sm-9 {
        margin-left: 75%
    }

    .offset-sm-10 {
        margin-left: 83.3333333333%
    }

    .offset-sm-11 {
        margin-left: 91.6666666667%
    }
}

.text-muted {
    color: #99a0ac !important
}

.block,
.card {
    background: #fff;
    border-width: 0;
    border-radius: .25rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .05);
    margin-bottom: 1.5rem
}

.avatar {
    /* position: relative; */
    line-height: 1;
    border-radius: 500px;
    white-space: nowrap;
    font-weight: 700;
    border-radius: 100%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    border-radius: 500px;
    box-shadow: 0 5px 10px 0 rgba(50, 50, 50, .15)
}

.avatar img {
    border-radius: inherit;
    width: 100%
}

.gd-primary {
    color: #fff;
    border: none;
    background: #448bff linear-gradient(45deg, #448bff, #44e9ff)
}

.gd-success {
    color: #fff;
    border: none;
    background: #31c971 linear-gradient(45deg, #31c971, #3dc931)
}

.gd-info {
    color: #fff;
    border: none;
    background: #14bae4 linear-gradient(45deg, #14bae4, #14e4a6)
}

.gd-warning {
    color: #fff;
    border: none;
    background: #f4c414 linear-gradient(45deg, #f4c414, #f45414)
}

@media (min-width:992px) {
    .page-container {
        max-width: 1140px;
        margin: 0 auto
    }

    .page-sidenav {
        display: block !important
    }
}

.list {
    padding-left: 0;
    padding-right: 0
}

.list-item {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word
}

.list-row .list-item {
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-align: center;
    align-items: center;
    padding: .75rem .625rem
}

.list-row .list-item>* {
    padding-left: .625rem;
    padding-right: .625rem
}

.no-wrap {
    white-space: nowrap
}

.text-color {
    color: #5e676f
}

.text-gd {
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    text-fill-color: transparent
}

.text-sm {
    font-size: .825rem
}

.h-1x {
    height: 1.25rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical
}

.w-48 {
    width: 48px !important;
    height: 48px !important
}

a:link {
    text-decoration: none
}
.proposal{
    padding-left: 0px;
    margin-left: 0px;
}

.textarea⤍TextArea⤚3cYmx {
    display: block;
    margin-right: 0.625rem;
    box-shadow: rgba(93, 94, 97, 0.25) 0px 0.07812rem 0.15625rem -0.07812rem inset, rgba(236, 239, 244, 0.45) 0px 0px 0.3125rem;
    background-color: rgb(245, 247, 250);
    width: 100%;
    height: auto;
    min-height: 5rem;
    resize: vertical;
    color: rgb(76, 77, 79);
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: calc(0.61813vw + 0.60371rem);
    font-weight: 300;
    line-height: 1.5;
    transition: all 0.125s ease-out 0s;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(152, 153, 156);
    border-image: initial;
    border-radius: 3.5px;
    padding: 0.65625rem 0.9375rem;
}
*, :after, :before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}

textarea {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    column-count: initial !important;
    margin: 0em;
    font: 400 13.3333px Arial;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    padding: 2px;
}
.data-state { padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); color: var(--muted); text-align: center; }
.data-state button { margin-left: 8px; padding: 8px 12px; border: 0; border-radius: var(--radius-control); background: var(--accent); color: white; }
</style>
