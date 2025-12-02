import Boton from '../components/Boton';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

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
    <div className={styles.pageWrapper}>
      <div className={styles.loginContainer}>
        <h2>Iniciar sesión</h2>
        <form onSubmit={autenticarUsuario} className={styles.loginForm}>
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
          <div className={styles.recordarme}>
            <input 
              type="checkbox"
              id="recordarme"
              checked={recordarme}
              onChange={(e) => setRecordarme(e.target.checked)}
            />
            <label htmlFor="recordarme"> Recordarme </label>
          </div>
          {errorMsg && <p className={styles.error}>{errorMsg}</p>}
          <Boton texto={loading ? "Ingresando..." : "Iniciar sesión"} tipo="primary" type="submit" />
        </form>

        <div className={styles.forgotPassword}>
          <Boton 
            texto="Olvidé mi contraseña" 
            tipo="secondary" 
            type="button" 
            onClick={() => navigate("/forgot-password")} 
          />
        </div>

        <div className={styles.register}>
          <label>¿Aún no tienes una cuenta?</label>
          <Boton 
            texto="Registrarme" 
            tipo="primary" 
            type="button"
            onClick={() => navigate("/registrarme")}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;