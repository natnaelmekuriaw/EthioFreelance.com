<template>
  <div class="talent-page">
    <NavBar />
    <main>
      <section class="intro" aria-labelledby="talent-title">
        <div class="intro-copy">
          <span class="eyebrow">Find your next collaborator</span>
          <h1 id="talent-title">Find talent for your next idea.</h1>
          <p>Explore the skills you need and discover people who can help bring your project to life.</p>
          <form class="talent-search" role="search" @submit.prevent="submitSearch">
            <Search :size="17" aria-hidden="true" />
            <input v-model="searchText" type="search" aria-label="Search talent by skill" placeholder="Try a skill or specialty" />
            <button type="submit">Search talent <ArrowRight :size="16" aria-hidden="true" /></button>
          </form>
        </div>
        <div class="intro-art" aria-hidden="true">
          <div class="art-center"><UsersRound :size="32" /></div>
          <span class="art-skill art-skill-one"><Palette :size="16" /> Design</span>
          <span class="art-skill art-skill-two"><CodeXml :size="16" /> Development</span>
          <span class="art-skill art-skill-three"><PenLine :size="16" /> Writing</span>
        </div>
      </section>

      <section class="explore" aria-labelledby="explore-title">
        <div class="section-heading"><div><span class="eyebrow">Explore a field</span><h2 id="explore-title">What kind of help do you need?</h2></div><button v-if="selectedField || searchQuery" type="button" class="clear-button" @click="clearFilters">Clear filters</button></div>
        <div class="field-grid">
          <button v-for="field in fields" :key="field.key" type="button" class="field-card" :class="{ active: selectedField === field.key }" :aria-pressed="selectedField === field.key" @click="selectField(field.key)">
            <span class="field-icon"><component :is="field.icon" :size="19" aria-hidden="true" /></span>
            <span>{{ field.name }}</span>
            <ArrowRight :size="14" class="field-arrow" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section class="results" aria-labelledby="results-title">
        <div class="results-heading"><div><span class="eyebrow">People and skills</span><h2 id="results-title">Available freelancers</h2></div><span class="result-count">0 profiles</span></div>
        <div class="empty-state" role="status">
          <span class="empty-icon"><UsersRound :size="24" aria-hidden="true" /></span>
          <h3>No freelancer profiles to show yet</h3>
          <p>Check back soon to discover freelancers and their work.</p>
          <button v-if="selectedField || searchQuery" type="button" @click="clearFilters">Clear filters</button>
        </div>
      </section>

      <section class="hire-note"><div><span class="eyebrow">Ready to get started?</span><h2>Make your project easy to discover.</h2><p>Share what you need so freelancers can understand the work and get in touch.</p></div><router-link to="/register">Create an account <ArrowRight :size="16" aria-hidden="true" /></router-link></section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw } from 'vue'
import { ArrowRight, BriefcaseBusiness, CodeXml, Palette, PenLine, Search, TrendingUp, UsersRound, Video } from '@lucide/vue'
import NavBar from '../components/layout/NavBar.vue'
import Footer from '../components/layout/Footer.vue'
import { categoryKeys, categoryNames } from '../data/browseCategories'

const fields = [
  { id: '22', icon: Palette },
  { id: '20', icon: CodeXml },
  { id: '21', icon: PenLine },
  { id: '23', icon: TrendingUp },
  { id: '24', icon: Video },
  { id: '25', icon: BriefcaseBusiness }
].map(field => ({ key: categoryKeys[field.id], name: categoryNames[field.id], icon: field.icon }))

export default defineComponent({
  name: 'FindTalent',
  components: { NavBar, Footer, ArrowRight, CodeXml, Palette, PenLine, Search, UsersRound },
  data() {
    return { fields: markRaw(fields), searchText: typeof this.$route.query.search === 'string' ? this.$route.query.search : '' }
  },
  computed: {
    selectedField(): string {
      const value = this.$route.query.field
      return typeof value === 'string' && fields.some(field => field.key === value) ? value : ''
    },
    searchQuery(): string {
      const value = this.$route.query.search
      return typeof value === 'string' ? value : ''
    }
  },
  watch: {
    '$route.query.search'() {
      this.searchText = this.searchQuery
    }
  },
  methods: {
    submitSearch() {
      const query: Record<string, string> = {}
      if (this.selectedField) query.field = this.selectedField
      if (this.searchText.trim()) query.search = this.searchText.trim()
      this.$router.push({ name: 'FindTalent', query })
    },
    selectField(key: string) {
      const query: Record<string, string> = {}
      if (this.searchText.trim()) query.search = this.searchText.trim()
      if (this.selectedField !== key) query.field = key
      this.$router.push({ name: 'FindTalent', query })
    },
    clearFilters() {
      this.searchText = ''
      this.$router.push({ name: 'FindTalent' })
    }
  }
})
</script>

<style scoped>
.talent-page { min-height: 100vh; background: var(--canvas); }
main { max-width: var(--page-width); margin: auto; padding: 116px var(--page-gutter) 80px; }
.eyebrow { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.intro { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(300px, .8fr); align-items: center; gap: clamp(25px, 5vw, 75px); min-height: 320px; padding: 35px 38px; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); overflow: hidden; }
h1 { max-width: 570px; margin: 10px 0 10px; color: var(--ink); font-family: var(--font-display); font-size: clamp(2.2rem, 3.4vw, 3.2rem); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.intro-copy > p { max-width: 540px; margin: 0; color: var(--muted); font-size: var(--text-sm); line-height: var(--leading-body); }
.talent-search { display: flex; align-items: center; gap: 10px; width: min(100%, 620px); margin-top: 24px; padding: 5px 5px 5px 14px; border: 1px solid var(--line); border-radius: 11px; background: var(--canvas); transition: border-color var(--motion-fast), box-shadow var(--motion-fast); }
.talent-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(7,138,115,.1); }
.talent-search > svg { color: var(--muted); }
.talent-search input { flex: 1; min-width: 0; height: 37px; border: 0; outline: 0; background: transparent; color: var(--ink); font-size: var(--text-sm); }
.talent-search input:focus-visible { outline: 0 !important; }
.talent-search button { display: inline-flex; align-items: center; gap: 8px; min-height: 36px; padding: 7px 13px; border: 0; border-radius: 8px; background: var(--accent); color: white; font-size: var(--text-xs); font-weight: var(--weight-strong); white-space: nowrap; }
.talent-search button:hover { background: var(--accent-dark); }
.intro-art { position: relative; display: grid; place-items: center; min-height: 250px; border-radius: 25px; background: radial-gradient(circle at 50% 45%, #dff5ea, #edf9f4 60%, #f8fcfa); }
.art-center { display: grid; place-items: center; width: 110px; height: 110px; border: 1px solid #b9e5d4; border-radius: 25px; background: white; color: var(--accent); font-size: 2.3rem; box-shadow: 0 18px 35px rgba(16,43,48,.1); }
.art-skill { position: absolute; display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border: 1px solid var(--line); border-radius: 9px; background: white; color: var(--ink); box-shadow: 0 8px 20px rgba(16,43,48,.07); font-size: var(--text-xs); font-weight: var(--weight-medium); }
.art-skill svg { color: var(--accent); }
.art-skill-one { top: 29px; left: 21px; }.art-skill-two { top: 43px; right: 12px; }.art-skill-three { bottom: 22px; left: 38%; }
.explore, .results { margin-top: 55px; }
.section-heading, .results-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 15px; margin-bottom: 19px; }
h2 { margin: 7px 0 0; color: var(--ink); font-family: var(--font-display); font-size: clamp(1.55rem, 2.4vw, 2rem); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.clear-button { padding: 7px 0; border: 0; background: transparent; color: var(--accent-dark); font-size: var(--text-sm); font-weight: var(--weight-strong); white-space: nowrap; }
.clear-button:hover { text-decoration: underline; }
.field-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.field-card { display: flex; align-items: center; gap: 12px; min-width: 0; min-height: 62px; padding: 11px 13px; border: 1px solid var(--line); border-radius: 11px; background: var(--surface); color: var(--ink); font-size: var(--text-sm); font-weight: var(--weight-medium); text-align: left; transition: border-color var(--motion-fast), background var(--motion-fast), transform var(--motion-fast); }
.field-card:hover, .field-card.active { border-color: #a7d7c8; background: var(--surface-tint); transform: translateY(-2px); }
.field-icon { display: grid; place-items: center; flex: 0 0 34px; height: 34px; border-radius: 8px; background: var(--accent-soft); color: var(--accent-dark); }
.field-arrow { margin-left: auto; color: var(--accent); font-size: .72rem; }
.result-count { padding: 5px 10px; border: 1px solid var(--line); border-radius: 99px; background: var(--surface); color: var(--muted); font-size: var(--text-xs); }
.empty-state { display: grid; justify-items: center; padding: 55px 25px; border: 1px dashed #c8ded6; border-radius: 14px; background: var(--surface); text-align: center; }
.empty-icon { display: grid; place-items: center; width: 52px; height: 52px; border-radius: 13px; background: var(--accent-soft); color: var(--accent-dark); font-size: 1.2rem; }
.empty-state h3 { margin: 13px 0 4px; color: var(--ink); font-size: var(--text-lg); font-weight: var(--weight-strong); }
.empty-state p { margin: 0; color: var(--muted); font-size: var(--text-sm); }
.empty-state button { margin-top: 15px; padding: 7px 0; border: 0; background: transparent; color: var(--accent-dark); font-size: var(--text-sm); font-weight: var(--weight-strong); }
.empty-state button:hover { text-decoration: underline; }
.hire-note { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-top: 55px; padding: 24px 28px; border: 1px solid #c8e8d9; border-radius: 14px; background: var(--surface-tint); }
.hire-note h2 { margin: 5px 0; font-size: var(--text-xl); }
.hire-note p { margin: 0; color: var(--muted); font-size: var(--text-sm); }
.hire-note a { display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0; min-height: 40px; padding: 8px 15px; border-radius: 9px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); text-decoration: none; }
.hire-note a:hover { background: var(--accent-dark); }
@media (max-width: 900px) { .intro { grid-template-columns: 1fr; } .intro-art { min-height: 190px; } }
@media (max-width: 700px) { .field-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .hire-note { align-items: flex-start; flex-direction: column; } }
@media (max-width: 540px) { main { padding-top: 98px; } .intro { padding: 26px 20px; } .intro-art { display: none; } .talent-search { flex-wrap: wrap; } .talent-search input { flex-basis: calc(100% - 35px); } .talent-search button { width: 100%; justify-content: center; } .field-grid { grid-template-columns: 1fr; } .explore, .results, .hire-note { margin-top: 40px; } }
</style>
