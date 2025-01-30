import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from "./assets/direct-hit.png";
import DoingIcon from "./assets/glowing-star.png";
import DoneIcon from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm></TaskForm>
      <main className="app_main">
        <TaskColumn icon={TodoIcon} columnName="To Do" />
        <TaskColumn icon={DoingIcon} columnName="Doing" />
        <TaskColumn icon={DoneIcon} columnName="Done" />
      </main>
    </div>
  );
};

export default App;
