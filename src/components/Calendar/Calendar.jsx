
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

export default function Calendar({ selectedMonth, setSelectedMonth }) {
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
     ) : (
       <Month
         month={months[selectedMonth]}
         monthIndex={selectedMonth}
         setSelectedMonth={setSelectedMonth}
       />
     )}
   </div>
 );
}
