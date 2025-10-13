import './App.css'
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import ProductoDetalle from './pages/ProductoDetalle';
import Tecnologia from './pages/Tecnologia';
import Moda from './pages/Moda';
import Accesorios from './pages/Accesorios';
import CarritoAside from './components/CarritoAside';



function App() {

  const [carrito, setCarrito] = useState([]);
  const [mostrarAside, setMostrarAside] = useState(false);

  const agregarAlCarrito = (producto) => {
    if (!carrito.find(p => p.id === producto.id)) {
      setCarrito([...carrito, producto]);
    }
  };

  const eliminarDelCarrito = (idEliminar) => {
    setCarrito(carrito.filter(producto => producto.id !== idEliminar));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const toggleAside = () => {
    setMostrarAside(!mostrarAside);
  };

  return (
    <>
      <Header 
        contadorCarrito={carrito.length}
        onCarritoClick={toggleAside} 
      />
      {mostrarAside && (
        <CarritoAside
          productos={carrito}
          cerrarAside={toggleAside}
          vaciarCarrito={vaciarCarrito}
          eliminarDelCarrito={eliminarDelCarrito}
        />
      )}
      <Routes>
        <Route
          path='/'
          element={
            <Inicio
              carrito={carrito}
              agregarAlCarrito={agregarAlCarrito}
              eliminarDelCarrito={eliminarDelCarrito}
              vaciarCarrito={vaciarCarrito}
            />
          }
        />
        <Route path='/productos/:id' element={
          <ProductoDetalle 
            agregarAlCarrito={agregarAlCarrito} />} />
        <Route path='/tecnologia' element={
          <Tecnologia 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path='/moda' element={
          <Moda 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}/>} />
        <Route path='/accesorios' element={
          <Accesorios 
            carrito={carrito} 
            agregarAlCarrito={agregarAlCarrito}/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;