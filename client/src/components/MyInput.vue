<template>
  <div class="input-wrapper">
    <label class="label" :for="name">{{ name }}</label>

    <input
      :id="name"
      :type="type"
      :value="value"
      @input="input"
      :placeholder="name"
      class="form-control"
    />
    <div class="error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { validateField } from "../helpers/validation";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: Object, //min, required
    },
    value: {
      type: String,
    },
    type: {
      type: String,
    },
  },

  computed: {
    error() {
      return validateField(this.value, this.rules, "required");
    },
  },
  methods: {
    input($evt) {
      const value = $evt.target.value;
      this.$emit("update", {
        value,
        name: this.name,
        valid: !validateField(value, this.rules, "required"),
      });
    },
  },
};
</script>

<style scoped>
.input-wrapper { display: flex; flex-direction: column; align-items: stretch; margin-bottom: 13px; text-align: left; }
.label { display: block; margin: 0 0 7px; color: var(--ink); font-size: var(--text-sm); font-weight: 700; }
.form-control { width: 100%; min-height: 48px; margin: 0; padding: 11px 14px; border: 1px solid var(--line); border-radius: 10px; background: var(--surface); color: var(--ink); font-size: var(--text-base); transition: border-color .2s, box-shadow .2s; }
.form-control::placeholder { color: #91a29f; }
.form-control:hover { border-color: #a8d6cb; }
.form-control:focus { border-color: var(--accent); color: #000; box-shadow: 0 0 0 4px rgba(7,138,115,.12); }
.error { min-height: 20px; color: #bd3b43; font-size: var(--text-xs); text-align: right; }
.error p { width: auto; margin: 4px 0 0; }
</style>
