import { Request, Response } from 'express';
import { createTaskModel } from '../models';
import { HttpStatusCodes } from '../services/HttpStatusCodes';

// Controlador para crear una nueva tarea
export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, status } = req.body;

        if (!title || !description || !status) {
            console.log('Código de estado HTTP:', HttpStatusCodes.SolicitudIncorrecta); // Muestra el código de estado HTTP en la consola
            return res.status(HttpStatusCodes.SolicitudIncorrecta).json({ error: 'Faltan campos obligatorios' });
        }

        const newTask = await createTaskModel(title, description, status);

        console.log('Código de estado HTTP:', HttpStatusCodes.Creado); // Muestra el código de estado HTTP en la consola
        res.status(HttpStatusCodes.Creado).json({ task: newTask, message: 'Tarea creada' });
    } catch (error) {
        console.error('Error creating task:', error);
        console.log('Código de estado HTTP:', HttpStatusCodes.ErrorInternoDelServidor); // Muestra el código de estado HTTP en la consola
        res.status(HttpStatusCodes.ErrorInternoDelServidor).json({ error: 'Internal Server Error' });
    }
};
