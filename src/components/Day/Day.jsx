import {  useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import css from "./Day.module.css";


const hoursInDay = 24;

export default function Day(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [showHours, setShowHours] = useState(false);


  const urlDay = queryParams.get("day");
  const urlMonth = queryParams.get("month");
  const urlYear = queryParams.get("year");

  const day = props.day || urlDay;
  const monthIndex = props.monthIndex || urlMonth - 1;
  const year = props.year || urlYear;

  const handleDayClick = () => {
    setShowHours(true);
    navigate(`/tasks/day?day=${day}&month=${monthIndex + 1}&year=${year}`);
    
  };
  return (
    <div className={css.dayCell}>
      <div className="day-header" onClick={() => setShowHours(handleDayClick)}>
        <h3>{day}</h3>
      </div>
    </div>
  );
};