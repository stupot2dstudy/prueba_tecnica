import { createConnection } from 'mysql2/promise'; // Importa la función createConnection de mysql2/promise para establecer una conexión a la base de datos MySQL.
import dotenv from 'dotenv'; // Importa dotenv para cargar las variables de entorno desde un archivo .env.

dotenv.config(); // Carga las variables de entorno definidas en el archivo .env en el proceso de Node.js.

// Imprime en la consola los valores de las variables de entorno relacionadas con la base de datos.
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_DATABASE:", process.env.DB_DATABASE);

// Define una función asíncrona getConnection que establece y devuelve una conexión a la base de datos.
export const getConnection = async () => {
  // Establece la conexión utilizando los valores de las variables de entorno.
  const connection = await createConnection({
    host: process.env.DB_HOST, // Establece el host de la base de datos utilizando el valor de la variable de entorno DB_HOST.
    user: process.env.DB_USER, // Establece el usuario de la base de datos utilizando el valor de la variable de entorno DB_USER.
    password: process.env.DB_PASSWORD, // Establece la contraseña de la base de datos utilizando el valor de la variable de entorno DB_PASSWORD.
    database: process.env.DB_DATABASE // Establece la base de datos a la que se conectará utilizando el valor de la variable de entorno DB_DATABASE.
  });
  
  return connection; // Devuelve la conexión establecida.
};
