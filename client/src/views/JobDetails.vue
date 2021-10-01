<template>
  <div>
    <NavBar />
    <div class="wrapper">
      <div>
        <h1 class="center">Job Details</h1>
      </div>
      <div class="jobsbody">
        <div class="jobs">
          <p>title: {{ title }}</p>
        </div>
        <div class="jobdescription">
          <p>Description: {{ discription }}</p>
          <p>BudgetType: {{ budgetType }}</p>
          <p>Budget: {{ budget }}</p>
          <p>skills: {{ skills }}</p>
          <p>Start Date</p>
          <p>Finishing Date</p>
        </div>
      </div>

      <div>
        <button class="btn">
          <router-link :to="{ name: 'Apply', params: { id: jobid } }"
            >Apply</router-link
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      title: null,
      discription: null,
      Job: null,
      jobid: null,
      budget: null,
      budgetType: null,
      skills: null
    };
  },

  created() {
    console.log("created");
    this.jobid = this.$route.params.id;
    axios
      .get("//localhost:8081/api/job/fetch/" + this.jobid)
      .then(res => {
        console.log(`datas: ${res.data}`);
        this.title = res.data.job.title;
        this.discription = res.data.job.discription;
        this.budget = res.data.job.budget;
        this.budgetType = res.data.job.budgetType;
        this.skills = res.data.job.skills;
      })
      .catch(err => {
        console.log(`Error: ${err}`);
      });
  }
};
</script>

<style scoped>
.wrapper {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
}
.rightwrapper {
  display: flex;
  flex-flow: column;
  cursor: pointer;
}
.right:hover {
  /* color: #999999; */
}
.results {
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
  border-style: outset;
  border-color: #034ce9;
  padding: 20px;
  padding-top: 25px;
  height: auto;
  margin-bottom: 10px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.jobs {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #034ce9;
}
.skills {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 10px;
  color: #034ce9;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.footer {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}
.btn {
  background-color: #034ce9;
  color: #000000;
  font-weight: bold;
}
button:hover {
  opacity: 90% !important;
  color: aqua;
}
</style>
