<template>
  <div>
    <div class="pagination-row">
      <button class="pagination-button">Previous</button>
      <!-- <span v-for="(item, index) in new Array(10)" :key="index">
        <button class="pagination-button">{{ index + 1 }}</button>
      </span> -->
      <button class="pagination-button">Next</button>
    </div>
  </div>
</template>
<script>
export default {
  return: {
    data() {},
  },
};
</script>
<style scoped>
.pagination-button {
  padding: 8px;
  padding-bottom: 2px;
  padding-top: 2px;
  margin: 2px;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
}
.pagination-row {
  padding: 5px 0;
}
</style>
