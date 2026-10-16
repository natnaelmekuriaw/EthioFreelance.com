<template>
  <nav v-if="totalPages > 1" class="pagination-row" aria-label="Job pages">
    <button type="button" :disabled="currentPage === 1" @click="$emit('change', currentPage - 1)">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button type="button" :disabled="currentPage === totalPages" @click="$emit('change', currentPage + 1)">Next</button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true }
  },
  emits: ['change']
})
</script>

<style scoped>
.pagination-row { display: flex; align-items: center; justify-content: center; gap: 16px; padding: 10px 0 56px; color: var(--muted); font-size: var(--text-sm); }
button { min-height: 42px; padding: 8px 16px; border: 1px solid var(--line); border-radius: var(--radius-control); background: var(--surface); color: var(--ink); font-weight: var(--weight-strong); transition: background var(--motion-fast), border-color var(--motion-fast); }
button:hover:not(:disabled) { border-color: var(--accent); background: var(--accent-soft); }
button:disabled { opacity: .45; }
@media (max-width: 420px) { .pagination-row { gap: 10px; } button { padding: 8px 12px; } }
</style>
