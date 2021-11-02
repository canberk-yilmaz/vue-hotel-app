<template>
  <b-nav id="nav" class="navbar navbar-expand-lg ftco-navbar-light d-flex">
    <router-link class="logo ml-4" to="/">
      <div class="align-middle">Hotel App</div></router-link
    >
    <div class="container"></div>
    <ul class="nav-links align-items-center mr-4">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <b-nav-item-dropdown class="links" text="Hotels" right>
        <!-- <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item> -->
        <b-dropdown-item
          v-for="hotel in hotels"
          :key="hotel.name"
          class="links d-flex align-items-center"
        >
          <router-link
            :to="{
              name: 'HotelDetails',
              params: { id: hotel.id },
            }"
            >{{ hotel.name }}</router-link
          >
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <li class="links">
        <router-link to="/payment">Payment</router-link>
      </li>
      <li class="links">
        <router-link to="/reservation">Reservation</router-link>
      </li>
    </ul>
  </b-nav>
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
  white-space: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  position: sticky;
  z-index: 999;
  padding: 0;
}

#nav a.router-link-exact-active {
  color: #00a2ff;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
  font-size: 2rem !important;
}
.links:hover {
  text-decoration: underline;
  font-size: 1.5rem;
}
.logo {
  font-size: 2rem;
  color: #00a2ff;
  font-weight: bold;
}
.container {
  width: 100%;
  padding-right: 15 px;
  padding-left: 15 px;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
}
</style>
