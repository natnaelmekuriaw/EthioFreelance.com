<template>
  <div>
    <input
      name="search_box"
      @change="searchmethod"
      @keyup="searchmethod"
      v-model="searchText"
      type="search"
      placeholder="Search"
      class=" search form-control"
    />
    <!-- <template v-if="!state.noSearch && state.searchResults.length > 0">
      <div
        class="search-item"
        v-for="(result, index) in state.searchResults"
        :key="index"
      >
        <hr v-if="index > 0" />
        <p>{{ result }}</p>
      </div>
    </template>
    <template v-else-if="!state.noSearch">
      <div class="search-item">
        <p>Sorry. No Results.</p>
      </div>
    </template> -->
  </div>
</template>
<script>
// import axios from "axios";
import { reactive } from "vue";
// import { userType } from "../store/helpers.js";
import store from "../store";

// import { mapAction } from "vuex";
// import vuex from "vue";

export default {
  name: "search",
  setup() {
    const state = reactive({
      searchResults: [],
      noSearch: true,
    });
    function searchmethod(e) {
      let search = e.target.value.trim();
      console.log(`search: ${search}`);

      store.dispatch("loadSearchedJobs", {
        search: search,
      });

      // axios.post("http://localhost:8081/api/job/search", {
      //   search,
      // });
    }
    // .then((res) => {
    //   if (search === "") {
    //     state.noSearch = true;
    //     return;
    //   }
    //   state.noSearch = false;
    //   state.searchResults = res.data.map((job) => job.jobType);
    // })
    // .catch((err) => {
    //   throw new Error(err);
    // });
    // }

    // onChange() {
    //   this.$emit("search", this.searchText);
    // },
    return {
      searchmethod,
      state,
    };
  },
};
</script>
<style scoped>
/* .search {
  display: inline !important;
  height: 40px !important;
  width: 400px !important;
  background: inherit !important;
  border: 2px solid #ffffff !important;
  color: #ffffff !important;
  border-radius: 100px !important;
}
.search::placeholder {
  color: #ffffff !important;
  font-family: "Century Gothic Regular";
  text-align: right;
} */
</style>
