<template>
<div>
  <NavBar />
    <div class = "container wrapper pt-4 mt-4">
        <div class="container add">
             <h1 class="pt-4">Post Job</h1>
            <form @submit.prevent="post" class="pt-4 col">
                    <div class="row">
                        <div class="col">
                        <div class="form-section⤍FormSectionWrapper⤚2p7WP">

                            <div class="container⤍Label⤚1hFpT">
                                <label for="catagory" class="label⤍Label⤚1WMOP">Catagory </label>
                            </div>
                            <div class="select-box__wrapper⤍SimpleSelect⤚3GvgQ">
                                <select  @change="change_sub" class="select-box⤍SimpleSelect⤚2FAca" name="catagory" v-model="catagory" >
                                    <option value="">Select</option>
                                    <option value="20">Technology &amp; Programming</option>
                                    <option value="21">Writing &amp; Translation</option>
                                    <option value="22">Design</option>
                                    <option value="23">Digital Marketing</option>
                                    <option value="24">Video, Photo &amp; Image</option>
                                    <option value="25">Business</option>
                                    <option value="26">Music &amp; Audio</option>
                                    <option value="27">Marketing, Branding &amp; Sales</option>
                                    <option value="28">Social Media</option>
                                </select><svg fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024" class="select-box__icon⤍SimpleSelect⤚g_aDY">
                                <path d="M768 576l-256 320-256-320h512zM512 128l256 320h-512l256-320z"></path></svg>
                            </div>
                         </div>

                        </div>
                        <div class="col">
                            <div class="form-section⤍FormSectionWrapper⤚2p7WP">
                                <div class="container⤍Label⤚1hFpT">
                                    <label for="Subcategory" class="label⤍Label⤚1WMOP">Subcategory </label>
                                </div>
                                <div class="select-box__wrapper⤍SimpleSelect⤚3GvgQ">
                                    <select class="select-box⤍SimpleSelect⤚2FAca" name="Subcategory" v-model="sub_catagory">
                                        <option value="">Select</option>
                                        <option v-for="(item, index) in subcatagory" :key="index"  :value="item.value">
                                            {{ item.text }}
                                        </option>
                                    </select><svg fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024" class="select-box__icon⤍SimpleSelect⤚g_aDY">
                                    <path d="M768 576l-256 320-256-320h512zM512 128l256 320h-512l256-320z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="container⤍Label⤚1hFpT">
                        <label for="project-title" class="label⤍Label⤚1WMOP">Project title </label>
                        </div>
                    <span class="">
                        <input id="project-title" v-model='title' name="title" class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-" type="text" placeholder="e.g. I need a flyer and poster created" >
                    </span>
                                    
                
                
                <div>
                    <label for="tmp_attachments" class="label⤍Label⤚1WMOP">PROJECT DESCRIPTION</label>
                    <textarea v-model='discription' id="project-description" placeholder="I need a designer who specialises in professional UX design" rows="7" name="description" class="textarea⤍TextArea⤚3cYmx is-full-width⤍TextArea⤚2Fttq"></textarea>
                </div>
                
                <div class="form-section⤍FormSectionWrapper⤚2p7WP">
                    <div class="container⤍Label⤚1hFpT">
                        <label for="tmp_attachments" class="label⤍Label⤚1WMOP">Upload samples and other helpful material 
                            <small class="tip__text⤍Tip⤚2F7TJ">(optional)</small>
                        </label>
                    </div>
                    <div name="tmp_attachments-container">
                        <div class="drop-area⤍DefaultFilePicker⤚3qccL"> Drop files here<br>
                        or  <a class="browse-link⤍DefaultFilePicker⤚3u9DT"><input ref="file"  @change="onFileChange" type="file" /></a>
                        </div><ul class="pph-row--nested thumb-list⤍DefaultFilePicker⤚1V7O3"></ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-section⤍FormSectionWrapper⤚2p7WP">
                            <div class="container⤍Label⤚1hFpT">
                                <label for="currency" class="label⤍Label⤚1WMOP">Currency </label>
                            </div>
                            <div class="select-box__wrapper⤍SimpleSelect⤚3GvgQ">
                                <select v-model="currency" class="select-box⤍SimpleSelect⤚2FAca" name="currency">
                                    <option value="USD">$ USD</option>
                                    <option value="GBP">£ GBP</option>
                                    <option value="EUR">€ EUR</option>
                                    <option value="BIRR">ETB</option>
                                </select><svg fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024" class="select-box__icon⤍SimpleSelect⤚g_aDY">
                                <path d="M768 576l-256 320-256-320h512zM512 128l256 320h-512l256-320z"></path></svg>
                            </div>
                        </div>

                    </div>
                    <div class="col">
                        <div class="form-section⤍FormSectionWrapper⤚2p7WP">
                            <div class="container⤍Label⤚1hFpT">
                                <label for="budegtType" class="label⤍Label⤚1WMOP">Budget Type  </label>
                            </div>
                            <div class="select-box__wrapper⤍SimpleSelect⤚3GvgQ">
                                <select v-model="budgetType" class="select-box⤍SimpleSelect⤚2FAca" name="budegtType">
                                    <option value="fixed_price">Fixed Price</option>
                                    <option value="hourly">Per Hour</option>
                                </select><svg fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024" class="select-box__icon⤍SimpleSelect⤚g_aDY">
                                <path d="M768 576l-256 320-256-320h512zM512 128l256 320h-512l256-320z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="form-section⤍FormSectionWrapper⤚2p7WP">
                    <div class="container⤍Label⤚1hFpT">
                        <label for="currency" class="label⤍Label⤚1WMOP">Budget   </label>
                    </div>
                    <span class="has-prepended-currency⤍InputFieldPrice⤚2h-vl budget__wrapper⤍Budget⤚1rfPE has-prepended-currency--gbp⤍InputFieldPrice⤚WcWPv">
                        <input v-model="budget" name="budget" class="input⤍InputField⤚24DWw input--full-width⤍InputField⤚1VKm-" type="number" placeholder="0.00" min="0" step="1">
                    </span>
                </div>
                <div class="form-section⤍FormSectionWrapper⤚2p7WP">
                    <div class="container⤍Label⤚1hFpT">
                        <label for="duration" class="label⤍Label⤚1WMOP">Duration </label>
                    </div>
                    <div class="select-box__wrapper⤍SimpleSelect⤚3GvgQ">
                        <select v-model="duration" class="select-box⤍SimpleSelect⤚2FAca" name="duration">
                            <option value="">Select</option>
                            <option value="1 day or less">1 day or less</option>
                            <option value="less than 1 week">less than 1 week</option>
                            <option value="1 - 2 weeks">1 - 2 weeks</option>
                            <option value="3 - 4 weeks">3 - 4 weeks</option>
                            <option value="1 - 6 months">1 - 6 months</option>
                            <option value="More than 6 months">More than 6 months</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Not sure">Not sure</option>
                            <option value="CUSTOM">Other</option>
                        </select><svg fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024" class="select-box__icon⤍SimpleSelect⤚g_aDY">
                        <path d="M768 576l-256 320-256-320h512zM512 128l256 320h-512l256-320z"></path></svg>
                    </div>
                </div>
                  <div class="form-section⤍FormSectionWrapper⤚2p7WP">
                    <div class="container⤍Label⤚1hFpT">
                        <label for="skillLevel" class="label⤍Label⤚1WMOP">Skill Level </label>
                    </div>
                    <div class="select-box__wrapper⤍SimpleSelect⤚3GvgQ">
                        <select v-model="skillLevel" class="select-box⤍SimpleSelect⤚2FAca" name="skillLevel">
                            <option value="">Select</option>
                            <option value="entry">Entry Level</option>
                            <option value="intermediate">Intermediate Level</option>
                            <option value="expert">Expert Level</option>
                            
                        </select><svg fill="#69728C" width="16" height="16" viewBox="0 0 1024 1024" class="select-box__icon⤍SimpleSelect⤚g_aDY">
                        <path d="M768 576l-256 320-256-320h512zM512 128l256 320h-512l256-320z"></path></svg>
                    </div>
                </div>

                <div class="submitbtn">
                    <button
                    type="submit"
                    class=" w-100 btn btn-dark btn-lg sub"
                    >
                    Sign Up
                    </button>
                

              </div>
            </form>
            {{discription}}
          {{catagory}}
          {{sub_catagory}}
        </div>
    </div>
</div>
</template>
<script>
import { catagory } from '../helpers/select.js'
import { userIds } from "../store/helpers.js";
import NavBar from "../components/NavBar.vue";

// import axios from 'axios'
export default {
    data() {
        return {
            subcatagory: null,
            catagory: null,
            sub_catagory: null,
            selectedFile:'',
            title: null,
            discription:null,
            file:"",
            currency:null,
            budgetType:null,
            budget:null,
            duration:null,
            skillLevel: null,
        }
    },
    components: {
    NavBar,
  },
  computed: {
    ...userIds,
  },
    methods: {
        onFileChange() {
            const selectedFile = this.$refs.file.files[0]; // accessing file
            this.file = selectedFile;
        },
        change_sub(){
            this.subcatagory = catagory[this.catagory]
            console.log(this.subcatagory[1])
        },
        async post() {
            const formData = new FormData();
            formData.append('file', this.file)
            console.log(`what is it: ${this.file.file}`)
            formData.append('title',this.title)
            formData.append('catagory', this.catagory)
            formData.append('sub_catagory', this.sub_catagory)
            formData.append('discription', this.discription)
            formData.append('budgetType', this.budgetType)
            formData.append('budget', this.budget)
            formData.append('currency', this.currency)
            formData.append('duration', this.duration)
            formData.append('skillLevel', this.skillLevel)
            formData.append("id", this.userId);
            // try{
            //     await axios.post('//localhost:8081/api/job/post', formData);
            //     console.log('uploaded')
            // }catch(err){
            //     console.log(err);
            // }
            // axios.post("//localhost:8081/api/job/post", {
            //     selected: this.selected,
            //     sub_selected: this.sub_selected,
            //     title: this.title,
            //     selectedFile: this.selectedFile,
            //     discription: this.discription,
            //     currency: this.currency,
            //     budgetType: this.budgetType,
            //     budget: this.budget,
            //     duration: this.duration,
            //     skillLevel: this.skillLevel
            // })
            // .then(res => {
            //     console.log(res);
            // })
            // .catch(err => {
            //     console.log(err);
            // });
            // const formData = new FormData();
            // formData.append("file", this.selectedFile);
            // console.log(`selectedFile: ${formData.file}`)
            this.$store.dispatch('jobPost', 
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then(() => {
                    this.$router.push({ name: "EmployerDashboard" });
                    console.log("sub")
                
                // this.$router.push({ name: 'dashboard' })
            }).catch(err => {
                 console.log(`Error: ${err}`)
                console.log(err.response.data.error.message)
            })
        },
    },
    
}
</script>

<style scoped >
#wrapper {
  background: #f8f9fc;
}
.wrapper {
  background: #f8f9fc;

  text-align: center;
  padding: 30px;
  padding-top: 100px;
}
.add {
  padding-top: 70px;
  padding-top: 60px;
  border-radius: 10px;
  box-shadow: 0 0.15rem 1.75rem 0 rgb(20 20 255 / 25%);
  display: inline-block;
  width: 70%;
  background-color: #ffffff;
}
.select-box__wrapper⤍SimpleSelect⤚3GvgQ {
    position: relative;
    width: 100%;
}
.select-box {
    appearance: none;
    display: block;
    box-sizing: border-box;
    box-shadow: rgba(37, 40, 55, 0.1) 0px 1px 1px 0px;
    width: 100%;
    height: 2.5rem;
    color: rgb(24, 32, 43);
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8125rem;
    font-weight: 300;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(195, 200, 212);
    border-image: initial;
    border-radius: 0.3rem;
    background: linear-gradient(rgb(255, 255, 255), rgb(250, 252, 255));
    padding: 0.3125rem 1.875rem 0.3125rem 0.625rem;
}
.select-box__icon⤍SimpleSelect⤚g_aDY {
    fill: rgb(91, 102, 120);
    position: absolute;
    top: 0px;
    right: 0.625rem;
    bottom: 0px;
    height: 100%;
    pointer-events: none;
}
.is-full-width⤍TextArea⤚2Fttq {
    width: 100%;
}
.textarea⤍TextArea⤚3cYmx {
    display: block;
    margin-right: 0.625rem;
    box-shadow: rgba(93, 94, 97, 0.25) 0px 0.07812rem 0.15625rem -0.07812rem inset, rgba(236, 239, 244, 0.45) 0px 0px 0.3125rem;
    background-color: rgb(245, 247, 250);
    width: 100%;
    height: auto;
    min-height: 5rem;
    resize: vertical;
    color: rgb(76, 77, 79);
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: calc(0.61813vw + 0.60371rem);
    font-weight: 300;
    line-height: 1.5;
    transition: all 0.125s ease-out 0s;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(152, 153, 156);
    border-image: initial;
    border-radius: 3.5px;
    padding: 0.65625rem 0.9375rem;
}
*, :after, :before {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
}
user agent stylesheet
textarea {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    resize: auto;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    column-count: initial !important;
    margin: 0em;
    font: 400 13.3333px Arial;
    border-width: 1px;
    border-style: solid;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
    padding: 2px;
}
.browse-link⤍DefaultFilePicker⤚3u9DT {
    color: rgb(217, 80, 0);
}
a, a:hover {
    text-decoration: none;
}
.drop-area⤍DefaultFilePicker⤚3qccL {
    position: relative;
    z-index: 5;
    background-color: rgb(245, 247, 250);
    color: rgb(112, 114, 118);
    font-style: italic;
    text-align: center;
    transition: all 0.11s ease-in 0s;
    border-width: 1px;
    border-style: dashed;
    border-color: rgb(152, 153, 156);
    border-image: initial;
    border-radius: 0.3rem;
    padding: 2.4975rem 0.9375rem;
}
.container⤍Label⤚1hFpT {
    -webkit-box-pack: justify;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.select-box__wrapper⤍SimpleSelect⤚3GvgQ {
    position: relative;
    width: 100%;
}
.select-box⤍SimpleSelect⤚2FAca {
    appearance: none;
    display: block;
    box-sizing: border-box;
    box-shadow: rgba(37, 40, 55, 0.1) 0px 1px 1px 0px;
    width: 100%;
    height: 2.5rem;
    color: rgb(24, 32, 43);
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8125rem;
    font-weight: 300;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(195, 200, 212);
    border-image: initial;
    border-radius: 0.3rem;
    background: linear-gradient(rgb(255, 255, 255), rgb(250, 252, 255));
    padding: 0.3125rem 1.875rem 0.3125rem 0.625rem;
}
.select-box__icon⤍SimpleSelect⤚g_aDY {
    fill: rgb(91, 102, 120);
    position: absolute;
    top: 0px;
    right: 0.625rem;
    bottom: 0px;
    height: 100%;
    pointer-events: none;
}
.new-app .payment-container .tiles-container .tile-wrapper .tile-inner[data-v-f3e89f42] {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 20px;
    height: 95px;
}
.new-app .payment-container .tiles-container .tile-wrapper .tile-inner .tile-icon-wrapper[data-v-f3e89f42] {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    width: 32px;
}
.new-app .payment-container .tiles-container .tile-wrapper .tile-inner .tile-info[data-v-f3e89f42] {
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: start;
    align-items: flex-start;
    margin-left: 20px;
}
    .has-prepended-currency⤍InputFieldPrice⤚2h-vl input[type="number"] {
    padding-right: 0.9375rem;
    padding-left: 2.5rem;
}
.input--full-width⤍InputField⤚1VKm- {
    width: 100%;
}
.input⤍InputField⤚24DWw {
    display: inline-block;
    box-shadow: rgba(93, 94, 97, 0.25) 0px 0.07812rem 0.15625rem -0.09375rem inset, rgba(236, 239, 244, 0.45) 0px 0px 0.3125rem;
    background-color: rgb(245, 247, 250);
    height: 2.625rem;
    color: rgb(76, 77, 79);
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 0.8125rem;
    font-weight: 300;
    line-height: 1.53846;
    transition: all 0.125s ease-out 0s;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(152, 153, 156);
    border-image: initial;
    border-radius: 0.3rem;
    padding: 0.625rem 0.9375rem;
}
.budget__wrapper⤍Budget⤚1rfPE {
    display: inline-block;
    width: 100%;
}
.budget__wrapper⤍Budget⤚1rfPE::before {
    height: 100%;
    padding: 0.75rem;
}
.has-prepended-currency⤍InputFieldPrice⤚2h-vl {
    display: inline-block;
    position: relative;
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
</style>