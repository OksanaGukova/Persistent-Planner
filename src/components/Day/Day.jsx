
import { useState } from "react";
import TaskModal from "../TaskModal/TaskModal";
import Hour from "../Hour/Hour";


const hoursInDay = 24;

export default function Day({ day, monthIndex }) {
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
       <h3>День {day}</h3>
       {[...Array(hoursInDay)].map((_, hour) => (
         <Hour
           key={hour}
           day={day}
           monthIndex={monthIndex}
           hour={hour}
           openModal={openModal}
         />
       ))}
       {modalOpen && (
         <TaskModal
           day={day}
           monthIndex={monthIndex}
           hour={selectedHour}
           closeModal={closeModal}
         />
       )}
     </div>
   );
}
