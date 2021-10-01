<template>
  <div>
    <div>
      <b-form-rating v-model="value" readonly></b-form-rating>
      <p class="mt-2">Value: {{ value }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 4.567,
    };
  },
};
</script>
<style scoped>
body {
  font-family: "Raleway", sans-serif;
}

.custom-text {
  font-weight: bold;
  font-size: 1.9em;
  border: 1px solid #cfcfcf;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  color: #999;
  background: #fff;
}
</style>
