<template>
  <div class="wrapper" style="margin-left:20%">
    <!--<h1>.....ALL Freelnacers.....</h1>
     <input type="button" value="Show" @click="displayEmployers"> -->

    <div class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">All Employers</h1>
      <p class="mb-4">
        This is List of all employer accounts including Pending, Active and
        Banned employer accounts
      </p>

      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">All Employers</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <!-- <Afreelancer /> -->

            <div>
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Account Status</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Account Status</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr v-for="employer in employers" :key="employer['_id']">
                    <td>{{ employer["firstname"] }}</td>
                    <td>{{ employer["lastname"] }}</td>
                    <td>{{ employer["username"] }}</td>
                    <td>12</td>
                    <td>{{ employer["email"] }}</td>
                    <td>{{ employer["accountStatus"] }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Allemployers",
  data() {
    return {
      //allEmployers:this.$store.state.employers,
    };
  },
  computed: {
    ...mapState(["employers"])
  },
  created() {},
  methods: {},
  components: {}
};
</script>

<style scoped>
.wrapper {
  margin-left: 0px !important;
}
</style>
