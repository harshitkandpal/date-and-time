import DateNtime from "./components/DateNtime/DateNtime";
import { useState } from "react";


function App() {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const handleDateChange = (selection) => {
    setSelectedStartDate(selection.startDate);
    setSelectedEndDate(selection.endDate);
  };
  return (
    <div >
      <DateNtime
        initialStartDate={selectedStartDate}
        initialEndDate={selectedEndDate}
        onDateChange={handleDateChange}
        months={2}
        direction="horizontal"
        secBtn="Lable"
        primeBtn="Lable"
      />
    </div>
  );
}

export default App;
