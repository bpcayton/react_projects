import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/direct-hit.png";
import DoingIcon from "./assets/glowing-star.png";
import DoneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  // For useEffect:
  // Arg1 - What to run
  // Arg2 - When to run
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const handleDeleteTask = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <TaskForm setTasks={setTasks}></TaskForm>
      <main className="app_main">
        <TaskColumn
          icon={TodoIcon}
          columnName="To Do"
          tasks={tasks}
          status="todo"
          handleDelete={handleDeleteTask}
        />
        <TaskColumn
          icon={DoingIcon}
          columnName="Doing"
          tasks={tasks}
          status="doing"
          handleDelete={handleDeleteTask}
        />
        <TaskColumn
          icon={DoneIcon}
          columnName="Done"
          tasks={tasks}
          status="done"
          handleDelete={handleDeleteTask}
        />
      </main>
    </div>
  );
};

export default App;
