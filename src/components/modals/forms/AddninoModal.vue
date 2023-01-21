<template>
  <div
    class="modal fade"
    id="kt_modal_add_nino"
    ref="addEntityModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_nino_header">
          <!--begin::Modal title-->
          <h2 v-if="formData.id" class="fw-bold">Editar Niño</h2>
          <h2 v-else class="fw-bold">Adicionar Niño</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_nino_close"
            data-bs-dismiss="modal"
            class="btn btn-icon btn-sm btn-active-icon-primary"
          >
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </div>
          <!--end::Close-->
        </div>
        <!--end::Modal header-->
        <!--begin::Form-->
        <el-form
          @submit.prevent="submit()"
          :model="formData"
          :rules="rules"
          ref="formRef"
        >
          <!--begin::Modal body-->
          <div class="modal-body py-10 px-lg-17">
            <!--begin::Scroll-->
            <div
              class="scroll-y me-n7 pe-7"
              id="kt_modal_add_nino_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_nino_header"
              data-kt-scroll-wrappers="#kt_modal_add_nino_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2">Nombre</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="nombre">
                    <el-input v-model="formData.nombre" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Apellido 1</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="ap1">
                    <el-input v-model="formData.ap1" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Apellido 2</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="ap2">
                    <el-input v-model="formData.ap2" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <!-- <div class="col-md-6 fv-row">
                  <label class="required fs-6 fw-semobold mb-2"
                    >Fecha Nacimiento</label
                  >
                  <el-form-item prop="fechaNac">
                    <el-input
                      v-model="formData.fechaNac"
                      type="date"
                      :max="today"
                    />
                  </el-form-item>
                </div> -->
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <label class="required fs-6 fw-semobold mb-2">CI</label>
                  <el-form-item prop="ci">
                    <el-input v-model="formData.ci" />
                  </el-form-item>
                </div>
                <!--end::Col -->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-md-12 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Dirección</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="direccion">
                    <el-input v-model="formData.direccion" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Telefono</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="telefono">
                    <el-input v-model="formData.telefono" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Celular</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="celular">
                    <el-input v-model="formData.celular" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->

              <!--begin::Input group-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Grado Escolar</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.gradoEscolarID"
                    placeholder="Seleccione grado..."
                  >
                    <el-option
                      v-for="(ge, index) in ges"
                      :key="index"
                      :value="ge.id"
                      :label="ge.nombre"
                    ></el-option>
                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2">Sexo</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.sexo"
                    placeholder="Seleccione sexo..."
                  >
                    <el-option
                      v-for="(s, index) in sex"
                      :key="index"
                      :value="s.sexo"
                      :label="s.sexoText"
                    ></el-option>
                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              <br />

              <!--begin::Input group-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Madre</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.madreID"
                    placeholder="Seleccione..."
                  >
                    <el-option
                      v-for="(p, index) in personaMayores"
                      :key="index"
                      :value="p.id"
                      :label="p.fullName"
                    ></el-option>
                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="fs-6 fw-semobold mb-2">Padre</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.padreID"
                    placeholder="Seleccione..."
                  >
                    <el-option
                      v-for="(p, index) in personaMayores"
                      :key="index"
                      :value="p.id"
                      :label="p.fullName"
                    ></el-option>
                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
              <br />

              <!--begin::Input group-->
              <div class="row g-9 mb-7">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2">Hora</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="hora">
                    <el-input v-model="formData.hora" type="number" />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Switch-->
                  <label
                    class="form-check form-switch form-check-custom form-check-solid"
                  >
                    <!--begin::Input-->
                    <input
                      class="form-check-input"
                      name="tienePermisoIrse"
                      type="checkbox"
                      v-model="formData.tienePermisoIrse"
                      id="kt_modal_add_customer_billing"
                    />
                    <!--end::Input-->

                    <!--begin::Label-->
                    <span
                      class="form-check-label fw-semobold text-muted"
                      for="kt_modal_add_customer_billing"
                    >
                      Permiso irse solo
                    </span>
                    <!--end::Label-->
                  </label>
                  <!--end::Switch-->
                </div>
                <!--end::Col-->
              </div>
              <!--end::Input group-->
            </div>
            <!--end::Scroll-->
          </div>
          <!--end::Modal body-->

          <!--begin::Modal footer-->
          <div class="modal-footer flex-center">
            <!--begin::Button-->
            <button
              type="button"
              id="kt_modal_add_nino_close"
              data-bs-dismiss="modal"
              class="btn btn-light me-3"
            >
              Cancelar
            </button>
            <!--end::Button-->

            <!--begin::Button-->
            <button
              :data-kt-indicator="loading ? 'on' : null"
              class="btn btn-lg btn-primary"
              type="submit"
            >
              <span v-if="!loading" class="indicator-label">
                Enviar
                <span class="svg-icon svg-icon-3 ms-2 me-0">
                  <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                </span>
              </span>
              <span v-if="loading" class="indicator-progress">
                Espere...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
            <!--end::Button-->
          </div>
          <!--end::Modal footer-->
        </el-form>
        <!--end::Form-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, toRef } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";
import { Inino } from "@/core/data/nino";
import { IGradoEscolar } from "@/core/data/gradoescolar";
import http from "@/http-common";
import { IPersonaMayor } from "@/core/data/personamayor";

export default defineComponent({
  name: "add-entity-modal",
  components: {},
  props: {
    nino: {
      type: Object as PropType<Inino>,
      required: true,
    },
  },
  setup(props, { emit }) {
    //console.log(props.nino);
    const formRef = ref<null | HTMLFormElement>(null);
    const addEntityModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);

    const formData = ref(toRef(props, "nino"));

    const isNino = (rule: any, value: any, callback: any) => {
      //console.log(value);
      const today = new Date();
      const birthday = new Date(getFechaFromCI(value));

      const diff = (today.getTime() - birthday.getTime()) / 1000 / (3600 * 24);
      const diffYears = Math.abs(Math.round(diff / 365.25));
      //console.log("nacio ", getFechaFromCI(value), diffYears);
      if (isNaN(Number(birthday))) {
        callback(new Error("La fecha no es válida"));
      }
      if (diffYears < 4 || diffYears > 15) {
        callback(new Error("Deben estar en un rango de edad de 4-15 años"));
      } else {
        callback();
      }
    };

    const rules = ref({
      nombre: [
        {
          required: true,
          message: "nombre es requerido",
          trigger: "change",
        },
      ],
      ap1: [
        {
          required: true,
          message: "Apellido es requerido",
          trigger: "change",
        },
      ],
      ap2: [
        {
          required: true,
          message: "Apellido es requerido",
          trigger: "change",
        },
      ],
      ci: [
        {
          required: true,
          message: "CI es requerido",
          trigger: "change",
          minlength: 11,
        },
        {
          min: 11,
          max: 11,
          pattern: "[0-9]+",
          message: "CI debe tener 11 dígitos",
          trigger: "blur",
        },
        { validator: isNino, trigger: "blur" },
      ],
      // fechaNac: [
      //   {
      //     required: true,
      //     message: "Fecha es requerido",
      //     trigger: "change",
      //   },
      //   { validator: isNino, trigger: "blur" },
      // ],
      direccion: [
        {
          required: true,
          message: "Dirección es requerido",
          trigger: "change",
        },
      ],
      hora: [
        {
          required: true,
          message: "Hora es requerido",
          trigger: "change",
        },
      ],
    });

    const getFechaFromCI = (ci: string) => {
      //yyyy-mm-dd
      return (
        "20" +
        ci.substring(0, 2) +
        "-" +
        ci.substring(2, 2 + 2) +
        "-" +
        ci.substring(4, 6)
      );
    };

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate(async (valid) => {
        //console.log(formData.value);
        if (
          valid &&
          formData.value.sexo >= 0 &&
          formData.value.gradoEscolarID
        ) {
          formData.value.fechaNac = getFechaFromCI(formData.value.ci);
          loading.value = true;

          const response = await createOrEditEntity();
          loading.value = false;

          Swal.fire({
            text: response.id
              ? "El Formulario se ha enviado satisfactoriamente!"
              : "Ya existe un registro con ese CI",
            icon: response.id ? "success" : "error",
            buttonsStyling: false,
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          }).then(async () => {
            hideModal(addEntityModalRef.value);
            if (response.id) {
              //update list
              emit("updateList");
            }
          });
        } else {
          Swal.fire({
            text: "Lo sentimos, hay errores de validación de formulario.",
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Aceptar",
            customClass: {
              confirmButton: "btn btn-primary",
            },
          });
          return false;
        }
      });
    };

    const createOrEditEntity = async () => {
      try {
        //formData.value.sexo = parseInt(formData.value.sexo);
        if (formData.value.id === 0) {
          const { data } = await http.post("ninos", formData.value);
          //console.log(data);
          return data;
        } else {
          await http.put(`ninos/${formData.value.id}`, formData.value);
          return { id: 1 };
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log("error message: ", error.message);
          // 👇️ error: AxiosError<any, any>
          return error.message;
        } else {
          console.log("unexpected error: ", error);
          return "An unexpected error occurred";
        }
      }
    };

    const ges = ref<Array<IGradoEscolar>>([]);
    const personaMayores = ref<Array<IPersonaMayor>>([]);
    onMounted(async () => {
      // read ges
      const resp = await http.get<IGradoEscolar[]>("GradoEscolar/GetAll");
      //console.log(resp);
      ges.value = resp.data;

      const resp1 = await http.get<IPersonaMayor[]>("PersonaMayor");
      //console.log(resp);
      personaMayores.value = resp1.data;
    });
    const today = new Date().toISOString().split("T")[0];
    const sex = [
      { sexo: 0, sexoText: "Masculino" },
      { sexo: 1, sexoText: "Femenino" },
    ];
    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addEntityModalRef,
      ges,
      today,
      sex,
      personaMayores,
    };
  },
});
</script>
