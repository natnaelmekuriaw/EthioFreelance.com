 <template>
 <div class="wrapper">
    <form action="" @submit.prevent="handleSubmit">
      <h1>Reset Password</h1>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Address"
          v-model="Address"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          placeholder="Phone Number"
          v-model="phone_number"
        />
      </div>
      <button class="btn btn-primary btn-block">Submit</button>
    </form>
  </div>
</template>
<script lang="ts">
import { resetPassword } from "../services/auth";
export default {
  name: "empprofile",
  data() {
    return {
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await resetPassword({
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
