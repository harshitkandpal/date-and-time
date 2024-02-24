import DateNtime from "./components/DateNtime/DateNtime";
import { useState } from "react";

function App() {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(new Date());

  const handleDateChange = (selection) => {
    setSelectedStartDate(selection.startDate);
    setSelectedEndDate(selection.endDate);
  };

  /*Modes 
    Default
    withOutShowDateDisplay
    withOutSidebar
    withOutSidebarAndDateDisplay
    singleMode
    singleModeWithOutDateDisplay
    singleModeWithOutSidebar
    singleModeWithOutSidebarAndDateDisplay
    singleModeWithOutSidebarAndDateDisplayBtn
  */

  return (
    <div>
      <DateNtime 
      mode="Default"
      secBtn= "Label"
      primeBtn= "Label"
      initialStartDate= {selectedStartDate}
      initialEndDate= {selectedEndDate}
      onDateChange= {handleDateChange}
      />
    </div>
  );
}

export default App;
