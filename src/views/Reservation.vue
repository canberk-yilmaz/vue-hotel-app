<template>
  <div>
    <div v-for="item in 1" :key="item">
      <TheForm />
    </div>
  </div>
</template>

<script>
import TheForm from "@/components/TheForm.vue";

export default {
  name: "App",
  components: {
    TheForm,
  },
};
</script>

<style scoped></style>
