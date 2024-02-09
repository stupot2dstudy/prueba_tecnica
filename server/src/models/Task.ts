interface Task {
    id?: number; // El id es opcional ya que es autoincremental en la base de datos
    title: string; // Título de la tarea, es obligatorio y debe ser una cadena de texto
    description?: string; // Descripción de la tarea, opcional y debe ser una cadena de texto
    status?: 'pending' | 'in_progress' | 'completed'; // Estado de la tarea, opcional y debe ser uno de los tres valores especificados
    createdAt?: Date; // Marca de tiempo de creación de la tarea, opcional y debe ser un objeto Date
    updatedAt?: Date; // Marca de tiempo de actualización de la tarea, opcional y debe ser un objeto Date
}

export default Task; // Exporta la interfaz Task para que pueda ser utilizada en otros archivos
