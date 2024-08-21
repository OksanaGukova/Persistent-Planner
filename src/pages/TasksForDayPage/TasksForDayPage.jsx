import { useLocation } from "react-router-dom";
import Hour from "../../components/Hour/Hour";
import css from "./TasksForDayPage.module.css";
import { useState } from "react";
import TaskModal from "../../components/TaskModal/TaskModal";

const hoursInDay = 24;

export default function TasksForDayPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);


    const day = queryParams.get("day");
  const month = queryParams.get("month");
  const year = queryParams.get("year");

   const openModal = (hour) => {
   setSelectedHour(hour);
   setModalOpen(true);

 };
   const closeModal = () => {
     setSelectedHour(null);
     setModalOpen(false);
   };

  return (
    <div className={css.hoursContainer}>
      <h2>
        Hours for {day}/{month}/{year}
      </h2>
      {
        <div className="hours">
          {[...Array(hoursInDay)].map((_, hour) => (
            <Hour key={hour} hour={hour} onClick={() => openModal(hour)} />
          ))}
        </div>
      }

      {modalOpen && (
        <TaskModal
          day={day}
          month={month}
          year={year}
          hour={selectedHour}
          closeModal={closeModal}
        >
          <div>Modal content</div>
        </TaskModal>
      )}
    </div>
  );
}
