import { Request, Response } from 'express';
import { getTaskByIdModel } from '../models';
import { HttpStatusCodes } from '../services/HttpStatusCodes';

// Controlador para obtener una tarea por su ID
export const getTaskById = async (req: Request, res: Response) => {
    try {
        const taskId = parseInt(req.params.taskId);

        // Verificar si taskId es NaN o si no está presente
        if (isNaN(taskId)) {
            console.log('Código de estado HTTP:', HttpStatusCodes.SolicitudIncorrecta);
            return res.status(HttpStatusCodes.SolicitudIncorrecta).json({ error: 'ID de tarea no válido' });
        }

        const task = await getTaskByIdModel(taskId);

        if (task) {
            console.log('Código de estado HTTP:', HttpStatusCodes.OK);
            res.json(task);
        } else {
            console.log('Código de estado HTTP:', HttpStatusCodes.NoEncontrado);
            res.status(HttpStatusCodes.NoEncontrado).json({ message: 'Tarea no encontrada' });
        }
    } catch (error) {
        console.error('Error getting task by ID:', error);
        console.log('Código de estado HTTP:', HttpStatusCodes.ErrorInternoDelServidor);
        res.status(HttpStatusCodes.ErrorInternoDelServidor).json({ error: 'Internal Server Error' });
    }
};
