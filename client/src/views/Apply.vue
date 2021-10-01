<template>
  <div>
    <NavBar />
    <div class="container p-4 pay-container">
      <div class="tab mt-3 mb-3">
        <h3 class="p-2">Apply</h3>
      </div>
      <form @submit.prevent="apply">
        <div class="col-12">
          <div class="container⤍Label⤚1hFpT">
            <label for="bid" class="label⤍Label⤚1WMOP">Bid</label>
          </div>
          <span class="">
            <input
              id="bid"
              v-model="bid"
              name="amount"
              class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
              type="text"
              placeholder="Enter Bid"
            />
          </span>
        </div>
        <div class="col-12">
          <div class="container⤍Label⤚1hFpT">
            <label for="coverletter" class="label⤍Label⤚1WMOP"
              >Cover Letter</label
            >
            <textarea
              v-model="proposal"
              id="summary"
              placeholder="Enter Cover Letter"
              rows="7"
              name="coverletter"
              class="textarea⤍TextArea⤚3cYmx is-full-width⤍TextArea⤚2Fttq"
            ></textarea>
          </div>
        </div>
        <div class="submitbtn">
            <button
            type="submit"
            class=" w-100   btn-lg sub"
            >
            Apply
            </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import { userIds } from "../store/helpers.js";

export default {
  components: {
    NavBar,
  },
  computed: {
    ...userIds,
  },
  data() {
    return {
      jobs: this.sendjob,
      bid: null,
      proposal: null,
      jobID: null,
      appliedFreelancerID: "null",
    };
  },
  methods: {
    // apply() {
    //   console.log("deposit");
    // },
    apply() {
      //console.warn(this.posts);
      console.log(`applierId: ${this.userId}`)
      axios
        .post("http://localhost:8081/api/job/apply", {
          jobID: this.jobID,
          appliedFreelancerID: this.userId,
          bid: this.bid,
          proposal: this.proposal,
        })
        .then((response) => {
          console.log(response);
          this.$router.push({ name: "FreelancerDashboard" });

        });
      // .then(function(response) {
      //   console.log(response.data);
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    },
  },
  // computed: {
  //   ...mapState(["jobs"]),
  //   ...mapState(["searchedjobs"]),
  // },
  created() {
    // this.$store.dispatch("loadSearchedJobs");
    this.jobID = this.$route.params.id;
  },
};
</script>
<style scoped>
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
  box-shadow: rgba(93, 94, 97, 0.25) 0px 0.07812rem 0.15625rem -0.07812rem inset,
    rgba(236, 239, 244, 0.45) 0px 0px 0.3125rem;
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
*,
:after,
:before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
user agent stylesheet textarea {
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
a,
a:hover {
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

.new-app
  .payment-container
  .tiles-container
  .tile-wrapper
  .tile-inner[data-v-f3e89f42] {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 20px;
  height: 95px;
}

.new-app
  .payment-container
  .tiles-container
  .tile-wrapper
  .tile-inner
  .tile-icon-wrapper[data-v-f3e89f42] {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 32px;
}
.new-app
  .payment-container
  .tiles-container
  .tile-wrapper
  .tile-inner
  .tile-info[data-v-f3e89f42] {
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
  box-shadow: rgba(93, 94, 97, 0.25) 0px 0.07812rem 0.15625rem -0.09375rem inset,
    rgba(236, 239, 244, 0.45) 0px 0px 0.3125rem;
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

/* styles from viewjob */

.all {
  display: flex;
  flex-direction: column;
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
  /* height: 100%; */
  /* display: flex;
  flex-flow: row;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 2%;
  justify-content: space-between;
  margin-bottom: 25px;
  text-decoration: none;
  color: #000000; */
}

.right {
  border: 1px solid #999999;
  box-shadow: 0 0 2px 1px #999999;
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
  /* border: 1px solid #000000; */
  box-shadow: 0px 0px 0px 0px #999999;
  padding: 20px;
  padding-top: 17px;
  height: 60px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 20px;
}
.jobsbody {
  /* border: 1px solid #000000; */
  /* border-bottom: 1px solid #999999; */
  box-shadow: 0 0 2px 0px #999999;
  padding: 20px;
  padding-top: 25px;
  /* padding-bottom: 20px; */
  height: 240px;
}
.jobs {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #034ce9;
}

/* .jobdescription {
  
} */

.btn {
  outline: none;
  border: 0px;
  padding: 0px;
  border: 0px !important;
  border: none;
  color: #034ce9;
  pointer-events: none;
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
