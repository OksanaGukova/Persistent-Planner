
import { useState } from "react";
import Calendar from "./components/Calendar/Calendar";



const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);

  return (
    <div className="App">
      <Calendar
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
    </div>
  );
};


export default App;