import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const RutaProtegida = ({ children, rolRequerido }) => {
  const { isAuthenticated, user } = useAuthContext();
  const location = useLocation();

  // Estado de carga
  if (isAuthenticated === undefined) {
    return <div role="status" aria-busy="true">Verificando sesión...</div>;
  }

  // No autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Validación de rol
  if (rolRequerido) {
    const rolesPermitidos = Array.isArray(rolRequerido) ? rolRequerido : [rolRequerido];
    if (!rolesPermitidos.includes(user?.rol)) {
      return <Navigate to="/" replace />;
    }
  }

  // Autenticado y con rol válido
  return children;
};

export default RutaProtegida;