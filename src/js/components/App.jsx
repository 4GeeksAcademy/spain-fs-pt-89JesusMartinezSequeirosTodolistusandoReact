import React, { useState } from "react"; // necesario crear componentes permite gestionar el estado del componente
import TodoList from "./TodoList"; // importa componente

const App = () => {
    const [tasks, setTasks] = useState([]); // tasks array almacena lista de tareas, setTasks permite actualizar el array, inicia como array vacio

    const addTask = (event) => {
        if (event.key === "Enter" && event.target.value.trim() !== "") {
            setTasks([...tasks, event.target.value]);
            event.target.value = "";
        }
    };

    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index)); // filter crea un nuevo array excluyendo la tarea que queremos eliminar 
    };

    return (
        <div className="todo-container">
            <h1>Todos</h1>
            <input type="text" placeholder="What needs to be done?" onKeyDown={addTask} />
            <TodoList tasks={tasks} deleteTask={deleteTask} />
            <p>{tasks.length} item{tasks.length !== 1 ? "s" : ""} left</p>
        </div>
    );
};

export default App;