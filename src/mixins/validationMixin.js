import {
  required,
  minLength,
  minValue,
  maxLength,
  helpers,
  email,
  numeric,
} from "vuelidate/lib/validators";

// export function hesLetterValidation(value) {
//   return /^[a-zA-Z].[a-zA-Z].-....-../.test(value);
// }
// Check Turkish Citizen Number
// TC Checking Rules
// Should be 11 number.
// First number shouldn't be 0.
// Sum of 1st,3rd,5th,7th and 9th multiply by 7 and sum of 2nd,4th,6th and 8th subtract from the first calculation. This calculation divide by 10 and final result gives us the 10th number.
//Sum of first 10 digits divided by 10 gives us the 11th digit.

export const filters = {
  filters: {
    capitalize: (value) => {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};

const checkTcNumber = (value) => {
  value = value.toString();
  let isEleven = /^[0-9]{11}$/.test(value);
  let totalX = 0;
  for (let i = 0; i < 10; i++) {
    totalX += Number(value.substr(i, 1));
  }
  let isRuleX = totalX % 10 == value.substr(10, 1);
  let totalY1 = 0;
  let totalY2 = 0;
  for (let i = 0; i < 10; i += 2) {
    totalY1 += Number(value.substr(i, 1));
  }
  for (let i = 1; i < 10; i += 2) {
    totalY2 += Number(value.substr(i, 1));
  }
  let isRuleY = (totalY1 * 7 - totalY2) % 10 == value.substr(9, 0);
  return isEleven && isRuleX && isRuleY;
};

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
    name: {
      required,
      minLength: minLength(4),
    },
    lastName: {
      required,
      minLength: minLength(4),
    },
    age: {
      minValue: minValue(6),
    },
    hesCode: {
      required,
      hesCodeValidation,
      minLength: minLength(12),
      maxLength: maxLength(12),
    },
    tcNumber: {
      required,
      checkTcNumber,
      numeric,
    },
    phoneNumber: {
      required,
    },
    email: {
      email,
    },
  },
  created() {},
};

export default validationMixin;