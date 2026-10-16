<template>
  <div class="pay-page">
    <NavBar />
    <div class="pay-card">
      <div class="pay-heading">
        <span>Account balance</span>
        <h1>Deposit money</h1>
        <p>Enter the amount and phone number for your deposit.</p>
      </div>
      <VeeForm
        :validation-schema="depositSchema"
        :initial-values="{ amount: '', phone: '' }"
        @submit="deposit"
        v-slot="{ isSubmitting }"
        novalidate
      >
        <p v-if="error" class="form-error" role="alert">{{ error }}</p>
        <p v-if="submitted" class="form-success" role="status">Your deposit request was submitted.</p>
        <FormField name="amount" label="Amount" type="number" placeholder="Enter an amount" required />
        <FormField name="phone" label="Phone number" type="tel" placeholder="Enter your phone number" autocomplete="tel" required />
        <button type="submit" class="submit-button" :disabled="isSubmitting">
          {{ isSubmitting ? 'Submitting…' : 'Deposit' }}
        </button>
      </VeeForm>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Form as VeeForm } from "vee-validate";
import NavBar from "../components/layout/NavBar.vue";
import Footer from "../components/layout/Footer.vue";
import FormField from "../components/forms/FormField.vue";
import { depositSchema, DepositValues } from "../forms/payment";
import { formErrorMessage } from "../forms/error";
import { notify } from "../ui/notifications";

export default {
  components: { NavBar, Footer, VeeForm, FormField },
  data() {
    return { error: "", submitted: false, depositSchema };
  },
  methods: {
    async deposit(values: DepositValues) {
      this.error = "";
      this.submitted = false;
      try {
        await this.$store.dispatch("deposite", values);
        this.submitted = true;
        notify("Your deposit request was submitted.", "success");
      } catch (error) {
        this.error = formErrorMessage(error);
        notify(this.error, "error");
      }
    },
  },
};
</script>

<style scoped>
.pay-page { min-height: 100vh; padding-top: 110px; background: var(--canvas); }
.pay-card { width: min(100% - 32px, 520px); margin: 0 auto 90px; padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-card); background: white; box-shadow: var(--shadow); }
.pay-heading { margin-bottom: 25px; }
.pay-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.pay-heading h1 { margin: 7px 0 8px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-form-title); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.pay-heading p { margin: 0; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.form-error, .form-success { margin: 0 0 18px; padding: 11px 14px; border-radius: 10px; }
.form-error { background: #fff1f1; color: #a42b35; }
.form-success { background: #edf8f2; color: #176147; }
.submit-button { display: block; min-height: 42px; margin: 14px 0 0 auto; padding: 9px 20px; border: 0; border-radius: 9px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); transition: background .2s, transform .2s; }
.submit-button:hover, .submit-button:focus-visible { background: var(--accent-dark); transform: translateY(-2px); }
.submit-button:active { transform: translateY(0); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
@media (max-width: 550px) { .pay-page { padding-top: 95px; } .pay-card { padding: 27px 20px; } }
</style>
