export const formatearPrecio = (valor) => {
  if (!valor) return "$0";

  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0, // 👈 sin decimales
  }).format(Number(valor));
};