<template>
  <div class="container">
    <!-- <div class="container">
      <b-card bg-variant="light">
        <b-form-group
          label-cols-lg="3"
          label="Shipping Address"
          label-size="lg"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group
            label="Street:"
            label-for="nested-street"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nested-street"></b-form-input>
          </b-form-group>

          <b-form-group
            label="City:"
            label-for="nested-city"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nested-city"></b-form-input>
          </b-form-group>

          <b-form-group
            label="State:"
            label-for="nested-state"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nested-state"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Country:"
            label-for="nested-country"
            label-cols-sm="3"
            label-align-sm="right"
          >
            <b-form-input id="nested-country"></b-form-input>
          </b-form-group>

          <b-form-group
            label="Ship via:"
            label-cols-sm="3"
            label-align-sm="right"
            class="mb-0"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-radio-group
              class="pt-2"
              :options="['Air', 'Courier', 'Mail']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-card>
    </div> -->

    <div>
      <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
        <label class="form__label">Name</label>
        <input class="form__input" v-model.trim="$v.name.$model" />
      </div>
      <div class="error" v-if="!$v.name.required">Field is required</div>
      <div class="error" v-if="!$v.name.minLength">
        Name must have at least {{ $v.name.$params.minLength.min }} letters.
      </div>
      <div class="error" v-if="!$v.name.maxLength">
        Name must have maximum of {{ $v.name.$params.maxLength.max }} letters.
      </div>
      <div>
        {{ $v.name.$model }}
      </div>

      <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
        <label class="form__label">Age</label>
        <input class="form__input" v-model.trim.lazy="$v.age.$model" />
      </div>
      <div class="error" v-if="!$v.age.between">
        Must be between {{ $v.age.$params.between.min }} and
        {{ $v.age.$params.between.max }}
      </div>
      <span tabindex="0">Blur to see changes</span>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  between,
  maxLength,
} from "vuelidate/lib/validators";

import { global } from "@/mixins/global.js";

export default {
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  mixins: [global],
  validations: {
    name: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(12),
    },
    age: {
      between: between(20, 30),
    },
  },
};
</script>

<style scoped>
/* label {
  text-align: right;
  clear: both;
  float: left;
  margin-right: 15px;
} */
</style>
