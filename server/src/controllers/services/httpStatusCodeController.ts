import { Request, Response, NextFunction } from 'express';
import { HttpStatusCodes } from '../../services/HttpStatusCodes'; // Importa los códigos de estado HTTP definidos en HttpStatusCodes.ts

// Controlador para mostrar los códigos de estado HTTP en la consola
export const httpStatusCodeController = (req: Request, res: Response, next: NextFunction) => {
    console.log('Códigos de estado HTTP:');
    console.log(`OK: ${HttpStatusCodes.OK}`);
    console.log(`Creado: ${HttpStatusCodes.Creado}`);
    console.log(`Sin Contenido: ${HttpStatusCodes.SinContenido}`);
    console.log(`Solicitud Incorrecta: ${HttpStatusCodes.SolicitudIncorrecta}`);
    console.log(`No Autorizado: ${HttpStatusCodes.NoAutorizado}`);
    console.log(`Prohibido: ${HttpStatusCodes.Prohibido}`);
    console.log(`No Encontrado: ${HttpStatusCodes.NoEncontrado}`);
    console.log(`Conflicto: ${HttpStatusCodes.Conflicto}`);
    console.log(`Error Interno del Servidor: ${HttpStatusCodes.ErrorInternoDelServidor}`);

    next();
};