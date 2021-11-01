<template>
  <div class="container d-flex flex-column justify-content-center align-center">
    <h1 class="title text-center">Enter Your Info</h1>
    <div class="d-flex align-center justify-content-center">
      <div class="credit-card-form">
        <b-row class="formContainer d-flex flex-column mr-5">
          <!-- Name Label & Input -->
          <div>
            <b-form
              class="form-group"
              :class="{ 'form-group--error': $v.firstName.$error }"
            >
              <label class="form__label font-bold text-grey">Name</label>
              <b-form-input
                placeholder="JOHN DOE"
                class="form__input"
                v-model.trim="$v.firstName.$model"
              />
            </b-form>
            <div
              class="error"
              v-if="!$v.firstName.required && $v.firstName.dirty"
            >
              Field is required
            </div>
            <div class="error" v-if="!$v.firstName.minLength">
              Name must have at least
              {{ $v.name.$params.minLength.min }} letters.
            </div>
          </div>

          <!-- Age Label & Input -->

          <div>
            <div
              class="form-group"
              :class="{ 'form-group--error': $v.age.$error }"
            >
              <label class="form__label font-bold text-grey">Expiration</label>
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
              <label class="form__label">Credit Card Number</label>
              <b-form-input
                placeholder="1234 1234 1234 6258"
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
              <label class="form__label">CVC Number</label>
              <b-form-input
                placeholder="111"
                class="form__input"
                v-model.trim.lazy="$v.hesCode.$model"
              />
            </div>
          </div>
        </b-row>
      </div>
      <div class="credit-card-image">
        <div class="card">
          <div class="card__front card__part">
            <img
              class="card__front-square card__square"
              src="https://image.ibb.co/cZeFjx/little_square.png"
            />
            <img
              class="card__front-logo card__logo"
              src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
            />
            <p class="card_numer">**** **** **** 6258</p>
            <div class="card__space-75">
              <span class="card__label">Card holder</span>
              <p class="card__info">John Doe</p>
            </div>
            <div class="card__space-25">
              <span class="card__label">Expires</span>
              <p class="card__info">10/25</p>
            </div>
          </div>

          <div class="card__back card__part">
            <div class="card__black-line"></div>
            <div class="card__back-content">
              <div class="card__secret">
                <p class="card__secret--last">420</p>
              </div>
              <img
                class="card__back-square card__square"
                src="https://image.ibb.co/cZeFjx/little_square.png"
              />
              <img
                class="card__back-logo card__logo"
                src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Payment />
  </div>
</template>

<script>
import validationMixin from "@/mixins/validationMixin.js";
import Payment from "./Payment.vue";

export default {
  components: {
    Payment,
  },
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

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i");

* {
  box-sizing: border-box;
  font-family: "Space Mono", monospace;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  display: -webkit-flex;
  -webkit-align-items: center;
  -webkit-justify-content: center;
  background-image: linear-gradient(
    to right top,
    #a2beeb,
    #8ecfee,
    #8edde5,
    #a4e7d5,
    #c7eec7
  );
  flex-direction: column;
  -webkit-flex-direction: column;
}
.title {
  margin-bottom: 30px;
  color: #162969;
}

.card {
  width: 320px;
  height: 190px;
  -webkit-perspective: 600px;
  -moz-perspective: 600px;
  perspective: 600px;
}

.card__part {
  box-shadow: 1px 1px #aaa3a3;
  top: 0;
  position: absolute;
  z-index: 1000;
  left: 0;
  display: inline-block;
  width: 320px;
  height: 190px;
  background-image: url(""),
    linear-gradient(
      to right bottom,
      #fd696b,
      #fa616e,
      #f65871,
      #f15075,
      #ec4879
    ); /*linear-gradient(to right bottom, #fd8369, #fc7870, #f96e78, #f56581, #ee5d8a)*/
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 8px;

  -webkit-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -moz-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -ms-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -o-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  -webkit-transform-style: preserve-3d;
  -moz-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
}

.card__front {
  padding: 18px;
  -webkit-transform: rotateY(0);
  -moz-transform: rotateY(0);
}

.card__back {
  padding: 18px 0;
  -webkit-transform: rotateY(-180deg);
  -moz-transform: rotateY(-180deg);
}

.card__black-line {
  margin-top: 5px;
  height: 38px;
  background-color: #303030;
}

.card__logo {
  height: 16px;
}

.card__front-logo {
  position: absolute;
  top: 18px;
  right: 18px;
}
.card__square {
  border-radius: 5px;
  height: 30px;
}

.card_numer {
  display: block;
  width: 100%;
  word-spacing: 4px;
  font-size: 20px;
  letter-spacing: 2px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
}

.card__space-75 {
  width: 75%;
  float: left;
}

.card__space-25 {
  width: 25%;
  float: left;
}

.card__label {
  font-size: 10px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
}

.card__info {
  margin-bottom: 0;
  margin-top: 5px;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.card__back-content {
  padding: 15px 15px 0;
}
.card__secret--last {
  color: #303030;
  text-align: right;
  margin: 0;
  font-size: 14px;
}

.card__secret {
  padding: 5px 12px;
  background-color: #fff;
  position: relative;
}

.card__secret:before {
  content: "";
  position: absolute;
  top: -3px;
  left: -3px;
  height: calc(100% + 6px);
  width: calc(100% - 42px);
  border-radius: 4px;
  background: repeating-linear-gradient(
    45deg,
    #ededed,
    #ededed 5px,
    #f9f9f9 5px,
    #f9f9f9 10px
  );
}

.card__back-logo {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

.card__back-square {
  position: absolute;
  bottom: 15px;
  left: 15px;
}

.card:hover .card__front {
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
}

.card:hover .card__back {
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
}
</style>
