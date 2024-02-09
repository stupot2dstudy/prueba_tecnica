import { Request, Response } from 'express';
import { updateTaskModel } from '../models/';
import { HttpStatusCodes } from '../services/HttpStatusCodes';

export const updateTask = async (req: Request, res: Response) => {
    const taskId = parseInt(req.params.taskId);
    const { description, status } = req.body;

    // Verificar si description o status están indefinidos o nulos
    if (description === undefined || status === undefined) {
        console.log('Código de estado HTTP:', HttpStatusCodes.SolicitudIncorrecta);
        return res.status(HttpStatusCodes.SolicitudIncorrecta).json({ error: 'Faltan campos obligatorios' });
    }

    const updatedTask = await updateTaskModel(taskId, description, status);

    if (updatedTask) {
        console.log('Código de estado HTTP:', HttpStatusCodes.OK);
        res.json(updatedTask);
    } else {
        console.log('Código de estado HTTP:', HttpStatusCodes.NoEncontrado);
        res.status(HttpStatusCodes.NoEncontrado).json({ message: 'Tarea no encontrada' });
    }
};
