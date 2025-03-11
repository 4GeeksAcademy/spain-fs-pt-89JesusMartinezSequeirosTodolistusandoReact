import React from "react"; //importamos react
import TodoItem from "./TodoItem"; //importamos componente

//declaramos constante y recibimos las propiedades que vienen del componente 
//tasks, deleteTask contiene las tareas que se mostraran y funcion para eliminar
const TodoList = ({ tasks, deleteTask }) => {
    return (
        <ul>
            {tasks.length === 0 ? (
                <li>No hay tareas, añade una nueva.</li>
            ) : (
                tasks.map((task, index) => (
                    <TodoItem key={index} task={task} deleteTask={() => deleteTask(index)} />
                ))
            )}
        </ul>
    );
};

export default TodoList;