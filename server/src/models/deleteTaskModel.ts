import Task from './Task'; // Importa la interfaz Task desde el archivo Task.ts para definir el tipo de objeto de tarea.
import { getConnection } from '../db/getConnection'; // Importa la función getConnection desde el archivo getConnection.ts para establecer la conexión a la base de datos.
import { Connection } from 'mysql2/promise'; // Importa el tipo Connection de mysql2/promise para tipar la variable de conexión.

export const deleteTaskModel = async (taskId: number): Promise<boolean> => {
  let connection: Connection | undefined; // Declara una variable connection que será de tipo Connection o undefined.
  try {
    // Establece la conexión a la base de datos
    connection = await getConnection();

    // Elimina la tarea de la base de datos
    const [result]: any = await connection.query(
      'DELETE FROM tasks WHERE id = ?',
      [taskId]
    );

    // Verifica si la tarea se eliminó correctamente
    const affectedRows = result?.affectedRows || 0;
    return affectedRows > 0;
  } catch (error) {
    console.error('Error deleting task:', error); // Registra el error en la consola si ocurre un error durante el proceso.
    return false; // Devuelve false para indicar que la tarea no se pudo eliminar correctamente.
  } finally {
    // Cierra la conexión
    if (connection) connection.end(); // Cierra la conexión si existe una conexión abierta.
  }
};
