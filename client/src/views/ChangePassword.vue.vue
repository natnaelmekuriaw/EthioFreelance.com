<template>
  <div>
    <div><NavBar /></div>
    <div class="forgot">
      <div><h1 class="small_margin">Forgot Password</h1></div>
      <div class="rowalign">
        <!-- <label for="email">Email</label> -->
        <input name="email" type="email" placeholder="Email" />
      </div>
      <div class="rowalign">
        <!-- <label for="old password">Old Password</label> -->
        <input
          name="old password"
          type="password"
          placeholder="Your password"
        />
      </div>
      <div class="rowalign">
        <!-- <label for="new password">New Password</label> -->
        <input name="new Password" type="password" placeholder="New password" />
      </div>
      <div class="rowalign">
        <!-- <label for="confirm new password">Confirm New Password</label> -->
        <input
          name="confirm new password"
          type="password"
          placeholder="New password"
        />
      </div>
      <button class="btn">Change Password</button>
    </div>

    <div><Footer /></div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.small_margin {
  margin-bottom: 30px;
}
.forgot {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 25%;
  padding-top: 10%;
  padding-bottom: 10%;
}

.rowalign {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
  height: 50px;
}
.rowalign input {
  width: 100%;
}
.rowalign label {
  margin-top: 15px;
}
.btn {
  height: 50px;
  background-color: #00ccff;
  color: #000000;
}
/* .rowalign */
/* 
.theinputs input {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50px;
  margin-bottom: 15px;
} */
</style>
