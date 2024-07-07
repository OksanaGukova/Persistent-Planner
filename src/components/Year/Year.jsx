import { useState } from "react";

import Month from "../Month/Month";

const months = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

export default function Year() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePreviousYear = () => {
    setCurrentYear((prevYear) => prevYear - 1);
  };

  const handleNextYear = () => {
    setCurrentYear((prevYear) => prevYear + 1);
  };

  return (
    <div className="year">
      <button onClick={handlePreviousYear}>Back</button>
      <p>{currentYear}</p>
      <button onClick={handleNextYear}>Next</button>
      <div className="months">
        {months.map((month, index) => (
            <Month
                
            key={index}
            month={month}
            monthIndex={index}
            year={currentYear}
          />
        ))}
      </div>
    </div>
  );
}
