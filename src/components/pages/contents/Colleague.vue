<script>
export default {
  props: ["colleague"],
};
</script>

<template>
  <div class="colleague mx-2 text-center">
    <img
      :src="colleague.image"
      class="colleague-img rounded-circle m-3"
      alt="Cinque Terre"
    />

    <div
      class="colleague-detail d-flex align-items-center flex-column bd-highlight mb-3"
    >
      <h2 class="fw-normal">{{ colleague.name }}</h2>
      <p class="overflow-auto">
        {{ colleague.capability }}
      </p>
      <a class="btn btn-secondary mt-auto" href="#">View details &raquo;</a>
    </div>
  </div>
</template>

<style lang="scss">
.colleague {
  height: 400px;
  min-width: 300px;
}

.colleague-img {
  width: 128px;
  height: 128px;
  object-fit: cover;
}

.colleague-detail {
  height: 240px;
}
</style>
