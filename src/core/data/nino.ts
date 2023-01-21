interface Inino {
  id: number;
  nombre: string;
  ap1: string;
  ap2: string;
  ci: string;
  fechaNac: string;
  direccion: string;
  telefono: string;
  celular: string;
  gradoEscolarID: number;
  sexo: number;
  sexoText: string;
  pis: boolean;
  hora: number;
  tienePermisoIrse: boolean;
  edad: number;
  matriculas: [];
  participaciones: [];
  madreID: number | null;
  padreID: number | null;
  nombreMadre: string | null;
  nombrePadre: string | null;
  centroMadre: string | null;
  centroPadre: string | null;
}

const ninos: Array<Inino> = [];

export { Inino };

export default ninos;
