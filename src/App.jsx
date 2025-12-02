import { Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
import styled, { css } from "styled-components";
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import ProductoDetalle from './pages/ProductoDetalle';
import Tecnologia from './pages/Tecnologia';
import Moda from './pages/Moda';
import Accesorios from './pages/Accesorios';
import CarritoAside from './components/CarritoAside';
import Login from './pages/Login';
import Registrarme from './pages/Registro';   
import Compra from './pages/Compra';
import RutaProtegida from './components/RutaProtegida';
import { CarritoContext } from './context/CarritoContext';
import ForgotPassword from './pages/ForgotPassword';
import Admin from './pages/Admin';

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 9998;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;

function App() {
  const [mostrarAside, setMostrarAside] = useState(false);
  const { carrito } = useContext(CarritoContext);

  const toggleAside = () => {
    setMostrarAside(prev => !prev);
  };

  return (
    <>
      <Header 
        contadorCarrito={carrito.length}
        onCarritoClick={toggleAside}
      />

      {mostrarAside && (
        <Overlay 
          isOpen={mostrarAside}
          onClick={toggleAside}
          aria-hidden="true"
          role="presentation"
        />
      )}

      <CarritoAside cerrarAside={toggleAside} isOpen={mostrarAside} />
      
      <main>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/productos/:id' element={<ProductoDetalle />} />
          <Route path='/tecnologia' element={<Tecnologia />} />
          <Route path='/moda' element={<Moda />} />
          <Route path='/accesorios' element={<Accesorios />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registrarme' element={<Registrarme />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/compra' element={
            <RutaProtegida>
              <Compra />
            </RutaProtegida>
          } />
          <Route path='/admin' element={
            <RutaProtegida rolRequerido="admin">
              <Admin />
            </RutaProtegida>
          } />
          <Route path="*" element={<p>Página no encontrada</p>} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;