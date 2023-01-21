interface Iactividad {
  id: number;
  nombre: string;
  tipoActividadID: number;
  tipoActividad: string;
}

const actividades: Array<Iactividad> = [];

export { Iactividad };

export default actividades;
