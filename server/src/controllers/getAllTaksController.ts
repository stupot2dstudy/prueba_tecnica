import { getAllTasksModel } from '../models';
import { Request, Response } from 'express';
import { HttpStatusCodes } from '../services/HttpStatusCodes';

// Controlador para obtener todas las tareas
export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await getAllTasksModel();

        console.log('Código de estado HTTP:', HttpStatusCodes.OK); // Muestra el código de estado HTTP en la consola
        res.json(tasks);
    } catch (error) {
        console.error('Error getting tasks:', error);
        console.log('Código de estado HTTP:', HttpStatusCodes.ErrorInternoDelServidor); // Muestra el código de estado HTTP en la consola
        res.status(HttpStatusCodes.ErrorInternoDelServidor).json({ error: 'Internal Server Error' });
    }
};
