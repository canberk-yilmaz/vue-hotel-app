<template>
  <div id="app">
    <div id="nav">
      <TheNavigation />
    </div>
    <router-view :key="$route.path" />
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  name: "App",
  components: {
    TheNavigation,
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

#nav {
  margin-bottom: 4rem;
}

#nav a {
  font-weight: bold;
  color: #502c2c;
}

#nav a.router-link-exact-active {
  color: #2c5dff;
}
</style>
