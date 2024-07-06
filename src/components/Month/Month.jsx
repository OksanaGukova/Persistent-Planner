import Day from "../Day/Day";

const daysInMonth = 30; // Змінити відповідно до місяця


export default function Month({ month, monthIndex, setSelectedMonth }) {
   return (
     <div className="month-container">
       <button onClick={() => setSelectedMonth(null)}>
         Назад до всіх місяців
       </button>
       <h2>{month}</h2>
       <div className="days">
         {[...Array(daysInMonth)].map((_, day) => (
           <Day key={day + 1} day={day + 1} monthIndex={monthIndex} />
         ))}
       </div>
     </div>
   );
}
