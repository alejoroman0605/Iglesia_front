<template>
  <div
    class="modal fade"
    id="kt_modal_add_proyecto"
    ref="addEntityModalRef"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-650px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header" id="kt_modal_add_proyecto_header">
          <!--begin::Modal title-->
          <h2 v-if="formData.id" class="fw-bold">Editar Proyecto</h2>
          <h2 v-else class="fw-bold">Adicionar Proyecto</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <div
            id="kt_modal_add_proyecto_close"
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
              id="kt_modal_add_proyecto_scroll"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-max-height="auto"
              data-kt-scroll-dependencies="#kt_modal_add_proyecto_header"
              data-kt-scroll-wrappers="#kt_modal_add_proyecto_scroll"
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
                  <label class="required fs-6 fw-semobold mb-2">Inicio</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="inicio">
                    <el-input
                      v-model="formData.inicio"
                      type="date"
                      :min="today"
                    />
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
                  <label class="required fs-6 fw-semobold mb-2">Final</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="final">
                    <el-input
                      v-model="formData.final"
                      type="date"
                      :min="today"
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2">Iglesia</label>
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.iglesiaID"
                    placeholder="Seleccione..."
                  >
                    <el-option
                      v-for="(ig, index) in iglesias"
                      :key="index"
                      :value="ig.id"
                      :label="ig.nombre"
                    ></el-option>
                  </el-select>
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
                    >Coordinador</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.coordinadorID"
                    placeholder="Seleccione..."
                  >
                    <el-option
                      v-for="(co, index) in coordinadores"
                      :key="index"
                      :value="co.id"
                      :label="co.fullName"
                    ></el-option>
                  </el-select>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->
                <div class="col-md-6 fv-row">
                  <!--begin::Label-->
                  <label class="required fs-6 fw-semobold mb-2"
                    >Administrador</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-select
                    v-model="formData.administradorID"
                    placeholder="Seleccione..."
                  >
                    <el-option
                      v-for="(ad, index) in admins"
                      :key="index"
                      :value="ad.id"
                      :label="ad.fullName"
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
                  <label class="required fs-6 fw-semobold mb-2"
                    >Capacidad</label
                  >
                  <!--end::Label-->

                  <!--begin::Input-->
                  <el-form-item prop="capacidad">
                    <el-input
                      v-model="formData.capacidad"
                      type="number"
                      min="1"
                    />
                  </el-form-item>
                  <!--end::Input-->
                </div>
                <!--end::Col-->

                <!--begin::Col-->

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
              id="kt_modal_add_proyecto_close"
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
import { Iproyecto } from "@/core/data/proyecto";
import http from "@/http-common";
import { Iiglesia } from "@/core/data/iglesia";
import { IPersonaMayor } from "@/core/data/personamayor";

export default defineComponent({
  name: "add-entity-modal",
  components: {},
  props: {
    proyecto: {
      type: Object as PropType<Iproyecto>,
      required: true,
    },
  },
  setup(props, { emit }) {
    //console.log(props.proyecto);
    const formRef = ref<null | HTMLFormElement>(null);
    const addEntityModalRef = ref<null | HTMLElement>(null);
    const loading = ref<boolean>(false);

    const formData = ref(toRef(props, "proyecto"));

    const validateDates = (rule: any, value: any, callback: any) => {
      console.log(value);
      if (value < formData.value.inicio) {
        callback(new Error("la fecha final debe ser mayor que la inicial"));
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
      inicio: [
        {
          required: true,
          message: "Inicio es requerido",
          trigger: "change",
        },
      ],
      final: [
        {
          required: true,
          message: "Final es requerido",
          trigger: "change",
        },
        { validator: validateDates, trigger: "blur" },
      ],
      capacidad: [
        {
          required: true,
          message: "capacidad es requerido",
          trigger: "change",
        },
        {
          min: 1,
          max: 100000,
          message: "Capacidad debe ser positivo",
          trigger: "blur",
        },
      ],
    });

    const submit = () => {
      if (!formRef.value) {
        return;
      }

      formRef.value.validate(async (valid) => {
        console.log(formData.value);
        if (
          valid &&
          formData.value.iglesiaID &&
          formData.value.coordinadorID &&
          formData.value.administradorID
        ) {
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
        if (formData.value.id === 0) {
          const { data } = await http.post("proyectos", formData.value);
          //console.log(data);
          return data;
        } else {
          await http.put(`proyectos/${formData.value.id}`, formData.value);
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

    const iglesias = ref<Array<Iiglesia>>([]);
    const coordinadores = ref<Array<IPersonaMayor>>([]);
    const admins = ref<Array<IPersonaMayor>>([]);
    onMounted(async () => {
      // read ges
      const resp = await http.get<Iiglesia[]>("Iglesia/GetAll");
      iglesias.value = resp.data["dados"];

      const resp1 = await http.get<IPersonaMayor[]>("PersonaMayor");
      coordinadores.value = resp1.data;

      const resp2 = await http.get<IPersonaMayor[]>("PersonaMayor");
      admins.value = resp2.data;
    });
    const today = new Date().toISOString().split("T")[0];

    return {
      formData,
      rules,
      submit,
      formRef,
      loading,
      addEntityModalRef,
      iglesias,
      today,
      coordinadores,
      admins,
    };
  },
});
</script>
