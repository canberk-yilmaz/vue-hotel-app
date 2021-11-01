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
            <div class="col-md-8">
              <h2 class="card-title mt-3">{{ hotel.name }}</h2>
              <p>{{ hotel.locationCity }}</p>
              <p>{{ hotel.locationCountry }}</p>
              <button>
                <router-link
                  :to="{
                    name: 'HotelDetails',
                    params: { id: hotel.id },
                  }"
                >
                  <div class="btn">View Hotel</div>
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
    };
  },
};
</script>

<style scoped>
.hotels {
  background-color: salmon;
  border-radius: 50px;
  height: 100%;
  padding: 0.5em;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
}

.hotel-container {
  margin: 1rem;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  border-radius: 10px;
  padding: 5px;
}

.banner {
  opacity: 50%;
  background-color: white;
  color: white;
  display: block;
  width: 100%;
}

.banner-container {
  background-color: white;
  display: block;
}
.container {
  margin-top: 5rem;
  height: 50%;
}

.home {
  background-image: linear-gradient(white, grey);
  background-repeat: repeat;
}
</style>
