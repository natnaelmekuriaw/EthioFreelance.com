<template>
  <div class="policy-page">
    <NavBar />
    <main>
      <span class="eyebrow">Policies and privacy</span>
      <h1>Policy information</h1>
      <div class="panel">
        <i class="fas fa-file-alt" aria-hidden="true"></i>
        <h2>Detailed policy information is being prepared.</h2>
        <p>
          For questions about your account, data, or use of the platform,
          contact the team directly. We will add the full policy text here when
          it is available.
        </p>
        <a href="mailto:natnaelmekuriaw50@gmail.com"
          >Contact the team <i class="fas fa-arrow-right" aria-hidden="true"></i
        ></a>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import NavBar from "../components/layout/NavBar.vue";
import Footer from "../components/layout/Footer.vue";

export default { components: { NavBar, Footer } };
</script>

<style scoped>
.policy-page {
  min-height: 100vh;
  background: var(--canvas);
}
main {
  max-width: var(--page-width);
  min-height: 65vh;
  margin: auto;
  padding: 125px var(--page-gutter) 90px;
}
.eyebrow {
  color: var(--accent);
  font-size: var(--text-xs);
  font-weight: var(--weight-strong);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
}
h1 {
  margin: 8px 0 30px;
  color: var(--ink);
  font-size: var(--text-section);
  font-weight: var(--weight-strong);
  letter-spacing: var(--tracking-heading);
}
.panel {
  max-width: 690px;
  padding: 35px;
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  background: var(--surface);
  box-shadow: var(--shadow);
}
.panel > i {
  color: var(--accent);
  font-size: 1.7rem;
}
h2 {
  margin: 20px 0 10px;
  color: var(--ink);
  font-size: var(--text-xl);
  font-weight: var(--weight-strong);
}
p {
  color: var(--muted);
}
a {
  color: var(--accent-dark);
  font-weight: var(--weight-strong);
}
</style>
