<script>
export default {
  props: ["project"],
};
</script>

<template>
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
              <img
                :src="project.image"
                class="img-fluid rounded-4"
                alt="image"
              />
            </div>

            <div class="col-lg-6">
              <div class="mb-3">
                <label class="col-form-label">รายละเอียดงาน:</label>
                <p>{{ project.description }}</p>
              </div>
              <div class="mb-3">
                <label class="col-form-label">คุณสมบัติผู้ร่วมงาน:</label>
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
            </div>
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-primary w-100 m-2">ติดต่อ</button>
      </div>
    </div>
  </div>
</template>
