import calcularCuotas from './calcularCuotas';

export function mapProductoToProps(producto, productosConOferta) {
  const productoConCuotas = calcularCuotas(producto);

  const enOferta = productosConOferta.includes(producto.id);
  const precioOriginal = enOferta ? productoConCuotas.precio : null;
  const precioConDescuento = enOferta
    ? productoConCuotas.precio * 0.85
    : productoConCuotas.precio;

  return {
    ...productoConCuotas,
    enOferta,
    precioOriginal,
    precioConDescuento,
  };
}