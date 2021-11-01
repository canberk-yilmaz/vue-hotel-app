<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="form__container">
        <div
          class="form__item"
          v-for="(item, formId) in this.people"
          :key="formId"
        >
          <TheForm />
          <div class="text-center">Person - {{ formId + 1 }}</div>
        </div>
      </div>
    </div>
    <div
      v-if="this.$route.params.peopleCount"
      class="payment-btn btn btn-primary text-center mt-1 mb-5 container"
    >
      <router-link
        class="payment-btn"
        :to="{
          name: 'Payment',
          params: { peopleCount: this.people },
        }"
        >Continue To Payment</router-link
      >
    </div>

    <h1 v-if="!this.$route.params.peopleCount">
      Please choose your hotel and people to see reservation form.
    </h1>
  </div>
</template>

<script>
import TheForm from "@/components/TheForm.vue";

export default {
  name: "App",
  components: {
    TheForm,
  },
  data() {
    return {
      people: this.$route.params.peopleCount,
    };
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
.payment-btn {
  display: flex;
  justify-content: center;
  color: white;
  width: 25%;
}
</style>
