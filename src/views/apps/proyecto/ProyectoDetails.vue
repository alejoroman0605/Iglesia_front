<template>
  <!--begin::Layout-->
  <div class="d-flex flex-column flex-xl-row">
    <!--begin::Sidebar-->
    <div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
      <!--begin::Card-->
      <div class="card mb-5 mb-xl-8">
        <!--begin::Card body-->
        <div class="card-body pt-15">
          <!--begin::Summary-->
          <div class="d-flex flex-center flex-column mb-5">
            <!--begin::Avatar-->
            <div class="symbol symbol-100px symbol-circle mb-7">
              <img src="media/avatars/300-5.jpg" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <p class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1">
              Admin: {{ proyecto.administrador }}
            </p>
            <!--end::Name-->

            <!--begin::Position-->
            <!-- <div class="fs-5 fw-semobold text-muted mb-6">
              {{ proyecto.gradoEscolar }} Grado
            </div> -->
            <!--end::Position-->

            <!--begin::Info-->
            <div class="d-flex flex-wrap flex-center">
              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-75px">{{ proyecto.capacidad }}</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Capacidad</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-50px">{{
                    proyecto.capacidad - ocupadas
                  }}</span>
                  <span class="svg-icon svg-icon-3 svg-icon-danger">
                    <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Abiertas</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-50px">{{ ocupadas }}</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Ocupadas</div>
              </div>
              <!--end::Stats-->
            </div>
            <!--end::Info-->
          </div>
          <!--end::Summary-->

          <!--begin::Details toggle-->
          <div class="d-flex flex-stack fs-4 py-3">
            <div
              class="fw-bold rotate collapsible"
              data-bs-toggle="collapse"
              href="#kt_customer_view_details"
              role="button"
              aria-expanded="false"
              aria-controls="kt_customer_view_details"
            >
              Detalles
              <span class="ms-2 rotate-180">
                <span class="svg-icon svg-icon-3">
                  <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                </span>
              </span>
            </div>

            <!-- <span
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              title="Edit customer details"
            >
              <a
                href="#"
                class="btn btn-sm btn-light-primary"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_update_customer"
              >
                Edit
              </a>
            </span> -->
          </div>
          <!--end::Details toggle-->

          <div class="separator separator-dashed my-3"></div>

          <!--begin::Details content-->
          <div id="kt_customer_view_details" class="collapse show">
            <div class="py-5 fs-6">
              <!--begin::Badge-->
              <div class="badge badge-light-warning d-inline">
                Lista espera: {{ proyecto.matriculas.length - ocupadas }}
              </div>
              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Nombre</div>
              <div class="text-gray-600">{{ proyecto.nombre }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <!-- <div class="fw-bold mt-5">Billing Email</div>
              <div class="text-gray-600">
                <a href="#" class="text-gray-600 text-hover-primary"
                  >info@keenthemes.com</a
                >
              </div> -->
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Duración</div>
              <div class="text-gray-600">
                {{ proyecto.inicio }} a {{ proyecto.final }}
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Iglesia</div>
              <div class="text-gray-600">{{ proyecto.iglesia }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Coordinador</div>
              <div class="text-gray-600">{{ proyecto.coordinador }}</div>
              <!--begin::Details item-->
              <br />
              <button class="btn btn-primary btn-sm px-4" @click="download()">
                <span class="svg-icon svg-icon-2">
                  <inline-svg
                    src="media/icons/duotune/arrows/pdf-svgrepo-com.svg"
                  /> </span
                >Reporte
              </button>
            </div>
          </div>
          <!--end::Details content-->
        </div>
        <!--end::Card body-->
      </div>
      <!--end::Card-->
    </div>
    <!--end::Sidebar-->

    <!--begin::Content-->
    <div class="flex-lg-row-fluid ms-lg-15">
      <!--begin:::Tabs-->

      <!--end:::Tabs-->

      <!--begin:::Tab content-->
      <div class="tab-content" id="myTabContent">
        <!--begin:::Tab pane-->
        <div
          class="tab-pane fade show active"
          id="kt_customer_view_overview_tab"
          role="tabpanel"
        >
          <Matriculados card-classes="mb-6 mb-xl-9"></Matriculados>
          <ListaEspera card-classes="mb-6 mb-xl-9"></ListaEspera>
        </div>
        <!--end:::Tab pane-->
      </div>
      <!--end:::Tab content-->
    </div>
    <!--end::Content-->
  </div>
  <!--end::Layout-->

  <NewCardModal></NewCardModal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
//import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import NewCardModal from "@/components/modals/forms/NewCardModal.vue";
import Matriculados from "@/components/customers/cards/overview/Matriculados.vue";
import ListaEspera from "@/components/customers/cards/overview/ListaEspera.vue";
import { useRoute } from "vue-router";
import { Iproyecto } from "@/core/data/proyecto";
import http from "@/http-common";
import axios from "axios";

export default defineComponent({
  name: "proyectos-details",
  components: {
    Matriculados,
    ListaEspera,
    NewCardModal,
  },
  setup() {
    const route = useRoute();
    const ocupadas = ref<number>(0);
    /* const tableHeader = ref([
      {
        columnName: "Nombre",
        columnLabel: "fullName",
        sortEnabled: true,
      },
      {
        columnName: "CI",
        columnLabel: "ci",
        sortEnabled: true,
      },
      {
        columnName: "Grado Escolar",
        columnLabel: "gradoEscolar",
        sortEnabled: true,
      },
      {
        columnName: "Sexo",
        columnLabel: "sexoText",
        sortEnabled: true,
      },
      {
        columnName: "Permiso Irse",
        columnLabel: "tienePermisoIrse",
        sortEnabled: true,
      },
      {
        columnName: "Acciones",
        columnLabel: "actions",
        sortEnabled: false,
      },
    ]);
    const selectedIds = ref<Array<number>>([]);

    const tableData = ref<Array<Iproyecto>>([]);
    const initproyecto = ref<Array<Iproyecto>>([]);

    //selected activdad
    const currproyecto = ref<Iproyecto>({
      id: 0,
      nombre: "",
      ap1: "",
      ap2: "",
      ci: "",
      fechaNac: "",
      direccion: "",
      telefono: "",
      celular: "",
      gradoEscolarID: 0,
      sexo: 0,
      sexoText: "",
      pis: true,
      hora: 0,
      tienePermisoIrse: true,
    });
 */
    const proyecto = ref<Iproyecto>({
      id: 0,
      nombre: "",
      inicio: "",
      final: "",
      iglesiaID: 0,
      iglesia: "",
      coordinadorID: 0,
      coordinador: "",
      administradorID: 0,
      administrador: "",
      capacidad: 0,
      matriculas: [],
    });
    onMounted(async () => {
      await showproyecto();
    });

    const showproyecto = async () => {
      const id = Number(route.params.id);
      //console.log(id);
      const resp = await http.get<Iproyecto[]>("proyectos");
      console.log(resp);
      resp.data.forEach((n) => {
        if (n.id === id) {
          proyecto.value = n;
          ocupadas.value = 0;
          n.matriculas.forEach((m) => {
            ocupadas.value += m["isMatriculado"];
          });
        }
      });
      //console.log(proyecto.value);
    };
    const download = async () => {
      //const resp = await http.get(`Proyectos/GeneratePDF/${proyecto.value.id}`);
      //console.log(resp);
      axios({
        url: `https://localhost:7119/api/Proyectos/GeneratePDF/${proyecto.value.id}`,
        //url: `https://matricula-iglesia.herokuapp.com/api/Proyectos/GeneratePDF/${proyecto.value.id}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");

        fileLink.href = fileURL;
        fileLink.setAttribute("download", "reporte.pdf");
        document.body.appendChild(fileLink);

        fileLink.click();
      });
    };
    return {
      proyecto,
      ocupadas,
      download,
    };
  },
});
</script>
