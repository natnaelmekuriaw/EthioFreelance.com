<template>
  <div class="apply-page">
    <NavBar />
    <div class="apply-card">
      <div class="apply-heading">
        <span>Take the next step</span>
        <h1>Apply for this job</h1>
        <p>Share your bid and introduce yourself to the employer.</p>
      </div>
      <VeeForm
        :validation-schema="applicationSchema"
        :initial-values="{ bid: '', proposal: '' }"
        @submit="apply"
        v-slot="{ isSubmitting }"
        novalidate
      >
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <FormField name="bid" label="Your bid" type="number" placeholder="Enter an amount" hint="Enter the amount you propose for this job." autocomplete="off" required />
        <FormTextarea name="proposal" label="Cover letter" placeholder="Tell the employer why you're a good fit" :rows="5" required />
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Submitting…' : 'Submit application' }}
        </button>
      </VeeForm>
    </div>
  </div>
</template>

<script lang="ts">
import { applyForJob } from "../services/jobs";
import { Form as VeeForm } from "vee-validate";
import NavBar from "../components/layout/NavBar.vue";
import FormField from "../components/forms/FormField.vue";
import FormTextarea from "../components/forms/FormTextarea.vue";
import { userIds } from "../store/helpers";
import { applicationSchema, ApplicationValues } from "../forms/application";
import { formErrorMessage } from "../forms/error";
import { notify } from "../ui/notifications";

export default {
  components: { NavBar, VeeForm, FormField, FormTextarea },
  data() {
    return { error: "", applicationSchema };
  },
  computed: { ...userIds },
  methods: {
    async apply(values: ApplicationValues) {
      this.error = "";
      try {
        await applyForJob({
          jobID: this.$route.params.id,
          appliedFreelancerID: this.userId,
          bid: values.bid,
          proposal: values.proposal,
        });
        await this.$router.push({ name: "FreelancerDashboard" });
        notify("Application submitted.", "success");
      } catch (error) {
        this.error = formErrorMessage(error);
        notify(this.error, "error");
      }
    },
  },
};
</script>

<style scoped>
.apply-page { min-height: 100vh; padding: 108px 20px 90px; background: var(--canvas); }
.apply-card { width: min(100%, 680px); margin: 0 auto; padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-card); background: white; box-shadow: var(--shadow); }
.apply-heading { margin-bottom: 27px; }
.apply-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.apply-heading h1 { margin: 7px 0 8px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-form-title); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.apply-heading p { margin: 0; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.form-error { margin: 0 0 18px; padding: 11px 14px; border-radius: 10px; background: #fff1f1; color: #a42b35; }
.submit-button { display: block; min-height: 42px; margin: 14px 0 0 auto; padding: 9px 20px; border: 0; border-radius: 9px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); transition: background .2s, transform .2s; }
.submit-button:hover, .submit-button:focus-visible { background: var(--accent-dark); transform: translateY(-2px); }
.submit-button:active { transform: translateY(0); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
@media (max-width: 560px) { .apply-page { padding: 96px 14px 60px; } .apply-card { padding: 25px 18px; } }
</style>
