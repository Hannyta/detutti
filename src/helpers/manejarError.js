export const manejarError = (error, mensajeDefault, setError) => {

  console.error(error);
  const mensaje = error.message || mensajeDefault;
  setError(mensaje);
  return mensaje;
  
};