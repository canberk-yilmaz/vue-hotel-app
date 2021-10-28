import {
  required,
  minLength,
  minValue,
  helpers,
  maxLength,
} from "vuelidate/lib/validators";

const alpha = helpers.regex(/^[a-zA-Z]*$/);

const hesCodeValid = (value) => value[0] == alpha && value[2] == alpha;

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
      hesCodeValid,
      minLength: minLength(10),
      maxLength: maxLength(10),
    },
  },
  created() {
    console.log("hello from mixin!");
  },
};

export default validationMixin;
