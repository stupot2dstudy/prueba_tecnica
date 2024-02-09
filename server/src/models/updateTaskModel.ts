import Task from './Task';  // Importa la interfaz o clase Task desde el archivo Task.ts para definir el tipo de objeto de tarea.
import { getConnection } from '../db/getConnection';  // Importa la función getConnection desde el archivo getConnection.ts para establecer la conexión a la base de datos.
import { Connection } from 'mysql2/promise';  // Importa el tipo Connection de mysql2/promise para tipar la variable de conexión.

export const updateTaskModel = async (taskId: number, description: string, status: 'pending' | 'in_progress' | 'completed'): Promise<Task | null> => {
  let connection: Connection | undefined;  // Declara una variable connection que será de tipo Connection o undefined.
  try {
    // Establece la conexión a la base de datos
    connection = await getConnection();

    // Actualiza la tarea en la base de datos
    const [result]: any = await connection.query(
      'UPDATE tasks SET description = ?, status = ?, updated_at = NOW() WHERE id = ?',
      [description, status, taskId]
    );

    // Verifica si la operación de actualización fue exitosa
    if (result && result.affectedRows > 0) {
      // Recupera la tarea actualizada de la base de datos
      const [rows]: any = await connection.query(
        'SELECT * FROM tasks WHERE id = ?',
        [taskId]
      );

      // Verifica si se encontró una tarea
      if (rows.length > 0) {
        const taskData = rows[0];

        // Construye y devuelve el objeto de tarea actualizado
        const updatedTask: Task = {
          id: taskData.id,
          title: taskData.title,
          description: taskData.description,
          status: taskData.status,
          createdAt: new Date(taskData.created_at),
          updatedAt: new Date(taskData.updated_at)
        };
        return updatedTask;
      }
    }

    // Si no se encontró ninguna tarea con el ID proporcionado o la operación de actualización falló, registra un error y devuelve null
    console.error('Error updating task: No task found with the provided ID or update operation failed');
    return null;
  } catch (error) {
    // Registra y devuelve null en caso de cualquier error
    console.error('Error updating task:', error);
    return null;
  } finally {
    // Cierra la conexión
    if (connection) connection.end();
  }
};
