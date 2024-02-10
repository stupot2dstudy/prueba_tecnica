
# Guía para configurar y ejecutar el servidor Node.js con base de datos MySQL en AWS

# En esta guía, aprenderás cómo configurar y ejecutar un servidor Node.js que se conecta a una base de datos MySQL alojada en AWS. Cubriremos los siguientes pasos:

1. Configuración del archivo .env para almacenar las variables de entorno.
2. Creación de las tablas necesarias en la base de datos.
3. Inicialización del servidor Node.js.

##  1. Configuración del archivo `.env`

Antes de comenzar, asegúrate de tener una instancia de base de datos MySQL configurada en AWS RDS. Toma nota de la dirección del host, el puerto, el nombre de usuario y la contraseña que utilizarás para conectarte a la base de datos. Esto lo andiras a .env

```bash
DB_HOST=stupot2d-database-1.c7c22aocw4c8.eu-north-1.rds.amazonaws.com
DB_USER=admin
DB_PASSWORD=Qwerty12345-_
DB_DATABASE=bobsdata
PORT=8080
```
## 2. Inicialización del servidor Node.js
Antes de iniciar el servidor Node.js, asegúrate de haber instalado todas las dependencias del proyecto utilizando el comando:

```bash
npm install
```
Una vez instaladas las dependencias, puedes iniciar el servidor Node.js ejecutando el siguiente comando:

```bash
npm start
```
Esto iniciará tu servidor Node.js en el puerto especificado en el archivo .env, y estará listo para recibir solicitudes y conectarse a la base de datos MySQL en AWS.

¡Y eso es todo! Ahora has configurado y ejecutado con éxito un servidor Node.js conectado a una base de datos MySQL en AWS. ¡Feliz codificación!

## 3. Importa y utiliza los controladores y middleware necesarios para manejar las solicitudes y respuestas.

### Controladores y Rutas

### Controlador createTask
Descripción: Maneja la creación de una nueva tarea.
Valores requeridos: título, descripción, estado.
Función: createTask
    (title: string, description: string, status: enum).

### Controlador updateTask
Descripción: Maneja la actualización de una tarea existente.
Valores requeridos: taskId, descripción, estado.
Función: updateTask
    (description: string, status: string).

### Controlador deleteTask
Descripción: Maneja la eliminación de una tarea existente.
Valores requeridos: taskId.
Función: deleteTask
    (taskId: number).

### Controlador getTaskById
Descripción: Recupera una tarea por su ID.
Valores requeridos: taskId.
Función: getTaskById
    (taskId: number)

### Controlador getAllTasks
Descripción: Recupera todas las tareas.
    Función: getAllTasks():






