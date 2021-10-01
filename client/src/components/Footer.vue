<template>
  <div class="footerwrapper">
    <div class="footer">
      <div class="footerhead">
        <img class="logo" src="../assets/ELogo.svg" />
        <a class="navbar-brand ethiofreelancetext" href="#">thioFreelance</a>
      </div>
      <div class="footerlinks">
        <a href="#"
          ><b>{{ footerlinknames.home }}</b></a
        >
        <a href="#"
          ><b>{{ footerlinknames.aboutus }}</b></a
        >
        <a href="#"
          ><b>{{ footerlinknames.howitworks }}</b></a
        >
        <a href="#"
          ><b>{{ footerlinknames.browsejobs }}</b></a
        >
        <img class="img1" src="../assets/socialmedia/facebook.svg" alt="fb" />
        <img
          class="img2"
          src="../assets/socialmedia/twitter.svg"
          alt="twitter"
        />
        <img class="img3" src="../assets/socialmedia/telegram.svg" alt="tg" />
        <img class="img4" src="../assets/socialmedia/linkedin.svg" alt="in" />
      </div>
    </div>
    <div class="footerlayer2">
      <div class="aboutus">
        <h6>
          <b>{{ aboutus.name }}</b>
        </h6>
        <p>
          {{ aboutus.abtus1 }}
          <br />
          {{ aboutus.abtus2 }}
          <br />
          {{ aboutus.abtus3 }}
          <br />
          {{ aboutus.abtus4 }}
          <br />
          {{ aboutus.abtus5 }}
          <br />
          {{ aboutus.abtus6 }}
        </p>
      </div>
      <div class="details">
        <h6>
          <b>{{ detailslinks.detail }}</b>
        </h6>
        <a href="#">{{ detailslinks.report }}</a>
        <a href="#">{{ detailslinks.orderingpayment }}</a>
        <a href="#"> {{ detailslinks.payment }}</a>
        <a href="#">{{ detailslinks.policy }}</a>
      </div>

      <div class="help">
        <h6>{{ helplinks.help }}</h6>
        <a href="#">{{ helplinks.howtoearn }}</a>
        <a href="#">{{ helplinks.support }}</a>
        <a href="#">{{ helplinks.tips }}</a>
        <a href="#">{{ helplinks.FAQ }}</a>
      </div>
      <div>
        <form @submit.prevent="postData" method="post" class="feadback">
          <textarea
            type="text"
            name="comment"
            class="comment"
            placeholder="leave comment here"
            v-model="comment"
          ></textarea>

          <input
            name="email"
            class="emailholder"
            type="text"
            placeholder="Email: Optional"
            v-model="visitoremail"
          />

          <button class="submitfeadbackbtn" type="submit">
            {{ submitbtn }}
          </button>
        </form>
      </div>

      <!-- <div class="submitfeadbackbtn">
      <button>Submit</button>
    </div> -->
      <div class="contactinfo">
        <div class="contactimages">
          <div>
            <img src="../assets/contactus/phoneimg.svg" alt="phone" />
          </div>
          <div>
            <p>{{ ourAddress.phonenumber }}</p>
          </div>
        </div>
        <div class="contactimages">
          <div>
            <img src="../assets/contactus/emailimg.svg" alt="email" />
          </div>

          <div>
            <a href="#">{{ ourAddress.email }}</a>
          </div>
        </div>
        <div class="contactimages">
          <div>
            <img src="../assets/contactus/globeimg.svg" alt="address" />
          </div>

          <div>
            <p>{{ ourAddress.location }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright">
      {{ ourAddress.copyright }}&copy;
      {{ ourAddress.copyright2 }}
    </div>
  </div>
</template>
<script>
// import Vue from "vue";

// Vue.use(axios);
// import VueAxios from "vue-axios";
// Vue.use(VueAxios, axios);

import axios from "axios";
export default {
  name: "footerComponent",
  data() {
    return {
      SendFeadback: [],
      aboutus: {
        name: "About Us",
        abtus1: "EthioFreelance is a ",
        abtus2: "thrusted and a growing web ",
        abtus3: "based freelancing system ",
        abtus4: "providing a platform for ",
        abtus5: "connecting freelancers and ",
        abtus6: "employers from anywhere.",
      },

      submitbtn: "Submit",
      footerlinknames: {
        home: "HOME",
        aboutus: "ABOUT US",
        howitworks: "HOW IT WORKS",
        browsejobs: "BROWSE JOBS",
      },
      detailslinks: {
        detail: "Details",
        report: "Report",
        orderingpayment: "Ordering and Payment",
        payment: "Payment",
        policy: " Policy and Privacy",
      },

      helplinks: {
        help: "Help",
        howtoearn: "How to earn",
        support: "Support",
        tips: "Tips",
        FAQ: "FAQ",
      },
      ourAddress: {
        phonenumber: "+251-941-78-2315",
        email: "ethiofreelance@gmail.com",
        location: "Addis Ababa, Ethiopia",
        copyright: "Copyright ",
        copyright2: "2021 EthioFreelance. All right reserved",
      },

      comment: "",
      visitoremail: "",
    };
  },
  methods: {
    postData() {
      //console.warn(this.posts);
      axios
        .post("http://localhost:8081/api/feedback", {
          message: this.comment,
          email: this.visitoremail,
        })
        .then((response) => {
          console.log(response);
        });
      // .then(function(response) {
      //   console.log(response.data);
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    },
  },
  // mounted() {
  //   axios
  //     .get("http://localhost:8081/api/faq")
  //     .then((response) => {
  //       console.log(response.data);
  //       this.Jobs = response.data;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
};
</script>
<style scoped>
.footerwrapper {
  /* margin-top: 100%; */
  /* position: inherit; */
}

.footer {
  background-color: #182c41;
  /* background-color: #006699; */
  color: #ffffff;
  font-size: 16px;
  padding-top: 15px;
  padding-left: 30px;
  padding-bottom: 5px;
  padding-right: 5px;
  display: flex;
  flex-direction: ro;
}

.footerhead a {
  /* margin-right: 110px; */
}
.footerhead img {
}

.copyright {
  /* background-color: #006699; */
  background-color: #182c41;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 5px;
  padding-right: 5px;
  border-top: 1px solid #ffffff;
}
.ethiofreelancetext {
  color: #ffffff;
}
.footerlinks {
  border-bottom: 1px solid white;
  /* padding: 10px; */
  padding-bottom: 10px;
  font-size: 16px;
  margin-top: 20px;
  margin-left: 25%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
}

.footerlinks a {
  text-decoration: none;
  /* justify-content: end; */
  /* margin-right: 30px; */

  border-top: #ffffff;
  color: #ffffff;
  padding-bottom: 1px;
  margin-right: 30px;
}
.footerlinks img {
  /* margin-right: 30px; */
  background: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 200px;
  margin-right: 10px;
}

.footerlayer2 {
  /* background-color: #006699;*/
  background-color: #182c41;
  text-align: left;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.footerlayer2 h6 {
  color: #ffffff;
}
.aboutus {
  /* padding-right: 50px; */
}
.aboutus p {
  color: #ffffff;
  font-size: 16px;
  /* width: 200px; */
}

.details {
  /* padding-right: 50px; */
}
.details a {
  text-decoration: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  /* width: 200px; */
}
.help {
  /* padding-right: 50px; */
}
.help a {
  text-decoration: none;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  /* width: 100px; */
}
.feadback {
  display: flex;
  flex-flow: column;
}

.feadback input {
  /* padding-right: 10px; */
  margin-left: 65px;
}
.feadback button {
  /* padding-right: 10px; */
  margin-left: 187px;
}

.comment {
  border-radius: 5px;
  padding: 5px;
  /* width: 250px; */
  height: 100px;
  margin-bottom: 5px;
}
.emailholder {
  border: none;
  border-radius: 5px;
  /* margin-top: -1px; */
}
.submitfeadbackbtn {
  border-radius: 5px;
  margin-top: 3px;
  background-color: #0080ff;
  color: #ffffff;
  border: #0080ff;
}

.contactinfo {
  color: #ffffff;
  font-size: 12px;
  padding-right: 10px;
}
.contactimages {
  display: flex;
  margin-top: 20px;
  margin-bottom: 10px;
}
.contactimages div {
  text-align: right;
  margin-right: 10px;
  padding-top: 3px;
}
.contactimages div img {
  height: 25px;
  width: 24px;
}
.contactimages div a {
  color: #ffffff;
  text-decoration: none;
  text-align: center;
}
.logo {
  margin-left: 20px;
  height: 30px;
}
</style>
