<template>
  <div class="btn">
    <button :style="{ background, color }" >Log In</button>
  </div>


</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
    background: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.disabled-button {
  opacity: 0.5;
}
button:disabled {
  opacity: 0.5;
}
button {
  background: #000000;
  color:#ffffff;
  border: 1px solid #000000;
  border-radius: 100px;
  padding: 10px 10px;
  font-size: 20px;
  cursor: pointer;
}
button:hover {
  color: #ffffff;
  background-image: linear-gradient(to right, #382E2E, #821717);
  border-radius: 100px;
  border:1px solid #382E2E;
}
</style>
