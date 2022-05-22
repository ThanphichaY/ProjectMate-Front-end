<script>
export default {
  props: ["project"],
};
</script>

<template>
  <div class="card mx-2">
    <img
      :src="project.image"
      class="card-img-top"
      style="object-fit: cover"
      alt="template"
    />
    <div class="card-body">
      <div class="d-flex align-items-start flex-column bd-highlight mb-3 h-100">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text overflow-auto">
          {{ project.description }}
        </p>
        <a href="#" class="btn btn-primary mt-auto">More details</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card {
  height: 400px;
  min-width: 250px;
}

.card-img-top {
  height: 150px;
}

.card-body {
  height: 250px;
}

.card-text {
  font-size: smaller;
}
</style>
