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
        <button
          type="button"
          class="btn btn-primary mt-auto"
          data-bs-toggle="modal"
          :data-bs-target="'#projectModal' + project.id"
        >
          More details
        </button>
      </div>
    </div>
  </div>

  <div class="modal fade" :id="'projectModal' + project.id" tabindex="-1">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ project.title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <img :src="project.image" class="img-fluid" alt="image" />
              </div>

              <div class="col-lg-6">
                <div class="mb-3">
                  <label class="col-form-label">รายละเอียดงาน:</label>
                  <p>{{ project.description }}</p>
                </div>
                <div class="mb-3">
                  <label class="col-form-label">คุณสมบัติผู้ร่วมงาน:</label>
                  <p>{{ project.description }}</p>
                </div>
                <div class="mb-3">
                  <label class="col-form-label">รายละเอียดงาน:</label>
                  <p>{{ project.qualification }}</p>
                </div>
                <div class="mb-3">
                  <label class="col-form-label">ตำแหน่งที่รับ:</label>
                  <p>{{ project.positions }}</p>
                </div>
                <div class="mb-3">
                  <label class="col-form-label">บริษัท:</label>
                  <p>{{ project.company }}</p>
                </div>
                <div class="mb-3">
                  <label class="col-form-label">Hashtags:</label>
                  <p>{{ project.tags }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
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
