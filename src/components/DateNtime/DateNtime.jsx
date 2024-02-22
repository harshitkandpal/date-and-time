import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './DateNtime.module.css'

function DateNtime() {
    const [selectedRange, setSelectedRange] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection',
        },
      ]);
    
      const handleSelect = (ranges) => {
        setSelectedRange([ranges.selection]);
      };
    
      return (
        <div>
          <DateRangePicker
            ranges={selectedRange}
            onChange={handleSelect}
          />
        </div>
      );
    };

export default DateNtime


