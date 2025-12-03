import { Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
import styled from 'styled-components';
import { HelmetProvider, Helmet } from 'react-helmet-async';
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
import Overlay from './ui/Overlay';

const MainWrapper = styled.main`
  min-height: 80vh;
  padding: 2rem;
  background: #f9f9f9;
`;

function App() {
  const [mostrarAside, setMostrarAside] = useState(false);
  const { carrito } = useContext(CarritoContext);

  const toggleAside = () => {
    setMostrarAside((prev) => !prev);
  };

  return (
    <>
      <HelmetProvider>    
        <Helmet>
          <title>Detutti - Tienda Online</title>
          <meta name="description" content="Explora productos de moda, tecnología y accesorios en Detutti." />
        </Helmet>

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
        
        <MainWrapper aria-label="Contenido principal">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos/:id" element={<ProductoDetalle />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/moda" element={<Moda />} />
            <Route path="/accesorios" element={<Accesorios />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrarme" element={<Registrarme />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/compra" element={
              <RutaProtegida>
                <Compra />
              </RutaProtegida>
            } />
            <Route path="/admin" element={
              <RutaProtegida rolRequerido="admin">
                <Admin />
              </RutaProtegida>
            } />
            <Route path="*" element={<section role="alert"><p>Página no encontrada</p></section>} />
          </Routes>
        </MainWrapper>

        <Footer />
      </HelmetProvider>  
    </>
  );
}

export default App;