<template>
  <div class="wrapper">
    <form action="" @submit.prevent="handleSubmit">
      <h1>Reset Password</h1>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          placeholder="Password Confirm"
          v-model="password_confirm"
        />
      </div>
      <button class="btn btn-primary btn-block">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "reset",
  data() {
    return {
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("reset", {
        password: this.password,
        password_confirm: this.password_confirm,
        token: this.$route.params.token,
      });
      console.log(response);
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped>
.wrapper{
  margin-top: 3%;  
  margin-left: 20%;  
  margin-right: 20%;  
  margin-bottom: 3%;  
}
</style>
