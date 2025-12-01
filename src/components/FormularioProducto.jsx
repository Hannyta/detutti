import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import styles from './FormularioProducto.module.css';
import { IoClose } from "react-icons/io5";
import { NumericFormat } from "react-number-format";

const FormularioProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) => {
  const [producto, setProducto] = useState(productoInicial);
  const { agregarProducto, editarProducto } = useProductosContext();

  const manejarChange = (evento) => {
    const { name, value } = evento.target;
    setProducto({ ...producto, [name]: value });
  };

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
              <span className={styles.tituloAzul}>
                {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
              </span>
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
            <div className={styles.formGrid} >
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

              {/* Fila: Precio + Categoria + SubCategoria */}
              <div className={styles.camposFila}>
                <div className={styles.campo}>
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

                <div className={styles.campo}>
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

                <div className={styles.campo}>
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

              {/* URL de imagen */}
              <div className={styles.colSpan2}>
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