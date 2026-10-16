<template>
  <div class="reset-page">
    <div class="reset-card">
      <div class="reset-heading">
        <span>Account access</span>
        <h1>Reset password</h1>
        <p>Choose a new password for your account.</p>
      </div>
      <VeeForm
        :validation-schema="resetPasswordSchema"
        :initial-values="{ password: '', password_confirm: '' }"
        @submit="handleSubmit"
        v-slot="{ isSubmitting }"
        novalidate
      >
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <FormField name="password" label="New password" type="password" placeholder="At least 8 characters" autocomplete="new-password" required />
        <FormField name="password_confirm" label="Confirm password" type="password" placeholder="Re-enter your password" autocomplete="new-password" required />
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Updating…' : 'Update password' }}
        </button>
      </VeeForm>
    </div>
  </div>
</template>

<script lang="ts">
import { resetPassword } from "../services/auth";
import { Form as VeeForm } from "vee-validate";
import FormField from "../components/forms/FormField.vue";
import { resetPasswordSchema, ResetPasswordValues } from "../forms/auth";
import { formErrorMessage } from "../forms/error";

export default {
  name: "reset",
  components: { VeeForm, FormField },
  data() {
    return { error: "", resetPasswordSchema };
  },
  methods: {
    async handleSubmit(values: ResetPasswordValues) {
      this.error = "";
      try {
        await resetPassword({
          password: values.password!,
          password_confirm: values.password_confirm!,
          token: this.$route.params.token || this.$route.query.token,
        });
        await this.$router.push("/login");
      } catch (error) {
        this.error = formErrorMessage(error);
      }
    },
  },
};
</script>

<style scoped>
.reset-page { min-height: 100vh; padding: 120px 16px 80px; background: var(--canvas); }
.reset-card { width: min(100%, 480px); margin: 0 auto; padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-card); background: white; box-shadow: var(--shadow); }
.reset-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.reset-heading h1 { margin: 7px 0 8px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-form-title); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.reset-heading p { margin: 0 0 20px; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.form-error { margin: 0 0 18px; padding: 11px 14px; border-radius: 10px; background: #fff1f1; color: #a42b35; }
.submit-button { display: block; min-height: 42px; margin: 14px 0 0 auto; padding: 9px 20px; border: 0; border-radius: 9px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); transition: background .2s, transform .2s; }
.submit-button:hover { background: var(--accent-dark); transform: translateY(-2px); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
@media (max-width: 550px) { .reset-card { padding: 27px 20px; } }
</style>
