export const manejarError = (error, mensajeDefault, setError) => {
  console.error("Error capturado:", error);

  let mensaje;

  if (error instanceof Error) {
    mensaje = error.message;
  } else if (typeof error === "string") {
    mensaje = error;
  } else {
    mensaje = mensajeDefault;
  }

  if (typeof setError === "function") {
    setError(mensaje);
  }

  return mensaje;
};