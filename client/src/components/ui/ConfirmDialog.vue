<template>
  <dialog
    ref="dialog"
    class="confirm-dialog"
    :aria-label="title"
    @cancel.prevent="close"
    @close="close"
    @click.self="close"
  >
    <div class="dialog-panel">
      <div class="dialog-icon" :class="{ danger: danger }">
        <i :class="danger ? 'fas fa-exclamation-triangle' : 'fas fa-question-circle'" aria-hidden="true"></i>
      </div>
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <div class="dialog-actions">
        <button type="button" class="cancel-button" @click="close">{{ cancelLabel }}</button>
        <button type="button" class="confirm-button" :class="{ danger: danger }" @click="confirm">{{ confirmLabel }}</button>
      </div>
    </div>
  </dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue'

export default defineComponent({
  props: {
    modelValue: { type: Boolean, required: true },
    title: { type: String, required: true },
    message: { type: String, required: true },
    confirmLabel: { type: String, default: 'Confirm' },
    cancelLabel: { type: String, default: 'Cancel' },
    danger: { type: Boolean, default: false }
  },
  emits: ['update:modelValue', 'confirm'],
  setup(props, { emit }) {
    const dialog = ref<HTMLDialogElement | null>(null)

    watch(() => props.modelValue, value => {
      if (value && !dialog.value?.open) dialog.value?.showModal()
      if (!value && dialog.value?.open) dialog.value.close()
    })

    onMounted(() => {
      if (props.modelValue) dialog.value?.showModal()
    })

    onUnmounted(() => {
      if (dialog.value?.open) dialog.value.close()
    })

    function close() {
      emit('update:modelValue', false)
    }

    function confirm() {
      emit('confirm')
      close()
    }

    return { dialog, close, confirm }
  }
})
</script>

<style scoped>
.confirm-dialog { width: min(440px, calc(100vw - 32px)); max-width: none; max-height: min(90vh, 650px); margin: auto; padding: 0; border: 1px solid var(--line); border-radius: var(--radius-card); background: var(--surface); color: var(--ink); box-shadow: 0 32px 80px rgba(5, 28, 33, .25); }
.confirm-dialog::backdrop { background: rgba(8, 27, 31, .58); backdrop-filter: blur(4px); }
.dialog-panel { padding: 30px; }
.dialog-icon { display: grid; place-items: center; width: 48px; height: 48px; margin-bottom: 20px; border-radius: 13px; background: var(--accent-soft); color: var(--accent); font-size: 1.25rem; }
.dialog-icon.danger { background: #fff0ef; color: #b43b43; }
h2 { margin: 0 0 9px; font-size: var(--text-xl); font-weight: var(--weight-strong); letter-spacing: var(--tracking-heading); }
p { margin: 0; color: var(--muted); line-height: var(--leading-body); }
.dialog-actions { display: flex; justify-content: flex-end; gap: 10px; margin-top: 28px; }
.dialog-actions button { min-height: 44px; padding: 10px 16px; border-radius: var(--radius-control); font-weight: var(--weight-strong); transition: background var(--motion-fast), transform var(--motion-fast); }
.cancel-button { border: 1px solid var(--line); background: var(--surface); color: var(--ink); }
.cancel-button:hover { background: var(--canvas); }
.confirm-button { border: 1px solid var(--accent); background: var(--accent); color: white; }
.confirm-button:hover { background: var(--accent-dark); transform: translateY(-1px); }
.confirm-button.danger { border-color: #b43b43; background: #b43b43; }
.confirm-button.danger:hover { background: #963139; }
@media (max-width: 440px) { .dialog-panel { padding: 24px 20px; } .dialog-actions { flex-direction: column-reverse; } .dialog-actions button { width: 100%; } }
</style>
