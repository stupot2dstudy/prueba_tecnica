import express from 'express';  // Importa el módulo express para crear un enrutador.
import { createTask, deleteTask, getAllTasks, getTaskById, updateTask } from '../controllers/index';  // Importa las funciones controladoras para manipular las tareas.

const router = express.Router();  // Crea un nuevo enrutador utilizando la función Router de Express.

// Definir rutas
router.get('/tasks', getAllTasks);  // Define la ruta para obtener todas las tareas y asigna la función controladora getAllTasks a esta ruta.
router.post('/tasks', createTask);  // Define la ruta para crear una nueva tarea y asigna la función controladora createTask a esta ruta.
router.get('/tasks/:taskId', getTaskById);  // Define la ruta para obtener una tarea por su ID y asigna la función controladora getTaskById a esta ruta.
router.put('/tasks/:taskId', updateTask);  // Define la ruta para actualizar una tarea por su ID y asigna la función controladora updateTask a esta ruta.
router.delete('/tasks/:taskId', deleteTask);  // Define la ruta para eliminar una tarea por su ID y asigna la función controladora deleteTask a esta ruta.

export default router;  // Exporta el enrutador para que pueda ser utilizado en otras partes de la aplicación.
