<template>
  <div class="home">
    <!-- <div class="mt-0 banner-container">
      <img class="banner" src="@/assets/hotel-banner.jpg" alt="hotel-banner" />
    </div> -->
    <b-container class="hotels">
      <div class="hotel-container" v-for="hotel in hotels" :key="hotel.id">
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img
                class="img-fluid"
                :src="require(`@/assets/${hotel.images[0]}`)"
                :alt="hotel.name"
              />
            </div>
            <div class="col-md-6">
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
            </div>
            <div class="col-md-2 d-flex align-center justify-content-center">
              <button class="d-flex text-center" align-v="center">
                <router-link
                  class="d-flex"
                  :to="{
                    name: 'HotelDetails',
                    params: { id: hotel.id },
                  }"
                >
                  <div class="btn" align-v="center">View Hotel</div>
                </router-link>
              </button>
            </div>
          </div>
        </div>

        <!-- <div>
          <b-card
            title="Card Title"
            :img-src="require(`@/assets/${hotel.images[0]}`)"
            img-alt="Image"
            img-left
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
          </b-card>
        </div> -->
        <!-- <div class="img-container">
          <router-link
            :to="{
              name: 'HotelDetails',
              params: { id: hotel.id },
            }"
          >
            <img
              class="hotel-image"
              :src="require(`@/assets/${hotel.images[0]}`)"
              :alt="hotel.id"
            />
          </router-link>
        </div>
        <router-link
          :to="{
            name: 'HotelDetails',
            params: { id: hotel.id },
          }"
        >
          <h2 class="name">{{ hotel.name }}</h2>
        </router-link>

        <button>
          <router-link
            :to="{
              name: 'HotelDetails',
              params: { id: hotel.id },
            }"
          >
            <div class="btn">View Hotel</div>
          </router-link>
        </button> -->
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
}

button {
  border-radius: 2rem;
  background-color: transparent;
}

.b-rating {
  padding: 0;
}

img {
  border-radius: 1rem;
}
</style>
