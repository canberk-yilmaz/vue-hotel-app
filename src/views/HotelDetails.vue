<template>
  <div class="mt-4">
    <div class="main-img"></div>
    <div class="container">
      <h1 class="title">
        {{ hotel.name }}
      </h1>
      <div class="row align-items-start">
        <div class="hotels mb-3 mb-lg-0 col-lg-8">
          <div class="hotel-details">
            <!-- TODO: BOOTSTRAP CAROUSEL MIGHT BE ADD HERE -->
            <div class="img-container">
              <img :src="hotel.image" :alt="hotel.name" />
            </div>
            <div>Rating: {{ hotel.rating }}</div>
            <div class="d-flex align-left mt-5">{{ hotel.summary }}</div>
            <p>
              {{ hotel.location }}
            </p>
          </div>
        </div>
        <div class="sticky p-lg-0 col-lg-4 book-section">
          <h2>Book Now</h2>
          <div>
            <label for="checkInDate">Check In</label>
            <b-form-datepicker
              id="checkIn"
              v-model="checkInDate"
              class="mb-2"
            ></b-form-datepicker>
          </div>

          <div>
            <label for="checkOutDate">Check Out</label>
            <b-form-datepicker
              id="checkOut"
              v-model="checkOutDate"
              class="mb-2"
            ></b-form-datepicker>
          </div>

          <div class="rooms-container text-align mb-3">
            <label class="rooms-label" for="rooms">Rooms:</label>
            <input class="room-input" v-model="rooms" disabled />
            <div>
              <button class="room-btn mr-2" @click="rooms--">-</button>
              <button class="room-btn" @click="rooms++">+</button>
            </div>
          </div>
          <div class="bookNow d-flex align-center justify-content-center">
            <button>
              <router-link to="/reservation">Book Now</router-link>
            </button>
          </div>
          <div class="totalPayment" v-if="totalPayment">
            Total Payment: $ {{ totalPayment }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import data from "@/data.json";
export default {
  components: {},
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      hotelId: this.$route.params.id,
      checkInDate: null,
      checkOutDate: null,
      rooms: 0,
    };
  },
  computed: {
    hotel() {
      return data.hotels.find((hotel) => hotel.id === this.hotelId);
    },
    totalPayment() {
      return (
        this.calculateDays(this.checkInDate, this.checkOutDate) *
        this.rooms *
        1000
      );
    },
  },
  methods: {
    calculateDays(day1, day2) {
      const checkIn = Date.parse(day1);
      const checkOut = Date.parse(day2);
      return (checkOut - checkIn) / 86400000;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
}

.title {
  margin-bottom: 30px;
}

.experiences {
  padding: 40px 0;
}
.hotel {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: center;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}

.rooms-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.room-btn {
  background-color: #2c5dff;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  width: 2rem;
}

.rooms-label {
  margin: 0;
}

.totalPayment {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
}
.bookNow {
  font-size: 2rem;
  color: #2c3e50;
}

.room-input {
  width: 3rem;
  text-align: center;
}
</style>
