<template>
  <div class="home-page">
    <NavBar />
    <main>
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow"><span class="eyebrow-dot"></span> Opportunities start here</span>
          <h1>{{ intro.the }} <span>{{ intro.free }}</span> {{ intro.web }}</h1>
          <p>{{ intro.description }}</p>
          <div class="hero-actions">
            <router-link class="button button-primary" to="/jobs">Find work <ArrowRight :size="16" aria-hidden="true" /></router-link>
            <router-link class="button button-secondary" to="/talent">Find talent <ArrowRight :size="16" aria-hidden="true" /></router-link>
          </div>
          <div class="hero-note"><span class="note-line"></span> Find work. Build something great.</div>
        </div>
        <div class="hero-visual">
          <div class="hero-orbit"></div>
          <img src="/brand/mark.svg" alt="EthioFreelance matching mark" />
          <div class="floating-card floating-card-top"><BriefcaseBusiness :size="18" aria-hidden="true" /><span>Discover new projects</span></div>
          <div class="floating-card floating-card-bottom"><CircleCheck :size="18" aria-hidden="true" /><span>Make your skills count</span></div>
        </div>
      </section>
      <section class="highlights" aria-label="What you can do">
        <div><Search :size="17" aria-hidden="true" /><span>Explore jobs</span></div>
        <div><CircleUserRound :size="17" aria-hidden="true" /><span>Share your skills</span></div>
        <div><BriefcaseBusiness :size="17" aria-hidden="true" /><span>Post a project</span></div>
        <div><Handshake :size="17" aria-hidden="true" /><span>Make connections</span></div>
      </section>
      <HomeJobs />
      <HowItWorks />
      <CategoryBrowser />
      <AudienceGuide />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import HowItWorks from "../components/HowItWorks.vue";
import NavBar from "../components/layout/NavBar.vue";
import Footer from "../components/layout/Footer.vue";
import CategoryBrowser from "../components/jobs/CategoryBrowser.vue";
import AudienceGuide from "../components/home/AudienceGuide.vue";
import HomeJobs from "../components/home/HomeJobs.vue";
import { ArrowRight, BriefcaseBusiness, CircleCheck, CircleUserRound, Handshake, Search } from "@lucide/vue";

export default {
  name: "Home",
  components: { HowItWorks, Footer, NavBar, CategoryBrowser, AudienceGuide, HomeJobs, ArrowRight, BriefcaseBusiness, CircleCheck, CircleUserRound, Handshake, Search },
  data() {
    return {
      intro: {
        the: "Find work for",
        free: "your skills,",
        web: "or talent for your ideas.",
        description: "Explore freelance projects, share what you do, and connect with the people behind the work.",
      },
    };
  },
};
</script>

<style scoped>
.home-page { background: var(--canvas); }
.hero { max-width: var(--page-width); min-height: 620px; margin: auto; padding: 125px var(--page-gutter) 72px; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: center; gap: clamp(28px, 4vw, 64px); text-align: left; }
.hero-copy { position: relative; z-index: 1; }
.eyebrow, .section-kicker { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.eyebrow { display: inline-flex; align-items: center; gap: 10px; background: var(--accent-soft); border: 1px solid #c9ebdc; padding: 10px 16px; border-radius: 100px; }
.eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: #12ad8d; box-shadow: 0 0 0 4px #c4eadd; }
h1 { max-width: 700px; margin: 28px 0 22px; font-family: var(--font-display); font-size: var(--text-hero); line-height: 1.1; letter-spacing: -.035em; font-weight: var(--weight-strong); color: var(--ink); }
h1 span { color: var(--accent); background: linear-gradient(115deg, var(--accent-dark), #12ad8d); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
.hero-copy p { max-width: 510px; margin: 0; font-size: var(--text-lg); line-height: var(--leading-body); color: var(--muted); text-wrap: pretty; }
.hero-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 28px; }
.button { display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-height: 44px; padding: 0 18px; border-radius: var(--radius-control); font-size: var(--text-sm); font-weight: var(--weight-medium); letter-spacing: -.01em; transition: transform .2s ease, box-shadow .2s ease, background .2s ease; }
.button:hover, .button:focus-visible { transform: translateY(-3px); text-decoration: none; }
.button:active { transform: translateY(0); }
.button-primary { background: var(--accent); color: white; box-shadow: 0 12px 25px rgba(8, 127, 114, .2); }
.button-primary:hover, .button-primary:focus-visible { background: var(--accent-dark); color: white; box-shadow: 0 17px 28px rgba(8, 127, 114, .26); }
.button-secondary { background: white; color: var(--ink); border: 1px solid var(--line); }
.button-secondary:hover, .button-secondary:focus-visible { color: var(--accent); box-shadow: var(--shadow); }
.hero-note { display: flex; align-items: center; gap: 12px; margin-top: 40px; color: var(--muted); font-size: .92rem; }
.note-line { height: 1px; width: 28px; background: var(--accent); }
.highlights { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; max-width: 1224px; margin: 0 auto 20px; padding: 16px; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); box-shadow: var(--shadow); }
.highlights div { display: flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 7px 10px; color: var(--ink); font-size: var(--text-sm); font-weight: var(--weight-medium); }
.highlights div + div { border-left: 1px solid var(--line); }
.highlights svg { color: var(--accent); }
.hero-visual { position: relative; min-width: 0; display: grid; place-items: center; }
.hero-orbit { position: absolute; width: min(90%, 540px); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #f0fbed, #bdeadd 70%, #d8f1e3); }
.hero-visual > img { position: relative; width: min(74%, 400px); max-height: 400px; object-fit: contain; mix-blend-mode: multiply; }
.floating-card { position: absolute; display: flex; align-items: center; gap: 10px; padding: 13px 17px; border: 1px solid #e5eeeb; border-radius: 14px; background: rgba(255,255,255,.94); color: var(--ink); box-shadow: var(--shadow); font-size: .85rem; font-weight: 700; animation: float 5s ease-in-out infinite; }
.floating-card svg { color: var(--accent); }
.floating-card-top { top: 15%; right: 0; }
.floating-card-bottom { bottom: 16%; left: 0; animation-delay: -2.5s; }
@keyframes float { 50% { transform: translateY(-9px); } }
@media (max-width: 900px) { .hero { min-height: 0; grid-template-columns: 1fr; padding-top: 124px; padding-bottom: 70px; } .hero-visual { max-width: 580px; margin: auto; width: 100%; } .highlights { margin: 0 var(--page-gutter) 20px; } }
@media (max-width: 560px) { .hero { padding-top: 108px; padding-bottom: 50px; } .hero-visual { margin-top: 30px; } .floating-card { display: none; } .highlights { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 8px; } .highlights div + div { border: 0; } .highlights div:nth-child(even) { border-left: 1px solid var(--line); } .highlights div:nth-child(n+3) { border-top: 1px solid var(--line); } }
@media (max-width: 390px) { .hero-actions > a { width: 100%; } }
</style>
