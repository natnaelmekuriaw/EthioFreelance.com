<template>
  <Field :name="name" v-slot="{ field, errors, meta }">
    <div class="form-field">
      <label :for="name">{{ label }}</label>
      <textarea
        v-bind="field"
        :id="name"
        :placeholder="placeholder"
        :rows="rows"
        :required="required"
        :aria-invalid="meta.touched && errors.length > 0 ? 'true' : undefined"
        :aria-describedby="meta.touched && errors.length ? `${name}-error` : undefined"
        class="form-control"
      ></textarea>
      <p v-if="meta.touched && errors.length" :id="`${name}-error`" class="field-error" role="alert">{{ errors[0] }}</p>
    </div>
  </Field>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Field } from "vee-validate";

export default defineComponent({
  name: "FormTextarea",
  components: { Field },
  props: {
    name: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, default: "" },
    rows: { type: Number, default: 6 },
    required: { type: Boolean, default: false },
  },
});
</script>

<style scoped>
.form-field { margin-bottom: 14px; text-align: left; }
.form-field label { display: block; margin-bottom: 6px; color: var(--ink); font-size: var(--text-sm); font-weight: var(--weight-strong); transition: color var(--motion-fast); }
.form-field:focus-within label { color: var(--accent-dark); }
.form-control { width: 100%; min-height: 104px; padding: 10px 12px; border: 1px solid var(--line); border-radius: 9px; background: var(--surface); color: var(--ink); font-size: var(--text-sm); resize: vertical; transition: border-color var(--motion-fast), box-shadow var(--motion-fast); }
.form-control::placeholder { color: #91a29f; }
.form-control:hover { border-color: #a8d6cb; }
.form-control:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(7, 138, 115, .12); }
.form-control:disabled { background: var(--canvas); color: var(--muted); }
.form-control[aria-invalid="true"] { border-color: #bd3b43; }
.field-error { margin: 6px 0 0; color: #ad3039; font-size: var(--text-xs); line-height: 1.4; }
</style>
