<template>
  <div>
    <GoBack />
    <section class="hotels">
      <h1 class="title">
        {{ hotel.name }}
      </h1>

      <div class="hotel-details">
        <img :src="hotel.image" :alt="hotel.name" />
        <p>$ {{ hotel.price }}</p>
        <p>Rating: {{ hotel.rating }}</p>
        <p>{{ hotel.summary }}</p>
        <p>
          {{ hotel.location }}
        </p>
      </div>
    </section>
  </div>
</template>
<script>
import data from "@/data.json";
import GoBack from "@/components/GoBack";
export default {
  components: {
    GoBack,
  },
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      hotelId: this.$route.params.id,
    };
  },

  computed: {
    hotel() {
      return data.hotels.find((hotel) => hotel.id === this.hotelId);
    },
  },
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
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
</style>
