<script>
import Jumbotron from "./Jumbotron.vue";
import Projects from "./Projects.vue";
import Colleagues from "./Colleagues.vue";
import Album from "./Album.vue";

export default {
  components: {
    Jumbotron,
    Projects,
    Colleagues,
    Album,
  },
};
</script>

<template>
  <Jumbotron />
  <Projects :slide="true" />
  <Colleagues :slide="true" />
  <Album />
</template>
