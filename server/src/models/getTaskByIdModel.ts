import Task from './Task'; // Importa la interfaz Task desde el archivo Task.ts para definir el tipo de objeto de tarea.
import { getConnection } from '../db/getConnection'; // Importa la función getConnection desde el archivo getConnection.ts para establecer la conexión a la base de datos.
import { Connection } from 'mysql2/promise'; // Importa el tipo Connection de mysql2/promise para tipar la variable de conexión.

export const getTaskByIdModel = async (taskId: number): Promise<Task | null> => {
  let connection: Connection | undefined; // Declara una variable connection que será de tipo Connection o undefined.
  try {
    // Establece la conexión a la base de datos
    connection = await getConnection();

    // Consulta la tarea desde la base de datos por su ID
    const [rows]: any = await connection.query(
      'SELECT * FROM tasks WHERE id = ?',
      [taskId]
    );

    // Verifica si se encontró una tarea
    if (rows.length > 0) {
      const taskData = rows[0];

      // Construye y devuelve el objeto de tarea
      const task: Task = {
        id: taskData.id,
        title: taskData.title,
        description: taskData.description,
        status: taskData.status,
        createdAt: new Date(taskData.created_at)
      };
      return task; // Devuelve el objeto de tarea encontrado.
    } else {
      // Si no se encuentra ninguna tarea con el ID proporcionado, devuelve null
      return null; // Devuelve null para indicar que no se encontró ninguna tarea con el ID proporcionado.
    }
  } catch (error) {
    console.error('Error getting task by ID:', error); // Registra el error en la consola si ocurre un error durante el proceso de obtención de la tarea por ID.
    return null; // Devuelve null en caso de error.
  } finally {
    // Cierra la conexión
    if (connection) connection.end(); // Cierra la conexión si existe una conexión abierta.
  }
};
