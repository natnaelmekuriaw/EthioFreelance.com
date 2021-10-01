<template>
<div>
    <h1>404</h1>
    <h3>Sorry, Page Not Found !!!</h3>
    <router-link  :to="{name:'Home'}">  
        <button class="btn btn-primary">Go Home</button>
    </router-link>
</div>
</template>

<script>

</script>

<style scoped>
div{
    text-align: center;
    margin-top: 100px;
}
button{
    background-image:linear-gradient(to right,rgb(27, 39, 133),rgb(60, 0, 128));
    color:#ffffff;
    width : 130px;
    border-radius : 200px;
}
</style>