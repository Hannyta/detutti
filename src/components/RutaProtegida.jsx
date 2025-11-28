import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const RutaProtegida = ({ children, rolRequerido }) => {
  const { isAuthenticated, user } = useAuthContext();
  const location = useLocation();

  if (!isAuthenticated) {
    
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (rolRequerido && user?.rol !== rolRequerido) {
 
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RutaProtegida;