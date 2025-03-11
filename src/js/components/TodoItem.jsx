import React from "react";

const TodoItem = ({ task, deleteTask }) => {
    return (
        <li className="todo-item">
            {task}
            <span className="delete-btn" onClick={deleteTask}>❌</span>
        </li>
    );
};

export default TodoItem;