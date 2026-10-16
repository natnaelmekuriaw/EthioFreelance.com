<template>
  <div>
    <NavBar />
    <div class="wrapper">
      <div class="add">
        <div class="signup-heading">
          <img src="/brand/mark.svg" alt="" />
          <span>Join EthioFreelance</span>
          <h1>Make your next move.</h1>
          <p>Choose how you want to start, then create your account.</p>
        </div>
        <VeeForm
          :validation-schema="registerSchema"
          :initial-values="initialValues"
          @submit="register"
          v-slot="{ isSubmitting, errors, values }"
          class="form"
          novalidate
        >
          <fieldset class="account-type">
            <legend>I'm here to</legend>
            <div class="account-options">
              <label class="account-option" :class="{ selected: values.accountType === 'freelancer' }" for="account-freelancer">
                <Field id="account-freelancer" class="role-radio" name="accountType" type="radio" value="freelancer" />
                <span class="option-icon"><BriefcaseBusiness :size="19" aria-hidden="true" /></span>
                <span class="option-copy"><strong>Find work</strong><small>Join as a freelancer</small></span>
                <span class="option-check"><Check :size="14" aria-hidden="true" /></span>
              </label>
              <label class="account-option" :class="{ selected: values.accountType === 'employer' }" for="account-employer">
                <Field id="account-employer" class="role-radio" name="accountType" type="radio" value="employer" />
                <span class="option-icon"><UsersRound :size="19" aria-hidden="true" /></span>
                <span class="option-copy"><strong>Hire talent</strong><small>Join as an employer</small></span>
                <span class="option-check"><Check :size="14" aria-hidden="true" /></span>
              </label>
            </div>
            <p v-if="errors.accountType" class="field-error" role="alert">{{ errors.accountType }}</p>
          </fieldset>
          <p class="role-context" aria-live="polite">{{ values.accountType === 'employer' ? 'Post projects and connect with people who can help.' : 'Discover projects and build a profile around your skills.' }}</p>
          <div class="form-heading">
            <span>Your details</span>
            <h2>{{ values.accountType === 'employer' ? 'Create an employer account' : 'Create a freelancer account' }}</h2>
            <p>{{ values.accountType === 'employer' ? 'Tell us who will manage your projects.' : 'Introduce yourself to the people you may work with.' }}</p>
          </div>
          <p v-if="error" class="form-error" role="alert">{{ error }}</p>
          <div class="name-fields">
            <FormField name="firstname" label="First name" placeholder="First name" autocomplete="given-name" required />
            <FormField name="lastname" label="Last name" placeholder="Last name" autocomplete="family-name" required />
          </div>
          <FormField name="username" :label="values.accountType === 'employer' ? 'Account username' : 'Public username'" :placeholder="values.accountType === 'employer' ? 'Choose an account username' : 'Choose your profile username'" autocomplete="username" required />
          <FormField name="email" label="Email address" type="email" :placeholder="values.accountType === 'employer' ? 'name@company.com' : 'you@example.com'" autocomplete="email" required />
          <div class="password-fields">
            <FormField name="password" label="Password" type="password" placeholder="At least 8 characters" hint="Use at least 8 characters." autocomplete="new-password" required />
            <FormField name="cpassword" label="Confirm password" type="password" placeholder="Re-enter your password" autocomplete="new-password" required />
          </div>
          <div class="form-actions">
            <p>{{ values.accountType === 'employer' ? 'Next: start sharing your projects.' : 'Next: build your freelancer profile.' }}</p>
            <button type="submit" class="submit-button" :disabled="isSubmitting">
              {{ isSubmitting ? 'Creating account…' : values.accountType === 'employer' ? 'Create employer account' : 'Create freelancer account' }}
              <ArrowRight v-if="!isSubmitting" :size="16" aria-hidden="true" />
            </button>
          </div>
          <p class="signin-link">Already have an account? <router-link :to="{ name: 'Login' }">Log in</router-link></p>
        </VeeForm>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Form as VeeForm, Field } from "vee-validate";
import NavBar from "../components/layout/NavBar.vue";
import Footer from "../components/layout/Footer.vue";
import FormField from "../components/forms/FormField.vue";
import { userType } from "../store/helpers";
import { Role } from "../helpers/role";
import { registerSchema, RegisterValues } from "../forms/auth";
import { formErrorMessage } from "../forms/error";
import { notify } from "../ui/notifications";
import { ArrowRight, BriefcaseBusiness, Check, UsersRound } from "@lucide/vue";

export default {
  components: { NavBar, Footer, VeeForm, Field, FormField, ArrowRight, BriefcaseBusiness, Check, UsersRound },
  data() {
    return {
      error: "",
      registerSchema,
      initialValues: {
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        cpassword: "",
        accountType: "freelancer",
      },
    };
  },
  computed: { ...userType },
  methods: {
    async register(values: RegisterValues) {
      this.error = "";
      const account = {
        firstname: values.firstname,
        lastname: values.lastname,
        username: values.username,
        email: values.email,
        password: values.password,
        accountType: values.accountType,
      };
      try {
        await this.$store.dispatch("register", account);
        if (this.userRole === Role.Freelancer) {
          await this.$router.push({ name: "Onboarding" });
        } else if (this.userRole === Role.Employer) {
          await this.$router.push({ name: "Home" });
        }
        notify("Your account is ready.", "success");
      } catch (error) {
        this.error = formErrorMessage(error);
        notify(this.error, "error");
      }
    },
  },
};
</script>

<style scoped>
.wrapper { min-height: 100vh; padding: 118px 20px 86px; background: radial-gradient(circle at 50% 0, #e1f4eb 0, transparent 440px), var(--canvas); }
.add { position: relative; width: min(100%, 680px); margin: 0 auto; padding: clamp(24px, 4vw, 40px); overflow: hidden; border: 1px solid var(--line); border-radius: 22px; background: var(--surface); box-shadow: 0 22px 65px rgba(16, 43, 48, .08); text-align: left; }
.add::before { position: absolute; top: 0; right: 0; left: 0; height: 4px; background: linear-gradient(90deg, var(--accent-dark), #36bfa0, #b9ead4); content: ''; }
.signup-heading img { display: block; width: 34px; height: 34px; margin-bottom: 14px; }
.signup-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.signup-heading h1 { margin: 8px 0 6px; color: var(--ink); font-family: var(--font-display); font-size: clamp(1.7rem, 3vw, 2.1rem); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.signup-heading p { margin: 0; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.form { margin-top: 25px; }
.form-error { margin: 0 0 17px; padding: 10px 13px; border: 1px solid #f4d7db; border-radius: var(--radius-control); background: #fff3f3; color: #9e3039; font-size: var(--text-sm); }
.account-type { min-width: 0; margin: 0; padding: 0; border: 0; }
.account-type legend { float: none; width: auto; margin-bottom: 10px; padding: 0; color: var(--ink); font-size: var(--text-sm); font-weight: var(--weight-strong); }
.account-options { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
.account-option { position: relative; display: flex; align-items: center; gap: 11px; min-width: 0; min-height: 76px; margin: 0; padding: 12px; border: 1px solid var(--line); border-radius: 13px; background: var(--surface); cursor: pointer; transition: border-color var(--motion-fast), background var(--motion-fast), box-shadow var(--motion-fast), transform var(--motion-fast); }
.account-option:hover { border-color: #91d0bd; transform: translateY(-2px); }
.account-option.selected { border-color: var(--accent); background: #f1fbf6; box-shadow: 0 0 0 2px rgba(8, 127, 108, .08); }
.account-option:focus-within { outline: 3px solid var(--focus); outline-offset: 3px; }
.role-radio { position: absolute; width: 1px; height: 1px; opacity: 0; }
.option-icon { flex: none; display: grid; place-items: center; width: 39px; height: 39px; border-radius: 11px; background: var(--accent-soft); color: var(--accent-dark); }
.option-copy { display: grid; flex: 1; gap: 2px; min-width: 0; }
.option-copy strong { color: var(--ink); font-size: var(--text-sm); line-height: 1.2; }
.option-copy small { color: var(--muted); font-size: var(--text-xs); line-height: 1.35; }
.option-check { flex: none; display: grid; place-items: center; width: 19px; height: 19px; border: 1px solid #bfd8d1; border-radius: 50%; color: transparent; }
.account-option.selected .option-check { border-color: var(--accent); background: var(--accent); color: white; }
.role-context { min-height: 21px; margin: 11px 0 0; color: var(--accent-dark); font-size: var(--text-xs); font-weight: var(--weight-medium); }
.form-heading { margin: 22px 0 18px; padding-top: 21px; border-top: 1px solid var(--line); }
.form-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.form-heading h2 { margin: 4px 0 3px; color: var(--ink); font-size: 1.16rem; font-weight: var(--weight-strong); letter-spacing: -.02em; }
.form-heading p { margin: 0; color: var(--muted); font-size: var(--text-xs); }
.name-fields, .password-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.field-error { margin: 6px 0 0; color: #ad3039; font-size: var(--text-xs); }
.form-actions { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-top: 8px; padding-top: 18px; border-top: 1px solid var(--line); }
.form-actions p { max-width: 210px; margin: 0; color: var(--muted); font-size: var(--text-xs); line-height: 1.45; }
.submit-button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 42px; padding: 9px 16px; border: 0; border-radius: var(--radius-control); background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-strong); white-space: nowrap; transition: background var(--motion-fast), transform var(--motion-fast), box-shadow var(--motion-fast); }
.submit-button:hover, .submit-button:focus-visible { background: var(--accent-dark); box-shadow: 0 9px 20px rgba(8, 127, 108, .16); transform: translateY(-2px); }
.submit-button:active { transform: translateY(0); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
.signin-link { margin: 20px 0 0; color: var(--muted); font-size: var(--text-xs); text-align: center; }
.signin-link a { color: var(--accent-dark); font-weight: var(--weight-strong); text-decoration: none; }
.signin-link a:hover { text-decoration: underline; text-underline-offset: 3px; }
@media (max-width: 600px) { .wrapper { padding: 100px 14px 60px; } .add { padding: 26px 20px; } .password-fields { grid-template-columns: 1fr; gap: 0; } }
@media (max-width: 480px) { .account-options, .name-fields { grid-template-columns: 1fr; gap: 9px; } .account-option { min-height: 67px; } .name-fields { gap: 0; } .form-actions { align-items: stretch; flex-direction: column; gap: 12px; } .form-actions p { max-width: none; } .submit-button { width: 100%; } }
@media (max-width: 390px) { .wrapper { padding-inline: 12px; } .add { padding: 24px 16px; } }
</style>
