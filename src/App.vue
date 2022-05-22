<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style lang="scss">
$primary: #150095;
$secondary: #ffd912;

@import "../node_modules/bootstrap/scss/bootstrap";
</style>
