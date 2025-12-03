import { useState, useEffect } from 'react';
import FormularioProducto from './FormularioProducto';
import { useProductosContext } from '../context/ProductosContext';
import { CiCirclePlus } from 'react-icons/ci';
import { LuSquarePen } from 'react-icons/lu';
import { FaTrashCan } from 'react-icons/fa6';

import { 
  GestionContainer, GestionHeader, GestionTitulo, BtnAgregar, GridProductos, ProductoCard, 
  ProductoImagen, ProductoNombre, ProductoPrecio, CuotasPromo, BloqueMagenta, BloqueAzul, 
  Acciones, BtnEditar, BtnEliminar, ModalOverlay, ModalContainer, ModalHeader, ModalTitle, 
  ModalText, ModalActions, BtnCancel, BtnDelete 
} from '../ui/GestionDeProductosLayout';

const GestionDeProductos = () => {
  const { productos, eliminarProducto } = useProductosContext();
  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setMostrarForm(false);
        setProductoSeleccionado(null);
        setProductoAEliminar(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null);
    setMostrarForm(true);
  };

  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto);
    setMostrarForm(true);
  };

  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

  const confirmarEliminacion = (producto) => {
    setProductoAEliminar(producto);
  };

  const handleEliminar = () => {
    if (productoAEliminar) {
      eliminarProducto(productoAEliminar.id);
      alert(`Producto "${productoAEliminar.nombre}" eliminado correctamente`);
      setProductoAEliminar(null);
    }
  };

  return (
    <GestionContainer>
      {/* Header */}
      <GestionHeader>
        <GestionTitulo>Lista de Productos</GestionTitulo>
        <BtnAgregar onClick={abrirFormularioAgregar}>
          <CiCirclePlus /> <span>Agregar Producto</span>
        </BtnAgregar>
      </GestionHeader>

      {/* Grid de productos */}
      <GridProductos>
        {productos.length === 0 ? (
          <ProductoCard>
            <p>No hay productos</p>
          </ProductoCard>
        ) : (
          productos.map((producto) => {
            const aplicaCuotas = producto.precio >= 20000;
            const cuotas = 6;
            const valorCuota = producto.precio / cuotas;

            return (
              <ProductoCard key={producto.id}>
                <ProductoImagen 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                />

                <div>
                  <ProductoNombre>{producto.nombre}</ProductoNombre>

                  <div>
                    <ProductoPrecio>
                      ${producto.precio?.toLocaleString('es-AR')}
                    </ProductoPrecio>
                    {aplicaCuotas && (
                      <CuotasPromo>
                        <BloqueMagenta>{cuotas} cuotas</BloqueMagenta>
                        <BloqueAzul>
                          sin interés de ${valorCuota.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                        </BloqueAzul>
                      </CuotasPromo>
                    )}
                  </div>

                  <Acciones>
                    <BtnEditar onClick={() => abrirFormularioEditar(producto)}>
                      <LuSquarePen /> Editar
                    </BtnEditar>
                    <BtnEliminar onClick={() => confirmarEliminacion(producto)}>
                      <FaTrashCan /> Eliminar
                    </BtnEliminar>
                  </Acciones>
                </div>
              </ProductoCard>
            );
          })
        )}
      </GridProductos>

      {/* Modal de confirmación */}
      {productoAEliminar && (
        <ModalOverlay role="dialog" aria-modal="true" aria-labelledby="modalEliminarTitle">
          <ModalContainer>
            <ModalHeader>
              <FaTrashCan />
              <div>
                <ModalTitle id="modalEliminarTitle">Confirmar eliminación</ModalTitle>
                <ModalText>Esta acción no se puede deshacer</ModalText>
              </div>
            </ModalHeader>
            <div>
              <p>¿Estás seguro que querés eliminar <strong>"{productoAEliminar.nombre}"</strong>?</p>
            </div>
            <ModalActions>
              <BtnCancel onClick={() => setProductoAEliminar(null)}>Cancelar</BtnCancel>
              <BtnDelete onClick={handleEliminar}>Eliminar</BtnDelete>
            </ModalActions>
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* Formulario modal */}
      {mostrarForm && (
        <FormularioProducto
          productoInicial={productoSeleccionado || {}}
          modo={modoFormulario}
          onCerrar={cerrarFormulario}
        />
      )}
    </GestionContainer>
  );
};

export default GestionDeProductos;