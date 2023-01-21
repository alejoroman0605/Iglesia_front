<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Top 5 niños</span>

        <span class="text-muted mt-1 fw-semobold fs-7"
          >Mayor participación en proyectos</span
        >
      </h3>

      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
        title="Click to add a user"
      >
        <!-- <a
          href="#"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          New Member
        </a> -->
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bold text-muted">
              <th class="w-25px">
                <div
                  class="form-check form-check-sm form-check-custom form-check-solid"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="
                      checkedRows =
                        checkedRows.length === 6 ? [] : [0, 1, 2, 3, 4, 5]
                    "
                  />
                </div>
              </th>
              <th class="min-w-150px">Nombre</th>
              <th class="min-w-120px">Participaciones</th>
              <th class="min-w-120px">Grado Escolar</th>
              <th class="min-w-120px">Edad</th>
              <th class="min-w-120px">Celular</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(nino, index) in ninoProyectos" :key="index">
              <tr>
                <td>
                  <div
                    class="form-check form-check-sm form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input widget-9-check"
                      type="checkbox"
                      :value="index"
                      v-model="checkedRows"
                    />
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-45px me-5">
                      <img :src="images[index]" alt="" />
                    </div>
                    <div class="d-flex justify-content-start flex-column">
                      <router-link
                        :to="'/apps/ninos/ninos-details/' + nino.id"
                        class="text-dark fw-bold text-hover-primary fs-6"
                      >
                        {{ nino.fullName }}</router-link
                      >
                    </div>
                  </div>
                </td>
                <td>
                  {{ nino.matriculas.length }}
                </td>
                <td>{{ nino.gradoEscolar }}</td>
                <td>
                  {{ nino.edad }}
                </td>
                <td>{{ nino.celular }}</td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
    ninoProyectos: [],
  },
  setup(props) {
    console.log(props.ninoProyectos);
    const checkedRows = ref([]);
    const images = [
      "media/avatars/300-14.jpg",
      "media/avatars/300-2.jpg",
      "media/avatars/300-5.jpg",
      "media/avatars/300-20.jpg",
      "media/avatars/300-23.jpg",
    ];
    /*
    const list = [
      {
        image: "media/avatars/300-14.jpg",
        name: "Ana Simmons",
        skills: "HTML, JS, ReactJS",
        companyName: "Intertico",
        companySkills: "Web, UI/UX Design",
        value: "50",
        color: "primary",
      },
      {
        image: "media/avatars/300-2.jpg",
        name: "Jessie Clarcson",
        skills: "C#, ASP.NET, MS SQL",
        companyName: "Agoda",
        companySkills: "Houses & Hotels",
        value: "70",
        color: "danger",
      },
      {
        image: "media/avatars/300-5.jpg",
        name: "Lebron Wayde",
        skills: "PHP, Laravel, VueJS",
        companyName: "RoadGee",
        companySkills: "Transportation",
        value: "60",
        color: "success",
      },
      {
        image: "media/avatars/300-20.jpg",
        name: "Natali Goodwin",
        skills: "Python, PostgreSQL, ReactJS",
        companyName: "The Hill",
        companySkills: "Insurance",
        value: "50",
        color: "warning",
      },
      {
        image: "media/avatars/300-23.jpg",
        name: "Kevin Leonard",
        skills: "HTML, JS, ReactJS",
        companyName: "RoadGee",
        companySkills: "Art Director",
        value: "90",
        color: "info",
      },
    ];
*/
    return {
      //list,
      checkedRows,
      images,
    };
  },
});
</script>
