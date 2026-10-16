<template>
<div>
    <div><NavBar/></div>
  <div class="container wrapper pt-4 mt-4"> 
    <h1 class="pt-4">Onboarding</h1>
    <div class="row add">
      <form @submit.prevent="register" class="pt-4 col">
        <div class="col-12">
          <div class="container⤍Label⤚1hFpT">
            <label for="headline" class="label⤍Label⤚1WMOP">Headline</label>
          </div>
          <span class="">
            <input
              id="headline"
              v-model="freelancer.headline"
              name="headline"
              class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
              type="text"
              placeholder="Enter Headline"
            />
          </span>
        </div>

        <div class="d-flex justify-content-between pt-3 pb-3 pl-2">
          <div>Employment Background</div>

          <div>
            <i @click="display" class="icon-plus" style="width:auto;"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#435AAE"
                fill-rule="evenodd"
              >
                <g>
                  <path
                    d="M10.8 9.1h3.1v1.8h-3.1V14H9v-3.1H5.9V9.1H9V6h1.8v3.1z"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="M10 18.2a8.2 8.2 0 1 0 0-16.4 8.2 8.2 0 0 0 0 16.4zm0 1.8C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                  ></path>
                </g></svg
            ></i>
            <div id="id01" class="modal">
              <form
                class="modal-content animate"
                @submit.prevent="saveEmployment"
                method="post"
              >
                <div class="imgcontainer">
                  <span
                    onclick="document.getElementById('id01').style.display='none'"
                    class="close"
                    title="Close Modal"
                    >&times;</span
                  >
                </div>
                <div class="container">
                  <div class="col-12">
                    <h2 class="pb-3">Employment</h2>

                    <div class="container⤍Label⤚1hFpT">
                      <label for="project-title" class="label⤍Label⤚1WMOP"
                        >Company Name
                      </label>
                    </div>
                    <span class="">
                      <input
                        id="companyName"
                        v-model="freelancer.employment.companyName"
                        name="companyName"
                        class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                        type="text"
                        placeholder="Enter Company Name"
                      />
                    </span>
                  </div>
                  <div class="col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="project-title" class="label⤍Label⤚1WMOP"
                        >Position</label
                      >
                    </div>
                    <span class="">
                      <input
                        id="position"
                        v-model="freelancer.employment.position"
                        name="position"
                        class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                        type="text"
                        placeholder="Enter Postion"
                      />
                    </span>
                  </div>
                  <div class="row col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="startDateMonth" class="label⤍Label⤚1WMOP"
                        >Strart Date</label
                      >
                    </div>
                    <div class="col-6">
                      <span class="">
                        <input
                          id="startDateMonth"
                          v-model="freelancer.employment.startDateMonth"
                          name="startDateMonth"
                          class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                          type="text"
                          placeholder="Month"
                        />
                      </span>
                    </div>
                    <div class="col-6">
                      <span class="">
                        <input
                          id="startDateYear"
                          v-model="freelancer.employment.startDateYear"
                          name="startDateYear"
                          class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                          type="text"
                          placeholder="Year"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="row col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="endDate" class="label⤍Label⤚1WMOP"
                        >End Date</label
                      >
                    </div>
                    <div class="col-6">
                      <span class="">
                        <input
                          id="endDateMonth"
                          v-model="freelancer.employment.endDateMonth"
                          name="startDateMonth"
                          class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                          type="text"
                          placeholder="Month"
                        />
                      </span>
                    </div>
                    <div class="col-6">
                      <span class="">
                        <input
                          id="endDateYear"
                          v-model="freelancer.employment.endDateYear"
                          name="startDateYear"
                          class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                          type="text"
                          placeholder="Year"
                        />
                      </span>
                    </div>
                  </div>
                  <div class="col-12">
                    <div>
                      <label for="summary" class="label⤍Label⤚1WMOP"
                        >Summary</label
                      >
                      <textarea
                        v-model="freelancer.employment.summary"
                        id="summary"
                        placeholder="Enter Summary"
                        rows="7"
                        name="summary"
                        class="textarea⤍TextArea⤚3cYmx is-full-width⤍TextArea⤚2Fttq"
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit">Save</button>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                  <button type="button" @click="none" class="cancelbtn">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div v-if="freelancer.employments.length">
          <h2>employments</h2>
          <p
            v-for="(value, index) in freelancer.employments"
            :key="index"
            class="p-3"
          >
            <span class="">
              <p class="m-0 p-0">
                {{ value.companyName || "None Selected" }}
              </p>
              <p class="m-0 p-0">
                {{ value.position || "None Selected" }}
              </p>
              {{ value.startDateMonth || "None Selected" }}
            </span>
          </p>
        </div>
        <div class="d-flex justify-content-between pt-3 pb-3 pl-2">
          <div>Education Background</div>

          <div>
            <i @click="displayEducation" class="icon-plus" style="width:auto;"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#435AAE"
                fill-rule="evenodd"
              >
                <g>
                  <path
                    d="M10.8 9.1h3.1v1.8h-3.1V14H9v-3.1H5.9V9.1H9V6h1.8v3.1z"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="M10 18.2a8.2 8.2 0 1 0 0-16.4 8.2 8.2 0 0 0 0 16.4zm0 1.8C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                  ></path>
                </g></svg
            ></i>
            <div id="id02" class="modal pl-1 pr-1">
              <form
                class="modal-content animate"
                @submit.prevent="saveEducation"
                method="post"
              >
                <div class="imgcontainer">
                  <span
                    onclick="document.getElementById('id02').style.display='none'"
                    class="close"
                    title="Close Modal"
                    >&times;</span
                  >
                </div>
                <div class="container">
                  <div class="col-12">
                    <h2 class="pb-3">Education</h2>

                    <div class="container⤍Label⤚1hFpT">
                      <label for="schoolName" class="label⤍Label⤚1WMOP"
                        >School Name
                      </label>
                    </div>
                    <span class="">
                      <input
                        id="companyName"
                        v-model="freelancer.education.schoolName"
                        name="schoolName"
                        class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                        type="text"
                        placeholder="Enter School Name"
                      />
                    </span>
                  </div>
                  <div class="col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="degree" class="label⤍Label⤚1WMOP"
                        >Degree</label
                      >
                    </div>
                    <span class="">
                      <input
                        id="degree"
                        v-model="freelancer.education.degree"
                        name="degree"
                        class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                        type="text"
                        placeholder="Enter Degree"
                      />
                    </span>
                  </div>
                  <div class="col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="Field" class="label⤍Label⤚1WMOP"
                        >Field of Study</label
                      >
                    </div>
                    <span class="">
                      <input
                        id="Field"
                        v-model="freelancer.education.field"
                        name="Field"
                        class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                        type="text"
                        placeholder="Enter Field of Study"
                      />
                    </span>
                  </div>
                  <div class="row col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="graduationYear" class="label⤍Label⤚1WMOP"
                        >Gradution Date</label
                      >
                    </div>
                    <div class="col-6">
                      <span class="">
                        <input
                          id="graduationYear"
                          v-model="freelancer.education.graduationYear"
                          name="graduationYear"
                          class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                          type="text"
                          placeholder="Year"
                        />
                      </span>
                    </div>
                  </div>

                  <button type="submit">Save</button>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                  <button
                    type="button"
                    @click="noneEducation"
                    class="cancelbtn"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div v-if="freelancer.educations.length">
          <h2>Educations</h2>
          <p
            v-for="(value, index) in freelancer.educations"
            :key="index"
            class="p-3"
          >
            <span class="">
              <p class="m-0 p-0">
                {{ value.schoolName || "None Selected" }}
              </p>
              <p class="m-0 p-0">
                {{ value.degree || "None Selected" }}
              </p>
              {{ value.field || "None Selected" }}
            </span>
          </p>
        </div>
        <div class="d-flex justify-content-between pt-3 pb-3 pl-2">
          <div>Certification</div>

          <div>
            <i @click="displayCertificate" class="icon-plus" style="width:auto;"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#435AAE"
                fill-rule="evenodd"
              >
                <g>
                  <path
                    d="M10.8 9.1h3.1v1.8h-3.1V14H9v-3.1H5.9V9.1H9V6h1.8v3.1z"
                  ></path>
                  <path
                    fill-rule="nonzero"
                    d="M10 18.2a8.2 8.2 0 1 0 0-16.4 8.2 8.2 0 0 0 0 16.4zm0 1.8C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                  ></path>
                </g></svg
            ></i>
            <div id="id03" class="modal">
              <form
                class="modal-content animate"
                @submit.prevent="saveCertificate"
                method="post"
              >
                <div class="imgcontainer">
                  <span
                    onclick="document.getElementById('id03').style.display='none'"
                    class="close"
                    title="Close Modal"
                    >&times;</span
                  >
                </div>
                <div class="container">
                  <div class="col-12">
                    <h2 class="pb-3">Certification</h2>

                    <div class="container⤍Label⤚1hFpT">
                      <label for="certificateName" class="label⤍Label⤚1WMOP"
                        >Certificate Name
                      </label>
                    </div>
                    <span class="">
                      <input
                        id="certificateName"
                        v-model="freelancer.certificate.certificateName"
                        name="certificateName"
                        class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                        type="text"
                        placeholder="Enter Certificate  Name"
                      />
                    </span>
                  </div>
                  <div class="col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="organizationName" class="label⤍Label⤚1WMOP"
                        >Organization Name</label
                      >
                    </div>
                    <span class="">
                      <input
                        id="organizationName"
                        v-model="freelancer.certificate.organizationName"
                        name="organizationName"
                        class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                        type="text"
                        placeholder="Enter Organization Name"
                      />
                    </span>
                  </div>
                  <div class="col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="licenseNumber" class="label⤍Label⤚1WMOP"
                        >License Number</label
                      >
                    </div>
                    <span class="">
                      <input
                        id="licenseNumber"
                        v-model="freelancer.certificate.licenseNumber"
                        name="licenseNumber"
                        class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                        type="text"
                        placeholder="Enter License Number"
                      />
                    </span>
                  </div>
                  <div class="row col-12">
                    <div class="container⤍Label⤚1hFpT">
                      <label for="year" class="label⤍Label⤚1WMOP">Year</label>
                    </div>
                    <div class="col-6">
                      <span class="">
                        <input
                          id="year"
                          v-model="freelancer.certificate.year"
                          name="startDateMonth"
                          class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
                          type="text"
                          placeholder="Enter year"
                        />
                      </span>
                    </div>
                  </div>

                  <button type="submit">Save</button>
                </div>

                <div class="container" style="background-color:#f1f1f1">
                  <button
                    type="button"
                    @click="noneCertificate"
                    class="cancelbtn"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div v-if="freelancer.certificates.length">
          <h2>Certificates</h2>
          <p
            v-for="(value, index) in freelancer.certificates"
            :key="index"
            class="p-3"
          >
            <span class="">
              <p class="m-0 p-0">
                {{ value.certificateName }}
              </p>
              <p class="m-0 p-0">
                {{ value.organizationName }}
              </p>
              <p class="m-0 p-0">
                {{ value.licenseNumber }}
              </p>
              <p class="m-0 p-0">
                {{ value.year }}
              </p>
              
              
            </span>
          </p>
        </div>

        <div class="col-12">
          <label for="aboutyou" class="label⤍Label⤚1WMOP">About You</label>
          <textarea
            v-model="freelancer.aboutyou"
            id="aboutyou"
            placeholder="Summary About You"
            rows="7"
            name="description"
            class="textarea⤍TextArea⤚3cYmx is-full-width⤍TextArea⤚2Fttq"
          ></textarea>
        </div>
        <div class="col-12 pt-3">
          <input
            @change="saveSelectionAndReset"
            list="list"
            placeholder="Enter skills"
          />
          <datalist id="list">
            <option v-for="(item, index) in items" :key="index" :value="item">{{
              item
            }}</option>
          </datalist>
          <div>
            <span v-for="(value, index) in values" :key="index" class="p-3">
              <span class="btn btn-primary">
                {{ value }}
                <span class="badge bg-secondary"
                  ><button @click="deletes(index)">X</button></span
                >
              </span>
            </span>
          </div>
        </div>
        <div class="submitbtn">
            <button
            type="submit"
            class=" w-100 btn btn-dark btn-lg sub"
            >
            Submit
            </button>
        </div>
        
      </form>
    </div>
    
  </div><div><Footer/></div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "@vue/runtime-core";
import { userType, userIds } from "../store/helpers";
import NavBar from '../components/layout/NavBar.vue';
import Footer from '../components/layout/Footer.vue';

// import { Role } from '../helpers/role.js'
export default {
    components:{
        NavBar,
        Footer
    },
  setup() {
    onMounted(() => {
      var modal = document.getElementById("id01");
      var modal2 = document.getElementById("id02");
      var modal3 = document.getElementById("id03");
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
        if (event.target == modal2) {
          modal2.style.display = "none";
        }
        if (event.target == modal3) {
          modal3.style.display = "none";
        }
      };
    });
  },
  data() {
    return {
      values: [],
      items: {
        nati: "nati",
        html: "html",
        java: "java",
        css: "css",
        programing: "programming",
      },
      input: [],
      freelancer: {
        email: undefined,
        employment: {
          companyName: "",
          position: "",
          startDateYear: "",
          startDateMonth: "",
          endDateYear: "",
          endDateMonth: "",
          status: "",
          summary: "",
        },
        education: {
          schoolName: null,
          degree: null,
          graduationYear: null,
          field: null,
        },
        certificate: {
          certificateName: null,
          organizationName: null,
          licenseNumber: null,
          year: null,
        },
        employments: [],
        educations: [],
        certificates: [],
        headline: null,
        aboutyou: null,
      },
    };
  },
  computed: {
    ...userType,
    ...userIds,
    performSearch() {
      console.log("input");
      return "inuut";
    },
  },
  methods: {
    saveSelectionAndReset(e) {
      let val = e.target.value;
      if (val) {
        this.values.push(val);
      }
      e.target.value = "";
    },
    deletes(index) {
      this.values[index] = "";
    },
    saveEmployment() {
      let employmentHistory = {
        companyName: this.freelancer.employment.companyName,
        position: this.freelancer.employment.position,
        startDateMonth: this.freelancer.employment.startDateMonth,
        startDateYear: this.freelancer.employment.startDateYear,
        endDateMonth: this.freelancer.employment.endDateMonth,
        endDateYear: this.freelancer.employment.endDateYear,
        status: this.freelancer.employment.status,
        summary: this.freelancer.employment.summary,
      };
      this.freelancer.employments.push(employmentHistory);
      console.log(`employments: ${this.freelancer.employments}`);
      this.none()
    },
    saveCertificate() {
      let certificateHistory = {
        certificateName: this.freelancer.certificate.certificateName,
        organizationName: this.freelancer.certificate.organizationName,
        licenseNumber: this.freelancer.certificate.licenseNumber,
        year: this.freelancer.certificate.year,
      };
      this.freelancer.certificates.push(certificateHistory);
      this.noneCertificate()
    },
    saveEducation() {
      let educationHistory = {
        schoolName: this.freelancer.education.schoolName,
        degree: this.freelancer.education.degree,
        graduationYear: this.freelancer.education.graduationYear,
        field: this.freelancer.education.field,
      };
      this.freelancer.educations.push(educationHistory);
      this.noneEducation
    },
    displayEducation() {
      document.getElementById("id02").style.display = "block";
    },
    displayCertificate() {
      document.getElementById("id03").style.display = "block";
    },
    none() {
      document.getElementById("id01").style.display = "none";
    },
    display() {
      document.getElementById("id01").style.display = "block";
    },
    noneEducation() {
      document.getElementById("id02").style.display = "none";
    },
    noneCertificate() {
      document.getElementById("id03").style.display = "none";
    },
    register() {
      console.log(`${this.freelancer.email}`);
      this.$store
        .dispatch("createProfile", {
          email: this.freelancer.email,
          skills: this.values,
          aboutyou: this.freelancer.aboutyou,
          headline: this.freelancer.headline,
          employment: this.freelancer.employments,
          education: this.freelancer.educations,
          certificate: this.freelancer.certificates,
          freelancer_id: this.userId,
        })
        .then((res) => {
          console.log(`ressss: ${res}`);
          this.$router.push({name: 'FreelancerDashboard'})

          // this.$router.push({ name: 'dashboard' })
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
          console.log(err.response.data.error.message);
        });
    },
  },
};
</script>

<style scoped>
/* body,input{font-family:futura,helvetica!important;text-transform:uppercase}body{height:100vw;background:linear-gradient(135deg,#13f1fc 0,#0470dc 100%)}#app{display:flex;justify-content:flex-start;align-items:center;flex-direction:column;padding:10px}input{border:none;box-shadow:0 20px 30px -15px rgba(0,0,0,.4);border-radius:3px;font-size:1.2rem;padding:8px;margin:5%}input:focus{outline:0}p{color:#fff;text-shadow:0 1px 5px rgba(0,0,0,.2)} */
.icon-plus {
  cursor: pointer;
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

.select-box__wrapper⤍SimpleSelect⤚3GvgQ {
    position: relative;
    width: 100%;
}
.select-box {
    appearance: none;
    display: block;
    box-sizing: border-box;
    box-shadow: rgba(37, 40, 55, 0.1) 0px 1px 1px 0px;
    width: 100%;
    height: 2.5rem;
    color: rgb(24, 32, 43);
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8125rem;
    font-weight: 300;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(195, 200, 212);
    border-image: initial;
    border-radius: 0.3rem;
    background: linear-gradient(rgb(255, 255, 255), rgb(250, 252, 255));
    padding: 0.3125rem 1.875rem 0.3125rem 0.625rem;
}
.select-box__icon⤍SimpleSelect⤚g_aDY {
    fill: rgb(91, 102, 120);
    position: absolute;
    top: 0px;
    right: 0.625rem;
    bottom: 0px;
    height: 100%;
    pointer-events: none;
}
.is-full-width⤍TextArea⤚2Fttq {
    width: 100%;
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
.browse-link⤍DefaultFilePicker⤚3u9DT {
    color: rgb(217, 80, 0);
}
a, a:hover {
    text-decoration: none;
}
.drop-area⤍DefaultFilePicker⤚3qccL {
    position: relative;
    z-index: 5;
    background-color: rgb(245, 247, 250);
    color: rgb(112, 114, 118);
    font-style: italic;
    text-align: center;
    transition: all 0.11s ease-in 0s;
    border-width: 1px;
    border-style: dashed;
    border-color: rgb(152, 153, 156);
    border-image: initial;
    border-radius: 0.3rem;
    padding: 2.4975rem 0.9375rem;
}
.container⤍Label⤚1hFpT {
    -webkit-box-pack: justify;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.select-box__wrapper⤍SimpleSelect⤚3GvgQ {
    position: relative;
    width: 100%;
}
.select-box⤍SimpleSelect⤚2FAca {
    appearance: none;
    display: block;
    box-sizing: border-box;
    box-shadow: rgba(37, 40, 55, 0.1) 0px 1px 1px 0px;
    width: 100%;
    height: 2.5rem;
    color: rgb(24, 32, 43);
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8125rem;
    font-weight: 300;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(195, 200, 212);
    border-image: initial;
    border-radius: 0.3rem;
    background: linear-gradient(rgb(255, 255, 255), rgb(250, 252, 255));
    padding: 0.3125rem 1.875rem 0.3125rem 0.625rem;
}
.select-box__icon⤍SimpleSelect⤚g_aDY {
    fill: rgb(91, 102, 120);
    position: absolute;
    top: 0px;
    right: 0.625rem;
    bottom: 0px;
    height: 100%;
    pointer-events: none;
}
.new-app .payment-container .tiles-container .tile-wrapper .tile-inner[data-v-f3e89f42] {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 20px;
    height: 95px;
}
.new-app .payment-container .tiles-container .tile-wrapper .tile-inner .tile-icon-wrapper[data-v-f3e89f42] {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 32px;
}
.new-app .payment-container .tiles-container .tile-wrapper .tile-inner .tile-info[data-v-f3e89f42] {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    align-items: flex-start;
    margin-left: 20px;
}
    .has-prepended-currency⤍InputFieldPrice⤚2h-vl input[type="number"] {
    padding-right: 0.9375rem;
    padding-left: 2.5rem;
}
.input--full-width⤍InputField⤚1VKm- {
    width: 100%;
}
.input⤍InputField⤚24DWw {
    display: inline-block;
    box-shadow: rgba(93, 94, 97, 0.25) 0px 0.07812rem 0.15625rem -0.09375rem inset, rgba(236, 239, 244, 0.45) 0px 0px 0.3125rem;
    background-color: rgb(245, 247, 250);
    height: 2.625rem;
    color: rgb(76, 77, 79);
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8125rem;
    font-weight: 300;
    line-height: 1.53846;
    transition: all 0.125s ease-out 0s;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(152, 153, 156);
    border-image: initial;
    border-radius: 0.3rem;
    padding: 0.625rem 0.9375rem;
}
.budget__wrapper⤍Budget⤚1rfPE {
    display: inline-block;
    width: 100%;
}
.budget__wrapper⤍Budget⤚1rfPE::before {
    height: 100%;
    padding: 0.75rem;
}
.has-prepended-currency⤍InputFieldPrice⤚2h-vl {
    display: inline-block;
    position: relative;
}

.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.pay-container {
  margin-bottom: 10%;
  margin-top: 60px;
}

.submitbtn {
  margin-top: 5%;
  margin-left: 75%;
  margin-bottom: 5;
  border-radius: 500px;
}

.blacklogo {
  position: absolute;
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 270px;
  width: 90px;
  height: 90px;
  text-align: center;
  padding: 20px;
  margin-left: 630px;

  z-index: 9999 !important;
  /*height: 10%;
  margin-left: 42%;
  margin-bottom: -30px;
  padding: 0.5%;
  
  display: visible;
  background-color: #ffffff;*/
}

button {
  align-content: right;
  background: #000000;
  width: 150px;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 100px;
  padding: 10px 10px;
  font-size: 20px;
  cursor: pointer;
}


.blacklogo {
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 270px;
  width: 90px;
  height: 90px;
  text-align: center;
  padding: 20px;
  margin: auto;
  z-index: 9999;
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
#wrapper {
  background: #f8f9fc;
}
.wrapper {
  background: #f8f9fc;

  text-align: center;
  padding: 30px;
  padding-top: 100px;
}
.add {
  padding-top: 70px;
  padding-top: 60px;
  border-radius: 10px;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(20 20 255 / 25%);
  display: inline-block;
  width: 70%;
  background-color: #ffffff;
}
.wrapper { max-width: 900px; background: var(--canvas); color: var(--ink); }
.wrapper h1 { margin-bottom: 20px; font-family: var(--font-display); font-size: var(--text-form-title); font-weight: var(--weight-strong); }
.wrapper .add { width: min(100%, 760px); padding: 25px 28px; border: 1px solid var(--line); border-radius: var(--radius-card); box-shadow: var(--shadow); text-align: left; }
.wrapper form input:not([type="checkbox"]):not([type="radio"]), .wrapper form select, .wrapper form textarea { min-height: 42px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface); color: var(--ink); box-shadow: none; font-family: var(--font-body); font-size: var(--text-sm); font-weight: var(--weight-body); }
.wrapper form input:not([type="checkbox"]):not([type="radio"]), .wrapper form select { padding: 8px 12px; }
.wrapper form textarea { padding: 10px 12px; }
.wrapper form input:focus, .wrapper form select:focus, .wrapper form textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(7,138,115,.12); }
.wrapper button { width: auto; min-height: 38px; padding: 8px 14px; border: 0; border-radius: 9px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); transition: background var(--motion-fast); }
.wrapper button:hover { background: var(--accent-dark); color: white; }
.wrapper .cancelbtn { background: var(--surface-tint); color: var(--accent-dark); }
@media (max-width: 600px) { .wrapper .add { padding: 20px 16px; } }
</style>
