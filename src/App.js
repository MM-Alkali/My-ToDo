import React, { useState, useEffect } from "react";
import TodoList from "./components/Todolist";
import TaskForm from "./components/Taskform";

const LOCAL_STORAGE_KEY = "todoApp.tasks";

function loadTasksFromLocalStorage() {
  const tasksString = localStorage.getItem(LOCAL_STORAGE_KEY);
  return tasksString ? JSON.parse(tasksString) : [];
}

function saveTasksToLocalStorage(tasks) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
}

function TodoApp() {
  const [tasks, setTasks] = useState(loadTasksFromLocalStorage());

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  useEffect(() => {
    saveTasksToLocalStorage(tasks);
  }, [tasks]);

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      return updatedTasks;
    });
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="form">
        <TaskForm
          addTask={addTask}
          tasks={tasks}
        />
      </div>
      <TodoList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default TodoApp;
