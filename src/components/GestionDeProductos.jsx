import { useState } from "react";
import FormularioProducto from "./FormularioProducto";
import { useProductosContext } from "../context/ProductosContext";
import { CiCirclePlus } from "react-icons/ci";
import { LuSquarePen } from "react-icons/lu";
import { FaTrashCan } from "react-icons/fa6";

import styles from './GestionDeProductos.module.css';

const GestionDeProductos = () => {
  const { productos, eliminarProducto } = useProductosContext();
  const [mostrarForm, setMostrarForm] = useState(false);
  const [modoFormulario, setModoFormulario] = useState("agregar");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  // Abrir formulario para AGREGAR
  const abrirFormularioAgregar = () => {
    setModoFormulario("agregar");
    setProductoSeleccionado(null);
    setMostrarForm(true);
  };

  // Abrir formulario para EDITAR
  const abrirFormularioEditar = (producto) => {
    setModoFormulario("editar");
    setProductoSeleccionado(producto);
    setMostrarForm(true);
  };

  // Cerrar formulario
  const cerrarFormulario = () => {
    setMostrarForm(false);
    setProductoSeleccionado(null);
  };

  // Confirmar eliminación
  const confirmarEliminacion = (producto) => {
    setProductoAEliminar(producto);
  };

  const handleEliminar = () => {
    if (productoAEliminar) {
      eliminarProducto(productoAEliminar.id);
      setProductoAEliminar(null);
    }
  };

  return (
    <div className={styles.gestionContainer}>
      {/* Header */}
      <div className={styles.gestionHeader}>
        <h2>Lista de Productos</h2>
        <button onClick={abrirFormularioAgregar} className={styles.btnAgregar}>
          <CiCirclePlus /> <span>Agregar Producto</span>
        </button>
      </div>

      {/* Lista de productos */}
      {productos.length === 0 ? (
        <div className={styles.productoCard}>
          <p>No hay productos</p>
        </div>
      ) : (
        productos.map((producto) => (
          <div key={producto.id} className={styles.productoCard}>
            <img 
              src={producto.imagen} 
              alt={producto.nombre} 
              className={styles.productoImagen} 
            />
            <div className={styles.productoInfo}>
              <h3 className={styles.productoNombre}>{producto.nombre}</h3>
              <p className={styles.productoPrecio}>
                ${producto.precio?.toLocaleString('es-AR')}
              </p>

              {/* 👇 Bloque de cuotas */}
              {producto.aplicaCuotas && (
                <p className={styles.productoCuotas}>
                  Hasta <span>{producto.cuotas}</span> cuotas sin interés de $
                  <span>{producto.valorCuota?.toLocaleString('es-AR')}</span>
                </p>
              )}
            </div>
            <div className={styles.acciones}>
              <button 
                onClick={() => abrirFormularioEditar(producto)} 
                className={styles.btnEditar}
              >
                <LuSquarePen /> Editar
              </button>
              <button 
                onClick={() => confirmarEliminacion(producto)} 
                className={styles.btnEliminar}
              >
                <FaTrashCan /> Eliminar
              </button>
            </div>
          </div>
        ))
      )}

      {/* Modal de confirmación de eliminar */}
      {productoAEliminar && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon}>
                <FaTrashCan />
              </div>
              <div>
                <h3 className={styles.modalTitle}>Confirmar eliminación</h3>
                <p className={styles.modalText}>Esta acción no se puede deshacer</p>
              </div>
            </div>

            <div className={styles.modalBody}>
              <p>
                ¿Estás seguro que querés eliminar <span className="font-semibold">"{productoAEliminar.nombre}"</span>?
              </p>
            </div>

            <div className={styles.modalActions}>
              <button 
                onClick={() => setProductoAEliminar(null)} 
                className={styles.btnCancel}
              >
                Cancelar
              </button>
              <button 
                onClick={handleEliminar} 
                className={styles.btnDelete}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal - Formulario */}
      {mostrarForm && (
        <FormularioProducto
          productoInicial={productoSeleccionado || {}}
          modo={modoFormulario}
          onCerrar={cerrarFormulario}
        />
      )}
    </div>
  );
};

export default GestionDeProductos;