<template>
  <div class="container wrapper " :class="[minMax ? '' : 'admin']">
    <div class="add">
      <h1 class="pt-4">Add Admin</h1>
      <div class="row">
        <div class="col">
          <div class="inputspace">
            <form class="pt-4 col">
              <div class="col-12  pt-4">
                <AdminInput
                  name="FirstName"
                  class="fname"
                  :rules="{}"
                  :value="firstname.value"
                  @update="update"
                  :placeholder="firstname.placeholder"
                  type="text"
                  required
                />
              </div>
              
              <div class="col-12 ">
                <AdminInput
                  name="LastName"
                  :rules="{}"
                  :value="lastname.value"
                  @update="update"
                  :placeholder="lastname.placeholder"
                  type="text"
                  required
                />
              </div>
              <div class="col-12 ">
                <AdminInput
                  name="username"
                  :rules="{}"
                  :value="username.value"
                  @update="update"
                  placeholder="username"
                  type="text"
                  required
                />
              </div>
              <div class="col-12">
                <AdminInput
                  name="Email"
                  :rules="{ type: email }"
                  :value="email.value"
                  @update="update"
                  type="email"
                  :placeholder="email.placeholder"
                  required
                />
              </div>
            
              <br />

              <div class="col-12">
                <div class="passwordinput">
                  <AdminInput
                    name="Password"
                    :rules="{ min: 8 }"
                    :value="password.value"
                    @update="update"
                    type="password"
                    :placeholder="password.placeholder"
                    required
                  />
                </div>
              </div>
              <div class="col-12">
                <AdminInput
                  name="cPassword"
                  :rules="{ min: 8 }"
                  :value="cpassword.value"
                  @update="update"
                  type="password"
                  :placeholder="cpassword.placeholder"
                  required
                />
              </div>

              <div class="submitbtn">
                <button
                  type="submit"
                  class=" w-100 btn btn-dark btn-lg sub"
                  @click="submit"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { userType } from "../store/helpers.js";
// import { Role } from "../helpers/role.js";
// import MyButton from "../components/MyButton.vue";
import AdminInput from "../components/AdminInput.vue";
import { mapState } from "vuex";
export default {
  components: {
    // MyButton,
    AdminInput
    //NavBar,
  },
  data() {
    return {
      firstname: {
        value: "",
        placeholder: "First Name",
        valid: false
      },

      lastname: {
        value: "",
        placeholder: "Last Name",
        valid: false
      },
      email: {
        value: "",
        placeholder: "Email",
        valid: false
      },
      password: {
        value: "",
        placeholder: "Password",
        valid: false
      },
      cpassword: {
        value: "",
        placeholder: "Confirm Password",
        valid: false
      },

      accountType: {
        value: "Admin",
        valid: true
      },
      username: {
        value: "",
        valid: false
      }
    };
  },
  computed: {
    ...userType,
    ...mapState(["minMax"]),
    valid() {
      return (
        this.email.valid &&
        this.password.valid &&
        this.accountType.valid &&
        this.firstname.valid &&
        this.username.valid &&
        this.lastname.valid
      );
    }
  },
  methods: {
    update(payload) {
      this[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid
      };
    },
    async submit() {

      this.$store
        .dispatch("register", {
          firstname: this.firstname.value,
          lastname: this.lastname.value,
          username: this.username.value,
          email: this.email.value,
          password: this.password.value,
          accountType: this.accountType.value
        })
        .then(() => {
            this.$router.push({ name: "AdminDashboard" });

          
          // this.$router.push({ name: 'dashboard' })
        })
        .catch(err => {
          console.log(`Etyrror: ${err}`);
          console.log(`Error message: ${err.response.data.error.message}`);
          console.log(`Error: ${err.response.data.error}`);
          this.error = err.response.data.error;
        })


     
    }
  }
};
</script>

<style scoped>
body {
  background: red;
}
.regimg {
  /* border: 5px solid #000; */
  width: 480px;
  height: 300px;
  border-radius: 2px;
  text-align: left;
  padding: 0px;
  align-content: left;
  margin-bottom: 10px;
}
.left-side {
  /* border-right: 2px solid #000000; */
  margin: 0px;
}
.signupbody {
  margin: 0px;
  padding: 0px;
}
h2 {
  width: 480px;
  height: 300px;
}

.blacklogo img {
  width: 40px;
  height: 40px;
  z-index: 9999;
}
.blacklogo {
  background: #ffffff;
  border: 1px solid #707070;
  border-radius: 270px;
  width: 90px;
  height: 90px;
  text-align: center;
  padding: 20px;
  margin: auto;
  z-index: 9999;
}
p {
  width: 440px;
}
.form {
  margin-top: 30px;
}

.inputspace {
  max-width: 500px;
  margin: auto;
  margin-top: -35px;
  padding-bottom: 20px;

  z-index: 1;
}

.passwordinput {
  width: 100%;
}
.submitbtn {
  margin-top: 5%;
  margin-left: 75%;
  margin-bottom: 5;
  border-radius: 500px;
}
legend {
  padding-top: 0px;
  padding-left: 10px;
  display: inline;
  width: 20%;
  text-align: auto;
}
label {
  padding-top: 0px;
  padding-right: 10px;
  display: inline;
  width: 20%;
  text-align: auto;
}

.radio {
  display: inline;
  width: 10%;
  padding-right: 30px;
}
.sex {
  display: inline;
  padding-right: 10px;
}
.age {
  border: 1px solid #000000;
  border-radius: 4px;
  width: 10%;
  display: inline;
}
.sub {
  transition: 2s;
}
.sub:hover {
  transition: 2s;
  color: #000000;
  background-color: #ffffff;
  border-radius: 100px;
  border: 1px solid #000000;
}

.createforgot {
  margin-top: 5%;
}
.createforgot a {
  text-decoration: none;
  color: #000000;
}
#wrapper {
  background: #f8f9fc;
}
.wrapper {
  background: #f8f9fc;

  text-align: center;
  padding: 30px;
}
.add {
  border-radius: 10px;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(20 20 255 / 25%);
  width:60%;
  margin:auto;
  display: block;
  background-color: #ffffff;
}
.error p {
  color: green !important;
}
</style>
