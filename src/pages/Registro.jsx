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

    if (formData.password !== formData.confirmarPassword) {
      setErrorMsg("Las contraseñas no coinciden.");
      return;
    }

    register(formData.email, formData.password, formData.nombre);
    alert("Registro exitoso 🎉");
    navigate("/");
  };

  return (
    <div className={styles.registroContainer}>
      <h2>Registrarme</h2>
      <form onSubmit={handleSubmit} className={styles.registroForm}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmarPassword"
          placeholder="Confirmar contraseña"
          value={formData.confirmarPassword}
          onChange={handleChange}
          required
        />

        {errorMsg && <p className={styles.error}>{errorMsg}</p>}

        <Boton texto="Registrarme" tipo="primary" type="submit" />
      </form>
    </div>
  );
};

export default Registro;