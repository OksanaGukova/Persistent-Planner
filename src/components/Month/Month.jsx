import Day from "../Day/Day";


const daysInMonth = (monthIndex, year) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};


export default function Month({ month, monthIndex, year }) {
  return (
    <div className="month">
      <h2>{month}</h2>
      <div className="days">
        {[...Array(daysInMonth(monthIndex, year))].map((_, day) => (
          <Day
            key={day + 1}
            day={day + 1}
            monthIndex={monthIndex}
            year={year}
          />
        ))}
      </div>
    </div>
  );
}
