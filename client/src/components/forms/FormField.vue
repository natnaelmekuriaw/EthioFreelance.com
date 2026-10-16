<template>
  <Field :name="name" v-slot="{ field, errors, meta }">
    <div class="form-field">
      <div class="field-heading">
        <label :for="name">{{ label }}</label>
        <UiTooltip v-if="hint" :text="hint">
          <button type="button" class="help-button" :aria-label="`${label}: ${hint}`">
            <i class="fas fa-question-circle" aria-hidden="true"></i>
          </button>
        </UiTooltip>
      </div>
      <div class="input-wrap">
        <input
          v-bind="field"
          :id="name"
          :type="revealable && isRevealed ? 'text' : type"
          :placeholder="placeholder"
          :autocomplete="autocomplete"
          :required="required"
          :aria-invalid="meta.touched && errors.length > 0 ? 'true' : undefined"
          :aria-describedby="meta.touched && errors.length ? `${name}-error` : undefined"
          class="form-control"
          :class="{ 'has-reveal': revealable }"
        />
        <button v-if="revealable" type="button" class="reveal-button" :aria-label="isRevealed ? `Hide ${label.toLowerCase()}` : `Show ${label.toLowerCase()}`" :aria-pressed="isRevealed" @click="isRevealed = !isRevealed">
          <EyeOff v-if="isRevealed" :size="17" aria-hidden="true" />
          <Eye v-else :size="17" aria-hidden="true" />
        </button>
      </div>
      <p v-if="meta.touched && errors.length" :id="`${name}-error`" class="field-error" role="alert">{{ errors[0] }}</p>
    </div>
  </Field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field } from "vee-validate";
import UiTooltip from "../ui/UiTooltip.vue";
import { Eye, EyeOff } from "@lucide/vue";

export default defineComponent({
  name: "FormField",
  components: { Field, UiTooltip, Eye, EyeOff },
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    hint: { type: String, default: "" },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    autocomplete: { type: String, default: "off" },
    required: { type: Boolean, default: false },
    revealable: { type: Boolean, default: false },
  },
  data() {
    return { isRevealed: false };
  },
});
</script>

<style scoped>
.form-field { margin-bottom: 14px; text-align: left; }
.field-heading { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.form-field label { display: block; margin: 0; color: var(--ink); font-size: var(--text-sm); font-weight: var(--weight-strong); transition: color var(--motion-fast); }
.help-button { display: grid; place-items: center; width: 25px; height: 25px; border: 0; border-radius: 50%; background: transparent; color: var(--muted); }
.help-button:hover, .help-button:focus-visible { background: var(--accent-soft); color: var(--accent-dark); }
.form-field:focus-within label { color: var(--accent-dark); }
.form-control { width: 100%; min-height: 42px; padding: 8px 12px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface); color: var(--ink); font-size: var(--text-sm); transition: border-color var(--motion-fast), box-shadow var(--motion-fast); }
.input-wrap { position: relative; }
.form-control.has-reveal { padding-right: 44px; }
.reveal-button { position: absolute; top: 50%; right: 6px; display: grid; place-items: center; width: 33px; height: 33px; padding: 0; border: 0; border-radius: 7px; background: transparent; color: var(--muted); transform: translateY(-50%); }
.reveal-button:hover, .reveal-button:focus-visible { background: var(--accent-soft); color: var(--accent-dark); }
.form-control::placeholder { color: #91a29f; }
.form-control:hover { border-color: #a8d6cb; }
.form-control:focus { border-color: var(--accent); color: var(--ink); box-shadow: 0 0 0 3px rgba(7, 138, 115, .12); }
.form-control:disabled { background: var(--canvas); color: var(--muted); }
.form-control[aria-invalid="true"] { border-color: #bd3b43; }
.field-error { margin: 6px 0 0; color: #ad3039; font-size: var(--text-xs); line-height: 1.4; }
</style>
