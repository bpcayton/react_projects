import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteImg from "../assets/delete.png";
const TaskCard = () => {
  return (
    <article className="task_card">
      <p className="task_text">This is sample Text.</p>
      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          <Tag tagName="HTML" />
          <Tag tagName="CSS" />
        </div>
        <div className="task_delete">
          <img src={deleteImg} className="delete_icon" alt="fuck" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
