import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
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
import styles from './components/CarritoAside.module.css'; // 👈 para usar overlay

function App() {
  const [mostrarAside, setMostrarAside] = useState(false);
  const { carrito } = useContext(CarritoContext);

  const toggleAside = () => {
    setMostrarAside(prev => {
      const nuevoEstado = !prev;
      if (!prev) {
        setTimeout(() => {
          const carritoAside = document.getElementById('carritoAside');
          if (carritoAside) {
            carritoAside.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
      return nuevoEstado;
    });
  };

  return (
    <>
      <Header 
        contadorCarrito={carrito.length}
        onCarritoClick={toggleAside}
      />

      {/* Overlay para cerrar al click fuera */}
      {mostrarAside && (
        <div 
          className={`${styles.overlay} ${styles.open}`} 
          onClick={toggleAside}
        ></div>
      )}

      {/* Aside siempre montado, controlado por clases */}
      <CarritoAside cerrarAside={toggleAside} isOpen={mostrarAside} />
      
      <main>
        <section>
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
          </Routes>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;