<template>
  <div>
    <div><NavBar /></div>
    <div class="container p-4 pay-container">
      <div class="tab mt-3 mb-3">
        <h3 class="p-2">Deposite Money</h3>
      </div>
      <form @submit.prevent="deposite">
        <div class="col-12">
          <div class="container⤍Label⤚1hFpT">
            <label for="amount" class="label⤍Label⤚1WMOP">Amount</label>
          </div>
          <span class="">
            <input
              id="amount"
              v-model="amount"
              name="amount"
              class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
              type="text"
              placeholder="Enter Amount to Deposite"
            />
          </span>
        </div>
        <div class="col-12">
          <div class="container⤍Label⤚1hFpT">
            <label for="phone" class="label⤍Label⤚1WMOP">Phone Number</label>
          </div>
          <span class="">
            <input
              id="phone"
              v-model="phone"
              name="phone"
              class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-"
              type="text"
              placeholder="Enter Phone Number"
            />
          </span>
        </div>
        <div class="submitbtn">
          <button>Deposit</button>
        </div>
      </form>
    </div>
    <div><Footer /></div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      amount: null,
      phone: null,
    };
  },
  methods: {
    deposite() {
      this.$store
        .dispatch("deposite", {
          amount: this.amount,
          phone: this.phone,
        })
        .then((res) => {
          console.log(`response from api:${res}`);
          // this.$router.push({ name: 'dashboard' })
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
        });
    },
  },
};
</script>
<style scoped>
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.pay-container {
  margin-bottom: 10%;
  margin-top: 60px;
}
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}
.pay-container {
  margin-bottom: 10%;
  margin-top: 60px;
}

.submitbtn {
  margin-top: 5%;
  margin-left: 75%;
  margin-bottom: 5;
  border-radius: 500px;
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

  z-index: 9999 !important;
  /*height: 10%;
  margin-left: 42%;
  margin-bottom: -30px;
  padding: 0.5%;
  
  display: visible;
  background-color: #ffffff;*/
}

button {
  align-content: right;
  background: #000000;
  width: 150px;
  color: #ffffff;
  border: 1px solid #000000;
  border-radius: 100px;
  padding: 10px 10px;
  font-size: 20px;
  cursor: pointer;
}
button:hover {
  color: #ffffff;
  background-image: linear-gradient(to right, #382e2e, #821717);
  border-radius: 100px;
  border: 1px solid #382e2e;
}
</style>
