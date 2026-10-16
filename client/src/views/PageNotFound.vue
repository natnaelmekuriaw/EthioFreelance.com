<template>
  <div class="not-found-page">
    <NavBar />
    <main>
      <div class="message">
        <span class="eyebrow">Page not found · 404</span>
        <h1>Looks like this path goes nowhere.</h1>
        <p>The page may have moved, or the address may have a typo. You can head home or browse available jobs.</p>
        <div class="actions">
          <router-link class="primary-action" to="/">Go home</router-link>
          <router-link class="secondary-action" to="/jobs">Browse jobs</router-link>
        </div>
      </div>
      <div class="decoration" aria-hidden="true">404<span>?</span></div>
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
.not-found-page { min-height: 100vh; background: var(--canvas); }
main { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 40px; max-width: var(--page-width); min-height: 65vh; margin: auto; padding: 130px var(--page-gutter) 90px; }
.eyebrow { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
h1 { max-width: 700px; margin: 15px 0; color: var(--ink); font-family: var(--font-display); font-size: var(--text-hero); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
p { max-width: 580px; color: var(--muted); font-size: var(--text-lg); }
.actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.actions a { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 11px 20px; border-radius: var(--radius-control); font-weight: var(--weight-strong); transition: transform var(--motion-fast); }
.actions a:hover { transform: translateY(-2px); text-decoration: none; }
.primary-action { background: var(--accent); color: white; }
.primary-action:hover { color: white; }
.secondary-action { border: 1px solid var(--line); background: var(--surface); color: var(--ink); }
.secondary-action:hover { color: var(--accent-dark); }
.decoration { position: relative; color: var(--accent-soft); font-size: clamp(8rem, 19vw, 20rem); font-weight: 900; letter-spacing: -.1em; line-height: 1; }
.decoration span { position: absolute; right: -10px; top: -20px; color: var(--accent); font-size: .22em; transform: rotate(15deg); }
@media (max-width: 900px) { main { grid-template-columns: 1fr; } .decoration { display: none; } }
</style>
