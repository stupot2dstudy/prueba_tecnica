import { deleteTaskModel } from '../models';
import { Request, Response } from 'express';
import { HttpStatusCodes } from '../services/HttpStatusCodes';

// Controlador para eliminar una tarea
export const deleteTask = async (req: Request, res: Response) => {
    try {
        const taskId = parseInt(req.params.taskId);

        if (!taskId) {
            console.log('Código de estado HTTP:', HttpStatusCodes.SolicitudIncorrecta); // Muestra el código de estado HTTP en la consola
            return res.status(HttpStatusCodes.SolicitudIncorrecta).json({ error: 'Falta el ID de la tarea' });
        }

        const deleted = await deleteTaskModel(taskId);

        if (!deleted) {
            console.log('Código de estado HTTP:', HttpStatusCodes.ErrorInternoDelServidor); // Muestra el código de estado HTTP en la consola
            return res.status(HttpStatusCodes.ErrorInternoDelServidor).json({ error: 'Error deleting task' });
        }

        console.log('Código de estado HTTP:', HttpStatusCodes.OK); // Muestra el código de estado HTTP en la consola
        res.json({ message: 'Tarea eliminada' });
    } catch (error) {
        console.error('Error deleting task:', error);
        console.log('Código de estado HTTP:', HttpStatusCodes.ErrorInternoDelServidor); // Muestra el código de estado HTTP en la consola
        res.status(HttpStatusCodes.ErrorInternoDelServidor).json({ error: 'Internal Server Error' });
    }
};
