const calcularCuotas = (producto) => {
  const precio = Number(producto.precio);

  const aplicaCuotas = producto.categoria === "Tecnologia" || precio > 200000;
  const cuotas = aplicaCuotas ? 6 : null;
  const valorCuota = aplicaCuotas && cuotas ? Math.round(precio / cuotas) : null;

  return {
    ...producto,
    precio,
    aplicaCuotas,
    cuotas,
    valorCuota
  };
};

export default calcularCuotas;