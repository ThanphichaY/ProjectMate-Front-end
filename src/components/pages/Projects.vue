<script>
import Project from "./contents/Project.vue";
import { faker } from "@faker-js/faker";

export default {
  components: {
    Project,
  },
  props: {
    slide: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    for (let i = 0; i < 9; i++) {
      this.projects.push({
        id: i,
        image: faker.image.business(640, 480, true),
        title: faker.name.jobTitle(),
        description: faker.lorem.paragraph(),
        qualification: faker.lorem.lines(),
        positions: faker.lorem.sentence(),
        company: faker.company.companyName(),
        tags: faker.lorem.sentence(),
      });
    }
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
