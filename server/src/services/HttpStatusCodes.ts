// HttpStatusCodes.ts

/**
 * Objeto que mapea nombres descriptivos a códigos de estado HTTP numéricos.
 */
export const HttpStatusCodes = {
    OK: 200, // Indica que la solicitud ha tenido éxito.
    Creado: 201, // Indica que la solicitud ha tenido éxito y ha resultado en la creación de un nuevo recurso.
    SinContenido: 204, // Indica que la solicitud se ha procesado correctamente, pero no hay contenido para devolver.
    SolicitudIncorrecta: 400, // Indica que la solicitud tiene un formato incorrecto o que no se puede procesar.
    NoAutorizado: 401, // Indica que se requiere autenticación para acceder al recurso.
    Prohibido: 403, // Indica que el servidor entiende la solicitud, pero se niega a cumplirla.
    NoEncontrado: 404, // Indica que el servidor no puede encontrar el recurso solicitado.
    Conflicto: 409, // Indica que la solicitud no se pudo completar debido a un conflicto con el estado actual del recurso.
    ErrorInternoDelServidor: 500, // Indica que se ha producido un error interno en el servidor al procesar la solicitud.
};
