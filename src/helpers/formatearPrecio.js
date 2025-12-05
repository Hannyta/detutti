export const formatearPrecio = (valor) => {
  const numero = Number(valor);

  if (isNaN(numero)) return "$0";

  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0, 
  }).format(numero);
};