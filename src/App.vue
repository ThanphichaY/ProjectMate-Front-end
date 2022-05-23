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

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&family=Roboto&display=swap");
$font-family-base: "Noto Sans Thai", "Roboto", sans-serif;

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
