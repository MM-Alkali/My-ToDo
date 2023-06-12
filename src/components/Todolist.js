import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

function TodoList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <label>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <div>
              <span className={task.completed ? "completed" : ""}>
                {task.title}
              </span>
              <p className="description">{task.description}</p>
            </div>
          </label>
          <div className="actions">
            <button onClick={() => deleteTask(task.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
