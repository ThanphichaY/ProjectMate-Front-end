<script>
import Colleague from "./contents/Colleague.vue";
import { faker } from "@faker-js/faker";

export default {
  components: {
    Colleague,
  },
  props: {
    slide: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      colleagues: [],
    };
  },
  mounted() {
    for (let i = 0; i < 9; i++) {
      this.colleagues.push({
        image: faker.image.people(640, 480, true),
        name: faker.name.findName(),
        capability: faker.lorem.paragraph(),
        int_pos: faker.lorem.sentence(),
        resume: faker.image.nature(640, 480, true),
        portfolio: faker.image.nature(640, 480, true),
        tag: faker.lorem.sentence(),
      });
    }
  },
};
</script>

<template>
  <div class="container">
    <div class="pb-3 my-4 border-bottom">
      <a
        href="/"
        class="d-flex align-items-center text-dark text-decoration-none"
      >
        <i class="bi bi-person-circle me-2" style="font-size: 32px"></i>
        <span class="fs-4">เพื่อนร่วมงานสำหรับคุณ</span>
      </a>
    </div>
  </div>

  <div v-if="slide" class="container-fluid px-0 mb-4">
    <div class="d-flex flex-row flex-nowrap overflow-auto px-md-5 pb-3">
      <Colleague v-for="colleague in colleagues" :colleague="colleague" />
    </div>
  </div>
  <div v-else class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
      <div class="col" v-for="colleague in colleagues">
        <Colleague :colleague="colleague" />
      </div>
    </div>
  </div>
</template>
