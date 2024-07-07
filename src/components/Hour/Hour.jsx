
export default function Hour({ hour, openModal }) {
 return (
   <div className="hour" onClick={() => openModal(hour)}>
     <label>{hour}:00</label>
   </div>
 );
}
