import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    // Destructure the event properties we want to track
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectTag = (tagName) => {
    if (taskData.tags.some((item) => item === tagName)) {
      const updatedTagsList = taskData.tags.filter((t) => t !== tagName);
      setTaskData((prev) => {
        return { ...prev.tags, tags: updatedTagsList };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev.tags, tags: [...prev.tags, tagName] };
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  console.log(taskData.tags);

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");
  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  //console.log(task, status);
  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter Task Name"
          onBlur={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" selectTag={selectTag} />
            <Tag tagName="CSS" selectTag={selectTag} />
            <Tag tagName="JS" selectTag={selectTag} />
            <Tag tagName="React" selectTag={selectTag} />
          </div>

          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To Do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
