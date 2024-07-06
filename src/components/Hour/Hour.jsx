
export default function Hour({ day, monthIndex, hour, openModal }) {
  return (
    <div className="hour" onClick={() => openModal(hour, day, monthIndex)}>
      <label>{hour}:00</label>
    </div>
  );
}
