interface IMatricula {
  id: number;
  proyectoID: number;
  proyecto: string;
  ninoID: number;
  nino: string;
  responsableID: number;
  responsable: string;
  fecha: string;
  horarioID: number;
  horario: string;
  isMatriculado: boolean;
}

const matriculas: Array<IMatricula> = [];

export { IMatricula };

export default matriculas;
