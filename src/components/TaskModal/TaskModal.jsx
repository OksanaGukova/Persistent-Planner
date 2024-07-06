import { useState, useEffect } from "react";

export default function TaskModal({ day, monthIndex, hour, closeModal }) {
  const [task, setTask] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    const taskKey = `${monthIndex}-${day}-${hour}`;
    if (savedTasks[taskKey]) {
      setTask(savedTasks[taskKey]);
    }
  }, [day, monthIndex, hour]);

  const handleTaskChange = (e) => {
    const newTask = e.target.value;
    setTask(newTask);

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || {};
    const taskKey = `${monthIndex}-${day}-${hour}`;
    savedTasks[taskKey] = newTask;
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
  };

  return (
    <div className="task-modal">
      <div className="task-modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2>
          Завдання для {day} {monthIndex + 1}, {hour}:00
        </h2>
        <textarea
          rows="4"
          value={task}
          onChange={handleTaskChange}
          placeholder="Завдання..."
        ></textarea>
      </div>
    </div>
  );
}