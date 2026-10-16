<template>
  <section class="category-browser" aria-labelledby="category-title">
    <div class="heading">
      <div><span class="kicker">Explore your next move</span><h2 id="category-title">Browse by category</h2><p>Choose a field that fits your skills.</p></div>
      <router-link class="all-jobs" :to="{ name: 'BrowseJobs' }">View all jobs <ArrowRight :size="16" aria-hidden="true" /></router-link>
    </div>
    <div class="toolbar">
      <label class="search-box" for="category-search"><Search :size="16" aria-hidden="true" /><input id="category-search" v-model="search" type="search" placeholder="Search categories" aria-label="Search categories" /></label>
      <span v-if="search" class="result-count" role="status">{{ filteredCategories.length }} {{ filteredCategories.length === 1 ? 'category' : 'categories' }}</span>
    </div>
    <div v-if="!filteredCategories.length" class="empty-result" role="status">No matching categories. Try another search.</div>
    <div v-else ref="categoryList" class="category-list" :class="{ expanded: showAll || search, dragging: dragMoved }" aria-label="Job categories" @pointerdown="startDrag" @pointermove="moveDrag" @pointerup="endDrag" @pointercancel="endDrag" @click.capture="preventDraggedClick">
      <router-link v-for="category in visibleCategories" :key="category.subcategory" class="category-card" draggable="false" :to="{ name: 'BrowseJobs', query: { category: categoryKeys[category.category], subcategory: category.key } }">
        <span class="category-icon"><component :is="categoryIcons[category.icon]" :size="18" aria-hidden="true" /></span><span class="category-name">{{ category.name }}</span><ArrowRight :size="12" class="card-arrow" aria-hidden="true" />
      </router-link>
    </div>
    <div v-if="!search" class="browser-footer">
      <span v-if="!showAll" class="scroll-hint"><Hand :size="14" aria-hidden="true" /> Drag or swipe to explore</span>
      <button class="show-button" type="button" :aria-expanded="showAll" @click="showAll = !showAll">{{ showAll ? 'Show fewer categories' : `Show all categories` }} <ChevronUp v-if="showAll" :size="16" aria-hidden="true" /><ChevronDown v-else :size="16" aria-hidden="true" /></button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, markRaw, type Component } from 'vue'
import { ArrowRight, BookOpen, Calculator, Camera, ChevronDown, ChevronUp, CodeXml, Database, Film, Gamepad2, Hand, Hash, Headphones, Languages, Laptop, Layers, ListChecks, Megaphone, Music2, Palette, PenLine, PencilRuler, Scale, Search, ShoppingBag, Smartphone, TrendingUp, UsersRound, Video } from '@lucide/vue'
import { browseCategories, categoryKeys } from '../../data/browseCategories'

const categoryIcons: Record<string, Component> = { BookOpen, Calculator, Camera, CodeXml, Database, Film, Gamepad2, Hash, Headphones, Languages, Laptop, Layers, ListChecks, Megaphone, Music2, Palette, PenLine, PencilRuler, Scale, ShoppingBag, Smartphone, TrendingUp, UsersRound, Video }

export default defineComponent({
  components: { ArrowRight, ChevronDown, ChevronUp, Hand, Search },
  data() { return { categories: browseCategories, categoryKeys, categoryIcons: markRaw(categoryIcons), search: '', showAll: false, dragActive: false, dragMoved: false, dragStartX: 0, dragScrollLeft: 0 } },
  computed: {
    filteredCategories() {
      const term = this.search.trim().toLowerCase()
      return term ? this.categories.filter(category => category.name.toLowerCase().includes(term)) : this.categories
    },
    visibleCategories() {
      return this.search || this.showAll ? this.filteredCategories : this.filteredCategories.slice(0, 8)
    }
  },
  methods: {
    startDrag(event: PointerEvent) {
      if (event.pointerType !== 'mouse' || event.button !== 0 || this.showAll || this.search) return
      this.dragActive = true
      this.dragMoved = false
      this.dragStartX = event.clientX
      this.dragScrollLeft = (this.$refs.categoryList as HTMLDivElement).scrollLeft
    },
    moveDrag(event: PointerEvent) {
      if (!this.dragActive) return
      const distance = event.clientX - this.dragStartX
      if (Math.abs(distance) < 6 && !this.dragMoved) return
      const list = this.$refs.categoryList as HTMLDivElement
      if (!this.dragMoved) list.setPointerCapture(event.pointerId)
      this.dragMoved = true
      list.scrollLeft = this.dragScrollLeft - distance
    },
    endDrag(event: PointerEvent) {
      if (!this.dragActive) return
      this.dragActive = false
      const list = this.$refs.categoryList as HTMLDivElement
      if (list.hasPointerCapture(event.pointerId)) list.releasePointerCapture(event.pointerId)
      window.setTimeout(() => { this.dragMoved = false }, 0)
    },
    preventDraggedClick(event: MouseEvent) {
      if (!this.dragMoved) return
      event.preventDefault()
      event.stopPropagation()
      this.dragMoved = false
    }
  }
})
</script>

<style scoped>
.category-browser { max-width: var(--page-width); margin: auto; padding: 75px var(--page-gutter) 95px; text-align: left; }
.heading { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; }
.kicker { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
h2 { margin: 8px 0 6px; color: var(--ink); font-size: var(--text-section); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); }
.heading p { margin: 0; color: var(--muted); }
.all-jobs { display: inline-flex; align-items: center; gap: 8px; color: var(--accent-dark); font-size: var(--text-sm); font-weight: var(--weight-strong); white-space: nowrap; }
.all-jobs:hover { color: var(--accent); }
.toolbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 27px 0 17px; }
.search-box { display: flex; align-items: center; gap: 10px; width: min(100%, 330px); min-height: 42px; margin: 0; padding: 0 13px; border: 1px solid var(--line); border-radius: var(--radius-control); background: var(--surface); color: var(--accent); transition: border-color var(--motion-fast), box-shadow var(--motion-fast); }
.search-box:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(8, 127, 108, .12); }
.search-box input { width: 100%; min-width: 0; border: 0; outline: none; background: transparent; color: var(--ink); font-size: var(--text-sm); }
.search-box input:focus-visible { outline: none !important; box-shadow: none !important; }
.search-box input::-webkit-search-cancel-button { cursor: pointer; }
.show-button { display: inline-flex; align-items: center; gap: 8px; min-height: 38px; padding: 7px 13px; border: 1px solid var(--line); border-radius: 99px; background: var(--surface); color: var(--accent-dark); font-size: var(--text-sm); font-weight: var(--weight-medium); transition: background var(--motion-fast), border-color var(--motion-fast); }
.show-button:hover { border-color: var(--accent); background: var(--accent-soft); }
.result-count { color: var(--muted); font-size: var(--text-sm); }
.category-list { display: flex; gap: 10px; overflow-x: auto; overscroll-behavior-inline: contain; scroll-behavior: smooth; scroll-snap-type: x mandatory; scrollbar-width: none; padding: 4px 2px 10px; cursor: grab; }
.category-list:not(.expanded) { user-select: none; }
.category-list::-webkit-scrollbar { display: none; }
.category-list.dragging { cursor: grabbing; user-select: none; scroll-behavior: auto; scroll-snap-type: none; }
.category-list.expanded { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); overflow: visible; cursor: auto; }
.category-card { flex: 0 0 184px; display: flex; align-items: center; gap: 10px; min-height: 72px; padding: 11px; border: 1px solid var(--line); border-radius: 13px; background: var(--surface); color: var(--ink); scroll-snap-align: start; transition: transform var(--motion-fast), border-color var(--motion-fast), box-shadow var(--motion-fast); }
.category-card:hover, .category-card:focus-visible { transform: translateY(-3px); border-color: #a5d9cb; box-shadow: var(--shadow); color: var(--accent-dark); text-decoration: none; }
.category-icon { flex: none; display: grid; place-items: center; width: 36px; height: 36px; border-radius: 10px; background: var(--accent-soft); color: var(--accent); font-size: .95rem; }
.category-name { flex: 1; font-size: var(--text-sm); font-weight: var(--weight-medium); line-height: 1.25; }
.card-arrow { color: #8eaaa2; font-size: .68rem; }
.browser-footer { display: flex; align-items: center; justify-content: space-between; gap: 15px; margin-top: 12px; }
.browser-footer:has(.show-button:first-child) { justify-content: center; }
.scroll-hint { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-size: var(--text-xs); }
.scroll-hint svg { color: var(--accent); }
.empty-result { padding: 32px; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); color: var(--muted); text-align: center; }
@media (max-width: 700px) { .heading { align-items: flex-start; flex-direction: column; } .category-browser { padding-top: 60px; padding-bottom: 70px; } }
@media (max-width: 500px) { .toolbar { align-items: stretch; flex-direction: column; } .search-box { width: 100%; } .category-list.expanded { grid-template-columns: repeat(2, minmax(0, 1fr)); } .category-card { flex-basis: 156px; min-height: 70px; } .browser-footer { flex-direction: column; align-items: center; } }
</style>
