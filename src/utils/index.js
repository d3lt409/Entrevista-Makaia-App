export const textoSeparadoPorEspacios = (texto) =>
  texto
    .split(/(?=[A-Z])/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
