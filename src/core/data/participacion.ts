interface Iparticipacion {
  id: number;
  fecha: string;
  observacion: string;
  actividadID: number;
  actividad: string;
  ninoID: number;
  nino: string;
  personaMayorID: number;
  personaMayor: string;
}

const participaciones: Array<Iparticipacion> = [];

export { Iparticipacion };

export default participaciones;
