<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Buscar"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="selectedIds.length === 0"
          class="d-flex justify-content-end"
          data-kt-horario-table-toolbar="base"
        >
          <!--begin::Export-->
          <!-- <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_customers_export_modal"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Export
          </button> -->
          <!--end::Export-->
          <!--begin::Add horario-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_horario"
            @click="setHorario({ id: 0, inicio: '', fin: '' })"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
            Horarios
          </button>
          <!--end::Add horario-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-horario-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span class="me-2">{{ selectedIds.length }}</span
            >Seleccionandos
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Eliminar Seleccionandos
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-horario-table-toolbar="selected"
        >
          <div class="fw-bold me-5">
            <span
              class="me-2"
              data-kt-horario-table-select="selected_count"
            ></span
            >Seleccionandos
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-horario-table-select="delete_selected"
          >
            Eliminar Seleccionandos
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <Datatable
        @on-sort="sort"
        @on-items-select="onItemSelect"
        :data="tableData"
        :header="tableHeader"
        :enable-items-per-page-dropdown="true"
        :checkbox-enabled="true"
        checkbox-label="id"
      >
        <template v-slot:inicio="{ row: horario }">
          {{ horario.inicio }}
        </template>

        <template v-slot:fin="{ row: horario }">
          {{ horario.fin }}
        </template>

        <template v-slot:actions="{ row: horario }">
          <div class="d-flex justify-content-end flex-shrink-0">
            <button
              class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_add_horario"
              @click="setHorario(horario)"
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
              @click="showDelete(horario.id)"
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
  </div>

  <ExportCustomerModal></ExportCustomerModal>
  <AddhorarioModal
    @updateList="showAll"
    :horario="currHorario"
  ></AddhorarioModal>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { Sort } from "@/components/kt-datatable//table-partials/models";
import ExportCustomerModal from "@/components/modals/forms/ExportCustomerModal.vue";
import AddhorarioModal from "@/components/modals/forms/AddhorarioModal.vue";
import { IHorario } from "@/core/data/horario";
import arraySort from "array-sort";
import Swal from "sweetalert2/dist/sweetalert2.js";
import http from "@/http-common";

export default defineComponent({
  name: "horario-listing",
  components: {
    Datatable,
    ExportCustomerModal,
    AddhorarioModal,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Inicio",
        columnLabel: "inicio",
        sortEnabled: true,
      },
      {
        columnName: "Fin",
        columnLabel: "fin",
        sortEnabled: true,
      },
      {
        columnName: "Acciones",
        columnLabel: "actions",
        sortEnabled: false,
      },
    ]);
    const selectedIds = ref<Array<number>>([]);

    const tableData = ref<Array<IHorario>>([]);
    const inithorario = ref<Array<IHorario>>([]);

    //selected activdad
    const currHorario = ref<IHorario>({
      id: 0,
      inicio: "",
      fin: "",
    });

    onMounted(async () => {
      await showAll();
    });

    const deleteFewCustomers = () => {
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
          await http.delete(`horarios/${id}`);
          await showAll();
        }
      });
      // for (let i = 0; i < tableData.value.length; i++) {
      //   if (tableData.value[i].id === id) {
      //     tableData.value.splice(i, 1);
      //   }
      // }
    };

    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...inithorario.value);
      if (search.value !== "") {
        let results: Array<IHorario> = [];
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
      const resp = await http.get<IHorario[]>("horarios");
      //console.log(resp.data);
      tableData.value = resp.data;
      inithorario.value.splice(0, tableData.value.length, ...tableData.value);
    };
    const setHorario = (horario: IHorario) => {
      currHorario.value = horario;
      //console.log(currHorario.value);
    };

    return {
      tableData,
      tableHeader,
      showDelete,
      search,
      searchItems,
      selectedIds,
      deleteFewCustomers,
      sort,
      onItemSelect,
      showAll,
      currHorario,
      setHorario,
    };
  },
});
</script>
