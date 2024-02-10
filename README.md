
# Guía para configurar y ejecutar el servidor Node.js con base de datos MySQL en AWS

# En esta guía, aprenderás cómo configurar y ejecutar un servidor Node.js que se conecta a una base de datos MySQL alojada en AWS. Cubriremos los siguientes pasos:

1. Configuración del archivo .env para almacenar las variables de entorno.
2. Inicialización del servidor Node.js.
3. Importa y utiliza los controladores y middleware necesarios para manejar las solicitudes y respuestas.

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

- Clona el repositorio:
```bash
git clone git@github.com:stupot2dstudy/prueba_tecnica.git
```
- Ve a la carpeta Server dentro del repositorio:
```bash
cd prueba_tecnica
cd server
```
- Instala las depencias:
```bash
npm install
```
Una vez instaladas las dependencias, puedes iniciar el servidor Node.js ejecutando el siguiente comando:

- Inicia el Servidor:
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
    - POST http://localhost:8080/tasks

### Controlador updateTask
Descripción: Maneja la actualización de una tarea existente.
Valores requeridos: taskId, descripción, estado.
Función: updateTask
    (description: string, status: string).
    - PUT http://localhost:8080/tasks/:taskId

### Controlador deleteTask
Descripción: Maneja la eliminación de una tarea existente.
Valores requeridos: taskId.
Función: deleteTask
    (taskId: number).
    - DELETE http://localhost:8080/tasks/:taskId

### Controlador getTaskById
Descripción: Recupera una tarea por su ID.
Valores requeridos: taskId.
Función: getTaskById
    (taskId: number)
    - GET http://localhost:8080/tasks/:taskId

### Controlador getAllTasks
Descripción: Recupera todas las tareas.
    Función: getAllTasks():
    - GET http://localhost:8080/tasks



## Para configurar una instancia básica de MySQL en AWS RDS, puedes seguir estos pasos:

# Inicio de sesión en AWS:

1. Inicia sesión en tu cuenta de AWS en la consola de administración de AWS: AWS Management Console [aqui](https://aws.amazon.com/free/?gclid=CjwKCAiA2pyuBhBKEiwApLaIO2JFXeSxbzxB39wh6qnjgkp2JhCMM1BKCAECjDd2i13YryqznPlzdxoCY_gQAvD_BwE&trk=349e66be-cf8d-4106-ae2c-54262fc45524&sc_channel=ps&ef_id=CjwKCAiA2pyuBhBKEiwApLaIO2JFXeSxbzxB39wh6qnjgkp2JhCMM1BKCAECjDd2i13YryqznPlzdxoCY_gQAvD_BwE:G:s&s_kwcid=AL!4422!3!455709741726!e!!g!!aws%20console!10817378576!108173614282&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all).

2. Navegación a RDS:

Una vez que hayas iniciado sesión, navega hasta el servicio de Amazon RDS haciendo clic en "Servicios" en la parte superior de la pantalla y luego selecciona "RDS" bajo la sección "Bases de datos".

3. Creación de una instancia de base de datos:

Haz clic en "Crear base de datos" para iniciar el proceso de creación de una nueva instancia de base de datos. A continuación, selecciona el motor de base de datos MySQL.

4. Configuración básica:

Configura los siguientes detalles básicos de tu instancia de base de datos:

 - Motor de base de datos: MySQL
 - Versión del motor: Se Eligo la versión de MySQL.
 - Plantilla de uso: Se eligo "Desarrollo".

 - Configuración de la instancia: Se ha seleccionado el  tamaño minimo para realizar pruebas.
 - Autenticación: Configura el nombre de usuario y la contraseña para acceder a la base de datos.
 
 - Revisión y creación:


Una vez que hayas creado tu instancia de base de datos en RDS, puedes conectar tu aplicación Node.js a esta instancia utilizando estos detalles de conexión.

En cuanto a la documentación sobre la arquitectura de MySQL en AWS, aquí tienes algunos enlaces de referencia:

Documentación oficial de Amazon RDS para MySQL [aqui] (https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.MySQL.html
)
Guía de arquitectura de Amazon RDS[aqui](https://aws.amazon.com/architecture/databases/
)
Tutorial de implementación de MySQL en AWS RDS [aqui] (https://aws.amazon.com/getting-started/hands-on/create-mysql-db/
)

Estos recursos proporcionan una visión general de cómo funciona MySQL en AWS, los aspectos de configuración y administración, así como las mejores prácticas para implementar y administrar instancias de MySQL en RDS.



