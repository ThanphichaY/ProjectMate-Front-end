<script>
import UploadcareWidget from "../widgets/UploadcareWidget.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  components: {
    UploadcareWidget,
  },

  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      project_form: {
        image: "",
        title: "",
        description: "",
        positions: "",
        company: "",
        contact: "",
        password: "",
      },
      uploadcare_options: {
        "data-system-dialog": "true",
      },
    };
  },
  validations() {
    return {
      project_form: {
        image: {},
        title: { required },
        description: { required },
        positions: { required },
        company: { required },
        contact: { required },
        password: { required },
      },
    };
  },
  computed: {
    uploadButtonText() {
      return this.project_form.image ? "อัพโหลดใหม่" : "อัพโหลดไฟล์";
    },
    uploadButtonClass() {
      return this.project_form.image ? "btn-success" : "btn-secondary";
    },
  },
  methods: {
    uploadedProjectFile(cdnUrl) {
      this.project_form.image = cdnUrl;
    },
    submitProjectForm() {
      console.log("hi");
    },
  },
};
</script>

<template>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <form @submit.prevent="submitProjectForm">
        <div class="modal-header">
          <h5 class="modal-title">สร้างโพสต์ตามหาเพื่อนร่วมโปรเจค</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>

        <div class="modal-body">
          <div class="row mb-3">
            <label for="image" class="col-sm-2 col-form-label">รูป</label>
            <div class="col-sm-10">
              <UploadcareWidget
                :buttonText="uploadButtonText"
                :buttonClass="uploadButtonClass"
                publicKey="c216308c562da69b96a9"
                :options="uploadcare_options"
                @input="uploadedProjectFile"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="title" class="col-sm-2 col-form-label">หัวข้องาน</label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': v$.project_form.title.$error }"
                id="title"
                v-model="project_form.title"
                @blur="v$.project_form.title.$touch"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="description" class="col-sm-2 col-form-label"
              >รายละเอียดงาน</label
            >
            <div class="col-sm-10">
              <textarea
                class="form-control"
                :class="{ 'is-invalid': v$.project_form.description.$error }"
                id="description"
                rows="4"
                v-model="project_form.description"
                @blur="v$.project_form.description.$touch"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="positions" class="col-sm-2 col-form-label"
              >ตำแหน่งที่รับ</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': v$.project_form.positions.$error }"
                id="positions"
                v-model="project_form.positions"
                @blur="v$.project_form.positions.$touch"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="company" class="col-sm-2 col-form-label"
              >ชื่อบริษัท</label
            >
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': v$.project_form.company.$error }"
                id="company"
                v-model="project_form.company"
                @blur="v$.project_form.company.$touch"
              />
            </div>
          </div>

          <hr />

          <div class="row mb-3">
            <label for="contact" class="col-sm-2 col-form-label"
              >วิธีติดต่อ</label
            >
            <div class="col-sm-10">
              <textarea
                class="form-control"
                :class="{ 'is-invalid': v$.project_form.company.$error }"
                id="contact"
                rows="4"
                v-model="project_form.contact"
                @blur="v$.project_form.company.$touch"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="password" class="col-sm-2 col-form-label"
              >ตั้งรหัสโพสต์</label
            >
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                :class="{ 'is-invalid': v$.project_form.password.$error }"
                id="password"
                v-model="project_form.password"
                @blur="v$.project_form.password.$touch"
              />
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-success w-100 m-2"
            :disabled="v$.$invalid"
          >
            <i class="bi bi-file-earmark-plus me-1"></i>
            สร้างโพสต์
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
