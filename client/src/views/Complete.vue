<template>
  <div class="complete-page">
    <NavBar />
    <div class="complete-card">
      <div class="complete-heading">
        <span>Project delivery</span>
        <h1>Submit completed work</h1>
        <p>Upload the final file for this job.</p>
      </div>
      <form @submit.prevent="complete">
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <div class="file-field">
          <label for="completed-file">Completed project file</label>
          <input id="completed-file" type="file" required @change="onFileChange" />
          <small v-if="file">Selected: {{ file.name }}</small>
        </div>
        <button type="submit" class="submit-button" :disabled="submitting">
          {{ submitting ? 'Sending…' : 'Send completed work' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "../components/layout/NavBar.vue";
import { formErrorMessage } from "../forms/error";
import { notify } from "../ui/notifications";

export default {
  components: { NavBar },
  data() {
    return { file: null as File | null, error: "", submitting: false };
  },
  methods: {
    onFileChange(event: Event) {
      this.file = (event.target as HTMLInputElement).files?.[0] || null;
    },
    async complete() {
      if (!this.file) {
        this.error = "Choose a file to submit.";
        return;
      }
      this.error = "";
      this.submitting = true;
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("jobId", String(this.$route.params.id));
      try {
        await this.$store.dispatch("jobComplete", formData);
        await this.$router.push({ name: "FreelancerDashboard" });
        notify("Completed work sent.", "success");
      } catch (error) {
        this.error = formErrorMessage(error);
        notify(this.error, "error");
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<style scoped>
.complete-page { min-height: 100vh; padding: 108px 20px 90px; background: var(--canvas); }
.complete-card { width: min(100%, 580px); margin: 0 auto; padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-card); background: white; box-shadow: var(--shadow); }
.complete-heading { margin-bottom: 25px; }
.complete-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.complete-heading h1 { margin: 7px 0 8px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-form-title); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.complete-heading p { margin: 0; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.file-field label { display: block; margin-bottom: 8px; color: var(--ink); font-size: var(--text-sm); font-weight: var(--weight-strong); }
.file-field input { display: block; width: 100%; padding: 13px; border: 1px dashed var(--line); border-radius: 10px; background: var(--surface); }
.file-field small { display: block; margin-top: 7px; color: var(--muted); }
.form-error { margin: 0 0 18px; padding: 11px 14px; border-radius: 10px; background: #fff1f1; color: #a42b35; }
.submit-button { display: block; min-height: 42px; margin: 20px 0 0 auto; padding: 9px 20px; border: 0; border-radius: 9px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); transition: background .2s, transform .2s; }
.submit-button:hover { background: var(--accent-dark); transform: translateY(-2px); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
@media (max-width: 560px) { .complete-page { padding: 96px 14px 60px; } .complete-card { padding: 25px 18px; } }
</style>
