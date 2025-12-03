import { useState, useEffect, useRef } from 'react';
import { useProductosContext } from '../context/ProductosContext';
import { IoClose } from 'react-icons/io5';
import { NumericFormat } from 'react-number-format';

import { 
  ModalOverlay, ModalContainer, ModalContent, ModalHeader, ModalHeaderTitle, 
  CloseButton, TituloAzul, FormLabel, FormInputBase, TextArea, 
  ModalActions, BtnPrimary, BtnSecondary 
} from '../ui/FormularioProductoLayout';

const FormularioProducto = ({ productoInicial = {}, modo = "agregar", onCerrar }) => {
  const [producto, setProducto] = useState(productoInicial);
  const { agregarProducto, editarProducto } = useProductosContext();
  const nombreRef = useRef(null);

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
    if (!producto.descripcion || producto.descripcion.length < 10) {
      alert("La descripción debe tener al menos 10 caracteres");
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
    <ModalOverlay aria-modal="true" role="dialog" aria-labelledby="modalTitle">
      <ModalContainer>
        <ModalContent>   
          {/* Header del modal */}
          <ModalHeader>
            <ModalHeaderTitle id="modalTitle">
              <TituloAzul>
                {modo === "agregar" ? "Agregar Producto" : "Editar Producto"}
              </TituloAzul>
            </ModalHeaderTitle>
            <CloseButton 
              type="button" 
              onClick={onCerrar}
              aria-label="Cerrar formulario"
            >
              <IoClose />
            </CloseButton>
          </ModalHeader>

          {/* Formulario con Bootstrap Grid */}
          <form onSubmit={manejarSubmit}>
            <div className="row mb-3">
              <div className="col-12">
                <FormLabel>Nombre</FormLabel>
                <FormInputBase
                  ref={nombreRef}
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Ingrese el nombre del producto"
                  value={producto.nombre || ""}
                  onChange={manejarChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4 col-12">
                <FormLabel>Precio</FormLabel>
                <NumericFormat
                  thousandSeparator="."
                  decimalSeparator=","
                  prefix="$"
                  name="precio"
                  id="precio"
                  customInput={FormInputBase}
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
                <FormLabel>Categoría</FormLabel>
                <FormInputBase
                  type="text"
                  name="categoria"
                  id="categoria"
                  placeholder="Ingrese la categoría"
                  value={producto.categoria || ""}
                  onChange={manejarChange}
                  required
                />
              </div>

              <div className="col-md-4 col-12">
                <FormLabel>SubCategoría</FormLabel>
                <FormInputBase
                  type="text"
                  name="subCategoria"
                  id="subCategoria"
                  placeholder="Ingrese la subcategoría"
                  value={producto.subCategoria || ""}
                  onChange={manejarChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <FormLabel>URL de Imagen</FormLabel>
                <FormInputBase
                  type="text"
                  name="imagen"
                  id="imagen"
                  placeholder="https://ejemplo.com/imagen.jpg"
                  value={producto.imagen || ""}
                  onChange={manejarChange}
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-12">
                <FormLabel>Descripción del Producto</FormLabel>
                <TextArea
                  id="descripcion"
                  name="descripcion"
                  rows="4"
                  placeholder="Escriba la descripción del producto aquí"
                  value={producto.descripcion || ""}
                  onChange={manejarChange}
                  required
                />
              </div>
            </div>

            {/* Botones de acción */}
            <ModalActions>
              <BtnPrimary type="submit">
                {modo === "agregar" ? "Agregar" : "Actualizar"}
              </BtnPrimary>
              <BtnSecondary type="button" onClick={onCerrar}>
                Cancelar
              </BtnSecondary>
            </ModalActions>
          </form>
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default FormularioProducto;