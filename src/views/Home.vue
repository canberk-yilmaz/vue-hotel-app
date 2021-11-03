<template>
  <div class="home">
    <b-container class="hotels">
      <!-- Hotel Info Section -->
      <div class="hotel-container" v-for="hotel in hotels" :key="hotel.id">
        <b-row class="card">
          <div class="row">
            <b-col class="col-md-4">
              <!-- First images of hotels show as a cover -->
              <img
                class="img-fluid p-2"
                :src="require(`@/assets/${hotel.images[0]}`)"
                :alt="hotel.name"
              />
            </b-col>
            <b-col class="col-md-6">
              <!-- Hotel Text Section -->
              <h2 class="card-title mt-3">{{ hotel.name }}</h2>
              <p>{{ hotel.locationCity }}</p>
              <p>{{ hotel.locationCountry }}</p>
              <div>
                <b-form-rating
                  class="d-inline-flex"
                  v-model="value"
                  no-border
                  readonly
                ></b-form-rating>
              </div>
            </b-col>
            <b-col class="col-md-2 d-flex align-center justify-content-center">
              <!-- Hotel view button -->
              <router-link
                class="d-flex mr-2 p-4"
                :to="{
                  name: 'HotelDetails',
                  params: { id: hotel.id },
                }"
              >
                <b-button class="text-center btn btn-primary" align-v="center">
                  View Hotel
                </b-button>
              </router-link>
            </b-col>
          </div>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import data from "@/data.json";
export default {
  name: "Home",
  data() {
    return {
      hotels: data.hotels,
      value: 5,
    };
  },
};
</script>

<style scoped>
.hotels {
  background-color: rgb(191, 199, 243);
  border-radius: 2rem;
  height: 100%;
  padding: 1em;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.hotel-container {
  margin: 0.5rem;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: beige;
  border-radius: 1rem;
  padding: 5px;
  margin-bottom: 4rem;
}

.container {
  margin-top: 1rem;
  margin-bottom: 5rem;
}

.home {
  background-image: linear-gradient(rgb(251, 252, 255), rgb(191, 199, 243));
  background-repeat: repeat;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.5rem;
}

button {
  border-radius: 1.5rem;
  background-color: transparent;
  color: #2c3e50;
}

.b-rating {
  padding: 0;
}

img {
  border-radius: 1rem;
}
.card {
  margin: 8px;
}
</style>
