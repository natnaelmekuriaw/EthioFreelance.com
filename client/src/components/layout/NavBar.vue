<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top ethio" aria-label="Main navigation">
    <div class="container-fluid nav-shell">
      <router-link class="navbar-brand brand" :to="{ name: 'Home' }">
        <img src="/brand/logo-horizontal.svg" class="logo" alt="EthioFreelance" />
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-navigation" aria-controls="main-navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="main-navigation" class="collapse navbar-collapse nav-content">
        <div class="nav-links">
          <router-link class="nav-link" to="/jobs">Browse jobs</router-link>
          <router-link class="nav-link" to="/talent">Find talent</router-link>
          <router-link v-if="loggedIn && userRole == roleEmployer" class="nav-link" to="/job/post">Post job</router-link>
        </div>
        <div class="nav-search"><SearchComponent /></div>
        <div v-if="!loggedIn" class="nav-actions">
          <router-link class="loginbtn" :to="{ name: 'Login' }">Log in</router-link>
          <router-link class="signupbtn" to="/register">Sign up <ArrowRight :size="15" aria-hidden="true" /></router-link>
        </div>
        <div v-else class="dropdown nav-account">
          <button class="account-button dropdown-toggle" type="button" id="account-menu" data-bs-toggle="dropdown" aria-expanded="false">
            <img class="img-profile" src="../../assets/img/undraw_profile.svg" alt="" />
            <span>{{ Name }}</span>
          </button>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="account-menu">
            <li v-if="userRole == roleEmployer"><router-link class="dropdown-item" to="/employer/dashboard">Dashboard</router-link></li>
            <li v-if="userRole == roleFreelancer"><router-link class="dropdown-item" to="/freelancer/dashboard">Dashboard</router-link></li>
            <li><button class="dropdown-item" type="button" @click="showLogoutConfirm = true">Log out</button></li>
          </ul>
        </div>
      </div>
      <ConfirmDialog
        v-model="showLogoutConfirm"
        title="Log out?"
        message="You can log back in whenever you're ready."
        confirm-label="Log out"
        :danger="true"
        @confirm="logout"
      />
    </div>
  </nav>
</template>

<script lang="ts">
import { authComputed, userType, fullName } from "../../store/helpers";
import SearchComponent from "../jobs/SearchComponent.vue";
import { Role } from "../../helpers/role";
import ConfirmDialog from "../ui/ConfirmDialog.vue";
import { ArrowRight } from "@lucide/vue";

export default {
  name: "NavBar",
  components: { SearchComponent, ConfirmDialog, ArrowRight },
  data() {
    return { roleEmployer: Role.Employer, roleFreelancer: Role.Freelancer, showLogoutConfirm: false };
  },
  computed: { ...authComputed, ...userType, ...fullName },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Home" });
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.ethio { min-height: 72px; padding: 10px 0; border-bottom: 1px solid var(--line); background: rgba(255,255,255,.96); box-shadow: 0 8px 24px rgba(16,43,48,.05); backdrop-filter: blur(18px); }
.nav-shell { max-width: 1440px; padding: 0 var(--page-gutter); gap: clamp(16px, 2.5vw, 38px); }
.brand { display: inline-flex; align-items: center; margin: 0; }
.logo { display: block; width: 183px; height: auto; }
.nav-content { gap: 18px; }
.nav-search { width: clamp(180px, 22vw, 300px); }
.nav-links { display: flex; align-items: center; gap: 5px; margin-right: auto; }
.nav-link { padding: 8px 11px; border-radius: 9px; color: var(--muted); font-size: var(--text-sm); font-weight: var(--weight-medium); white-space: nowrap; transition: color var(--motion-fast), background var(--motion-fast); }
.nav-link:hover, .nav-link:focus-visible, .nav-link.router-link-active { color: var(--accent-dark); background: var(--accent-soft); }
.nav-actions { display: flex; align-items: center; gap: 8px; }
.loginbtn, .signupbtn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 38px; padding: 0 14px; border-radius: 9px; font-size: var(--text-sm); font-weight: var(--weight-medium); white-space: nowrap; transition: background var(--motion-fast), color var(--motion-fast), transform var(--motion-fast); }
.loginbtn { color: var(--ink); }
.signupbtn { color: white; background: var(--accent); }
.loginbtn:hover, .signupbtn:hover { transform: translateY(-1px); text-decoration: none; }
.loginbtn:hover { color: var(--accent-dark); background: var(--accent-soft); }
.signupbtn:hover { color: white; background: var(--accent-dark); }
.account-button { display: flex; align-items: center; gap: 9px; border: 1px solid var(--line); border-radius: 9px; padding: 4px 10px 4px 4px; background: var(--surface); color: var(--ink); font-size: var(--text-sm); transition: background var(--motion-fast), border-color var(--motion-fast); }
.account-button:hover, .account-button[aria-expanded="true"] { border-color: var(--accent); background: var(--surface-tint); }
.img-profile { width: 32px; height: 32px; border-radius: 50%; background: white; }
.dropdown-menu { border: 1px solid var(--line); border-radius: 12px; box-shadow: var(--shadow); padding: 7px; }
.dropdown-item { border-radius: 7px; }
.dropdown-item:hover, .dropdown-item:focus-visible { background: var(--accent-soft); color: var(--accent-dark); }
@media (max-width: 1100px) { .nav-shell { gap: 12px; } .nav-content { gap: 10px; } .nav-search { width: clamp(155px, 20vw, 260px); } }
@media (max-width: 991px) { .nav-content { max-height: calc(100vh - 72px); overflow-y: auto; padding: 12px 0 6px; } .nav-links { align-items: stretch; flex-direction: column; margin: 0 0 8px; } .nav-search { width: 100%; margin-bottom: 12px; } .nav-actions { align-items: stretch; } .nav-link { padding: 10px 12px; } .nav-account { margin-top: 10px; } .account-button { width: 100%; } }
@media (max-width: 560px) { .logo { width: 158px; } .nav-actions > a { flex: 1; } }
</style>
