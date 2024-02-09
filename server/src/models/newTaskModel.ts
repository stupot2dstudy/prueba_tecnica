import Task from './Task'; // Importa la interfaz Task desde el archivo Task.ts para definir el tipo de objeto de tarea.
import { getConnection } from '../db/getConnection'; // Importa la función getConnection desde el archivo getConnection.ts para establecer la conexión a la base de datos.
import { Connection } from 'mysql2/promise'; // Importa el tipo Connection de mysql2/promise para tipar la variable de conexión.

export const createTaskModel = async (title: string, description: string, status: 'pending' | 'in_progress' | 'completed'): Promise<Task | null> => {
  let connection: Connection | undefined; // Declara una variable connection que será de tipo Connection o undefined.
  try {
    // Establece la conexión a la base de datos
    connection = await getConnection();

    // Inserta la tarea en la base de datos
    const [result]: any = await connection.query(
      'INSERT INTO tasks (title, description, status, created_at) VALUES (?, ?, ?, NOW())',
      [title, description, status]
    );

    // Verifica si el resultado está definido
    if (result && result.insertId) {
      const insertedId = result.insertId;

      // Construye y devuelve el objeto de tarea con el ID insertado
      const newTask: Task = {
        id: insertedId,
        title,
        description,
        status,
        createdAt: new Date()
      };
      return newTask;
    } else {
      console.error('Error creating task: No insertId found in result:', result);
      return null;
    }
  } catch (error) {
    console.error('Error creating task:', error);
    return null;
  } finally {
    // Cierra la conexión
    if (connection) connection.end();
  }
};
