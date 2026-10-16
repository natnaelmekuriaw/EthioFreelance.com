<template>
  <div class="post-job-page">
    <NavBar />
    <div class="post-card">
      <div class="post-heading">
        <span>Create an opportunity</span>
        <h1>Post a job</h1>
        <p>Tell freelancers what you need and set the details for your project.</p>
      </div>
      <VeeForm
        :validation-schema="jobSchema"
        :initial-values="initialValues"
        @submit="post"
        v-slot="{ isSubmitting, values, setFieldValue }"
        novalidate
      >
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <div class="field-row">
          <FormSelect name="catagory" label="Category" :options="categoryOptions" @change="setFieldValue('sub_catagory', '')" required />
          <FormSelect name="sub_catagory" label="Subcategory" :options="subcategoryOptions(values.catagory)" required />
        </div>
        <FormField name="title" label="Project title" placeholder="e.g. Design a flyer and poster" required />
        <FormTextarea name="discription" label="Project description" placeholder="Describe the work, goals, and deliverables" :rows="5" required />
        <div class="file-field">
          <div class="file-label-row">
            <label for="job-attachment">Helpful material <span>(optional)</span></label>
            <UiTooltip text="Attach a file that helps explain the work. This is optional.">
              <button type="button" class="help-button" aria-label="Helpful material: attach a file that helps explain the work. This is optional.">
                <i class="fas fa-question-circle" aria-hidden="true"></i>
              </button>
            </UiTooltip>
          </div>
          <input id="job-attachment" type="file" @change="onFileChange" />
          <small v-if="file">Selected: {{ file.name }}</small>
        </div>
        <div class="field-row">
          <FormSelect name="currency" label="Currency" :options="currencyOptions" required />
          <FormSelect name="budgetType" label="Budget type" hint="Choose fixed price for the project or per hour for hourly work." :options="budgetTypeOptions" required />
        </div>
        <FormField name="budget" label="Budget" type="number" placeholder="Enter an amount" required />
        <div class="field-row">
          <FormSelect name="duration" label="Duration" :options="durationOptions" required />
          <FormSelect name="skillLevel" label="Skill level" :options="skillLevelOptions" required />
        </div>
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Posting…' : 'Post job' }}
        </button>
      </VeeForm>
    </div>
  </div>
</template>

<script lang="ts">
import { Form as VeeForm } from "vee-validate";
import NavBar from "../components/layout/NavBar.vue";
import FormField from "../components/forms/FormField.vue";
import FormTextarea from "../components/forms/FormTextarea.vue";
import FormSelect from "../components/forms/FormSelect.vue";
import UiTooltip from "../components/ui/UiTooltip.vue";
import { userIds } from "../store/helpers";
import {
  jobSchema, JobValues, categoryOptions, currencyOptions, budgetTypeOptions,
  durationOptions, skillLevelOptions, subcategoryOptions,
} from "../forms/job";
import { formErrorMessage } from "../forms/error";
import { notify } from "../ui/notifications";

export default {
  components: { NavBar, VeeForm, FormField, FormTextarea, FormSelect, UiTooltip },
  data() {
    return {
      error: "",
      file: null as File | null,
      jobSchema,
      categoryOptions,
      currencyOptions,
      budgetTypeOptions,
      durationOptions,
      skillLevelOptions,
      initialValues: {
        catagory: "", sub_catagory: "", title: "", discription: "", currency: "USD",
        budgetType: "fixed_price", budget: "", duration: "", skillLevel: "",
      },
    };
  },
  computed: { ...userIds },
  methods: {
    subcategoryOptions,
    onFileChange(event: Event) {
      this.file = (event.target as HTMLInputElement).files?.[0] || null;
    },
    async post(values: JobValues) {
      this.error = "";
      const formData = new FormData();
      if (this.file) formData.append("file", this.file);
      Object.entries(values).forEach(([key, value]) => formData.append(key, value));
      formData.append("id", String(this.userId));
      try {
        await this.$store.dispatch("jobPost", formData);
        await this.$router.push({ name: "EmployerDashboard" });
        notify("Job posted.", "success");
      } catch (error) {
        this.error = formErrorMessage(error);
        notify(this.error, "error");
      }
    },
  },
};
</script>

<style scoped>
.post-job-page { min-height: 100vh; padding: 105px 20px 90px; background: var(--canvas); }
.post-card { width: min(100%, 880px); margin: 0 auto; padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-card); background: white; box-shadow: var(--shadow); }
.post-heading { margin-bottom: 28px; }
.post-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.post-heading h1 { margin: 7px 0 8px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-form-title); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.post-heading p { margin: 0; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.field-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.file-field { margin-bottom: 14px; }
.file-label-row { display: flex; align-items: center; gap: 6px; margin-bottom: 7px; }
.file-field label { display: block; margin: 0; color: var(--ink); font-size: var(--text-sm); font-weight: var(--weight-strong); }
.help-button { display: grid; place-items: center; width: 25px; height: 25px; border: 0; border-radius: 50%; background: transparent; color: var(--muted); }
.help-button:hover, .help-button:focus-visible { background: var(--accent-soft); color: var(--accent-dark); }
.file-field label span { color: var(--muted); font-weight: 400; }
.file-field input { display: block; width: 100%; padding: 9px 12px; border: 1px dashed var(--line); border-radius: 9px; background: var(--surface); font-size: var(--text-sm); transition: border-color var(--motion-fast), background var(--motion-fast); }
.file-field input:hover, .file-field input:focus-visible { border-color: var(--accent); background: var(--surface-tint); }
.file-field small { display: block; margin-top: 6px; color: var(--muted); }
.form-error { margin: 0 0 18px; padding: 11px 14px; border-radius: 10px; background: #fff1f1; color: #a42b35; }
.submit-button { display: block; min-height: 42px; margin: 14px 0 0 auto; padding: 9px 20px; border: 0; border-radius: 9px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); transition: background .2s, transform .2s; }
.submit-button:hover, .submit-button:focus-visible { background: var(--accent-dark); transform: translateY(-2px); }
.submit-button:active { transform: translateY(0); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
@media (max-width: 650px) { .post-job-page { padding: 95px 12px 60px; } .post-card { padding: 23px 17px; } .field-row { grid-template-columns: 1fr; gap: 0; } }
</style>
