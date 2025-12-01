export const manejarError = (error, mensajeDefault, setError) => {
  // Log completo para debugging
  console.error("Error capturado:", error);

  let mensaje;

  if (error instanceof Error) {
    mensaje = error.message;
  } else if (typeof error === "string") {
    mensaje = error;
  } else {
    mensaje = mensajeDefault;
  }

  // Seteamos el estado de error si existe
  if (typeof setError === "function") {
    setError(mensaje);
  }

  return mensaje;
};