import Boton from "../components/Boton";
import { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// 👉 Importamos los styled-components
import { 
  PageWrapper, LoginContainer, LoginTitle, LoginForm, Recordarme, 
  ErrorMsg, ForgotPassword, Register 
} from "../ui/LoginLayout";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recordarme, setRecordarme] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setEmail(parsed.email);
    }
  }, []);

  const autenticarUsuario = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorMsg("Formato de correo inválido");
      return;
    }

    setLoading(true);
    const resultado = await login(email, password, recordarme);
    setLoading(false);

    if (resultado?.success) {
      setErrorMsg("");
      navigate("/");
    } else {
      setErrorMsg(resultado?.mensaje || "Credenciales incorrectas");
    }
  };

  return (
    <PageWrapper>
      <LoginContainer>
        <LoginTitle>Iniciar sesión</LoginTitle>
        <LoginForm onSubmit={autenticarUsuario}>
          <input 
            type="email"
            aria-label="Correo electrónico"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password"
            aria-label="Contraseña"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Recordarme>
            <input 
              type="checkbox"
              id="recordarme"
              checked={recordarme}
              onChange={(e) => setRecordarme(e.target.checked)}
            />
            <label htmlFor="recordarme"> Recordarme </label>
          </Recordarme>
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <Boton 
            texto={loading ? "Ingresando..." : "Iniciar sesión"} 
            tipo="primary" 
            type="submit" 
          />
        </LoginForm>

        <ForgotPassword>
          <Boton 
            texto="Olvidé mi contraseña" 
            tipo="secondary" 
            type="button" 
            onClick={() => navigate("/forgot-password")} 
          />
        </ForgotPassword>

        <Register>
          <label>¿Aún no tienes una cuenta?</label>
          <Boton 
            texto="Registrarme" 
            tipo="primary" 
            type="button"
            onClick={() => navigate("/registrarme")}
          />
        </Register>
      </LoginContainer>
    </PageWrapper>
  );
};

export default Login;