import { useState } from 'react';
import { ForgotContainer, ForgotTitle, ForgotForm, Mensaje, ErrorMensaje } from '../ui/ForgotLayout';
import Boton from '../ui/Boton';

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor ingresa tu correo electrónico.");
      return;
    }
    // Simulación de envío
    setMensaje("Se ha enviado un enlace de recuperación a tu correo.");
    setError(null);
  };

  return (
    <ForgotContainer aria-label="Recuperar contraseña">
      <ForgotTitle>Recuperar contraseña</ForgotTitle>

      <ForgotForm onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Ingresa tu correo"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Boton tipo="primary" type="submit" style={{ marginTop: "1rem" }}>
          Enviar enlace
        </Boton>
      </ForgotForm>

      {mensaje && <Mensaje aria-live="polite">{mensaje}</Mensaje>}
      {error && <ErrorMensaje aria-live="polite">{error}</ErrorMensaje>}
    </ForgotContainer>
  );
};

export default ForgotPassword;