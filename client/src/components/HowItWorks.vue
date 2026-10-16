<template>
  <section class="how" id="how-it-works" aria-labelledby="how-title">
    <div class="how-inner">
      <div class="how-heading">
        <span class="section-kicker">A simple way to connect</span>
        <h2 id="how-title">{{ headerName }}</h2>
        <p>Explore opportunities, find the right people, and get started.</p>
      </div>
      <div class="steps">
        <article class="step">
          <span class="step-icon"><Search :size="18" aria-hidden="true" /></span>
          <span class="step-number">01 / Explore</span>
          <h3>{{ guest.titleName }}</h3>
          <p>{{ guest.titleDescription }}</p>
        </article>
        <article class="step">
          <span class="step-icon"><CircleUserRound :size="18" aria-hidden="true" /></span>
          <span class="step-number">02 / Create</span>
          <h3>{{ freelancer.titleName }}</h3>
          <p>{{ freelancer.titleDescription }}</p>
        </article>
        <article class="step">
          <span class="step-icon"><BriefcaseBusiness :size="18" aria-hidden="true" /></span>
          <span class="step-number">03 / Hire</span>
          <h3>{{ employer.titleName }}</h3>
          <p>{{ employer.titleDescription }}</p>
        </article>
        <article class="step">
          <span class="step-icon"><Handshake :size="18" aria-hidden="true" /></span>
          <span class="step-number">04 / Connect</span>
          <h3>{{ ourJob.titleName }}</h3>
          <p>{{ ourJob.titleDescription }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BriefcaseBusiness, CircleUserRound, Handshake, Search } from '@lucide/vue'
export default defineComponent({
  components: { BriefcaseBusiness, CircleUserRound, Handshake, Search },
  data() {
    return {
      headerName: "How it Works",
      guest: { titleName: "Browse", titleDescription: "Explore active jobs and see which projects match your interests." },
      freelancer: { titleName: "Build a profile", titleDescription: "Share your skills and experience so employers can understand what you do." },
      employer: { titleName: "Post a project", titleDescription: "Describe the work, timeline, and budget to help freelancers decide if it fits." },
      ourJob: { titleName: "Connect", titleDescription: "Review the details, apply to opportunities, and keep work moving forward." },
    };
  },
});
</script>

<style scoped>
.how { background: var(--surface-tint); text-align: left; }
.how-inner { max-width: var(--page-width); margin: auto; padding: 95px var(--page-gutter) 105px; }
.how-heading { max-width: 620px; margin-bottom: 36px; }
.section-kicker { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.how h2 { margin: 11px 0 10px; color: var(--ink); font-family: var(--font-display); font-size: var(--text-section); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.how-heading p { margin: 0; color: var(--muted); font-size: var(--text-lg); }
.steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.step { padding: 21px; min-height: 225px; border: 1px solid var(--line); border-radius: 15px; background: var(--surface); box-shadow: 0 10px 26px rgba(16,43,48,.04); transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease; }
.step:hover { transform: translateY(-5px); border-color: #a5d9c5; box-shadow: var(--shadow); }
.step-icon { display: grid; place-items: center; width: 43px; height: 43px; margin-bottom: 16px; border-radius: 11px; background: var(--accent-soft); color: var(--accent); font-size: var(--text-base); }
.step-number { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.step h3 { margin: 8px 0; color: var(--ink); font-family: var(--font-display); font-size: var(--text-lg); font-weight: var(--weight-strong); letter-spacing: -.015em; line-height: 1.25; }
.step p { margin: 0; color: var(--muted); font-size: var(--text-sm); line-height: 1.5; }
@media (max-width: 1000px) { .steps { grid-template-columns: repeat(2, 1fr); } .step { min-height: 260px; } }
@media (max-width: 600px) { .how-inner { padding-top: 70px; padding-bottom: 78px; } .steps { grid-template-columns: 1fr; } .step { min-height: 0; } }
</style>
