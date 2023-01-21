<template>
  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <StatsisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/ecommerce/ecm008.svg"
        color="primary"
        icon-color="white"
        :title="`Inscripciones (${estadisticas.inscripciones})`"
        description=""
      />
    </div>

    <div class="col-xl-4">
      <StatsisticsWidget5
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        svg-icon="media/icons/duotune/graphs/gra005.svg"
        color="success"
        icon-color="white"
        :title="`Matrículas (${estadisticas.matriculas})`"
        description=""
      />
    </div>

    <div class="col-xl-4">
      <StatsisticsWidget5
        widget-classes="card-xl-stretch mb-xl-8"
        svg-icon="media/icons/duotune/ecommerce/ecm002.svg"
        color="danger"
        icon-color="white"
        :title="`Lista de espera (${estadisticas.listaEspera})`"
        description=""
      />
    </div>
  </div>

  <div class="row gy-5 g-xl-8">
    <div class="col-xl-4">
      <MixedWidget3
        widget-classes="card-xl-stretch mb-xl-8"
        chart-color="primary"
        chart-height="150"
        :proyectos="estadisticas.proyectos"
        :actividades="estadisticas.actividades"
        :varones="estadisticas.varones"
        :hembras="estadisticas.hembras"
        :pHembras="estadisticas.pHembras"
        :pVarones="estadisticas.pVarones"
      />
    </div>

    <!-- <div class="col-xl-4">
      <MixedWidget4
        widget-classes="card-xl-stretch"
        chart-height="225"
        chart-color="primary"
      />
    </div>

    <div class="col-xl-4">
      <MixedWidget5
        widget-classes="card-xl-stretch mb-5 mb-xl-8"
        chart-color="danger"
        chart-height="150"
      />
    </div> -->
    <div class="col-xxl-8">
      <TablesWidget9
        widget-classes="card-xxl-stretch mb-5 mb-xl-8"
        :ninoProyectos="estadisticas.ninoProyectos"
      />
    </div>
  </div>

  <!--  <div class="row gy-5 g-xl-8">
    <div class="col-xxl-4">
      <ListsWidget7 widget-classes="card-xxl-stretch" />
    </div>

    <div class="col-xxl-8">
      <TablesWidget9 widget-classes="card-xxl-stretch mb-5 mb-xl-8" />
    </div>
  </div>

  <div class="row g-5 g-xl-8">
    <div class="col-xl-4">
      <ListsWidget4 widget-classes="card-xl-stretch mb-xl-8" />
    </div>

    <div class="col-xl-4">
      <ListsWidget5 widget-classes="card-xl-stretch mb-xl-8" />
    </div>

    <div class="col-xl-4">
      <ListsWidget3 widget-classes="card-xl-stretch mb-5 mb-xl-8" />
    </div>
  </div>

  <div class="g-5 gx-xxl-8">
    <TablesWidget10 />
  </div> -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import StatsisticsWidget5 from "@/components/widgets/statsistics/Widget5.vue";
import MixedWidget3 from "@/components/widgets/mixed/Widget3.vue";
// import MixedWidget4 from "@/components/widgets/mixed/Widget4.vue";
//import MixedWidget5 from "@/components/widgets/mixed/Widget5.vue";
// import ListsWidget7 from "@/components/widgets/lists/Widget7.vue";
import TablesWidget9 from "@/components/widgets/tables/Widget9.vue";
// import ListsWidget4 from "@/components/widgets/lists/Widget4.vue";
// import ListsWidget5 from "@/components/widgets/lists/Widget5.vue";
// import ListsWidget3 from "@/components/widgets/lists/Widget3.vue";
// import TablesWidget10 from "@/components/widgets/tables/Widget10.vue";
import http from "@/http-common";
import { IEstadistica } from "@/core/data/estadistica";

export default defineComponent({
  name: "dashboard-main",
  components: {
    StatsisticsWidget5,
    MixedWidget3,
    //MixedWidget4,
    //MixedWidget5,
    // ListsWidget7,
    TablesWidget9,
    // ListsWidget4,
    // ListsWidget5,
    // ListsWidget3,
    // TablesWidget10,
  },
  setup() {
    //selected activdad
    const estadisticas = ref<IEstadistica>({
      inscripciones: 0,
      matriculas: 0,
      listaEspera: 0,
      proyectos: 0,
      ninos: 0,
      varones: 0,
      hembras: 0,
      pVarones: "0.00",
      pHembras: "0.00",
      actividades: 0,
      ninoProyectos: [],
    });

    onMounted(async () => {
      await showEstadisticas();
    });

    const showEstadisticas = async () => {
      const resp = await http.get<IEstadistica>("DashBoard/GetEstadisticas");
      console.log(resp.data);
      estadisticas.value = resp.data;
    };

    return {
      estadisticas,
    };
  },
});
</script>
