import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener __dirname en módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta del archivo de productos
const rutaArchivo = path.join(__dirname, 'productos.backup.json');

// Leer el archivo JSON
fs.readFile(rutaArchivo, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  try {
    // Parsear el JSON
    let productos = JSON.parse(data);

    // Procesar cada producto
    productos = productos.map(producto => {
      // Eliminar el campo SubCategoria
      delete producto.SubCategoria;
      
      // Agregar el campo descuento con valor 0
      producto.descuento = 0;
      
      return producto;
    });

    // Crear la ruta del archivo de salida
    const rutaOutputProductos = path.join(__dirname, 'productos.nuevo.json');

    // Escribir el archivo procesado
    fs.writeFile(rutaOutputProductos, JSON.stringify(productos, null, 2), 'utf-8', (err) => {
      if (err) {
        console.error('Error al escribir el archivo:', err);
        return;
      }
      console.log(`✓ Archivo procesado exitosamente`);
      console.log(`✓ Total de productos procesados: ${productos.length}`);
      console.log(`✓ Archivo guardado en: ${rutaOutputProductos}`);
      console.log(`✓ Campo 'SubCategoria' eliminado de todos los registros`);
      console.log(`✓ Campo 'descuento' agregado con valor 0`);
    });
  } catch (parseErr) {
    console.error('Error al parsear el JSON:', parseErr);
  }
});
