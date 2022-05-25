<script>
import Colleague from "./contents/Colleague.vue";

export default {
  components: {
    Colleague,
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
    <div
      class="d-flex flex-row flex-nowrap overflow-scroll px-md-5 pb-3"
      v-dragscroll
      style="cursor: grab"
    >
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
