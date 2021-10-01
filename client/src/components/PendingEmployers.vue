<template>
  <div class="wrapper" style="margin-left:20%">
    <!--<h1>.....ALL Freelnacers.....</h1>
     <input type="button" value="Show" @click="displayFreelancers"> -->

    <div class="container-fluid">
      <!-- Page Heading -->
      <h1 class="h3 mb-2 text-gray-800">Pending Employers</h1>
      <p class="mb-4">
        This is List of Pending Employers Accounts to be approved by the admin
      </p>

      <!-- DataTales Example -->
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Pending Employers</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <!-- < Employers /> -->

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
                    v-for="employer in pendingEmployers"
                    :key="employer['_id']"
                  >
                    <td>{{ employer["firstname"] }}</td>
                    <td>{{ employer["lastname"] }}</td>
                    <td>{{ employer["username"] }}</td>
                    <td>12</td>
                    <td>{{ employer["email"] }}</td>
                    <td style="color:#ffcc00">
                      {{ employer["accountStatus"] }}
                    </td>
                    <td>
                      <input
                        type="button"
                        value="Approve"
                        class="btn btn-primary approve"
                        @click="approve(employer['_id'])"
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
import { mapActions, mapState } from "vuex";

export default {
  name: "PendingEmployers",
  data() {
    return {
      pending: []
    };
  },
  computed: {
    ...mapState(["pendingEmployers"])
  },
  created() {},

  methods: {
    ...mapActions(["approve"])
  },
  components: {}
};
</script>

<style scoped>
.wrapper {
  margin-left: 0px !important;
}
</style>
