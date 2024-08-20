import Day from "../Day/Day";
import PropTypes from "prop-types";
import css from './Month.module.css'
import { useState } from "react";

const daysInMonth = (monthIndex, year) => {
  if (
    typeof monthIndex !== "number" ||
    typeof year !== "number" ||
    isNaN(monthIndex) ||
    isNaN(year)
  ) {
    throw new Error(`Invalid monthIndex or year: ${monthIndex}, ${year}`);
  }

  const days = new Date(year, monthIndex + 1, 0).getDate();

  if (days <= 0 || isNaN(days)) {
    throw new Error(`Invalid number of days calculated: ${days}`);
  }

  return days;
};

const Month = ({ month, monthIndex, year }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const numDays = daysInMonth(monthIndex, year);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className={css.month}>
      <h2 className={css.monthHeader}>{month}</h2>
      <div className={css.daysGrid}>
        {selectedDay ? (
          <Day
            key={selectedDay}
            day={selectedDay}
            monthIndex={monthIndex}
            year={year}
            showHours={true}
          />
        ) : (
          [...Array(numDays)].map((_, day) => (
            <Day
              key={day + 1}
              day={day + 1}
              monthIndex={monthIndex}
              year={year}
              onClick={() => handleDayClick(day + 1)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Month