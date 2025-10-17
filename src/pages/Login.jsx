import Boton from '../components/Boton';
import { useState } from 'react';
import styles from './Login.module.css';

const Login = ({ setUsuarioLogueado }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recordarme, setRecordarme] = useState(false);

  const autenticarUsuario = (e) => {
    e.preventDefault();
    if (email === "test@demo.com" && password === "1234") {
      setUsuarioLogueado(true);
      alert("Inicio de sesión exitoso");
      setEmail("");
      setPassword("");
      setRecordarme(false);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Iniciar sesión</h2>
      <form onSubmit={autenticarUsuario} className={styles.loginForm}>
        <input 
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password"
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
        <Boton
          texto="Iniciar sesión"
          tipo="primary"
          type="submit"
        />
        <Boton
          texto="Olvidé mi contraseña"
          tipo="secondary"
          type="button"
        />
        <Boton
          texto="Registrarme"
          tipo="primary"
          type="button"
        />
      </form>
    </div>
  )
}

export default Login;