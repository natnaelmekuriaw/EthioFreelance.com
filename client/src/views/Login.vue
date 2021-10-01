<template>
  <div class="login">
    <NavBar />
    <div>
      <img src="../assets/img/login_hq.jpeg" alt="loginpic" id="log-in-pic" />
    </div>
    <div class="blacklogo">
      <img src="../assets/ELogo_black.svg" alt="logo" />
    </div>
    <div class="inputspace">
      <form @submit.prevent="submit" class="form">
        <div class="col-12 pt-4">
                <p class="danger" style="color:red">{{ error }}</p>
        </div>
        
        <div class="col-12">
              <AdminInput
                name="Email"
                :rules="{ type: email }"
                :value="email.value"
                @update="update"
                type="email"
                placeholder="Email"
                required
              />
            </div>
        <div class="col-12">
          <div class="passwordinput">
            <AdminInput
              name="Password"
              :rules="{ min: 8 }"
              :value="password.value"
              @update="update"
              type="password"
              placeholder="Password"
              required
            />
          </div>
        </div>

        <div class="createforgot">
          <!-- <a href="/register">Create account</a>
          <br />
          <br />
           <a href="#">Forgot password</a>  -->

        </div>
        <div class="submitbtn">
                <button
                  type="submit"
                  class=" w-100 btn btn-dark btn-lg sub"
                >
                  Login
                </button>
              </div>
      </form>
    </div>
    <br /><br />
    <div><Footer /></div>
  </div>
</template>

<script>
// import MyButton from "../components/MyButton.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer";
import { userType } from "../store/helpers.js";
import { Role } from "../helpers/role.js";
import AdminInput from "../components/AdminInput.vue";


export default {
  components: {
    NavBar,
    Footer,
    AdminInput
  },
  data() {
    return {
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
      error: null
    };
  },
  computed: {
    ...userType,
    valid() {
      return this.email.valid && this.password.valid;
    },
  },
  methods: {
    submit() {
      // console.log(`username: ${this.email.value}: password: ${this.password.value}`)
      this.$store
        .dispatch("login", {
          email: this.email.value,
          password: this.password.value,
        })
        .then(() => {
          
          if (this.userRole == Role.Admin) {
            this.$router.push({ name: "AdminDashboard" });
          } else if (this.userRole == Role.Freelancer) {
            this.$router.push({ name: "FreelancerDashboard" });
          } else if (this.userRole == Role.Employer) {
            this.$router.push({ name: "EmployerDashboard" });
          }
          this.$router.push({ name: 'dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
          this.error = err.response.data.error.message;
        });
    },
    update(payload) {
      this[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid,
      };
    },
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

.login {
  padding-top: 100px;
  text-align: center;
}
div img#log-in-pic {
  width: 550px;
  /*align-content: center;
 
  margin:auto;*/
}

.blacklogo img {
  width: 40px;
  height: 40px;
  z-index: 9999;
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
}
.form {
  margin-top: 30px;
}

.inputspace {
  max-width: 500px;
  width: 35%;
  margin: auto;
  margin-top: 45px;
  padding-bottom: 20px;
  border: 1px solid #707070;
  border-radius: 10px;
  padding: 2%;
  z-index: 0 !important;
}
.login {
  margin-top: 1%;
  height: 200px;
}

.passwordinput {
}
.submitbtn {
  margin-top: 10%;
  margin-left: 75%;
  margin-bottom: 5;
  border-radius: 500px;
}

.createforgot {
  margin-top: 5%;
}
.createforgot a {
  text-decoration: none;
  color: #000000;
}
</style>
