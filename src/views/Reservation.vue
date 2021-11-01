<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="form__container">
        <div class="form__item" v-for="(item, formId) in 6" :key="formId">
          <TheForm />
          <div class="text-center">Person - {{ formId + 1 }}</div>
        </div>
      </div>
    </div>
    <div class="text-center mt-1 mb-5">
      <b-btn>Continue To Payment</b-btn>
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

<style scoped>
.form__container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 60%;
}

.form__item {
  width: 25%;
  margin: 1rem;
}
</style>
