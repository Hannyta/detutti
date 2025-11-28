import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import styles from './FormularioProducto.module.css';
import { IoClose } from "react-icons/io5";

const FormularioProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) => {
  const [producto, setProducto] = useState(productoInicial);
  const { agregarProducto, editarProducto } = useProductosContext();

  // Manejar cambios en los inputs
  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

  // Manejar envío del formulario
  const manejarSubmit = async (evento) => {
    evento.preventDefault();
    if (modo === "agregar") {
      await agregarProducto(producto);
    } else {
      await editarProducto(producto);
    }
    onCerrar();
  };

  return (
    <div className={styles.modalOverlay} aria-modal="true" role="dialog">
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>   
          {/* Header del modal */}
          <div className={styles.modalHeader}>
            <h3 className={styles.modalHeaderTitle}>
              {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
            </h3>
            <button 
              type="button" 
              onClick={onCerrar}
              className={styles.closeButton}
            >
              <IoClose />
            </button>
          </div>

          {/* Formulario */}
          <form onSubmit={manejarSubmit}>
            <div className={styles.formGrid}>
              {/* Nombre */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className={styles.formInputBase}
                  placeholder="Ingrese el nombre del producto"
                  value={producto.nombre || ""}
                  onChange={manejarChange}
                  required
                />
              </div>

              {/* Precio */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>Precio</label>
                <input
                  type="number"
                  name="precio"
                  id="precio"
                  className={styles.formInputBase}
                  placeholder="$0.00"
                  value={producto.precio || ""}
                  onChange={manejarChange}
                  required
                  min="0"
                  step="any"
                />
              </div>

              {/* Categoria */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Categoria</label>
                <input
                  type="text"
                  name="categoria"
                  id="Categoria"
                  className={styles.formInputBase}
                  placeholder="Ingrese la categoria"
                  value={producto.categoria || ""}
                  onChange={manejarChange}
                  required
                />
              </div>

              {/* Sub-Categoria */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>SubCategoria</label>
                <input
                  type="text"
                  name="SubCategoria"
                  id="SubCategoria"
                  className={styles.formInputBase}
                  placeholder="Ingrese la Sub-categoria"
                  value={producto.subCategoria || ""}
                  onChange={manejarChange}
                  required
                />
              </div>
              
              {/* Imagen */}
              <div className={`${styles.colSpan2} ${styles.smColSpan1}`}>
                <label className={styles.formLabel}>URL de Imagen</label>
                <input
                  type="text"
                  name="imagen"
                  id="imagen"
                  className={styles.formInputBase}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={producto.imagen || ""}
                  onChange={manejarChange}
                />
              </div>

              {/* Descripción */}
              <div className={styles.colSpan2}>
                <label className={styles.formLabel}>Descripción del Producto</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  rows="4"
                  className={styles.formInputBase}
                  placeholder="Escriba la descripción del producto aquí"
                  value={producto.descripcion || ""}
                  onChange={manejarChange}
                  required
                ></textarea>
              </div>
            </div>

            {/* Botones de acción */}
            <div className={styles.modalActions}>
              <button 
                type="submit" 
                className={`${styles.btnBase} ${styles.btnPrimary}`}
              >
                {modo === "agregar" ? "Agregar" : "Actualizar"}
              </button>
              <button 
                type="button" 
                onClick={onCerrar}
                className={`${styles.btnBase} ${styles.btnSecondary}`}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioProducto;