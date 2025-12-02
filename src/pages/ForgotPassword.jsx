import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "../components/Boton";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMensaje("Formato de correo inválido");
      return;
    }
    setMensaje(`Se envió un enlace de recuperación a: ${email}`);
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className={styles.forgotContainer}>
      <h2>Recuperar contraseña</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico</label>
        <input 
          id="email"
          type="email" 
          placeholder="Ingresa tu correo" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Boton texto="Enviar enlace" tipo="primary" type="submit" />
      </form>
      {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
    </div>
  );
};

export default ForgotPassword;