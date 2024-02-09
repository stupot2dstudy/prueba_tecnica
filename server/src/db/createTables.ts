import { getConnection } from './getConnection'; // Importa la función getConnection desde el archivo getConnection.ts para establecer la conexión a la base de datos MySQL.
import { Connection } from 'mysql2/promise'; // Importa el tipo Connection de mysql2/promise para tipar la variable de conexión.

// Consultas SQL para crear tablas
const createTableQueries = [
  `CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
  )`,
  `CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('pending', 'in_progress', 'completed') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  )`
];

// Función para ejecutar las consultas SQL
export async function createTables() {
  let connection: Connection | undefined; // Declara una variable connection que será de tipo Connection o undefined.
  try {
    // Establece la conexión a la base de datos
    connection = await getConnection();

    // Ejecuta cada consulta para crear tablas
    for (const query of createTableQueries) {
      await connection.query(query);
    }

    console.log('Tablas creadas correctamente'); // Muestra un mensaje en la consola indicando que las tablas se han creado correctamente.
  } catch (error) {
    console.error('Error al crear las tablas:', (error as Error).message); // Registra un error en la consola en caso de error al crear las tablas.
  } finally {
    // Cierra la conexión
    if (connection) connection.end();
  }
}

// Llama a la función para crear las tablas
createTables();
