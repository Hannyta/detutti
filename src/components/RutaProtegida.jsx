import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const RutaProtegida = ({ children, rolRequerido }) => {
  const { isAuthenticated, user } = useAuthContext();
  const location = useLocation();

  if (isAuthenticated === undefined) {
    return <div role="status" aria-busy="true">Verificando sesión...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (rolRequerido) {
    const rolesPermitidos = Array.isArray(rolRequerido) ? rolRequerido : [rolRequerido];
    if (!rolesPermitidos.includes(user?.rol)) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default RutaProtegida;