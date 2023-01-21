interface IEstadistica {
  inscripciones: number;
  matriculas: number;
  listaEspera: number;
  proyectos: number;
  ninos: number;
  varones: number;
  hembras: number;
  pVarones: string;
  pHembras: string;
  actividades: number;
  ninoProyectos: [];
}

const estadisticas: Array<IEstadistica> = [];

export { IEstadistica };

export default estadisticas;
