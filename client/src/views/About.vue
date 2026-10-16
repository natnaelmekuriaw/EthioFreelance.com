<template>
  <div class="about-page">
    <NavBar />
    <main>
      <section class="hero">
        <div class="hero-copy">
          <span class="eyebrow">About EthioFreelance</span>
          <h1>Good work starts with the right connection.</h1>
          <p>EthioFreelance brings people with projects and people with skills into one place. Browse opportunities, share what you do, and find a way to work together.</p>
          <div class="actions">
            <router-link class="primary-action" to="/jobs">Explore jobs <i class="fas fa-arrow-right" aria-hidden="true"></i></router-link>
            <router-link class="secondary-action" to="/register">Join the community</router-link>
          </div>
        </div>
        <div class="hero-card">
          <span class="card-icon"><img src="/brand/mark.svg" alt="" /></span>
          <p class="card-label">One place to connect</p>
          <h2>Find your next opportunity or the right person for your project.</h2>
        </div>
      </section>
      <section id="how-it-works" class="steps" aria-labelledby="how-heading">
        <div class="section-heading"><span class="eyebrow">How it works</span><h2 id="how-heading">A simpler path from idea to work</h2></div>
        <div class="step-grid">
          <article><span>01</span><h3>Explore</h3><p>Look through available jobs and discover work that matches your interests.</p></article>
          <article><span>02</span><h3>Connect</h3><p>Share your profile or post a project so the right people can find you.</p></article>
          <article><span>03</span><h3>Move forward</h3><p>Keep your next step clear with the tools available in your account.</p></article>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from '../components/layout/NavBar.vue'
import Footer from '../components/layout/Footer.vue'

export default { components: { NavBar, Footer } }
</script>

<style scoped>
.about-page { min-height: 100vh; background: var(--canvas); }
main { padding-top: 74px; }
.hero, .steps { max-width: var(--page-width); margin: auto; padding: 90px var(--page-gutter); }
.hero { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(300px, .75fr); align-items: center; gap: 60px; }
.eyebrow { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
h1, h2, h3 { color: var(--ink); font-family: var(--font-display); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); }
h1 { max-width: 750px; margin: 16px 0 22px; font-size: var(--text-hero); line-height: var(--leading-heading); }
.hero-copy > p { max-width: 620px; color: var(--muted); font-size: var(--text-lg); }
.actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.actions a { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 11px 20px; border-radius: var(--radius-control); font-weight: var(--weight-strong); transition: transform var(--motion-fast), background var(--motion-fast); }
.actions a:hover { transform: translateY(-2px); text-decoration: none; }
.primary-action { background: var(--accent); color: white; }
.primary-action:hover { background: var(--accent-dark); color: white; }
.secondary-action { border: 1px solid var(--line); background: var(--surface); color: var(--ink); }
.secondary-action:hover { color: var(--accent-dark); }
.hero-card { padding: 42px; border: 1px solid var(--line); border-radius: var(--radius-card); background: linear-gradient(145deg, var(--surface), var(--surface-tint)); box-shadow: var(--shadow); }
.card-icon { display: grid; place-items: center; width: 64px; height: 64px; border-radius: 18px; background: var(--accent-soft); color: var(--accent); font-size: 1.7rem; }
.card-icon img { width: 52px; height: 52px; }
.card-label { margin: 50px 0 10px; color: var(--accent); font-weight: var(--weight-strong); }
.hero-card h2 { margin: 0; font-size: var(--text-xl); line-height: 1.35; }
.steps { padding-top: 20px; padding-bottom: 110px; }
.steps { scroll-margin-top: 100px; }
.section-heading h2 { max-width: 600px; margin: 10px 0 30px; font-size: var(--text-section); line-height: var(--leading-heading); }
.step-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.step-grid article { padding: 30px; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); }
.step-grid span { color: var(--accent); font-weight: var(--weight-strong); }
.step-grid h3 { margin: 20px 0 8px; font-size: var(--text-xl); }
.step-grid p { margin: 0; color: var(--muted); }
@media (max-width: 800px) { .hero { grid-template-columns: 1fr; gap: 30px; } .step-grid { grid-template-columns: 1fr; } }
@media (max-width: 560px) { .hero, .steps { padding-top: 65px; padding-bottom: 65px; } .hero-card { padding: 30px; } .card-label { margin-top: 28px; } }
</style>
