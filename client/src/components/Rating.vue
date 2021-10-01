<template>
  <div>
    <div>
      <NavBar />
    </div>
    <form action="post" @submit.prevent="sendReview" class="formclass">
      <div>
        <h1>Rate and Give Review</h1>
      </div>

      <div><h1>Rate User</h1></div>
      <div class="rating"><vue3starRatings v-model="rating" /></div>
      <div>{{ rating }}</div>
      <div><h1>Give Review</h1></div>
      <div class="reviewuser">
        <input class="height" type="message" v-model="review" />
        <Button class="btn" type="submit">Submit</Button>
      </div>
    </form>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { defineComponent } from "vue";
import vue3starRatings from "vue3-star-ratings";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default defineComponent({
  components: {
    vue3starRatings,
    NavBar,
    Footer,
  },

  data() {
    return {
      // userID: null,
      rating: "",
      review: "",
    };
  },
  methods: {
    sendReview() {
      console.warn(this.posts);
      axios
        .post("http://localhost:8081/api/ratingreview", {
          // userID:null,
          rating: this.rating,
          review: this.review,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
});
</script>
<style scoped>
.formclass {
  margin-top: 20px;
}
.rating {
  /* width: 20%; */
  padding: 40%;
  padding-top: 0%;
  padding-bottom: 0%;
  alignment: center;
}
.reviewuser {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30%;
  padding-top: 0%;
  padding-bottom: 0%;
  /* height: 100%; */
}
.reviewuser input {
  margin-bottom: 2%;
}
.btn {
  height: 40px;
  margin-bottom: 5%;
  background-color: #2567b3;
  color: #000000;
}
.height {
  height: 100px;
}
</style>
