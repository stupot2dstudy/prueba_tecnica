import { Request, Response } from 'express'; // Importa los tipos Request y Response de Express para manejar las solicitudes y respuestas HTTP.

// Define el controlador notFoundController que maneja solicitudes para rutas no encontradas.
export const notFoundController = (req: Request, res: Response) => {
    // Envía una respuesta con estado 404 y un mensaje indicando "Not Found".
    res.status(404).json({ message: 'No encontrado' });
};
