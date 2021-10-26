<template>
  <div class="go-back">
    <button @click="goBack">Go Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style>
.go-back {
  display: flex;
  position: fixed;
}
button {
  border: 0;
  cursor: pointer;
}
</style>
