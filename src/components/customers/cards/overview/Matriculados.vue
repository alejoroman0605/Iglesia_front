<template>
  <!--begin::Card-->
  <div :class="`card pt-4 ${cardClasses}`">
    <!--begin::Card header-->
    <div class="card-header border-0">
      <!--begin::Card title-->
      <div class="card-title">
        <h2>Matriculados</h2>
      </div>
      <!--end::Card title-->

      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Filter-->
        <!-- <button
          type="button"
          class="btn btn-sm btn-flex btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_add_matricula"
          @click="
            setmatricula({
              id: 0,
              proyectoID: '',
              proyectoID: proyectoID,
              responsableID: '',
              horarioID: '',
            })
          "
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/general/gen035.svg" />
          </span>
          Adicionar
        </button> -->
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
        <template v-slot:nino="{ row: matricula }">
          {{ matricula.nino }}
        </template>
        <template v-slot:responsable="{ row: matricula }">
          {{ matricula.responsable }}
        </template>
        <template v-slot:fecha="{ row: matricula }">
          {{ matricula.fecha }}
        </template>
        <template v-slot:horario="{ row: matricula }">
          {{ matricula.horario }}
        </template>
      </Datatable>
    </div>
    <!--end::Card body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import { useRoute } from "vue-router";
import http from "@/http-common";
import { IMatricula } from "@/core/data/matricula";
import { Iproyecto } from "@/core/data/proyecto";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineComponent({
  name: "matricula-records",
  props: {
    cardClasses: String,
  },
  components: {
    Datatable,
  },
  setup() {
    const tableHeader = ref([
      {
        columnName: "Niño",
        columnLabel: "nino",
        sortingField: "status.label",
        sortEnabled: false,
      },
      {
        columnName: "Responsable",
        columnLabel: "responsable",
        sortEnabled: false,
      },
      {
        columnName: "Fecha",
        columnLabel: "fecha",
        sortEnabled: false,
      },
      {
        columnName: "horario",
        columnLabel: "horario",
        sortEnabled: false,
      },
    ]);

    const route = useRoute();
    const tableData = ref<Array<IMatricula>>([]);
    const initmatricula = ref<Array<IMatricula>>([]);
    const proyectoID = ref<number>();

    const showMatriculas = async () => {
      const id = Number(route.params.id);
      //console.log("fire");
      const resp = await http.get<Iproyecto[]>("proyectos");
      //console.log(resp);
      resp.data.forEach((n) => {
        if (n.id === id) {
          //matricula.value = n;
          tableData.value = n.matriculas.filter((m) => m["isMatriculado"]);
          initmatricula.value.splice(
            0,
            tableData.value.length,
            ...tableData.value
          );
          proyectoID.value = n.id;
        }
      });
      //console.log(matricula.value);
    };

    onMounted(async () => {
      await showMatriculas();
    });
    return {
      tableHeader,
      tableData,
      showMatriculas,
      proyectoID,
    };
  },
});
</script>
