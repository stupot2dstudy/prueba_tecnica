import Task from './Task'; // Importa la interfaz Task desde el archivo Task.ts para definir el tipo de objeto de tarea.
import { getConnection } from '../db/getConnection'; // Importa la función getConnection desde el archivo getConnection.ts para establecer la conexión a la base de datos.
import { Connection } from 'mysql2/promise'; // Importa el tipo Connection de mysql2/promise para tipar la variable de conexión.

export const getAllTasksModel = async (): Promise<Task[]> => {
  let connection: Connection | undefined; // Declara una variable connection que será de tipo Connection o undefined.
  try {
    // Establece la conexión a la base de datos
    connection = await getConnection();

    // Consulta todas las tareas desde la base de datos
    const [rows]: any = await connection.query(
      'SELECT * FROM tasks'
    );

    // Mapea las filas a objetos Task
    const tasks: Task[] = rows.map((row: any) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      status: row.status,
      createdAt: new Date(row.created_at)
    }));

    return tasks; // Devuelve un array de objetos Task que representa todas las tareas recuperadas de la base de datos.
  } catch (error) {
    console.error('Error getting tasks:', error); // Registra el error en la consola si ocurre un error durante el proceso de obtención de tareas.
    return []; // Devuelve un array vacío en caso de error.
  } finally {
    // Cierra la conexión
    if (connection) connection.end(); // Cierra la conexión si existe una conexión abierta.
  }
};
