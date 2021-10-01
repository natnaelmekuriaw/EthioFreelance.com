<template>
  <div>
    <div class="nav-bar"><NavBar /></div>
    <div class="home">
      <div class="bodydescription">
        <b style="font-family:Century Gothic" class="intro">
          <h1 id="h1">{{ intro.the }}</h1>
          <h1 id="h2">{{ intro.free }}</h1>
          <h1 id="h3">{{ intro.web }}</h1>
        </b>
        <p class="description gothic-regular">
          {{ intro.description1 }}<br />
          {{ intro.description2 }}<br />
          {{ intro.description3 }}<br />
        </p>
        <div class="btns">
          <button class="freelancerbtn gothic">
            <router-link
              tag="li"
              class="freelancerregister"
              active-class="active"
              exact-active-class="exact-active"
              to="/register">
              Start freelancing <i class="fas fa-arrow-right"></i>
            </router-link>
          </button>

          <button class="employerbtn gothic">
            <router-link
              tag="li"
              class="employerlogin"
              active-class="active"
              exact-active-class="exact-active"
              to="/login"
            >
              Post job <i class="fas fa-arrow-right"></i>
            </router-link>
          </button>
        </div>
      </div>
      <div class="homepageimg">
        <img src="../assets/homepageimg.png" alt="" />
      </div>
    </div>
    <div><HowItWorks /></div>
    <div>
      <div class="category-wrapper">
        <div class="numberdescription">
          <h4>
            +7 million <br />
            Freelancers
          </h4>
          <h4>
            +7,000 <br />
            Employers
          </h4>
          <h4>
            +12,000 <br />
            Active jobs
          </h4>
          <h4>
            +$27,000,000 <br />
            Payments made
          </h4>
        </div>
        <div class="categories">
          <h2>
            Browse through different job <br />
            categories and sub categories
          </h2>
        </div>
        <div class="category-list">
          <div class="category1"></div>
          <div class="category1img">
            <img src="../assets/jobcategories/MaskGroup1.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup18.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup10.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup4.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup6.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup8.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup11.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup12.svg" alt="" />
          </div>

          <div class="category1description">
            <a>Graphic design</a>
            <a>Web design</a>
            <a>Accounting</a>
            <a>Android development</a>
            <a>Software development</a>
            <a>Game development</a>
            <a>Management</a>
            <a>Video editing</a>
          </div>

          <div class="category2"></div>

          <div class="category2img">
            <img src="../assets/jobcategories/MaskGroup13.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup13.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup13.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup9.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup13.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup15.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup24.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup13.svg" alt="" />
          </div>

          <div class="category2description">
            <a>System analyst</a>
            <a>Business and finance</a>
            <a>Translation</a>
            <a>Attorney</a>
            <a>Linux developer</a>
            <a>Database design</a>
            <a>E-commerce</a>
            <a>Information technology</a>
          </div>
          <div class="category3"></div>

          <div class="category3img">
            <img src="../assets/jobcategories/MaskGroup20.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup21.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup22.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup17.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup19.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup23.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup16.svg" alt="" />
            <img src="../assets/jobcategories/MaskGroup26.svg" alt="" />
          </div>

          <div class="category3description">
            <a>SEO</a>
            <a>Marketing</a>
            <a>Blogging</a>
            <a>Music production</a>
            <a>Health care</a>
            <a>Freont End developer</a>
            <a>Web admin</a>
            <a>Fashion design</a>
          </div>
        </div>
      </div>
    </div>
    <div><Footer /></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HowItWorks from "../components/HowItWorks.vue";
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    HowItWorks,
    Footer,
    NavBar,
  },

  data() {
    return {
      intro: {
        the: "Sell Your",
        free: "skills, Earn",
        web: "a fortune",
        description1: "More than 7 million freelancers and ",
        description2: "9 thousand employer are using ",
        description3: "ethiofreelance.com",
      },
    };
  },
};
</script>

<style scoped>
/* .navbar {
  margin-top: 0%;
} */
.bodydescription {
  width: 50%;
  align-content: left;
  text-align: left;
  margin-left: 60px;
  margin-top: 130px;

  display: block;
  padding-bottom: 20px;
}

.intro #h1 {
  font-size: 55px;
}
.intro #h2 {
  margin-left: 5%;
  font-size: 55px;
}
.intro #h3 {
  margin-left: 26%;
  font-size: 55px;
}
.description {
  margin-top: 30px;
  font-size: 25px;
}
.home {
  display: flex;
  justify-content: space-between;
}
.btns {
  display: flex;
}
.freelancerbtn {
  font-size: 20px;
  background-color: #1e96ac;
  color: #ffffff;
  border: inherit;
  border-radius: 2px;
  width: 220px;
  height: 40px;
  padding: 3px;
  margin-right: 30px;
}
.employerbtn {
  font-size: 20px;
  background-color: #2567b3;
  color: #ffffff;
  border: inherit;
  border-radius: 2px;
  width: 220px;
  height: 40px;
  padding: 3px;
  font-family: arial rounded;
  text-align: center;
}
.freelancerregister {
  color: #ffffff;
  cursor: pointer;
  background-color: #1e96ac;
  pointer-events: visible;
}

.employerlogin {
  color: #ffffff;
  cursor: pointer;
  pointer-events: visible;
}
.employerbtn i {
  margin-left: 20px;
}
.homepageimg img {
  margin-top: 38px;
  width: 750px;
  height: 550x;
}

.category-wrapper {
  padding: 50px;
}
.numberdescription {
  display: flex;
  border-bottom: 1px solid #000000;
  justify-content: space-between;
  padding-bottom: 20px;
}

.categories {
  text-align: left;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 40px;
}

.category-list {
  display: flex;
  justify-content: space-between;
  /* justify-content: space-around; */
  height: 270px;
}
.category1 {
  display: flex;
}
.category2 {
  display: flex;
}
.category3 {
  display: flex;
}
.category1description a {
  display: block;
  text-align: left;
  margin-bottom: 10px;
}
.category1img img {
  display: block;
  width: 30px;
  margin-bottom: 5px;
}
.category2description a {
  display: block;
  text-align: left;
  margin-bottom: 10px;
}
.category2img img {
  display: block;
  width: 30px;
  margin-bottom: 5px;
}
.category3description a {
  display: block;
  text-align: left;
  margin-bottom: 10px;
}
.category3img img {
  display: block;
  width: 30px;
  margin-bottom: 5px;
}
.financeimg {
  width: 100px;
  height: 50px;
}
.gothic {
  font-family: "Century Gothic";
}
.gothic-regular {
  font-family: "Century Gothic Regular";
}
a:hover{
  text-decoration: none!important; color:#ffffff!important;

}
</style>
