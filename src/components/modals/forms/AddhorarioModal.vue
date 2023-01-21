<template>
  <div
    class="modal fade"
    id="kt_modal_add_horario"
    ref="addEntityModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_horario_header">
          <!--begin::Modal title-->
          <h2 v-if="formData.id" class="fw-bold">Editar Horario</h2>
          <h2 v-else class="fw-bold">Adicionar Horario</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_horario_close"
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
              id="kt_modal_add_horario_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_horario_header"
              data-kt-scroll-wrappers="#kt_modal_add_horario_scroll"
              data-kt-scroll-offset="300px"
            >
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Inicio</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="inicio">
                  <el-input
                    v-model="formData.inicio"
                    type="time"
                    placeholder=""
                  />
                </el-form-item>
                <!--end::Input-->
              </div>
              <!--end::Input group-->
              <!--begin::Input group-->
              <div class="fv-row mb-7">
                <!--begin::Label-->
                <label class="required fs-6 fw-semobold mb-2">Fin</label>
                <!--end::Label-->

                <!--begin::Input-->
                <el-form-item prop="fin">
                  <el-input v-model="formData.fin" type="time" placeholder="" />
                </el-form-item>
                <!--end::Input-->
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
              id="kt_modal_add_horario_close"
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
import { defineComponent, PropType, ref, toRef } from "vue";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from "axios";
import { IHorario } from "@/core/data/horario";
import http from "@/http-common";

export default defineComponent({
  name: "add-entity-modal",
  components: {},
  props: {
    horario: {
      type: Object as PropType<IHorario>,
      required: true,
    },
  },
  setup(props, { emit }) {
    //console.log(props.horario);
    const formRef = ref<null | HTMLFormElement>(null);
    const addEntityModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);

    const formData = ref(toRef(props, "horario"));
    const rules = ref({
      inicio: [
        {
          required: true,
          message: "Horario de inicio es requerido",
          trigger: "change",
        },
      ],
      fin: [
        {
          required: true,
          message: "Horario de fin es requerido",
          trigger: "change",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate(async (valid) => {
        if (valid) {
          loading.value = true;

          const response = await createOrEditEntity();
          loading.value = false;

          Swal.fire({
            text: response.id
              ? "El Formulario se ha enviado satisfactoriamente!"
              : "Ya existe un registro con ese nombre",
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
          const { data } = await http.post("horarios", formData.value);
          //console.log(data);
          return data;
        } else {
          await http.put(`horarios/${formData.value.id}`, formData.value);
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

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addEntityModalRef,
    };
  },
});
</script>
