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
@use "sass:map";

$primary: #150095;
$secondary: #ffd912;

@import "bootstrap/scss/bootstrap";
@import "bootstrap-icons/font/bootstrap-icons";

#app {
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
