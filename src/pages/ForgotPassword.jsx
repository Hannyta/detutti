import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Boton from "../components/Boton";
import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Se envió un enlace de recuperación a: ${email}`);
    navigate("/"); // redirige al inicio inmediatamente después del alert
  };

  return (
    <div className={styles.forgotContainer}>
      <h2>Recuperar contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Ingresa tu correo" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <Boton texto="Enviar enlace" tipo="primary" type="submit" />
      </form>
    </div>
  );
};

export default ForgotPassword;