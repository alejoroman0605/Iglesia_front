<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Participaciones en Actividades</h2>
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Filter-->
        <button
          v-show="edad >= 4 && edad <= 15"
          type="button"
          class="btn btn-sm btn-flex btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_add_participacion"
          @click="
            setparticipacion({
              id: 0,
              fecha: '',
              observacion: '',
              actividadID: '',
              ninoID: ninoID,
              personaMayorID: '',
            })
          "
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/general/gen035.svg" />
          </span>
          Adicionar
        </button>
        <!--end::Filter-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <!--end::Card header-->

    <!--begin::Card body-->
    <div class="card-body pt-0 pb-5">
      <Datatable
        :header="tableHeader"
        :data="tableData"
        :items-per-page="5"
        :items-per-page-dropdown-enabled="false"
      >
        <template v-slot:fecha="{ row: participacion }">
          {{ participacion.fecha }}
        </template>
        <template v-slot:actividad="{ row: participacion }">
          {{ participacion.actividad }}
        </template>
        <template v-slot:personaMayor="{ row: participacion }">
          {{ participacion.personaMayor }}
        </template>
        <template v-slot:observacion="{ row: participacion }">
          {{ participacion.observacion }}
        </template>
        <template v-slot:actions="{ row: participacion }">
          <div class="d-flex justify-content-end flex-shrink-0">
            <button
              class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_participacion"
              @click="setparticipacion(participacion)"
            >
              <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
              <span class="svg-icon svg-icon-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                    fill="currentColor"
                  />
                  <path
                    d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
            </button>

            <button
              class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
              @click="showDelete(participacion.id)"
            >
              <!--begin::Svg Icon | path: icons/duotune/general/gen027.svg-->
              <span class="svg-icon svg-icon-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.5"
                    d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                    fill="currentColor"
                  />
                  <path
                    opacity="0.5"
                    d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <!--end::Svg Icon-->
            </button>
          </div>
        </template>
      </Datatable>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
  <AddparticipacionModal
    @updateList="showparticipacion"
    :participacion="currparticipacion"
  ></AddparticipacionModal>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { useRoute } from "vue-router";
import http from "@/http-common";
import { Iparticipacion } from "@/core/data/participacion";
import { Inino } from "@/core/data/nino";
import Swal from "sweetalert2/dist/sweetalert2.js";
import AddparticipacionModal from "@/components/modals/forms/AddparticipacionModal.vue";

export default defineComponent({
  name: "participacion-records",
  props: {
    cardClasses: String,
  },
  components: {
    Datatable,
    AddparticipacionModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "fecha",
        columnLabel: "fecha",
        sortEnabled: false,
      },
      {
        columnName: "actividad",
        columnLabel: "actividad",
        sortEnabled: false,
      },
      {
        columnName: "persona Mayor",
        columnLabel: "personaMayor",
        sortEnabled: false,
      },
      {
        columnLabel: "observacion",
        columnName: "observación",
        sortEnabled: false,
      },
      {
        columnName: "Acciones",
        columnLabel: "actions",
        sortEnabled: false,
      },
    ]);

    const route = useRoute();
    const tableData = ref<Array<Iparticipacion>>([]);
    const initparticipacion = ref<Array<Iparticipacion>>([]);
    const ninoID = ref<number>();
    const edad = ref<number>();
    // const deleteRecord = (invoice) => {
    //   // for (let i = 0; i < tableData.value.length; i++) {
    //   //   if (tableData.value[i].invoice === invoice) {
    //   //     tableData.value.splice(i, 1);
    //   //   }
    //   // }
    // };

    const showparticipacion = async () => {
      const id = Number(route.params.id);
      //console.log("fire");
      const resp = await http.get<Inino[]>("ninos");
      //console.log(resp);
      resp.data.forEach((n) => {
        if (n.id === id) {
          //participacion.value = n;
          tableData.value = n.participaciones;
          initparticipacion.value.splice(
            0,
            tableData.value.length,
            ...tableData.value
          );
          ninoID.value = n.id;
          edad.value = n.edad;
          //console.log(ninoID.value);
        }
      });
      //console.log(participacion.value);
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
          await http.delete(`participacion/${id}`);
          await showparticipacion();
        }
      });
    };
    //selected activdad
    const currparticipacion = ref<Iparticipacion>({
      id: 0,
      fecha: "",
      observacion: "",
      actividadID: 0,
      actividad: "",
      personaMayorID: 0,
      personaMayor: "",
      ninoID: 0,
      nino: "",
    });
    const setparticipacion = (m: Iparticipacion) => {
      currparticipacion.value = m;
      //console.log(currparticipacion.value);
    };

    onMounted(async () => {
      await showparticipacion();
    });
    return {
      tableHeader,
      tableData,
      showparticipacion,
      showDelete,
      currparticipacion,
      ninoID,
      setparticipacion,
      edad,
    };
  },
});
</script>
