import Boton from '../components/Boton';
import { useState } from 'react';

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
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={autenticarUsuario} className="login-form">
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
        <div className="recordarme">
          <input 
            type="checkbox"
            id="recordame"
            checked={recordarme}
            onChange={(e) => setRecordarme(e.target.checked)}
          />
          <label htmlFor="recordarme"> Recordarme </label>
        </div>
        <Boton
          texto="Iniciar sesión"
          tipo="primary"
          onClick={autenticarUsuario}
        />
        <Boton
          texto="Olvidé mi contraseña"
          tipo="secondary"
        />
        <Boton
          texto="Registrarme"
          tipo="primary"
        />
      </form>
    </div>
  )
}

export default Login;