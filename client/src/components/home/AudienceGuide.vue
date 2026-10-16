<template>
  <section class="audience-guide" aria-labelledby="guide-title">
    <div class="guide-inner">
      <div class="guide-heading"><span class="kicker">Make your next move</span><h2 id="guide-title">What brings you here?</h2><p>Choose a path to see where to begin.</p></div>
      <div class="role-tabs" role="tablist" aria-label="Choose your role">
        <button id="freelancer-tab" type="button" role="tab" aria-label="Find work" :aria-selected="activeRole === 'freelancer'" aria-controls="role-panel" :tabindex="activeRole === 'freelancer' ? 0 : -1" :class="{ active: activeRole === 'freelancer' }" @click="activeRole = 'freelancer'" @keydown.right.prevent="selectRole('employer')"><img src="/brand/badge-find-work.svg" alt="" /></button>
        <button id="employer-tab" type="button" role="tab" aria-label="Find talent" :aria-selected="activeRole === 'employer'" aria-controls="role-panel" :tabindex="activeRole === 'employer' ? 0 : -1" :class="{ active: activeRole === 'employer' }" @click="activeRole = 'employer'" @keydown.left.prevent="selectRole('freelancer')"><img src="/brand/badge-find-talent.svg" alt="" /></button>
      </div>
      <div id="role-panel" class="guide-panel" role="tabpanel" :aria-labelledby="`${activeRole}-tab`">
        <Transition name="fade" mode="out-in">
          <div :key="activeRole" class="panel-content">
            <div class="panel-intro"><span class="panel-icon"><Search v-if="activeRole === 'freelancer'" :size="18" aria-hidden="true" /><Lightbulb v-else :size="18" aria-hidden="true" /></span><h3>{{ activeContent.title }}</h3><p>{{ activeContent.description }}</p><router-link :to="activeContent.to">{{ activeContent.action }} <ArrowRight :size="16" aria-hidden="true" /></router-link></div>
            <ol class="steps"><li v-for="(step, index) in activeContent.steps" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span>{{ step }}</li></ol>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { ArrowRight, Lightbulb, Search } from '@lucide/vue'

type Role = 'freelancer' | 'employer'

const paths = {
  freelancer: {
    title: 'Find work that fits you',
    description: 'Explore active projects, see the details, and choose opportunities that match your skills.',
    action: 'Browse jobs', to: '/jobs',
    steps: ['Browse projects by skill or category', 'Create a profile that shows your strengths', 'Apply when you find a good fit']
  },
  employer: {
    title: 'Bring your project to life',
    description: 'Describe the work you need and connect with freelancers who can help you move it forward.',
    action: 'Find talent', to: '/talent',
    steps: ['Explore fields and skills', 'Set out the project and your budget', 'Post a clear job description']
  }
}

export default defineComponent({
  components: { ArrowRight, Lightbulb, Search },
  data() { return { activeRole: 'freelancer' as Role } },
  computed: { activeContent() { return paths[this.activeRole] } },
  methods: {
    async selectRole(role: Role) {
      this.activeRole = role
      await nextTick()
      document.getElementById(`${role}-tab`)?.focus()
    }
  }
})
</script>

<style scoped>
.audience-guide { background: var(--surface-tint); }
.guide-inner { max-width: var(--page-width); margin: auto; padding: 80px var(--page-gutter) 95px; }
.kicker { color: var(--accent); font-size: var(--text-xs); font-weight: var(--weight-strong); letter-spacing: var(--tracking-label); text-transform: uppercase; }
h2, h3 { color: var(--ink); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); }
h2 { margin: 7px 0 5px; font-size: var(--text-section); }
.guide-heading p { margin: 0; color: var(--muted); }
.role-tabs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; width: min(100%, 600px); margin: 24px 0 16px; }
.role-tabs button { display: block; width: 100%; padding: 0; border: 0; border-radius: 16px; background: transparent; transition: transform var(--motion-fast), box-shadow var(--motion-fast); }
.role-tabs button img { display: block; width: 100%; height: auto; border-radius: 16px; }
.role-tabs button:hover { transform: translateY(-2px); }
.role-tabs button.active, .role-tabs button:focus-visible { box-shadow: 0 0 0 2px var(--accent), 0 8px 20px rgba(8, 127, 108, .12); outline: none; }
.guide-panel { min-height: 245px; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); box-shadow: var(--shadow); }
.panel-content { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, .85fr); gap: 35px; padding: 30px; }
.panel-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 11px; background: var(--accent-soft); color: var(--accent); }
h3 { margin: 16px 0 7px; font-size: var(--text-xl); }
.panel-intro p { max-width: 500px; margin: 0; color: var(--muted); font-size: var(--text-sm); }
.panel-intro a { display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; color: var(--accent-dark); font-size: var(--text-sm); font-weight: var(--weight-strong); }
.steps { display: grid; align-content: center; gap: 12px; margin: 0; padding: 0; list-style: none; }
.steps li { display: flex; align-items: center; gap: 12px; padding: 9px 12px; border: 1px solid var(--line); border-radius: 10px; color: var(--ink); font-size: var(--text-sm); }
.steps span { color: var(--accent); font-weight: var(--weight-strong); }
.fade-enter-active, .fade-leave-active { transition: opacity 150ms ease, transform 150ms ease; }
.fade-enter-from { opacity: 0; transform: translateY(7px); }
.fade-leave-to { opacity: 0; transform: translateY(-7px); }
@media (max-width: 700px) { .panel-content { grid-template-columns: 1fr; gap: 25px; } .guide-inner { padding-top: 65px; padding-bottom: 75px; } }
@media (max-width: 430px) { .role-tabs { gap: 8px; } .panel-content { padding: 21px; } }
</style>
