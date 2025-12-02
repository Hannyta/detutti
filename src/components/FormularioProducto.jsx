import { useState, useEffect, useRef } from "react";
import { useProductosContext } from "../context/ProductosContext";
import styles from './FormularioProducto.module.css';
import { IoClose } from "react-icons/io5";
import { NumericFormat } from "react-number-format";

const FormularioProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) => {
  const [producto, setProducto] = useState(productoInicial);
  const { agregarProducto, editarProducto } = useProductosContext();
  const nombreRef = useRef(null);

  // 👇 Foco inicial en el campo "Nombre"
  useEffect(() => {
    nombreRef.current?.focus();
  }, []);

  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

  const manejarSubmit = async (evento) => {
    evento.preventDefault();
    if (!producto.precio || producto.precio <= 0) {
      alert("El precio debe ser mayor a 0");
      return;
    }
    if (modo === "agregar") {
      await agregarProducto(producto);
    } else {
      await editarProducto(producto);
    }
    onCerrar();
  };

  return (
    <div className={styles.modalOverlay} aria-modal="true" role="dialog" aria-labelledby="modalTitle">
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>   
          {/* Header del modal */}
          <div className={styles.modalHeader}>
            <h3 id="modalTitle" className={styles.modalHeaderTitle}>
              <span className={styles.tituloAzul}>
                {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
              </span>
            </h3>
            <button 
              type="button" 
              onClick={onCerrar}
              className={styles.closeButton}
              aria-label="Cerrar formulario"
            >
              <IoClose />
            </button>
          </div>

          {/* Formulario con Bootstrap Grid */}
          <form onSubmit={manejarSubmit}>
            <div className="row mb-3">
              <div className="col-12">
                <label className={styles.formLabel}>Nombre</label>
                <input
                  ref={nombreRef}
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
            </div>

            <div className="row mb-3">
              <div className="col-md-4 col-12">
                <label className={styles.formLabel}>Precio</label>
                <NumericFormat
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="$"
                  name="precio"
                  id="precio"
                  className={styles.formInputBase}
                  placeholder="$0"
                  value={producto.precio || ""}
                  onValueChange={(val) => {
                    setProducto({ ...producto, precio: val.floatValue });
                  }}
                  required
                  decimalScale={0}
                  fixedDecimalScale={false}
                  allowNegative={false}
                />
              </div>

              <div className="col-md-4 col-12">
                <label className={styles.formLabel}>Categoría</label>
                <input
                  type="text"
                  name="categoria"
                  id="categoria"
                  className={styles.formInputBase}
                  placeholder="Ingrese la categoría"
                  value={producto.categoria || ""}
                  onChange={manejarChange}
                  required
                />
              </div>

              <div className="col-md-4 col-12">
                <label className={styles.formLabel}>SubCategoría</label>
                <input
                  type="text"
                  name="subCategoria"
                  id="subCategoria"
                  className={styles.formInputBase}
                  placeholder="Ingrese la subcategoría"
                  value={producto.subCategoria || ""}
                  onChange={manejarChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
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
            </div>

            <div className="row mb-3">
              <div className="col-12">
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
            <div className="row mt-3">
              <div className="col-6">
                <button 
                  type="submit" 
                  className={`${styles.btnBase} ${styles.btnPrimary} w-100`}
                >
                  {modo === "agregar" ? "Agregar" : "Actualizar"}
                </button>
              </div>
              <div className="col-6">
                <button 
                  type="button" 
                  onClick={onCerrar}
                  className={`${styles.btnBase} ${styles.btnSecondary} w-100`}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormularioProducto;