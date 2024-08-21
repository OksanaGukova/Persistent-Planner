import { useState, useEffect } from "react";
import Month from "../../components/Month/Month";

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

export default function Calendar() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="calendar">
      {selectedMonth === null ? (
        months.map((month, index) => (
          <div
            key={index}
            className="month"
            onClick={() => setSelectedMonth(index)}
          >
            {month}
          </div>
        ))
      ) : selectedMonth >= 0 && selectedMonth < months.length ? (
        <Month
          month={months[selectedMonth]}
          monthIndex={selectedMonth}
          year={currentYear}
          setSelectedMonth={setSelectedMonth}
        />
      ) : null}
    </div>
  );
}
