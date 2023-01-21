<template>
  <div
    class="modal fade"
    id="kt_modal_add_participacion"
    ref="addEntityModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_participacion_header">
          <!--begin::Modal title-->
          <h2 v-if="formData.id" class="fw-bold">Editar Participación</h2>
          <h2 v-else class="fw-bold">Adicionar Participación</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_participacion_close"
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
              id="kt_modal_add_participacion_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_participacion_header"
              data-kt-scroll-wrappers="#kt_modal_add_participacion_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="row">
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Actividad</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.actividadID"
                    placeholder="Seleccione..."
                  >
                    <el-option
                      v-for="(a, index) in actividades"
                      :key="index"
                      :value="a.id"
                      :label="a.nombre"
                    ></el-option>
                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Responsable</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.personaMayorID"
                    placeholder="Seleccione..."
                  >
                    <el-option
                      v-for="(r, index) in resps"
                      :key="index"
                      :value="r.id"
                      :label="r.fullName"
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
                  <label class="required fs-6 fw-semobold mb-2">Fecha</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="fecha">
                    <el-input
                      v-model="formData.fecha"
                      type="date"
                      :max="today"
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Observación</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="observacion">
                    <el-input v-model="formData.observacion" type="text" />
                  </el-form-item>
                  <!--end::Input-->
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
              id="kt_modal_add_participacion_close"
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
import { Iparticipacion } from "@/core/data/participacion";
import http from "@/http-common";
import { Iactividad } from "@/core/data/actividad";
import { IPersonaMayor } from "@/core/data/personamayor";

export default defineComponent({
  name: "add-entity-modal",
  components: {},
  props: {
    participacion: {
      type: Object as PropType<Iparticipacion>,
      required: true,
    },
  },
  setup(props, { emit }) {
    //console.log(props.participacion);
    const formRef = ref<null | HTMLFormElement>(null);
    const addEntityModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);

    const formData = ref(toRef(props, "participacion"));

    const rules = ref({});

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate(async (valid) => {
        //console.log(formData.value);
        if (
          valid &&
          formData.value.actividadID &&
          formData.value.ninoID &&
          formData.value.personaMayorID
        ) {
          loading.value = true;

          const response = await createOrEditEntity();
          loading.value = false;

          Swal.fire({
            text: response.id
              ? "El Formulario se ha enviado satisfactoriamente!"
              : "Ya está participaciondo ese niño en esa actividad",
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
        if (formData.value.id === 0) {
          const { data } = await http.post("participacion", formData.value);
          //console.log(data);
          return data;
        } else {
          await http.put(`participacion/${formData.value.id}`, formData.value);
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

    const actividades = ref<Array<Iactividad>>([]);
    const resps = ref<Array<IPersonaMayor>>([]);
    onMounted(async () => {
      // read ges
      const resp = await http.get<Iactividad[]>("Actividad");
      actividades.value = resp.data;

      const resp1 = await http.get<IPersonaMayor[]>("PersonaMayor");
      resps.value = resp1.data;
    });
    const today = new Date().toISOString().split("T")[0];

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addEntityModalRef,
      actividades,
      today,
      resps,
    };
  },
});
</script>
