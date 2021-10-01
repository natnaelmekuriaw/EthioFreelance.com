<template>
  <div class="input-wrapper">
    <div class="label">
      <!--<label :for="name">{{ name }}</label></label>
      <div class="error">{{ error }}</div>-->
    </div>

    <!--  <input :id="name" type="text" v-model="value" />-->
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

<script>
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
      /* if (this.rules.required && this.value.length === 0) {  //this.value.length === 0  is thesame with !this.value
        return "Required";
      } */
      /*     if (this.rules.required && !this.value) {
            return "Required";
        }
        if (this.rules.min && this.value.length < this.rules.min) {
            return `Minimum length is ${this.rules.min}`;
        }
 */

      return this.validate(this.value);
    },
  },
  methods: {
    validate(value) {
      if (this.rules.required && !value) {
        return "required";
      }
      if (this.rules.min && value.length < this.rules.min) {
        return `Minimum length is ${this.rules.min}`;
      }
    },
    input($evt) {
      this.$emit("update", {
        value: $evt.target.value,
        name: this.name,
        valid: this.validate($evt.target.value) ? false : true,
      });
    },
  },
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: rgb(255, 0, 0);
  font-size: 16px;
  text-align: right;
}
.error p {
  width: 380px;
}
h1 {
  color: green;
  margin-left: 10px;
}
input {
  background: none;
  color: #000000;
  border: 1px solid #707070;
  border-radius: 100px;
  padding: 10px;
  margin: 5px;
  font-size: 25px;
}
input:focus {
  color: #000000;
}
</style>
