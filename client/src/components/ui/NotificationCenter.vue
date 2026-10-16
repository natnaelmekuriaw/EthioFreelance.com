<template>
  <teleport to="body">
    <div class="notification-region" aria-label="Notifications">
      <transition-group name="notification" tag="div" class="notification-stack">
        <div
          v-for="item in notifications"
          :key="item.id"
          class="notification-card"
          :class="`notification-${item.tone}`"
          :role="item.tone === 'error' ? 'alert' : 'status'"
        >
          <i :class="item.tone === 'success' ? 'fas fa-check-circle' : item.tone === 'error' ? 'fas fa-exclamation-circle' : 'fas fa-info-circle'" aria-hidden="true"></i>
          <span>{{ item.message }}</span>
          <button type="button" aria-label="Dismiss notification" @click="dismissNotification(item.id)">
            <i class="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>
      </transition-group>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { dismissNotification, notifications } from '../../ui/notifications'
</script>

<style scoped>
.notification-region { position: fixed; z-index: 2000; top: 90px; right: 20px; width: min(390px, calc(100vw - 32px)); pointer-events: none; }
.notification-stack { display: grid; gap: 10px; }
.notification-card { display: flex; align-items: flex-start; gap: 12px; padding: 14px 15px; border: 1px solid var(--line); border-left: 4px solid var(--accent); border-radius: var(--radius-control); background: var(--surface); color: var(--ink); box-shadow: var(--shadow-hover); pointer-events: auto; }
.notification-card > i { margin-top: 3px; color: var(--accent); }
.notification-card span { flex: 1; line-height: 1.4; overflow-wrap: anywhere; }
.notification-card button { display: grid; place-items: center; width: 28px; height: 28px; flex: none; border: 0; border-radius: 7px; background: transparent; color: var(--muted); }
.notification-card button:hover, .notification-card button:focus-visible { background: var(--surface-tint); color: var(--ink); }
.notification-error { border-left-color: #bd3b43; }
.notification-error > i { color: #bd3b43; }
.notification-info { border-left-color: #3181a8; }
.notification-info > i { color: #3181a8; }
.notification-enter-active, .notification-leave-active { transition: opacity .2s ease, transform .2s ease; }
.notification-enter-from, .notification-leave-to { opacity: 0; transform: translateX(16px); }
@media (max-width: 560px) { .notification-region { top: auto; right: 16px; bottom: 16px; } }
</style>
