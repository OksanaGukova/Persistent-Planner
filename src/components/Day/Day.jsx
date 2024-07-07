
import { useState } from "react";
import TaskModal from "../TaskModal/TaskModal";
import Hour from "../Hour/Hour";


const hoursInDay = 24;

export default function Day({ day, monthIndex, year }) {
  const [showHours, setShowHours] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);

  const openModal = (hour) => {
    setSelectedHour(hour);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedHour(null);
    setModalOpen(false);
  };

  return (
    <div className="day">
      <div className="day-header" onClick={() => setShowHours(!showHours)}>
        <h3>{day}</h3>
      </div>
      {showHours && (
        <div className="hours">
          {[...Array(hoursInDay)].map((_, hour) => (
            <Hour
              key={hour}
              day={day}
              monthIndex={monthIndex}
              year={year}
              hour={hour}
              openModal={openModal}
            />
          ))}
        </div>
      )}
      {modalOpen && (
        <TaskModal
          day={day}
          monthIndex={monthIndex}
          year={year}
          hour={selectedHour}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
