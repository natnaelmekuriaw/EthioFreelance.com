<template>
  <div class="wrapper" style="margin-left:20%">
    <!--<h1>.....ALL Freelnacers.....</h1>
     <input type="button" value="Show" @click="displayFreelancers"> -->

    <div class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Banned Freelancers</h1>
      <p class="mb-4">
        This is List of Banned Freelancer accounts
      </p>

      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Banned Freelancers</h6>
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
                    <th>Action</th>
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
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr
                    v-for="freelancer in bannedFreelancers"
                    :key="freelancer['_id']"
                  >
                    <td>{{ freelancer["firstname"] }}</td>
                    <td>{{ freelancer["lastname"] }}</td>
                    <td>{{ freelancer["username"] }}</td>
                    <td>12</td>
                    <td>{{ freelancer["email"] }}</td>
                    <td style="color:red">{{ freelancer["accountStatus"] }}</td>
                    <td>
                      <input
                        type="button"
                        value="Un Ban"
                        class="btn btn-primary approve"
                        @click="unBan(freelancer['_id'])"
                      />
                    </td>
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
import { mapState, mapActions } from "vuex";

export default {
  name: "BannedFreelancers",
  data() {
    return {
      //allFreelancers: this.$store.state.bannedFreelancers
    };
  },
  computed: {
    ...mapState(["bannedFreelancers"])
  },
  created() {},
  methods: {
    ...mapActions(["unBan"])
  },
  components: {}
};
</script>

<style scoped>
.wrapper {
  margin-left: 0px !important;
}
</style>
