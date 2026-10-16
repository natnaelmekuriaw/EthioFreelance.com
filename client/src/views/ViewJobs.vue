<template>
  <div class="jobs-page">
    <NavBar />
    <main>
      <div class="page-heading">
        <span class="eyebrow">Find your next opportunity</span>
        <h1>Browse jobs</h1>
        <p>Explore available projects and discover work that fits your skills.</p>
      </div>
      <div class="content-grid">
        <aside class="filters" aria-label="Job filters">
          <h2>Find the right fit</h2>
          <label for="job-search">Search jobs</label>
          <input id="job-search" v-model="query" type="search" placeholder="Search by title or skill" @change="syncSearch" @keyup.enter="syncSearch" />
          <button v-if="query" class="clear-button" type="button" @click="clearSearch">Clear search</button>
          <label for="job-category">Category</label>
          <select id="job-category" :value="selectedCategoryId" @change="selectCategory">
            <option value="">All categories</option>
            <option v-for="category in categoryOptions" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </aside>
        <section class="results" aria-label="Job results">
          <div class="results-heading"><h2>Available jobs</h2><span v-if="!loading && !error">{{ filteredJobs.length }} results</span></div>
          <div v-if="selectedCategory || selectedSubcategory" class="active-filter"><span><ListFilter :size="15" aria-hidden="true" /> {{ selectedFilterLabel }}</span><button type="button" @click="clearCategory">Clear category <X :size="15" aria-hidden="true" /></button></div>
          <div v-if="loading" class="state-card" role="status"><LoaderCircle class="spin" :size="27" aria-hidden="true" /><h3>Loading jobs</h3><p>Finding available projects for you.</p></div>
          <div v-else-if="error" class="state-card" role="alert"><WifiOff :size="27" aria-hidden="true" /><h3>Jobs are unavailable right now</h3><p>We couldn't load the listings. Please try again.</p><button type="button" @click="loadJobs">Try again</button></div>
          <div v-else-if="!filteredJobs.length" class="state-card" role="status"><Search :size="27" aria-hidden="true" /><h3>No jobs found</h3><p>{{ query ? 'Try a different search or clear the search field.' : selectedCategory ? 'No active jobs in this category right now. Try another category or browse all jobs.' : 'There are no active jobs to show yet. Check back soon.' }}</p><button v-if="query" type="button" @click="query = ''">Clear search</button><button v-else-if="selectedCategory" type="button" @click="clearCategory">Browse all jobs</button></div>
          <template v-else>
            <article v-for="job in pageJobs" :key="job._id" class="job-card">
              <div class="card-top"><h3>{{ job.title }}</h3><span class="status">Open</span></div>
              <div class="tags"><span v-if="job.duration">{{ job.duration }}</span><span v-if="job.skillLevel">{{ job.skillLevel }}</span><span v-if="job.budgetType">{{ job.budgetType }}</span></div>
              <div class="card-bottom"><span v-if="job.budget">{{ job.budget }} {{ job.currency }}</span><router-link :to="{ name: 'JobDetails', params: { id: job._id } }">View details <ArrowRight :size="15" aria-hidden="true" /></router-link></div>
            </article>
            <Pagination :current-page="currentPage" :total-pages="totalPages" @change="changePage" />
          </template>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowRight, ListFilter, LoaderCircle, Search, WifiOff, X } from '@lucide/vue'
import NavBar from '../components/layout/NavBar.vue'
import Footer from '../components/layout/Footer.vue'
import Pagination from '../components/jobs/Pagination.vue'
import { browseCategories, categoryKeys, categoryNames } from '../data/browseCategories'
import { catagory as subcategoryOptions } from '../helpers/select'

function matchesCategory(value: unknown, code: string, name: string, alternateName = ''): boolean {
  const current = String(value ?? '').trim().toLowerCase()
  return current === code || current === name.toLowerCase() || current === alternateName.toLowerCase()
}

interface JobListing {
  _id: string
  title?: string
  duration?: string
  skillLevel?: string
  budgetType?: string
  budget?: string | number
  currency?: string
  status?: string
  catagory?: string | number
  category?: string | number
  sub_catagory?: string | number
  subcategory?: string | number
}

export default defineComponent({
  components: { NavBar, Footer, Pagination, ArrowRight, ListFilter, LoaderCircle, Search, WifiOff, X },
  data() {
    return { query: typeof this.$route.query.search === 'string' ? this.$route.query.search : '', currentPage: 1, pageSize: 6, loading: true, error: false }
  },
  computed: {
    jobs(): JobListing[] {
      const value = this.$store.getters.searchedjob
      return Array.isArray(value) ? value : []
    },
    selectedCategory(): string {
      const value = this.$route.query.category
      return typeof value === 'string' ? value : ''
    },
    categoryOptions(): { id: string; name: string }[] {
      return Object.keys(categoryNames).map(id => ({ id, name: categoryNames[id] }))
    },
    selectedSubcategory(): string {
      const value = this.$route.query.subcategory
      return typeof value === 'string' ? value : ''
    },
    selectedCategoryId(): string {
      const value = this.selectedCategory.trim().toLowerCase()
      return Object.keys(categoryNames).find(id =>
        id === value || categoryKeys[id] === value || categoryNames[id].toLowerCase() === value
      ) || ''
    },
    selectedSubcategoryId(): string {
      const value = this.selectedSubcategory.trim().toLowerCase()
      return browseCategories.find(category =>
        (!this.selectedCategoryId || category.category === this.selectedCategoryId) &&
        (category.subcategory === value || category.key === value || category.name.toLowerCase() === value)
      )?.subcategory || ''
    },
    selectedFilterLabel(): string {
      const match = browseCategories.find(category => category.subcategory === this.selectedSubcategoryId)
      if (match) return match.name
      return categoryNames[this.selectedCategoryId] || this.selectedCategory || this.selectedSubcategory
    },
    filteredJobs(): JobListing[] {
      const term = this.query.trim().toLowerCase()
      const selectedSubcategory = browseCategories.find(category => category.subcategory === this.selectedSubcategoryId)
      const storedSubcategoryName = selectedSubcategory
        ? subcategoryOptions[Number(selectedSubcategory.category)]?.find(option => option.value === selectedSubcategory.subcategory)?.text || ''
        : ''
      return this.jobs.filter(job =>
        job.status === 'active' &&
        (!this.selectedCategory || (this.selectedCategoryId && matchesCategory(job.catagory ?? job.category, this.selectedCategoryId, categoryNames[this.selectedCategoryId]))) &&
        (!this.selectedSubcategory || (selectedSubcategory && matchesCategory(job.sub_catagory ?? job.subcategory, selectedSubcategory.subcategory, selectedSubcategory.name, storedSubcategoryName))) &&
        (!term || [job.title, job.skillLevel, job.duration].some(value => String(value || '').toLowerCase().includes(term)))
      )
    },
    totalPages(): number { return Math.max(1, Math.ceil(this.filteredJobs.length / this.pageSize)) },
    pageJobs(): JobListing[] { return this.filteredJobs.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize) }
  },
  watch: {
    query() { this.currentPage = 1 },
    '$route.query'() {
      this.currentPage = 1
      this.query = typeof this.$route.query.search === 'string' ? this.$route.query.search : ''
    }
  },
  created() { this.loadJobs() },
  methods: {
    async loadJobs() {
      this.loading = true
      this.error = false
      try { await this.$store.dispatch('loadSearchedJobs', { search: '' }) }
      catch { this.error = true }
      finally { this.loading = false }
    },
    changePage(page: number) {
      this.currentPage = page
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
    clearCategory() {
      this.$router.push({ name: 'BrowseJobs', query: this.query ? { search: this.query } : {} })
    },
    syncSearch() {
      const query: Record<string, string> = {}
      if (this.selectedCategory) query.category = this.selectedCategory
      if (this.selectedSubcategory) query.subcategory = this.selectedSubcategory
      if (this.query.trim()) query.search = this.query.trim()
      this.$router.replace({ name: 'BrowseJobs', query })
    },
    clearSearch() {
      this.query = ''
      this.syncSearch()
    },
    selectCategory(event: Event) {
      const id = (event.target as HTMLSelectElement).value
      const query: Record<string, string> = {}
      if (this.query.trim()) query.search = this.query.trim()
      if (id) query.category = categoryKeys[id]
      this.$router.push({ name: 'BrowseJobs', query })
    }
  }
})
</script>

<style scoped>
.jobs-page { min-height: 100vh; background: var(--canvas); }
main { max-width: var(--page-width); margin: auto; padding: 122px var(--page-gutter) 65px; }
.eyebrow { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
.page-heading h1 { margin: 8px 0 4px; color: var(--ink); font-size: var(--text-section); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.page-heading p { color: var(--muted); }
.content-grid { display: grid; grid-template-columns: 225px minmax(0, 1fr); align-items: start; gap: 18px; margin-top: 28px; }
.filters, .job-card, .state-card { border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); }
.filters { position: sticky; top: 100px; padding: 20px; }
.filters h2, .results-heading h2 { margin: 0 0 16px; color: var(--ink); font-size: var(--text-lg); font-weight: var(--weight-strong); }
.filters label { display: block; margin-bottom: 8px; color: var(--ink); font-size: var(--text-sm); font-weight: var(--weight-strong); }
.filters input, .filters select { width: 100%; min-height: 42px; padding: 8px 12px; border: 1px solid var(--line); border-radius: 9px; background: var(--canvas); color: var(--ink); font-size: var(--text-sm); }
.filters input:focus, .filters select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(7,138,115,.1); }
.filters label:not(:first-of-type) { margin-top: 16px; }
.clear-button { margin-top: 12px; padding: 0; border: 0; background: none; color: var(--accent); font-weight: var(--weight-strong); }
.results-heading { display: flex; align-items: center; justify-content: space-between; gap: 15px; color: var(--muted); }
.active-filter { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 14px; padding: 10px 13px; border: 1px solid var(--line); border-radius: var(--radius-control); background: var(--surface-tint); color: var(--accent-dark); font-size: var(--text-sm); font-weight: var(--weight-strong); }
.active-filter span { display: inline-flex; align-items: center; gap: 8px; }
.active-filter button { display: inline-flex; align-items: center; gap: 5px; padding: 4px 7px; border: 0; background: transparent; color: var(--accent-dark); font-size: var(--text-xs); font-weight: var(--weight-strong); }
.job-card { margin-bottom: 11px; padding: 19px 21px; transition: border-color var(--motion-fast), transform var(--motion-fast), box-shadow var(--motion-fast); }
.job-card:hover, .job-card:focus-within { transform: translateY(-3px); border-color: #acdbce; box-shadow: var(--shadow-hover); }
.card-top, .card-bottom { display: flex; align-items: center; justify-content: space-between; gap: 15px; }
.card-top h3 { margin: 0; color: var(--ink); font-size: var(--text-lg); font-weight: var(--weight-strong); line-height: 1.35; }
.status { padding: 5px 10px; border-radius: 99px; background: var(--accent-soft); color: var(--accent-dark); font-size: var(--text-xs); font-weight: var(--weight-strong); }
.tags { display: flex; flex-wrap: wrap; gap: 6px; margin: 11px 0 15px; }
.tags span { padding: 5px 8px; border-radius: 7px; background: var(--surface-tint); color: var(--accent-dark); font-size: var(--text-xs); font-weight: var(--weight-medium); }
.card-bottom { padding-top: 13px; border-top: 1px solid var(--line); color: var(--muted); font-size: var(--text-sm); }
.card-bottom a, .state-card button { display: inline-flex; align-items: center; gap: 7px; padding: 7px 11px; border: 0; border-radius: 8px; background: var(--accent); color: white; font-size: var(--text-sm); font-weight: var(--weight-medium); text-decoration: none; }
.card-bottom a:hover, .state-card button:hover { background: var(--accent-dark); }
.state-card { padding: 42px 22px; text-align: center; }
.state-card svg { color: var(--accent); }
.spin { animation: spin 1s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }
.state-card h3 { margin: 16px 0 8px; color: var(--ink); font-size: var(--text-xl); }
.state-card p { max-width: 410px; margin: 0 auto 20px; color: var(--muted); }
.state-card button { margin: auto; }
@media (max-width: 760px) { .content-grid { grid-template-columns: 1fr; } .filters { position: static; } }
@media (max-width: 480px) { .card-top, .card-bottom { align-items: flex-start; } .job-card { padding: 17px; } }
</style>
