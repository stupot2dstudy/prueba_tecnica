import express from 'express';  // Importa el framework Express para crear y configurar el servidor web.
import bodyParser from 'body-parser';  // Importa el middleware bodyParser para analizar los cuerpos de las solicitudes entrantes en formato JSON.
import taskRoutes from './src/routes/routes';  // Importa las rutas definidas en el archivo routes.ts.
import { notFoundController } from './src/middlewares/notFoundController';  // Importa el controlador de la página no encontrada.
import dotenv from 'dotenv';  // Importa dotenv para cargar variables de entorno desde un archivo .env.

dotenv.config();  // Carga las variables de entorno definidas en el archivo .env en el proceso de Node.js.

const app = express();  // Crea una instancia de la aplicación Express.
const PORT = process.env.PORT;  // Obtiene el puerto del entorno en el que se ejecuta la aplicación.

// Middleware
app.use(bodyParser.json());  // Utiliza el middleware bodyParser para analizar las solicitudes con formato JSON.

// Rutas
app.use(taskRoutes);  // Asocia las rutas definidas en taskRoutes con la aplicación Express.

// Manejo de errores 404
app.use(notFoundController);  // Utiliza el controlador de página no encontrada cuando ninguna ruta coincide con la solicitud.

// Iniciar el servidor
app.listen(PORT, () => {  // Inicia el servidor Express en el puerto especificado.
    console.log(`Servidor corriendo en el puerto ${PORT}`);  // Muestra un mensaje en la consola indicando que el servidor se ha iniciado correctamente en el puerto especificado.
});
