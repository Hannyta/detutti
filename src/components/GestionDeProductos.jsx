import { useState, useEffect } from 'react';
import FormularioProducto from './FormularioProducto';
import { useProductosContext } from '../context/ProductosContext';
import { CiCirclePlus } from 'react-icons/ci';
import { LuSquarePen } from 'react-icons/lu';
import { FaTrashCan } from 'react-icons/fa6';
import Precio from './Precio';
import Boton from '../ui/Boton';
import Paginador from "../components/Paginador";

import { 
  GestionContainer, GestionHeader, GestionTitulo,
  BtnAgregarWrapper, BtnAgregar,
  GridProductos, ProductoCard,
  ImagenWrapper, ProductoImagen, EtiquetaDescuento,
  ProductoNombre, CuotasPromo, BloqueMagenta, BloqueAzul,
  Acciones, ModalOverlay, ModalContainer, ModalHeader,
  ModalTitle, ModalText, ModalActions
} from '../ui/GestionDeProductosLayout';

const GestionDeProductos = () => {
  const { productos, eliminarProducto } = useProductosContext();

  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  // Paginación
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 12;

  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = indiceInicial + productosPorPagina;

  const productosPaginados = productos.slice(indiceInicial, indiceFinal);

  // Resetear página cuando cambia la cantidad de productos (agregar/eliminar)
  useEffect(() => {
    if (paginaActual > totalPaginas) {
      setPaginaActual(1);
    }
  }, [productos, totalPaginas]);

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
      <GestionHeader>
        <GestionTitulo>Lista de Productos</GestionTitulo>

        <BtnAgregarWrapper>
          <BtnAgregar onClick={abrirFormularioAgregar}>
            <CiCirclePlus /> <span>Agregar Producto</span>
          </BtnAgregar>
        </BtnAgregarWrapper>
      </GestionHeader>

      <GridProductos>
        {productos.length === 0 ? (
          <ProductoCard>
            <p>No hay productos</p>
          </ProductoCard>
        ) : (
          productosPaginados.map((producto) => {
            const aplicaCuotas = producto.cuotas && producto.cuotas > 0;

            return (
              <ProductoCard key={producto.id}>
                <ImagenWrapper>
                  <ProductoImagen 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                  />
                  {producto.descuento > 0 && (
                    <EtiquetaDescuento>{producto.descuento}% OFF</EtiquetaDescuento>
                  )}
                </ImagenWrapper>

                <div>
                  <ProductoNombre>{producto.nombre}</ProductoNombre>

                  <div>
                    <Precio 
                      precio={producto.precio} 
                      descuento={producto.descuento || 0} 
                      size="medium" 
                    />

                    {aplicaCuotas && (
                      <CuotasPromo>
                        <BloqueMagenta>{producto.cuotas} cuotas</BloqueMagenta>
                        <BloqueAzul>
                          sin interés de $
                          {producto.valorCuota?.toLocaleString('es-AR', { minimumFractionDigits: 2 })}
                        </BloqueAzul>
                      </CuotasPromo>
                    )}
                  </div>

                  <Acciones>
                    <Boton tipo="secondary" onClick={() => abrirFormularioEditar(producto)}>
                      <LuSquarePen /> Editar
                    </Boton>

                    <Boton 
                      tipo="danger"
                      style={{ backgroundColor: "#c51838ff", color: "#fff" }}
                      onClick={() => confirmarEliminacion(producto)}
                    >
                      <FaTrashCan /> Eliminar
                    </Boton>
                  </Acciones>
                </div>
              </ProductoCard>
            );
          })
        )}
      </GridProductos>

      {/* Paginador */}
      {totalPaginas > 1 && (
        <Paginador
          paginaActual={paginaActual}
          totalPaginas={totalPaginas}
          cambiarPagina={setPaginaActual}
        />
      )}

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

            <p>¿Estás seguro que querés eliminar <strong>"{productoAEliminar.nombre}"</strong>?</p>

            <ModalActions>
              <Boton tipo="secondary" onClick={() => setProductoAEliminar(null)}>
                Cancelar
              </Boton>

              <Boton 
                tipo="danger"
                style={{ backgroundColor: "#d90429", color: "#fff" }}
                onClick={handleEliminar}
              >
                Eliminar
              </Boton>
            </ModalActions>
          </ModalContainer>
        </ModalOverlay>
      )}

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