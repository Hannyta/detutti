import { Navigate } from "react-router-dom";

const RutaProtegida = ({ usuarioLogueado, children }) => {
  if (!usuarioLogueado) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default RutaProtegida;