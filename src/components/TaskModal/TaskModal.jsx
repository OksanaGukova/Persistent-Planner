import React, { useState } from "react";

const TaskModal = ({ day, monthIndex, year, hour, closeModal }) => {
  console.log("Rendering TaskModal for hour", hour);
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSaveTask = () => {
    // Save task to local storage
    const tasks = localStorage.getItem("tasks") || "{}";
    const tasksObj = JSON.parse(tasks);
    const dateKey = `${year}-${monthIndex + 1}-${day}`;
    if (!tasksObj[dateKey]) {
      tasksObj[dateKey] = {};
    }
    tasksObj[dateKey][hour] = task;
    localStorage.setItem("tasks", JSON.stringify(tasksObj));
    closeModal();
  };

  return (
    <div className="modal">
      <h2>
        Enter task for {hour}:00 on {day}/{monthIndex + 1}/{year}
      </h2>
      <textarea value={task} onChange={handleTaskChange} />
      <button onClick={handleSaveTask}>Save Task</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default TaskModal;
