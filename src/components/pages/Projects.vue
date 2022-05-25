<script>
import Project from "./contents/Project.vue";

export default {
  components: {
    Project,
  },
  props: {
    projects: {
      type: Array,
    },
    colleagues: {
      type: Array,
    },
    slide: {
      type: Boolean,
      default: false,
    },
    onAddProject: {
      type: Function,
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="pb-3 mb-4 border-bottom" :class="{ 'mt-4': !slide }">
      <a
        href="/"
        class="d-flex align-items-center text-dark text-decoration-none"
      >
        <i class="bi bi-journal-bookmark me-2" style="font-size: 32px"></i>
        <span class="fs-4">โปรเจคงานสำหรับคุณ</span>
      </a>
    </div>
  </div>

  <div v-if="slide" class="container-fluid px-0 mb-4">
    <div
      class="d-flex flex-row flex-nowrap overflow-scroll px-md-5 pb-3"
      v-dragscroll
      style="cursor: grab"
    >
      <Project v-for="project in projects" :project="project" />
    </div>
  </div>

  <div v-else class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      <div class="col" v-for="project in projects">
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>
