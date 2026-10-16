<template>
  <div class="btn">
    <button :style="{ background, color }" >Log In</button>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    color: {
      type: String,
    },
    background: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
});
</script>

<style scoped>
.disabled-button {
  opacity: 0.5;
}
button:disabled {
  opacity: 0.5;
}
button {
  background: var(--accent);
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 11px;
  padding: 12px 22px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s, box-shadow .2s, filter .2s;
}
button:hover {
  filter: brightness(1.07);
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(8, 127, 114, .18);
}
</style>
