<template>
  <div class="container">
    <b-row class="formContainer d-flex flex-column">
      <!-- Name Label & Input -->
      <div>
        <b-form
          class="form-group"
          :class="{ 'form-group--error': $v.firstName.$error }"
        >
          <label class="form__label font-bold text-grey">First Name</label>
          <b-form-input
            placeholder="John"
            class="form__input"
            v-model.trim="$v.firstName.$model"
          />
        </b-form>
        <div class="error" v-if="!$v.firstName.required && $v.firstName.dirty">
          Field is required
        </div>
        <div class="error" v-if="!$v.firstName.minLength">
          Name must have at least
          {{ $v.firstName.$params.minLength.min }} letters.
        </div>
      </div>

      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.lastName.$error }"
        >
          <label class="form__label font-bold text-grey">Last Name</label>
          <b-form-input
            placeholder="Doe"
            class="form__input"
            v-model.trim="$v.lastName.$model"
          />
        </div>
        <div class="error" v-if="!$v.lastName.required && $v.lastName.dirty">
          Field is required
        </div>
        <div class="error" v-if="!$v.lastName.minLength">
          Name must have at least
          {{ $v.lastName.$params.minLength.min }} letters.
        </div>
      </div>

      <!-- Age Label & Input -->

      <div>
        <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
          <label class="form__label font-bold text-grey">Age</label>
          <b-form-input
            placeholder=">6"
            class="form__input"
            v-model.trim.lazy="$v.age.$model"
          />
        </div>
        <div class="error" v-if="!$v.age.minValue">
          Must be above {{ $v.age.$params.minValue.min }}
        </div>
      </div>

      <!-- Email Label & Input -->
      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.email.$error }"
        >
          <label class="form__label">Email</label>
          <b-form-input
            placeholder="johndoe@gmail.com"
            class="form__input"
            v-model.trim.lazy="$v.email.$model"
          />
        </div>
      </div>

      <!-- Hes Code Label & Input -->
      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.hesCode.$error }"
        >
          <label class="form__label">HES Code</label>
          <b-form-input
            placeholder="A1C1-1234-12"
            class="form__input"
            v-model.trim.lazy="$v.hesCode.$model"
          />
        </div>
      </div>

      <!-- Turkish Citizen Number Label & Input -->
      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.tcNumber.$error }"
        >
          <label class="form__label">TC Number</label>
          <b-form-input
            class="form__input"
            placeholder="12341234123"
            v-model.trim.lazy="$v.tcNumber.$model"
            type="number"
          />
        </div>
      </div>

      <!-- Phone Number Label & Input -->
      <div>
        <div
          class="form-group"
          :class="{ 'form-group--error': $v.phoneNumber.$error }"
        >
          <label class="form__label">Phone Number</label>
          <b-form-input
            placeholder="5321234545"
            class="form__input"
            v-model.trim.lazy="$v.phoneNumber.$model"
          />
        </div>
      </div>

      <!-- Test Code -->
      <!-- <div>
        <li v-for="(item, i) in $v.tcNumber" :key="i">
          {{ (item, i) }} : {{ item }}
        </li>
      </div> -->
    </b-row>

    <!-- TODO: -->
    <!-- 
    email, firstName, lastName, Age, Hes Code ( custom validation), Turkish Citizen Number (If Turkish) phone number (custom)

   -->
  </div>
</template>

<script>
import validationMixin from "@/mixins/validationMixin.js";

export default {
  data() {
    return {
      firstName: null,
      lastName: null,
      age: null,
      hesCode: "",
      tcNumber: "",
      phoneNumber: null,
      email: null,
    };
  },
  mixins: [validationMixin],
};
</script>

<style>
.form-group--error .form__input {
  border: 2px dotted red;
  border-radius: 5px;
}

.form__label {
  width: 10rem;
  font-weight: bold;
  vertical-align: middle;
}

/* Add a background color and some padding around the form */
.formContainer {
  border-radius: 2rem;
  background-color: #f2f2f2;
  padding: 20px;
}

.container {
  width: 25%;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
