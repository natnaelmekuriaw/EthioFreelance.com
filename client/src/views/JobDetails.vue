<template>
  <div class="job-details-page">
    <NavBar />
    <div class="wrapper">
      <router-link class="back-link" to="/jobs"><ArrowLeft :size="17" aria-hidden="true" /> Back to jobs</router-link>
      <div class="page-heading"><span>Opportunity details</span><h1>Job Details</h1></div>
      <div v-if="loading" class="detail-state" role="status"><LoaderCircle class="spin" :size="28" aria-hidden="true" /><h2>Loading job details</h2><p>Please wait while we find this opportunity.</p></div>
      <div v-else-if="!hasJob" class="detail-state" role="status"><BriefcaseBusiness :size="28" aria-hidden="true" /><h2>Job details unavailable</h2><p>{{ error ? 'We could not load this job right now. Please try again.' : 'There is no job to show here yet.' }}</p><button v-if="jobid && error" type="button" @click="loadJob">Try again</button><router-link to="/jobs">Browse jobs</router-link></div>
      <div v-else class="jobsbody">
        <div class="jobs">
          <h2>{{ title }}</h2>
        </div>
        <div class="jobdescription">
          <div class="detail-block"><h3>Description</h3><p>{{ discription }}</p></div>
          <div class="detail-grid">
            <div><span>Budget type</span><strong>{{ budgetType }}</strong></div>
            <div><span>Budget</span><strong>{{ budget }}</strong></div>
            <div><span>Skills</span><strong>{{ skills }}</strong></div>
          </div>
        </div>
      </div>
      <router-link v-if="hasJob" class="apply-link" :to="{ name: 'Apply', params: { id: jobid } }">Apply for this job <ArrowRight :size="16" aria-hidden="true" /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { fetchJob } from "../services/jobs";
import NavBar from "../components/layout/NavBar.vue";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, LoaderCircle } from '@lucide/vue'

export default {
  components: {
    NavBar, ArrowLeft, ArrowRight, BriefcaseBusiness, LoaderCircle
  },
  data() {
    return {
      title: null,
      discription: null,
      Job: null,
      jobid: null,
      budget: null,
      budgetType: null,
      skills: null,
      loading: false,
      error: false,
      hasJob: false
    };
  },

  created() {
    this.jobid = this.$route.params.id;
    if (this.jobid) this.loadJob();
  },
  methods: {
    async loadJob() {
      this.loading = true;
      this.error = false;
      this.hasJob = false;
      try {
        const response = await fetchJob(this.jobid);
        const job = response.data && response.data.job;
        if (!job) return;
        this.title = job.title;
        this.discription = job.discription;
        this.budget = job.budget;
        this.budgetType = job.budgetType;
        this.skills = job.skills;
        this.hasJob = true;
      } catch {
        this.error = true;
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>


<style scoped>
.job-details-page { min-height: 100vh; padding-top: 110px; background: var(--canvas); text-align: left; }
.wrapper { width: min(calc(100% - 2 * var(--page-gutter)), 980px); margin: 0 auto; padding-bottom: 100px; }
.back-link { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 32px; color: var(--accent); font-weight: 700; }
.back-link:hover, .back-link:focus-visible { color: var(--accent-dark); text-decoration: underline; text-underline-offset: 4px; }
.page-heading span { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.page-heading h1 { margin: 7px 0 27px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-section); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.jobsbody { margin: 0 0 23px; padding: 36px; border: 1px solid var(--line); border-radius: var(--radius-card); background: white; box-shadow: var(--shadow); font-family: inherit; }
.detail-state { margin-bottom: 24px; padding: 55px 24px; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); text-align: center; }
.detail-state > svg { color: var(--accent); }
.spin { animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.detail-state h2 { margin: 16px 0 8px; color: var(--ink); font-size: var(--text-xl); }
.detail-state p { color: var(--muted); }
.detail-state button, .detail-state a { display: inline-block; margin: 8px 5px 0; padding: 10px 16px; border: 1px solid var(--accent); border-radius: var(--radius-control); background: var(--accent); color: white; font-weight: var(--weight-strong); }
.detail-state a { border-color: var(--line); background: var(--surface); color: var(--ink); }
.jobs { margin: 0 0 28px; padding-bottom: 23px; border-bottom: 1px solid var(--line); color: var(--ink); }
.jobs h2 { margin: 0; font-family: var(--font-display); font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: var(--weight-strong); letter-spacing: -.02em; line-height: 1.25; }
.detail-block h3 { margin: 0 0 10px; color: var(--ink); font-size: var(--text-lg); font-weight: var(--weight-strong); }
.detail-block p { color: var(--muted); line-height: var(--leading-body); }
.detail-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 30px; }
.detail-grid div { display: flex; flex-direction: column; gap: 5px; padding: 17px; border-radius: 12px; background: var(--accent-soft); }
.detail-grid span { color: var(--muted); font-size: .78rem; font-weight: 700; text-transform: uppercase; letter-spacing: .07em; }
.detail-grid strong { color: var(--ink); font-size: 1rem; overflow-wrap: anywhere; }
.apply-link { display: inline-flex; align-items: center; gap: 16px; padding: 13px 23px; border-radius: 11px; background: var(--accent); color: white; font-weight: 700; transition: background .2s, transform .2s; }
.apply-link:hover, .apply-link:focus-visible { background: var(--accent-dark); color: white; transform: translateY(-2px); text-decoration: none; }
.apply-link:active { transform: translateY(0); }
@media (max-width: 700px) { .detail-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 520px) { .jobsbody { padding: 24px 20px; } .detail-grid { grid-template-columns: 1fr; } .apply-link { width: 100%; justify-content: center; } }
</style>
