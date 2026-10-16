<template>
  <form class="search-wrap" role="search" @submit.prevent="searchJobs">
    <Search class="search-icon" :size="16" aria-hidden="true" />
    <input
      v-model="searchText"
      type="search"
      name="search"
      placeholder="Search jobs"
      aria-label="Search jobs"
      class="search"
    />
    <button type="submit" aria-label="Show job search results">
      <ArrowRight :size="15" aria-hidden="true" />
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ArrowRight, Search } from '@lucide/vue'

export default defineComponent({
  name: 'SearchComponent',
  components: { ArrowRight, Search },
  data() {
    return { searchText: '' }
  },
  methods: {
    searchJobs() {
      const search = this.searchText.trim()
      this.$router.push({ name: 'BrowseJobs', query: search ? { search } : {} })
    }
  }
})
</script>

<style scoped>
.search-wrap { position: relative; display: flex; align-items: center; width: 100%; height: 38px; border: 1px solid var(--line); border-radius: 9px; background: var(--canvas); transition: border-color var(--motion-fast), box-shadow var(--motion-fast); }
.search-wrap:hover, .search-wrap:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(7,138,115,.09); }
.search-icon { position: absolute; left: 12px; color: var(--muted); pointer-events: none; font-size: .82rem; }
.search { width: 100%; min-width: 0; height: 100%; padding: 7px 38px 7px 35px; border: 0; outline: 0; background: transparent; color: var(--ink); font-size: var(--text-sm); }
.search:focus-visible { outline: 0 !important; }
.search::placeholder { color: var(--muted); }
button { position: absolute; right: 4px; display: grid; place-items: center; width: 29px; height: 29px; border: 0; border-radius: 6px; background: transparent; color: var(--accent-dark); font-size: .75rem; }
button:hover, button:focus-visible { background: var(--accent-soft); }
</style>
