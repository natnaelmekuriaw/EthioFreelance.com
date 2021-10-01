<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="register">Check Mate</button>
  </div>
</template>
<script>
export default {
  methods: {
      register () {
      this.$store.dispatch('secureRoute').then((res) => {
          console.log(`ressss: ${res}`)
          // this.$router.push({name: 'Home'})
          
          // this.$router.push({ name: 'dashboard' })
      }).catch(err => {
            console.log(`Error: ${err}`)
          console.log(err.response.data.error.message)
      })
  }
  },
}
</script>
<style scoped>
  
</style>