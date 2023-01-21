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
              <img src="media/avatars/300-1.jpg" alt="image" />
            </div>
            <!--end::Avatar-->

            <!--begin::Name-->
            <p class="fs-3 text-gray-800 text-hover-primary fw-bold mb-1">
              {{ nino.fullName }}
            </p>
            <!--end::Name-->

            <!--begin::Position-->
            <div class="fs-5 fw-semobold text-muted mb-6">
              {{ nino.gradoEscolar }} Grado
            </div>
            <!--end::Position-->

            <!--begin::Info-->
            <div class="d-flex flex-wrap flex-center">
              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-75px">{{ nino.matriculas.length }}</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Matrículas</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mx-4 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-50px">{{ nino.participaciones.length }}</span>
                  <span class="svg-icon svg-icon-3 svg-icon-danger">
                    <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Actividades</div>
              </div>
              <!--end::Stats-->

              <!--begin::Stats-->
              <div
                class="border border-gray-300 border-dashed rounded py-3 px-3 mb-3"
              >
                <div class="fs-4 fw-bold text-gray-700">
                  <span class="w-50px">{{ nino.edad }}</span>
                  <span class="svg-icon svg-icon-3 svg-icon-success">
                    <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                  </span>
                </div>
                <div class="fw-semobold text-muted">Edad</div>
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
              <div class="badge badge-light-info d-inline">
                Permiso irse: {{ nino.tienePermisoIrse ? "Sí" : "No" }}
              </div>
              <!--begin::Badge-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">CI</div>
              <div class="text-gray-600">{{ nino.ci }}</div>
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
              <div class="fw-bold mt-5">Dirección</div>
              <div class="text-gray-600">
                {{ nino.direccion }}
              </div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Telefono</div>
              <div class="text-gray-600">{{ nino.telefono }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Celular</div>
              <div class="text-gray-600">{{ nino.celular }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Sexo</div>
              <div class="text-gray-600">{{ nino.sexoText }}</div>
              <!--begin::Details item-->
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Nacimiento</div>
              <div class="text-gray-600">{{ nino.fechaNac }}</div>
              <div class="fw-bold mt-5">Madre</div>
              <div class="text-gray-600">{{ nino.nombreMadre }}</div>
              <div class="fw-bold mt-5">Centro Trabajo</div>
              <div class="text-gray-600">{{ nino.centroMadre }}</div>
              <div class="fw-bold mt-5">Padre</div>
              <div class="text-gray-600">{{ nino.nombrePadre }}</div>
              <div class="fw-bold mt-5">Centro Trabajo</div>
              <div class="text-gray-600">{{ nino.centroPadre }}</div>
              <!--begin::Details item-->
              <div class="fw-bold mt-5">Horas</div>
              <div class="text-gray-600">{{ nino.hora }}</div>
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
          <PaymentRecords card-classes="mb-6 mb-xl-9"></PaymentRecords>

          <!-- <PaymentMethods card-classes="mb-6 mb-xl-9"></PaymentMethods>

          <CreditBalance card-classes="mb-6 mb-xl-9"></CreditBalance> -->

          <!-- <Invoices card-classes="mb-6 mb-xl-9"></Invoices> -->
          <ActividadRecords card-classes="mb-6 mb-xl-9"></ActividadRecords>
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
import PaymentRecords from "@/components/customers/cards/overview/PaymentRecords.vue";
//import PaymentMethods from "@/components/customers/cards/overview/PaymentMethods.vue";
//import CreditBalance from "@/components/customers/cards/overview/CreditBalance.vue";
//import Invoices from "@/components/customers/cards/overview/Invoices.vue";
import ActividadRecords from "@/components/customers/cards/overview/ParticipacionRecords.vue";
import { useRoute } from "vue-router";
import { Inino } from "@/core/data/nino";
import http from "@/http-common";

export default defineComponent({
  name: "ninos-details",
  components: {
    PaymentRecords,
    /* PaymentMethods,
    CreditBalance, */
    //Invoices,
    //Dropdown3,
    ActividadRecords,
    NewCardModal,
  },
  setup() {
    const route = useRoute();

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

    const tableData = ref<Array<Inino>>([]);
    const initnino = ref<Array<Inino>>([]);

    //selected activdad
    const currnino = ref<Inino>({
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
    const nino = ref<Inino>({
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
      edad: 0,
      matriculas: [],
      participaciones: [],
      madreID: null,
      padreID: null,
      nombreMadre: null,
      nombrePadre: null,
      centroMadre: null,
      centroPadre: null,
    });
    onMounted(async () => {
      await showNino();
    });

    /* const deleteFewCustomers = () => {
      selectedIds.value.forEach((item) => {
        showDelete(item);
      });
      selectedIds.value.length = 0;
    };

    const showDelete = (id: number) => {
      Swal.fire({
        text: `Desea eliminar el registro con id: ${id}?`,
        icon: "warning",
        buttonsStyling: false,
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-light-danger",
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          await http.delete(`ninos/${id}`);
          await showAll();
        }
      });
      // for (let i = 0; i < tableData.value.length; i++) {
      //   if (tableData.value[i].id === id) {
      //     tableData.value.splice(i, 1);
      //   }
      // }
    };
 */
    /* const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initnino.value);
      if (search.value !== "") {
        let results: Array<Inino> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };

    const searchingFunc = (obj, value): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    const sort = (sort: Sort) => {
      const reverse: boolean = sort.order === "asc";
      if (sort.label) {
        arraySort(tableData.value, sort.label, { reverse });
      }
    };
    const onItemSelect = (selectedItems: Array<number>) => {
      selectedIds.value = selectedItems;
    };

    const showAll = async () => {
      const resp = await http.get<Inino[]>("ninos");
      //console.log(resp.data);
      tableData.value = resp.data;
      initnino.value.splice(0, tableData.value.length, ...tableData.value);
    };
    const setnino = (nino: Inino) => {
      currnino.value = nino;
      //console.log(currnino.value);
    }; */
    const showNino = async () => {
      const id = Number(route.params.id);
      //console.log(id);
      const resp = await http.get<Inino[]>("ninos");
      console.log(resp);
      resp.data.forEach((n) => {
        if (n.id === id) {
          nino.value = n;
        }
      });
      console.log(nino.value);
    };
    return {
      /* tableData,
      tableHeader,
      showDelete,
      search,
      searchItems,
      selectedIds,
      deleteFewCustomers,
      sort,
      onItemSelect,
      showAll,
      currnino,
      setnino, */
      nino,
    };
  },
});
</script>
