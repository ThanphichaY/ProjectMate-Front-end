<script>
export default {
  props: ["colleague"],
};
</script>

<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          {{ colleague.name }}
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
              <img
                :src="colleague.image"
                class="img-fluid rounded-4"
                alt="image"
              />
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="col-form-label">ชื่อ:</label>
                <p>{{ colleague.name }}</p>
              </div>
              <div class="mb-3">
                <label class="col-form-label">ความสามารถ:</label>
                <p>{{ colleague.capability }}</p>
              </div>
              <div class="mb-3">
                <label class="col-form-label">ตำแหน่งที่สนใจ:</label>
                <p>{{ colleague.int_pos }}</p>
              </div>

              <div class="row">
                <div v-if="colleague.resume" class="col">
                  <button type="button" class="btn btn-secondary w-100 m-2">
                    <i class="bi bi-cloud-download me-1"></i>
                    Resume
                  </button>
                </div>
                <div v-if="colleague.portfolio" class="col">
                  <button type="button" class="btn btn-secondary w-100 m-2">
                    <i class="bi bi-cloud-download me-1"></i>
                    Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary w-100 m-2">
          <i class="bi bi-envelope me-1"></i>
          ติดต่อ
        </button>
      </div>
    </div>
  </div>
</template>
