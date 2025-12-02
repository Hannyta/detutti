import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Boton from '../components/Boton';
import styles from './Registro.module.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [mensaje, setMensaje] = useState("");
  const { register } = useAuthContext(); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.password || !formData.confirmarPassword) {
      setErrorMsg("Por favor completa todos los campos.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Formato de correo inválido.");
      return;
    }

    if (formData.password !== formData.confirmarPassword) {
      setErrorMsg("Las contraseñas no coinciden.");
      return;
    }

    register(formData.email, formData.password, formData.nombre);
    setErrorMsg("");
    setMensaje("Registro exitoso 🎉");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className={styles.registroContainer}>
      <h2>Registrarme</h2>
      <form onSubmit={handleSubmit} className={styles.registroForm}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmarPassword">Confirmar contraseña</label>
        <input
          id="confirmarPassword"
          type="password"
          name="confirmarPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmarPassword}
          onChange={handleChange}
          required
        />

        {errorMsg && <p className={styles.error}>{errorMsg}</p>}
        {mensaje && <p className={styles.success}>{mensaje}</p>}

        <Boton texto="Registrarme" tipo="primary" type="submit" />
      </form>
    </div>
  );
};

export default Registro;