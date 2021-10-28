<template>
  <div class="home">
    <h1>All Hotels</h1>
    <div class="hotels">
      <div v-for="hotel in hotels" :key="hotel.id">
        <router-link
          :to="{
            name: 'HotelDetails',
            params: { id: hotel.id },
          }"
        >
          <h2>{{ hotel.name }}</h2>
        </router-link>
        <figure>
          <router-link
            :to="{
              name: 'HotelDetails',
              params: { id: hotel.id },
            }"
          >
            <img :src="hotel.image" :alt="hotel.id" />
          </router-link>
        </figure>
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
.home {
  max-width: 1400px;
  margin: 0 auto;
}
img {
  max-width: 200px;
}
.hotels {
  display: flex;
  justify-content: space-between;
}
</style>
