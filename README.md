Detutti

🚀 Proyecto integrador desarrollado con React + Vite, realizado como parte del curso de React dictado por Talento Tech, una propuesta formativa gratuita enfocada en el desarrollo de habilidades tecnológicas. 
GitHub
+1

🔗 Live Demo: https://detutti.vercel.app

📌 ¿Qué es Detutti?

Detutti es una aplicación web construida con React utilizando la herramienta de bundling Vite. Es parte de un proyecto integrador para demostrar conocimientos en desarrollo frontend, incluyendo:

Componentes funcionales de React

Manejo de estado y efectos

Consumo o procesamiento de datos

Configuración con Vite

Deployment en Vercel

(Puedes agregar una descripción más específica de qué hace tu app si quieres detallarlo aún más)

🛠️ Tecnologías

El proyecto está basado en las siguientes tecnologías:

💡 React – Biblioteca de UI

⚡ Vite – Build tool rápida para desarrollo frontend

📦 JavaScript

📄 HTML / CSS

📍 Despliegue en Vercel

📁 Estructura del Proyecto
📦 detutti
 ┣ 📂 public
 ┃  ┣ 📜 Favicon.pnp
 ┣ 📂 src
 ┃  ┣ 📜 App.jsx
 ┃  ┣ 📜 main.jsx
 ┃  ┣ 📂 assets
 ┃  ┃  ┗ 📜 Imagenes para el Hero de Inicio.
 ┃  ┣ 📂 components
 ┃  ┃  ┣ 📜 BarraBusquedad.jsx
 ┃  ┃  ┣ 📜 Carrito.jsx
 ┃  ┃  ┣ 📜 CarritoAside.jsx
 ┃  ┃  ┣ 📜 Carrusel.jsx
 ┃  ┃  ┣ 📜 CarruselAccesorios.jsx
 ┃  ┃  ┣ 📜 CarruselDestacados.jsx
 ┃  ┃  ┣ 📜 CarruselHome.jsx
 ┃  ┃  ┣ 📜 CarruselModaInfantil.jsx
 ┃  ┃  ┣ 📜 CarruselModaHombre.jsx
 ┃  ┃  ┣ 📜 CarruselTecnologia.jsx
 ┃  ┃  ┣ 📜 Categoria.jsx
 ┃  ┃  ┣ 📜 Footer.jsx
 ┃  ┃  ┣ 📜 FormularioProducto.jsx
 ┃  ┃  ┣ 📜 GestionDeProductos.jsx
 ┃  ┃  ┣ 📜 Header.jsx
 ┃  ┃  ┣ 📜 HeroDetutti.jsx
 ┃  ┃  ┣ 📜 Navbar.jsx
 ┃  ┃  ┣ 📜 NieveEffect.jsx
 ┃  ┃  ┣ 📜 Paginador.jsx
 ┃  ┃  ┣ 📜 Precio.jsx
 ┃  ┃  ┣ 📜 Productos.jsx
 ┃  ┃  ┣ 📜 RutaProtegida.jsx
 ┃  ┃  ┗ 📜 TarjetaProducto.jsx
 ┃  ┣ 📂 context
 ┃  ┃  ┣ 📜 AuthContext.jsx
 ┃  ┃  ┣ 📜 CarritoContext.jsx
 ┃  ┃  ┣ 📜 ProductosContext.jsx
 ┃  ┃  ┗ 📜 SearchContext.jsx
 ┃  ┣ 📂 data
 ┃  ┃  ┗ 📜 usuarios.js
 ┃  ┣ 📂 helpers
 ┃  ┃  ┣ 📜 calcularCuotas.js
 ┃  ┃  ┣ 📜 confirmToast.js
 ┃  ┃  ┣ 📜 formatearPrecio.js
 ┃  ┃  ┣ 📜 mapProductoToProps.js
 ┃  ┃  ┗ 📜 manejarError.js
 ┃  ┣ 📂 Pages
 ┃  ┃  ┣ 📜 Accesorios.jsx
 ┃  ┃  ┣ 📜 Admin.jsx
 ┃  ┃  ┣ 📜 Compra.jsx
 ┃  ┃  ┣ 📜 ForgotPassword.jsx
 ┃  ┃  ┣ 📜 Inicio.jsx
 ┃  ┃  ┣ 📜 Login.jsx
 ┃  ┃  ┣ 📜 Moda.jsx
 ┃  ┃  ┣ 📜 Ofertas.jsx
 ┃  ┃  ┣ 📜 ProductoDetalle.jsx
 ┃  ┃  ┣ 📜 Registro.jsx
 ┃  ┃  ┣ 📜 Tecnologia.jsx
 ┃  ┃  ┗ 📜 TodosProductos.jsx
 ┃  ┣ 📂 styles
 ┃  ┃  ┣ 📜 GlobalStyle.js
 ┃  ┃  ┗ 📜 theme.js
 ┃  ┣ 📂 ui
 ┃  ┃  ┗ 📜 Componentes con todos los styled-components
 ┣ 📜 .gitignore
 ┣ 📜 README.md
 ┣ 📜 eslint.config.js
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 procesar_productos.js
 ┣ 📜 productos.backup.json
 ┣ 📜 productos.nuevo.json
 ┣ 📜 vite.config.js
 ┗ 📜 yarn.lock

🚀 Cómo ejecutar el proyecto

Sigue estos pasos para correr Detutti localmente:

Clonar el repositorio

git clone https://github.com/Hannyta/detutti.git


Instalar dependencias

Con npm:

npm install


Con Yarn:

yarn


Iniciar en modo desarrollo

npm run dev
# o
yarn dev


Abrir la app en el navegador

➤ Por defecto se abrirá en: http://localhost:5173 (o la URL que indique la consola)

📦 Despliegue

Este proyecto está desplegado automáticamente en Vercel conectando el repositorio a la plataforma, lo que permite publicar la versión en producción con cada push. 
Vercel

🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si querés aportar mejoras, corregir errores o extender la app, podés:

Hacer un fork del proyecto

Crear una rama con tu feature (feature/nombre)

Hacer commit de tus cambios

Abrir un Pull Request describiendo lo que aportaste

📄 Licencia

Este proyecto fue realizado por Hannymer Linares, Ciudad de Buenos Aires, Diciembre 2025

🙌 Agradecimientos

Gracias a Talento Tech por la formación y soporte con este proyecto.git 