<template>
  <div class="how">
    <h1 class="header arial">{{ headerName }}</h1>
    <div class="description">
      <div class="guest">
        <h2 class="arial">{{ guest.titleName }}</h2>
        <p class="guestDescription">{{ guest.titleDescription }}</p>
      </div>

      <div class="freelancer">
        <h2 class="arial">{{ freelancer.titleName }}</h2>
        <p class="freelancerDescription">{{ freelancer.titleDescription }}</p>
      </div>

      <div class="employer">
        <h2 class="arial">{{ employer.titleName }}</h2>
        <p class="employerDescription">{{ employer.titleDescription }}</p>
      </div>
      <div class="jobdescription">
        <h2 class="arial">{{ ourJob.titleName }}</h2>
        <p class="ourJobDescription">{{ ourJob.titleDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerName: "How it Works",
      guest: {
        titleName: "Guest",
        titleDescription:
          "Any user can browse and search freelance jobs. Users have to create an account and signin to their account to vie job details and apply for jobs.",
      },
      freelancer: {
        titleName: "Freelancer",
        titleDescription:
          "Logged in freelancers can search, view and apply for freelance job. They can also manage their account and profiles. Ethiofreelance.com lets freelancers view their status and chat with their employer.",
      },
      employer: {
        titleName: "Employer",
        titleDescription:
          "Employers can post jobs with required skills and price. when posting a job they can set the price fixed or open for bidding. They can close, delete and modigy jobs. THey can easily connect with freelancers through our system.",
      },
      ourJob: {
        titleName: "Our Job",
        titleDescription:
          "Once an account is created and approved the system notifies freelancers when related jobs are posted. Once a job is finished the system gets a 10 % from a job payments",
      },
    };
  },
};
</script>
<style scoped>
.header {
  text-align: center;
  font-size: 50px;
}
.description {
  padding: 0px 70px;
  display: flex;
  justify-content: space-between;
}
.description div {
  text-align: center;
  display: block;
  max-width: 280px;
  padding: 40px 10px 0px 10px;
  /* padding-right: 20px; */
}
/* .guestDescription {
    margin-left: 20px;
} */
p {
  margin-top: 30px;
  font-size: 22px;
}
.guestDescription {
  background: none;
  border: none;
}
.arial {
  font-family: "Arial Rounded MT";
}
</style>
