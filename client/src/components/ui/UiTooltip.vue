<template>
  <span class="tooltip-anchor">
    <slot />
    <span class="tooltip-bubble" role="tooltip">{{ text }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    text: { type: String, required: true }
  }
})
</script>

<style scoped>
.tooltip-anchor { position: relative; display: inline-flex; align-items: center; vertical-align: middle; }
.tooltip-bubble { position: absolute; z-index: 20; left: 50%; bottom: calc(100% + 10px); width: max-content; max-width: min(250px, calc(100vw - 32px)); padding: 9px 11px; border-radius: 8px; background: var(--nav); color: white; box-shadow: var(--shadow); font-size: var(--text-xs); font-weight: var(--weight-medium); line-height: 1.4; text-align: left; white-space: normal; opacity: 0; visibility: hidden; pointer-events: none; transform: translate(-50%, 4px); transition: opacity var(--motion-fast), transform var(--motion-fast), visibility var(--motion-fast); }
.tooltip-anchor:hover .tooltip-bubble, .tooltip-anchor:focus-within .tooltip-bubble { opacity: 1; visibility: visible; transform: translate(-50%, 0); }
</style>
