import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Boton from '../ui/Boton';

import { 
  RegistroContainer, RegistroTitle, RegistroForm, 
  ErrorMsg, SuccessMsg 
} from '../ui/RegistroLayout';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const { register } = useAuthContext();
  const navigate = useNavigate();

  const { nombre, email, password, confirmarPassword } = formData;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = () => {
    if (!nombre || !email || !password || !confirmarPassword) {
      return "Por favor completa todos los campos.";
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      return "Formato de correo inválido.";
    }

    if (password !== confirmarPassword) {
      return "Las contraseñas no coinciden.";
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setErrorMsg(error);
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      await register(email, password, nombre);
      setMensaje("Registro exitoso 🎉");

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      setErrorMsg("Hubo un error al registrarte.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegistroContainer>
      <RegistroTitle>Registrarme</RegistroTitle>

      <RegistroForm onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre completo</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={nombre}
          onChange={handleChange}
          aria-invalid={!!errorMsg}
        />

        <label htmlFor="email">Correo electrónico</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={handleChange}
          aria-invalid={!!errorMsg}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Contraseña"
          value={password}
          onChange={handleChange}
          aria-invalid={!!errorMsg}
        />

        <label htmlFor="confirmarPassword">Confirmar contraseña</label>
        <input
          id="confirmarPassword"
          type="password"
          name="confirmarPassword"
          placeholder="Confirmar contraseña"
          value={confirmarPassword}
          onChange={handleChange}
          aria-invalid={!!errorMsg}
        />

        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        {mensaje && <SuccessMsg aria-live="polite">{mensaje}</SuccessMsg>}

        <Boton 
          tipo="primary" 
          type="submit"
          disabled={loading}
        >
          {loading ? "Registrando..." : "Registrarme"}
        </Boton>
      </RegistroForm>
    </RegistroContainer>
  );
};

export default Registro;