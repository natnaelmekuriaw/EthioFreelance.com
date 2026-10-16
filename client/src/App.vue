<template>
  <div>
    <router-view />
    <NotificationCenter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NotificationCenter from './components/ui/NotificationCenter.vue'
export default defineComponent({
  name: "App",
  components: { NotificationCenter },
});
</script>

<style>
#app {
  font-family: var(--font-body);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(--ink);
}
a:hover {
  text-decoration: none;
}
</style>
