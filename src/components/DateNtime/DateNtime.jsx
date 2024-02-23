import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import styles from './DateNtime.module.css';

function DateNtime({
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
    <div className={styles.container}>
      <div>
        <DateRangePicker
          ranges={ranges || selectedRange}
          onChange={handleSelect}
          months={months || 2}
          direction={direction || 'horizontal'}
          showSelectionPreview={showSelectionPreview}
          moveRangeOnFirstSelection={moveRangeOnFirstSelection}
          editableDateInputs={editableDateInputs}
          dragSelectionEnabled={dragSelectionEnabled}
          renderStaticRangeLabel={renderStaticRangeLabel}
          staticRanges={staticRanges}
          inputRanges={inputRanges}
          locale={locale}
          calendars={calendars}
          maxDate={maxDate}
          minDate={minDate}
          disabledDates={disabledDates}
          rangeColors={rangeColors}
          showMonthAndYearPickers={showMonthAndYearPickers}
          showDateDisplay={showDateDisplay}
          showMonthArrow={showMonthArrow}
          showYearArrow={showYearArrow}
          navigate={navigate}
          scroll={scroll}
          className={className}
          weekdayDisplayFormat={weekdayDisplayFormat}
          dayDisplayFormat={dayDisplayFormat}
          monthDisplayFormat={monthDisplayFormat}
          dateDisplayFormat={dateDisplayFormat}
          inputRangesText={inputRangesText}
        />
        <br />
        <div className={styles.btns}>
          <button className={styles.btn}>{secBtn || "secBtn"}</button>
          <button className={styles.btn_primary}>{primeBtn || "primeBtn"}</button>
        </div>
      </div>
    </div>
  );
}

export default DateNtime;
