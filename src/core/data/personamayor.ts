interface IPersonaMayor {
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
  centroTrabajo: string;
}

const personamayores: Array<IPersonaMayor> = [];

export { IPersonaMayor };

export default personamayores;
