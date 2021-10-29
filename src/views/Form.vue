<template>
  <div class="container">
    <!-- Name Label & Input -->
    <div>
      <div
        class="form-group"
        :class="{ 'form-group--error': $v.firstName.$error }"
      >
        <label class="form__label font-bold text-grey">First Name</label>
        <input class="form__input" v-model.trim="$v.firstName.$model" />
      </div>
      <div class="error" v-if="!$v.firstName.required && $v.firstName.dirty">
        Field is required
      </div>
      <div class="error" v-if="!$v.firstName.minLength">
        Name must have at least
        {{ $v.firstName.$params.minLength.min }} letters.
      </div>

      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.lastName.$error }"
        >
          <label class="form__label font-bold text-grey">Last Name</label>
          <input class="form__input" v-model.trim="$v.lastName.$model" />
        </div>
        <div class="error" v-if="!$v.lastName.required && $v.lastName.dirty">
          Field is required
        </div>
        <div class="error" v-if="!$v.lastName.minLength">
          Name must have at least
          {{ $v.lastName.$params.minLength.min }} letters.
        </div>

        <!-- Age Adult Label & Input -->

        <div
          class="form-group"
          :class="{ 'form-group--error': $v.ageAdult.$error }"
        >
          <label class="form__label font-bold text-grey">Age</label>
          <input class="form__input" v-model.trim.lazy="$v.ageAdult.$model" />
        </div>
        <div class="error" v-if="!$v.ageAdult.minValue">
          Must be above {{ $v.ageAdult.$params.minValue.min }}
        </div>
      </div>

      <!-- Age Child Label & Input -->
      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.ageChild.$error }"
        >
          <label class="form__label">Age</label>
          <input class="form__input" v-model.trim.lazy="$v.ageChild.$model" />
        </div>
        <div class="error" v-if="!$v.ageChild.minValue">
          Must be above {{ $v.ageChild.$params.minValue.min }}
        </div>
      </div>

      <!-- Hes Code Label & Input -->
      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.hesCode.$error }"
        >
          <label class="form__label">HES Code</label>
          <input class="form__input" v-model.trim.lazy="$v.hesCode.$model" />
        </div>

        <div>
          <!-- {{ $v.hesCode }} -->
          <li v-for="(item, i) in $v.hesCode" :key="i">
            {{ (item, i) }} : {{ item }}
          </li>
        </div>
      </div>
    </div>
  </div>

  <!-- TODO: -->
  <!-- 
    email, firstName, lastName, Age, Hes Code ( custom validation), Turkish Citizen Number (If Turkish) phone number (custom)

   -->
</template>

<script>
import validationMixin from "@/mixins/validationMixin.js";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      ageAdult: "",
      ageChild: "",
      hesCode: "",
    };
  },
  mixins: [validationMixin],
};
</script>

<style>
.form-group--error .form__input {
  border: 1px solid red;
}

.form__label {
  width: 7rem;
}
</style>
