<template>
  <div>
    <div class="mt-0 banner-container">
      <img class="banner" src="@/assets/hotel-banner.jpg" alt="" />
    </div>
    <b-container class="hotels">
      <div class="hotel-container" v-for="hotel in hotels" :key="hotel.id">
        <div class="img-container">
          <router-link
            :to="{
              name: 'HotelDetails',
              params: { id: hotel.id },
            }"
          >
            <img class="hotel-image" :src="hotel.image" :alt="hotel.id" />
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
        </button>
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
  background-color: pink;
  border-radius: 50px;
}

.img-container {
  width: 390px;
  height: 293px;
  background-color: transparent;
  position: relative;
  z-index: 1;
}
.hotel-image {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  border-radius: 50px;
  padding: 15px;
}

.name {
  color: white;
}

.banner {
  width: 100vw;
  opacity: 50%;
  background-color: white;
  color: white;
}

.banner-container {
  background-color: white;
}

.container {
  transform: translate(0, -20rem);
}
</style>
