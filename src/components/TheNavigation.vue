<template>
  <nav id="nav">
    <p class="logo">Canberk's Hotel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="hotel in hotels" :key="hotel.name" class="links">
        <router-link
          :to="{
            name: 'HotelDetails',
            params: { id: hotel.id },
          }"
          >{{ hotel.name }}</router-link
        >
      </li>
      <li class="links">
        <router-link to="/about">About</router-link>
      </li>
      <li class="links">
        <router-link to="/payment">Payment</router-link>
      </li>
      <li class="links">
        <router-link to="/form">Form</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import data from "@/data.json";

export default {
  name: "TheNavigation",
  data() {
    return {
      hotelId: this.$route.params.id,
      hotelName: this.$route.params.name,
      hotels: data.hotels,
    };
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  margin-bottom: 50px;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
  overflow: hidden;
}
#nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: bold;
}
#nav a.vue-school-active-class {
  color: #ab26ab;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>
