import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import './default.css';


import styles from './DateNtime.module.css';

function DateNtime({
  mode,
  initialStartDate,
  initialEndDate,
  onDateChange,
  months,
  direction,
  primeBtn,
  secBtn,
  ranges,
  showSelectionPreview,
  moveRangeOnFirstSelection,
  editableDateInputs,
  dragSelectionEnabled,
  renderStaticRangeLabel,
  staticRanges,
  inputRanges,
  locale,
  calendars,
  maxDate,
  minDate,
  disabledDates,
  rangeColors,
  showMonthAndYearPickers,
  showDateDisplay,
  showMonthArrow,
  showYearArrow,
  navigate,
  scroll,
  className,
  weekdayDisplayFormat,
  dayDisplayFormat,
  monthDisplayFormat,
  dateDisplayFormat,
  inputRangesText,
}) {

  const modeConfigurations={
    Default:{
      months: 2,
      direction: "horizontal",
    },
  
    withOutShowDateDisplay: {
      months: 2,
      direction: "horizontal",
      showDateDisplay:false,
    },
  
    withOutSidebar: {
      months: 2,
      direction: "horizontal",
      staticRanges: [],
    },
  
    withOutSidebarAndDateDisplay: {
      months: 2,
      direction: "horizontal",
      staticRanges: [],
      showDateDisplay:false,
    },
  
    singleMode: {
      months: 1,
      direction: "horizontal",
    },
  
    singleModeWithOutDateDisplay: {
      months: 1,
      direction: "horizontal",
      showDateDisplay:false,
    },
  
    singleModeWithOutSidebar: {
      months: 1,
      direction: "horizontal",
      staticRanges: [],
    },
  
    singleModeWithOutSidebarAndDateDisplay: { 
      months: 1,
      direction: "horizontal",
      staticRanges: [],
      showDateDisplay:false,
    },
  
    singleModeWithOutSidebarAndDateDisplayBtn: {
      months: 1,
      direction: "horizontal",
      staticRanges: [],
      showDateDisplay:false,
      hideBtn: true,
    },
  }

  const selectedModeConfig = modeConfigurations[mode] || modeConfigurations.Default;


  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: initialStartDate || new Date(),
      endDate: initialEndDate || new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setSelectedRange([ranges.selection]);
    onDateChange && onDateChange(ranges.selection);
  };


  return (
    <div className={styles.container} style={{ padding: '16px', margin: '0', boxSizing: 'border-box'}}>
      <div>
      <DateRangePicker
        onChange={handleSelect}
        months={selectedModeConfig.months || 2}
        direction={selectedModeConfig.direction || 'horizontal'}
        showDateDisplay={selectedModeConfig.showDateDisplay !== undefined ? selectedModeConfig.showDateDisplay : true}
        ranges={ranges || selectedRange}
        showSelectionPreview={selectedModeConfig.showSelectionPreview}
        moveRangeOnFirstSelection={selectedModeConfig.moveRangeOnFirstSelection}
        editableDateInputs={selectedModeConfig.editableDateInputs}
        dragSelectionEnabled={selectedModeConfig.dragSelectionEnabled}
        renderStaticRangeLabel={selectedModeConfig.renderStaticRangeLabel}
        staticRanges={selectedModeConfig.staticRanges}
        inputRanges={selectedModeConfig.inputRanges||[]}
        locale={selectedModeConfig.locale}
        calendars={selectedModeConfig.calendars}
        maxDate={selectedModeConfig.maxDate}
        minDate={selectedModeConfig.minDate}
        disabledDates={selectedModeConfig.disabledDates}
        rangeColors={selectedModeConfig.rangeColors}
        showMonthAndYearPickers={selectedModeConfig.showMonthAndYearPickers}
        showMonthArrow={selectedModeConfig.showMonthArrow}
        showYearArrow={selectedModeConfig.showYearArrow}
        navigate={selectedModeConfig.navigate}
        scroll={selectedModeConfig.scroll}
        className={selectedModeConfig.className}
        weekdayDisplayFormat={selectedModeConfig.weekdayDisplayFormat}
        dayDisplayFormat={selectedModeConfig.dayDisplayFormat}
        monthDisplayFormat={selectedModeConfig.monthDisplayFormat}
        dateDisplayFormat={selectedModeConfig.dateDisplayFormat}
        inputRangesText={selectedModeConfig.inputRangesText}
      />
        <br />
        <div className={styles.btns}>
          <button className={`${styles.btn_primary} ${selectedModeConfig.hideBtn ? styles.hide : ''}`}>{primeBtn || "primeBtn"}</button>
          <button className={`${styles.btn} ${selectedModeConfig.hideBtn ? styles.hide : ''}`}>{secBtn || "secBtn"}</button>
        </div>
      </div>
    </div>
  );
}

export default DateNtime;
