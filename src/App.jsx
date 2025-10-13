import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import ProductoDetalle from './pages/ProductoDetalle';

function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/productos/:id' element={<ProductoDetalle/>} />
      </Routes>
    <Footer/>
    
    </>
  )
}

export default App