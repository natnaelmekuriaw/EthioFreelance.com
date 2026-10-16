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
      <select
        v-bind="field"
        :id="name"
        :required="required"
        :aria-invalid="meta.touched && errors.length > 0 ? 'true' : undefined"
        :aria-describedby="meta.touched && errors.length ? `${name}-error` : undefined"
        @change="$emit('change')"
        class="form-control"
      >
        <option value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
      </select>
      <p v-if="meta.touched && errors.length" :id="`${name}-error`" class="field-error" role="alert">{{ errors[0] }}</p>
    </div>
  </Field>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Field } from "vee-validate";
import UiTooltip from "../ui/UiTooltip.vue";

type Option = { value: string; label: string };

export default defineComponent({
  name: "FormSelect",
  components: { Field, UiTooltip },
  emits: ["change"],
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    hint: { type: String, default: "" },
    placeholder: { type: String, default: "Select an option" },
    options: { type: Array as PropType<Option[]>, required: true },
    required: { type: Boolean, default: false },
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
.form-control { width: 100%; min-height: 42px; padding: 8px 12px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface); color: var(--ink); font-size: var(--text-sm); cursor: pointer; transition: border-color var(--motion-fast), box-shadow var(--motion-fast); }
.form-control:hover { border-color: #a8d6cb; }
.form-control:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(7, 138, 115, .12); }
.form-control:disabled { background: var(--canvas); color: var(--muted); cursor: not-allowed; }
.form-control[aria-invalid="true"] { border-color: #bd3b43; }
.field-error { margin: 6px 0 0; color: #ad3039; font-size: var(--text-xs); line-height: 1.4; }
</style>
