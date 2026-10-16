<template>
  <div class="help-page">
    <NavBar />
    <main>
      <header class="intro">
        <span class="eyebrow">Help center</span>
        <h1>Find your next step.</h1>
        <p>
          Quick guidance for finding work, posting a project, and getting in
          touch.
        </p>
      </header>
      <nav class="section-nav" aria-label="Help topics">
        <a href="#getting-started">Getting started</a
        ><a href="#earning">Finding work</a><a href="#payments">Payments</a
        ><a href="#faq">FAQ</a><a href="#support">Support</a>
      </nav>
      <div class="sections">
        <section id="getting-started">
          <span class="section-icon"
            ><i class="fas fa-rocket" aria-hidden="true"></i
          ></span>
          <h2>Getting started</h2>
          <p>
            Create an account, choose how you want to use EthioFreelance, and
            complete your profile. A clear profile helps others understand your
            skills or your project.
          </p>
          <router-link to="/register"
            >Create an account
            <i class="fas fa-arrow-right" aria-hidden="true"></i
          ></router-link>
        </section>
        <section id="earning">
          <span class="section-icon"
            ><i class="fas fa-briefcase" aria-hidden="true"></i
          ></span>
          <h2>Finding work</h2>
          <p>
            Browse open jobs, read the details, and apply to projects that match
            your skills. Keep your proposal focused on the work the employer
            described.
          </p>
          <router-link to="/jobs"
            >Browse jobs <i class="fas fa-arrow-right" aria-hidden="true"></i
          ></router-link>
        </section>
        <section id="payments">
          <span class="section-icon"
            ><i class="fas fa-credit-card" aria-hidden="true"></i
          ></span>
          <h2>Payments and orders</h2>
          <p>
            Payment options and steps can depend on the job and your account.
            Review the information shown during the payment process before you
            continue. For a question about a specific payment, contact support.
          </p>
          <a href="#support"
            >Get payment help
            <i class="fas fa-arrow-right" aria-hidden="true"></i
          ></a>
        </section>
        <section id="faq">
          <span class="section-icon"
            ><i class="fas fa-question-circle" aria-hidden="true"></i
          ></span>
          <h2>Frequently asked questions</h2>
          <details>
            <summary>Do I need an account to browse jobs?</summary>
            <p>
              You can browse available jobs without signing in. An account is
              needed for actions tied to a profile.
            </p>
          </details>
          <details>
            <summary>Where can I manage my projects?</summary>
            <p>
              After signing in, open your dashboard from the account menu to see
              the tools available for your role.
            </p>
          </details>
          <details>
            <summary>What if no jobs appear?</summary>
            <p>
              There may be no active jobs right now, or the listings may be
              temporarily unavailable. Clear your search or try again later.
            </p>
          </details>
        </section>
        <section id="support">
          <span class="section-icon"
            ><i class="fas fa-envelope" aria-hidden="true"></i
          ></span>
          <h2>Support and reports</h2>
          <p>
            Have a question or need to report an issue? Send a message to the
            contact address below. Include the page or job involved so the team
            has context.
          </p>
          <a href="mailto:natnaelmekuriaw50@gmail.com"
            >natnaelmekuriaw50@gmail.com
            <i class="fas fa-arrow-right" aria-hidden="true"></i
          ></a>
        </section>
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
.help-page {
  min-height: 100vh;
  background: var(--canvas);
}
main {
  max-width: var(--page-width);
  margin: auto;
  padding: 125px var(--page-gutter) 100px;
}
.eyebrow {
  color: var(--accent);
  font-size: var(--text-xs);
  font-weight: var(--weight-strong);
  letter-spacing: var(--tracking-label);
  text-transform: uppercase;
}
h1,
h2 {
  color: var(--ink);
  font-family: var(--font-display);
  font-weight: var(--weight-strong);
  letter-spacing: var(--tracking-heading);
}
h1 {
  margin: 9px 0;
  font-size: var(--text-section);
}
.intro p {
  color: var(--muted);
  font-size: var(--text-lg);
}
.section-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px 0;
}
.section-nav a {
  padding: 9px 14px;
  border: 1px solid var(--line);
  border-radius: 99px;
  background: var(--surface);
  color: var(--ink);
  font-size: var(--text-sm);
  font-weight: var(--weight-strong);
}
.section-nav a:hover {
  border-color: var(--accent);
  color: var(--accent-dark);
  text-decoration: none;
}
.sections {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}
section {
  scroll-margin-top: 105px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: var(--radius-card);
  background: var(--surface);
}
.section-icon {
  display: grid;
  place-items: center;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent);
}
section h2 {
  margin: 20px 0 8px;
  font-size: var(--text-xl);
}
section p {
  margin: 0 0 16px;
  color: var(--muted);
}
section > a {
  color: var(--accent-dark);
  font-weight: var(--weight-strong);
}
section > a i {
  margin-left: 5px;
}
details {
  padding: 13px 0;
  border-top: 1px solid var(--line);
}
details:first-of-type {
  margin-top: 18px;
}
summary {
  cursor: pointer;
  color: var(--ink);
  font-weight: var(--weight-strong);
}
details p {
  margin: 10px 0 0;
}
@media (max-width: 730px) {
  .sections {
    grid-template-columns: 1fr;
  }
}
</style>
