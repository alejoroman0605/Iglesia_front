interface Iproyecto {
  id: number;
  nombre: string;
  inicio: string;
  final: string;
  iglesiaID: number;
  iglesia: string;
  coordinadorID: number;
  coordinador: string;
  administradorID: number;
  administrador: string;
  capacidad: number;
  matriculas: [];
}

const proyectos: Array<Iproyecto> = [];

export { Iproyecto };

export default proyectos;
