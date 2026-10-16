<template>
  <div class="forgot-page">
    <NavBar />
    <div class="forgot">
      <div class="forgot-heading">
        <span>Account access</span>
        <h1>Forgot password?</h1>
        <p>Enter your email address to request a password reset.</p>
      </div>
      <VeeForm
        :validation-schema="forgotPasswordSchema"
        :initial-values="{ email: '' }"
        @submit="handleSubmit"
        v-slot="{ isSubmitting }"
        novalidate
      >
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <p v-if="sent" class="form-success" role="status">Password reset requested. Check your email for the next step.</p>
        <FormField name="email" label="Email" type="email" placeholder="you@example.com" autocomplete="email" required />
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending…' : 'Request reset link' }}
        </button>
      </VeeForm>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { requestPasswordReset } from "../services/auth";
import { Form as VeeForm } from "vee-validate";
import NavBar from "../components/layout/NavBar.vue";
import Footer from "../components/layout/Footer.vue";
import FormField from "../components/forms/FormField.vue";
import { forgotPasswordSchema, ForgotPasswordValues } from "../forms/auth";
import { formErrorMessage } from "../forms/error";

export default {
  name: "forgot",
  components: { NavBar, Footer, VeeForm, FormField },
  data() {
    return { error: "", sent: false, forgotPasswordSchema };
  },
  methods: {
    async handleSubmit(values: ForgotPasswordValues) {
      this.error = "";
      this.sent = false;
      try {
        await requestPasswordReset({ email: values.email! });
        this.sent = true;
      } catch (error) {
        this.error = formErrorMessage(error);
      }
    },
  },
};
</script>

<style scoped>
.forgot-page { min-height: 100vh; padding-top: 115px; background: var(--canvas); }
.forgot { width: min(100% - 32px, 520px); margin: 0 auto 90px; padding: 39px; border: 1px solid var(--line); border-radius: 20px; background: white; box-shadow: var(--shadow); }
.forgot-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.forgot-heading h1 { margin: 7px 0 8px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-form-title); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.forgot-heading p { margin: 0 0 20px; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.form-error, .form-success { margin: 0 0 18px; padding: 11px 14px; border-radius: 10px; }
.form-error { background: #fff1f1; color: #a42b35; }
.form-success { background: #edf8f2; color: #176147; }
.submit-button { display: block; min-height: 42px; margin: 14px 0 0 auto; padding: 9px 20px; border: 0; border-radius: 9px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); transition: background .2s, transform .2s; }
.submit-button:hover { background: var(--accent-dark); transform: translateY(-2px); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
@media (max-width: 550px) { .forgot { padding: 27px 20px; } }
</style>
