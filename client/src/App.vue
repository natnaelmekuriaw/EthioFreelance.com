<template>
  <div>
    <!--<NavBar />-->
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>
//import NavBar from "./components/NavBar.vue";
// import Footer from "./components/Footer.vue";
export default {
  name: "App",

  components: {
    // NavBar,
    // Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
a:hover {
  text-decoration: none;
}
</style>
