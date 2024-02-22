export const formParams = {
  puntajeTestGorilla: null,
  eneagrama: "",
  cohorte: "",
  cooperante: "",
  backgroundIT: "",
  idiomas: "",
  profesionEducacion: "",
  estudioActual: "",
  trabajoActual: "",
  disponibilidadDeTiempo: "",
  intereses: [],
  experienciaLaboral: "",
  aspiracionProyectoDeVida: "",
  redDeApoyo: "",
  trabajoEnEquipo: "",
  comunicacionAsertiva: "",
  respetoPorLaDiversidad: "",
  manejoDeEmociones: "",
  autogestion: "",
  manejoDeTiempo: "",
  estiloDeAprendizaje: "",
  orientacionAlLogro: "",
  capacidadDeCompromiso: "",
  manejoDeSistemas: "",
  equipoYConectividadOptima: "",
  riesgoDeDesercion: "",
  anotacionPsicosocial: "",
  alertaPsicosocial: "",
  tieneElPerfil: "",
  comentario: "",
  entrevista_id: null,
};

export const eneagramaList = [
  "PIONERO",
  "AGRADABLE",
  "PROMOTOR_DE_LAS_MEJORAS",
  "DADOR",
  "CONTEMPLADOR",
  "DEDICADO",
  "ANIMADOR",
  "AMBICIOSO",
];

export const backgroundITList = [
  "TIENE_EXPERIENCIA",
  "SOLO_HA_EXPLORADO",
  "PRIMER_ACERCAMIENTO",
];

export const idiomasList = ["INGLES_AVANZADO", "INGLES_INTERMEDIO", "NO"];

export const disponibilidadDeTiempoList = [
  "MENOS_DE_2_HORAS",
  "ENTRE_3_Y_4_HORAS",
  "ENTRE_4_Y_6_HORAS",
  "MAS_DE_6_HORAS",
];

export const interes = [
  "DEPORTES",
  "VIDEO_JUEGOS",
  "MASCOTAS",
  "FAMILIA",
  "LECTURA",
  "ARTES",
  "IDIOMAS",
];

export const experienciaLaboral = [
  "SECTOR_TI",
  "OTRA_CARRERA",
  "SIN_EXPERIENCIA_LABORAL",
];

export const aspiracionProyectoDeVida = [
  "DESARROLLADOR_A",
  "CAMBIO_DE_CARRERA",
  "OPORTUNIDAD_LABORAL",
  "NO_DESEA_LABORAR",
];

export const redDeApoyo = ["SI", "NO", "POCA"];

export const nivelCompetencia = ["POTENCIAL", "DEBE_FORTALECER", "DIFICULTAD"];

export const manejoDeSistemas = ["AVANZADO", "MEDIO", "BAJO"];

export const tieneElPerfil = [
  "TIENE_EL_PERFIL",
  "NO_TIENE_EL_PERFIL",
  "REVISAR_CASO",
  "CANTERA",
];

const convertirLista = (lista) => {
  return lista.map((item) => ({
    value: item,
    label: item.split("_").join(" "),
  }));
};

// Convertir todas las listas
export const eneagramaOptions = convertirLista(eneagramaList);
export const backgroundITOptions = convertirLista(backgroundITList);
export const idiomasOptions = convertirLista(idiomasList);
export const disponibilidadDeTiempoOptions = convertirLista(
  disponibilidadDeTiempoList
);
export const interesOptions = convertirLista(interes);
export const experienciaLaboralOptions = convertirLista(experienciaLaboral);
export const aspiracionProyectoDeVidaOptions = convertirLista(
  aspiracionProyectoDeVida
);
export const redDeApoyoOptions = convertirLista(redDeApoyo);
export const nivelCompetenciaOptions = convertirLista(nivelCompetencia);
export const manejoDeSistemasOptions = convertirLista(manejoDeSistemas);
export const tieneElPerfilOptions = convertirLista(tieneElPerfil);
