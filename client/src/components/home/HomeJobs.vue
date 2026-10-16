<template>
  <section class="home-jobs" aria-labelledby="home-jobs-title">
    <div class="section-heading">
      <div>
        <span class="eyebrow">New opportunities</span>
        <h2 id="home-jobs-title">Find a project worth doing</h2>
        <p>Explore open work and narrow the list to what fits you.</p>
      </div>
      <router-link class="view-all" :to="browseRoute">Browse all jobs <ArrowRight :size="16" aria-hidden="true" /></router-link>
    </div>

    <div class="job-filters">
      <label class="search-field" for="home-job-search">
        <Search :size="16" aria-hidden="true" />
        <input id="home-job-search" v-model="search" type="search" placeholder="Search title or skill" aria-label="Search jobs by title or skill" />
      </label>
      <label class="category-field" for="home-job-category">
        <span>Category</span>
        <select id="home-job-category" v-model="selectedCategory">
          <option value="">All categories</option>
          <option v-for="category in categoryOptions" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </label>
      <button v-if="search || selectedCategory" class="clear-filters" type="button" @click="clearFilters">Clear filters</button>
    </div>

    <div class="results-line">
      <span>{{ loading ? 'Loading opportunities…' : error ? 'Jobs are unavailable' : `${filteredJobs.length} open ${filteredJobs.length === 1 ? 'job' : 'jobs'}` }}</span>
      <span v-if="!loading && !error && filteredJobs.length > 4">Showing 4</span>
    </div>

    <div v-if="loading" class="state-card" role="status"><LoaderCircle class="spin" :size="16" aria-hidden="true" /> Loading jobs…</div>
    <div v-else-if="error" class="state-card" role="alert">Jobs are unavailable right now. <button type="button" @click="loadJobs">Try again</button></div>
    <div v-else-if="!filteredJobs.length" class="state-card" role="status">
      {{ search || selectedCategory ? 'No jobs match these filters yet.' : 'No open jobs to show right now.' }}
      <button v-if="search || selectedCategory" type="button" @click="clearFilters">Clear filters</button>
    </div>
    <div v-else class="job-grid">
      <article v-for="job in visibleJobs" :key="job._id" class="job-card">
        <div class="card-top"><span class="category-tag">{{ categoryLabel(job) }}</span><span class="open-tag">Open</span></div>
        <h3>{{ job.title || 'Untitled project' }}</h3>
        <div class="job-meta"><span v-if="job.duration"><Clock3 :size="14" aria-hidden="true" /> {{ job.duration }}</span><span v-if="job.skillLevel"><Layers :size="14" aria-hidden="true" /> {{ job.skillLevel }}</span></div>
        <div class="card-bottom"><span>{{ job.budget ? `${job.budget} ${job.currency || ''}` : 'Budget not listed' }}</span><router-link :to="{ name: 'JobDetails', params: { id: job._id } }">View job <ArrowRight :size="15" aria-hidden="true" /></router-link></div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowRight, Clock3, Layers, LoaderCircle, Search } from '@lucide/vue'
import { categoryKeys, categoryNames } from '../../data/browseCategories'

interface HomeJob {
  _id: string
  title?: string
  status?: string
  catagory?: string | number
  category?: string | number
  duration?: string
  skillLevel?: string
  budget?: string | number
  currency?: string
}

export default defineComponent({
  name: 'HomeJobs',
  components: { ArrowRight, Clock3, Layers, LoaderCircle, Search },
  data() {
    return { search: '', selectedCategory: '', loading: true, error: false }
  },
  computed: {
    categoryOptions(): { id: string; name: string }[] {
      return Object.keys(categoryNames).map(id => ({ id, name: categoryNames[id] }))
    },
    jobs(): HomeJob[] {
      const value = this.$store.getters.searchedjob
      return Array.isArray(value) ? value : []
    },
    filteredJobs(): HomeJob[] {
      const term = this.search.trim().toLowerCase()
      return this.jobs.filter(job => {
        const category = String(job.catagory ?? job.category ?? '').trim().toLowerCase()
        const categoryMatches = !this.selectedCategory || [this.selectedCategory, categoryKeys[this.selectedCategory], categoryNames[this.selectedCategory].toLowerCase()].includes(category)
        const searchMatches = !term || [job.title, job.skillLevel, job.duration].some(value => String(value || '').toLowerCase().includes(term))
        return job.status === 'active' && categoryMatches && searchMatches
      })
    },
    visibleJobs(): HomeJob[] {
      return this.filteredJobs.slice(0, 4)
    },
    browseRoute(): { name: string; query: Record<string, string> } {
      const query: Record<string, string> = {}
      if (this.search.trim()) query.search = this.search.trim()
      if (this.selectedCategory) query.category = categoryKeys[this.selectedCategory]
      return { name: 'BrowseJobs', query }
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
    categoryLabel(job: HomeJob): string {
      const value = String(job.catagory ?? job.category ?? '').trim().toLowerCase()
      const id = Object.keys(categoryNames).find(id => [id, categoryKeys[id], categoryNames[id].toLowerCase()].includes(value))
      return id ? categoryNames[id] : 'Project'
    },
    clearFilters() {
      this.search = ''
      this.selectedCategory = ''
    }
  }
})
</script>

<style scoped>
.home-jobs { max-width: var(--page-width); margin: 0 auto; padding: 20px var(--page-gutter) 70px; }
.section-heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; margin-bottom: 23px; }
.eyebrow { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
h2 { margin: 7px 0 5px; color: var(--ink); font-family: var(--font-display); font-size: clamp(1.7rem, 2.8vw, 2.3rem); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); line-height: var(--leading-heading); }
.section-heading p { margin: 0; color: var(--muted); font-size: var(--text-sm); }
.view-all { display: inline-flex; align-items: center; gap: 8px; flex-shrink: 0; padding: 7px 0; color: var(--accent-dark); font-size: var(--text-sm); font-weight: var(--weight-strong); text-decoration: none; }
.view-all:hover { text-decoration: underline; }
.job-filters { display: flex; align-items: flex-end; gap: 10px; padding: 13px; border: 1px solid var(--line); border-radius: 14px; background: var(--surface); }
.search-field { position: relative; flex: 1; min-width: 160px; }
.search-field i { position: absolute; left: 13px; top: 50%; transform: translateY(-50%); color: var(--muted); font-size: .83rem; }
.search-field input, .category-field select { width: 100%; min-height: 40px; border: 1px solid var(--line); border-radius: 9px; background: var(--canvas); color: var(--ink); font-size: var(--text-sm); }
.search-field input { padding: 8px 12px 8px 36px; }
.category-field { width: min(34%, 260px); }
.category-field span { display: block; margin-bottom: 4px; color: var(--muted); font-size: var(--text-xs); font-weight: var(--weight-medium); }
.category-field select { padding: 8px 12px; cursor: pointer; }
.search-field input:focus, .category-field select:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(7,138,115,.1); }
.clear-filters { min-height: 40px; padding: 0 10px; border: 0; background: transparent; color: var(--accent-dark); font-size: var(--text-xs); font-weight: var(--weight-strong); white-space: nowrap; }
.clear-filters:hover { text-decoration: underline; }
.results-line { display: flex; justify-content: space-between; margin: 14px 2px 11px; color: var(--muted); font-size: var(--text-xs); }
.job-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.job-card { min-width: 0; padding: 17px 19px; border: 1px solid var(--line); border-radius: 13px; background: var(--surface); transition: border-color var(--motion-fast), transform var(--motion-fast), box-shadow var(--motion-fast); }
.job-card:hover, .job-card:focus-within { transform: translateY(-2px); border-color: #add9cd; box-shadow: 0 12px 27px rgba(16,43,48,.08); }
.card-top, .card-bottom { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.category-tag, .open-tag { font-size: var(--text-xs); font-weight: var(--weight-medium); }
.category-tag { color: var(--accent-dark); }
.open-tag { padding: 2px 8px; border-radius: 99px; background: var(--accent-soft); color: var(--accent-dark); }
.job-card h3 { overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; min-height: 2.65em; margin: 10px 0 12px; color: var(--ink); font-size: var(--text-base); font-weight: var(--weight-strong); line-height: 1.33; }
.job-meta { display: flex; flex-wrap: wrap; gap: 7px 14px; min-height: 24px; color: var(--muted); font-size: var(--text-xs); }
.job-meta svg { margin-right: 3px; color: var(--accent); vertical-align: -2px; }
.card-bottom { margin-top: 13px; padding-top: 10px; border-top: 1px solid var(--line); color: var(--ink); font-size: var(--text-xs); font-weight: var(--weight-medium); }
.card-bottom a { display: inline-flex; align-items: center; gap: 6px; color: var(--accent-dark); font-weight: var(--weight-strong); white-space: nowrap; text-decoration: none; }
.card-bottom a:hover { text-decoration: underline; }
.state-card { padding: 32px 20px; border: 1px solid var(--line); border-radius: 13px; background: var(--surface); color: var(--muted); font-size: var(--text-sm); text-align: center; }
.spin { animation: spin 1s linear infinite; vertical-align: -3px; }
@keyframes spin { to { transform: rotate(360deg); } }
.state-card button { margin-left: 10px; padding: 0; border: 0; background: transparent; color: var(--accent-dark); font-size: var(--text-sm); font-weight: var(--weight-strong); }
@media (max-width: 760px) { .home-jobs { padding-bottom: 50px; } .section-heading { align-items: flex-start; } .job-grid { grid-template-columns: 1fr; } }
@media (max-width: 540px) { .section-heading { flex-direction: column; gap: 8px; } .job-filters { flex-wrap: wrap; } .search-field, .category-field { flex: 1 1 100%; width: 100%; } .clear-filters { margin-left: auto; } }
</style>
