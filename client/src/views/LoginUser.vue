<template>
  <div class="container">
    <div><NavBar /></div>
    <h1 class="pt-4">Sign in</h1>
    <div class="row">
      <div class="col pt-4">
        <p>I want to hire remote talent</p>
      </div>
      <form @submit.prevent="login" class="pt-4 col">
        <div class="col-12">
          <input
            type="email"
            v-model="email"
            class="form-control m-2"
            placeholder="email"
            aria-label="Email"
          />
        </div>
        <div class="col-12">
          <input
            type="password"
            v-model="password"
            class="form-control m-2"
            placeholder="password"
            aria-label="password"
          />
        </div>
        <div class="col-12">
          <button type="submit" class=" w-100 btn btn-dark btn-lg m-2">
            Login
          </button>
        </div>
      </form>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script lang="ts">
import NavBar from "../components/layout/NavBar.vue";
import Footer from "../components/layout/Footer.vue";
export default {
  name: login,
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
        });
    },
  },
};
</script>
<style scoped></style>
