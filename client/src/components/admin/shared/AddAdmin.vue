<template>
  <div class="wrapper" :class="{ admin: !minMax }">
    <div class="add">
      <div class="admin-heading">
        <span>Team access</span>
        <h1>Add admin</h1>
        <p>Create an account for a new administrator.</p>
      </div>
      <VeeForm
        :validation-schema="adminSchema"
        :initial-values="initialValues"
        @submit="submit"
        v-slot="{ isSubmitting }"
        novalidate
      >
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <div class="name-fields">
          <FormField name="firstname" label="First name" placeholder="First name" autocomplete="given-name" required />
          <FormField name="lastname" label="Last name" placeholder="Last name" autocomplete="family-name" required />
        </div>
        <FormField name="username" label="Username" placeholder="Choose a username" autocomplete="username" required />
        <FormField name="email" label="Email" type="email" placeholder="you@example.com" autocomplete="email" required />
        <FormField name="password" label="Password" type="password" placeholder="At least 8 characters" autocomplete="new-password" required />
        <FormField name="cpassword" label="Confirm password" type="password" placeholder="Re-enter the password" autocomplete="new-password" required />
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Adding…' : 'Add admin' }}
        </button>
      </VeeForm>
    </div>
  </div>
</template>

<script lang="ts">
import { Form as VeeForm } from "vee-validate";
import { mapState } from "vuex";
import FormField from "../../forms/FormField.vue";
import { adminSchema, AdminValues } from "../../../forms/auth";
import { formErrorMessage } from "../../../forms/error";

export default {
  components: { VeeForm, FormField },
  data() {
    return {
      error: "",
      adminSchema,
      initialValues: {
        firstname: "", lastname: "", username: "", email: "", password: "", cpassword: "",
      },
    };
  },
  computed: { ...mapState(["minMax"]) },
  methods: {
    async submit(values: AdminValues) {
      this.error = "";
      const account = {
        firstname: values.firstname,
        lastname: values.lastname,
        username: values.username,
        email: values.email,
        password: values.password,
        accountType: "Admin",
      };
      try {
        await this.$store.dispatch("register", account);
        await this.$router.push({ name: "AdminDashboard" });
      } catch (error) {
        this.error = formErrorMessage(error);
      }
    },
  },
};
</script>

<style scoped>
.wrapper { min-height: 100%; padding: 30px; background: var(--canvas); }
.add { width: min(100%, 620px); margin: 0 auto; padding: 38px 32px; border: 1px solid var(--line); border-radius: 20px; background: white; box-shadow: var(--shadow); }
.admin-heading { margin-bottom: 28px; }
.admin-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.admin-heading h1 { margin: 7px 0 8px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-section); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.admin-heading p { margin: 0; color: var(--muted); line-height: var(--leading-body); }
.name-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
.form-error { margin: 0 0 18px; padding: 11px 14px; border-radius: 10px; background: #fff1f1; color: #a42b35; }
.submit-button { width: 100%; margin-top: 10px; padding: 13px; border: 0; border-radius: 11px; background: var(--accent); color: white; font-size: var(--text-base); font-weight: 700; transition: background .2s, transform .2s; }
.submit-button:hover { background: var(--accent-dark); transform: translateY(-2px); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
@media (max-width: 560px) { .wrapper { padding: 16px; } .add { padding: 26px 20px; } .name-fields { grid-template-columns: 1fr; gap: 0; } }
</style>
