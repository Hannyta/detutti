import Boton from '../ui/Boton';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  LoginWrapper,
  LoginBox,
  LoginSide,
  LoginDivider,
  Recordarme,
  BotonesRow
} from '../ui/LoginLayout';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recordarme, setRecordarme] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setEmail(parsed.email);
      setRecordarme(true);
    }
  }, []);

  const autenticarUsuario = async (e) => {
  e.preventDefault();

  if (!/\S+@\S+\.\S+/.test(email)) {
    toast.error("Formato de correo inválido", { autoClose: 1200 });
    return;
  }

  setLoading(true);
  const resultado = await login(email, password, recordarme);
  setLoading(false);

  if (resultado?.success) {
    const nombre =
      resultado?.nombre ||
      resultado?.user?.nombre ||
      resultado?.data?.nombre ||
      resultado?.data?.user?.nombre ||
      resultado?.nombreUsuario ||
      "";


    toast.success(`Bienvenido, ${nombre}`, {
      autoClose: 1200 
    });

    if (recordarme) {
      localStorage.setItem("user", JSON.stringify({ email }));
    } else {
      localStorage.removeItem("user");
    }

    navigate("/");
  } else {
    toast.error(resultado?.mensaje || "Credenciales incorrectas", {
      autoClose: 1500,
    });
  }
};
  return (
    <LoginWrapper>
      <LoginBox>

        {/* LADO IZQUIERDO - LOGIN */}
        <LoginSide>
          <h2>Clientes registrados</h2>
          <p>Iniciá sesión para acceder a tu cuenta</p>

          <form onSubmit={autenticarUsuario}>
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

            <Recordarme>
              <input
                type="checkbox"
                id="recordarme"
                checked={recordarme}
                onChange={(e) => setRecordarme(e.target.checked)}
              />
              <label htmlFor="recordarme">Recordarme</label>
            </Recordarme>

            <BotonesRow>
              <Boton 
                tipo="primary"   
                type="submit" 
                disabled={loading}>
                  {loading ? "Ingresando..." : "Iniciar sesión"}
              </Boton>

              <Boton
                tipo="secondary"
                type="button"
                onClick={() => navigate("/forgot-password")}
              >
                Restablecer contraseña
              </Boton>
            </BotonesRow>
            
          </form>
        </LoginSide>

        <LoginDivider />

        {/* LADO DERECHO - REGISTRO */}
        <LoginSide>
          <h2>Nuevos clientes</h2>
          <p>
            Crear una cuenta tiene muchos beneficios: seguimiento de pedidos,
            múltiples direcciones y más.
          </p>

          <Boton
            tipo="primary"
            type="button"
            onClick={() => navigate("/registrarme")}
          >
            Crear una cuenta
          </Boton>
        </LoginSide>

      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;