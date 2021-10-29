import {
  required,
  minLength,
  minValue,
  maxLength,
  helpers,
} from "vuelidate/lib/validators";

// export function hesLetterValidation(value) {
//   return /^[a-zA-Z].[a-zA-Z].-....-../.test(value);
// }

const hesCodeValidation = helpers.regex(
  "hesCodeValidation",
  /^[a-zA-Z].[a-zA-Z].-....-../
);

const validationMixin = {
  validations: {
    firstName: {
      required,
      minLength: minLength(4),
    },
    lastName: {
      required,
      minLength: minLength(4),
    },
    ageAdult: {
      minValue: minValue(18),
    },
    ageChild: {
      minValue: minValue(6),
    },
    hesCode: {
      required,
      hesCodeValidation,
      minLength: minLength(12),
      maxLength: maxLength(12),
    },
  },
  created() {
    console.log("hello from mixin!");
  },
};

export default validationMixin;
