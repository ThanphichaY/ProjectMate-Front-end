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
  props: ["projects", "colleagues", "onAddProject"],
};
</script>

<template>
  <Jumbotron :onAddProject="onAddProject" />
  <Projects :slide="true" :projects="projects" />
  <Colleagues :slide="true" :colleagues="colleagues" />
  <Album />
</template>
