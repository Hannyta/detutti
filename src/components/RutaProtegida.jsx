import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const RutaProtegida = ({ children, rolRequerido }) => {
  const { isAuthenticated, user } = useAuthContext();
  const location = useLocation();

  // Si aún no se sabe el estado de autenticación
  if (isAuthenticated === undefined) {
    return <p>Cargando...</p>;
  }

  // Si no está autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si se requiere rol y no coincide
  if (rolRequerido && user?.rol !== rolRequerido) {
    return <Navigate to="/" replace />;
  }

  // Si pasa todas las validaciones
  return children;
};

export default RutaProtegida;