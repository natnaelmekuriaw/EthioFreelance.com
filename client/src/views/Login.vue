<template>
  <div class="login">
    <NavBar />
    <main class="login-main">
      <div class="login-card">
        <div class="login-heading">
          <span class="heading-icon"><img src="/brand/mark.svg" alt="" /></span>
          <span class="eyebrow">Welcome back</span>
          <h1>Log in to your account</h1>
          <p>Pick up where you left off and keep moving forward.</p>
        </div>
        <VeeForm :validation-schema="loginSchema" :initial-values="{ email: '', password: '' }" @submit="submit" v-slot="{ isSubmitting }" class="form" novalidate>
          <p v-if="error" class="form-error" role="alert">{{ error }}</p>
          <FormField name="email" label="Email address" type="email" placeholder="you@example.com" autocomplete="email" required />
          <FormField name="password" label="Password" type="password" placeholder="Enter your password" autocomplete="current-password" required revealable />
          <div class="form-links">
            <router-link :to="{ name: 'ForgotPassword' }">Forgot password?</router-link>
          </div>
          <button type="submit" class="submit-button" :disabled="isSubmitting">
            {{ isSubmitting ? 'Logging in…' : 'Log in' }}
            <ArrowRight v-if="!isSubmitting" :size="16" aria-hidden="true" />
          </button>
        </VeeForm>
        <p class="signup-link">New to EthioFreelance? <router-link :to="{ name: 'Register' }">Create an account</router-link></p>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "../components/layout/NavBar.vue";
import Footer from "../components/layout/Footer.vue";
import { userType } from "../store/helpers";
import { Role } from "../helpers/role";
import { Form as VeeForm } from "vee-validate";
import FormField from "../components/forms/FormField.vue";
import { loginSchema, LoginValues } from "../forms/auth";
import { formErrorMessage } from "../forms/error";
import { notify } from "../ui/notifications";
import { ArrowRight } from "@lucide/vue";

export default {
  components: {
    NavBar,
    Footer,
    VeeForm,
    FormField,
    ArrowRight,
  },
  data() {
    return {
      error: "",
      loginSchema,
    };
  },
  computed: {
    ...userType,
  },
  methods: {
    async submit(values: LoginValues) {
      this.error = "";
      try {
        await this.$store.dispatch("login", values);
        if (this.userRole === Role.Admin) {
          await this.$router.push({ name: "AdminDashboard" });
        } else if (this.userRole === Role.Freelancer) {
          await this.$router.push({ name: "FreelancerDashboard" });
        } else if (this.userRole === Role.Employer) {
          await this.$router.push({ name: "EmployerDashboard" });
        }
        notify("Welcome back.", "success");
      } catch (error) {
        this.error = formErrorMessage(error);
        notify(this.error, "error");
      }
    },
  },
};
</script>

<style scoped>
.login { background: var(--canvas); }
.login-main { display: grid; place-items: center; min-height: 100vh; padding: 118px 16px 80px; background: radial-gradient(circle at 50% 0, #e1f4eb 0, transparent 440px), var(--canvas); }
.login-card { position: relative; width: min(100%, 480px); padding: clamp(26px, 4vw, 40px); overflow: hidden; border: 1px solid var(--line); border-radius: 22px; background: var(--surface); box-shadow: 0 22px 65px rgba(16, 43, 48, .08); text-align: left; }
.login-card::before { position: absolute; top: 0; right: 0; left: 0; height: 4px; background: linear-gradient(90deg, var(--accent-dark), #36bfa0, #b9ead4); content: ''; }
.heading-icon { display: grid; place-items: center; width: 43px; height: 43px; margin-bottom: 18px; border-radius: 12px; background: var(--accent-soft); color: var(--accent-dark); }
.heading-icon img { width: 32px; height: 32px; }
.login-heading .eyebrow { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.login-heading h1 { margin: 7px 0 6px; color: var(--ink); font-family: var(--font-display); font-size: clamp(1.7rem, 3vw, 2.1rem); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.login-heading p { margin: 0; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.form { margin-top: 25px; }
.form-error { margin: 0 0 17px; padding: 10px 13px; border: 1px solid #f4d7db; border-radius: var(--radius-control); background: #fff3f3; color: #9e3039; font-size: var(--text-sm); }
.form-links { display: flex; justify-content: flex-end; margin-top: -4px; }
.form-links a { color: var(--accent-dark); font-size: var(--text-xs); font-weight: var(--weight-strong); text-decoration: none; }
.form-links a:hover { text-decoration: underline; text-underline-offset: 3px; }
.submit-button { display: inline-flex; align-items: center; justify-content: center; gap: 9px; width: 100%; min-height: 42px; margin-top: 22px; padding: 9px 16px; border: 0; border-radius: var(--radius-control); background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-strong); transition: background var(--motion-fast), transform var(--motion-fast), box-shadow var(--motion-fast); }
.submit-button:hover, .submit-button:focus-visible { background: var(--accent-dark); box-shadow: 0 9px 20px rgba(8, 127, 108, .16); transform: translateY(-2px); }
.submit-button:active { transform: translateY(0); }
.submit-button:disabled { opacity: .65; cursor: wait; transform: none; }
.signup-link { margin: 24px 0 0; padding-top: 19px; border-top: 1px solid var(--line); color: var(--muted); font-size: var(--text-xs); text-align: center; }
.signup-link a { color: var(--accent-dark); font-weight: var(--weight-strong); text-decoration: none; }
.signup-link a:hover { text-decoration: underline; text-underline-offset: 3px; }
@media (max-width: 550px) { .login-main { min-height: 0; padding: 100px 14px 60px; } .login-card { padding: 27px 20px; } }
@media (max-width: 390px) { .login-main { padding-inline: 12px; } .login-card { padding: 24px 16px; } }
</style>
