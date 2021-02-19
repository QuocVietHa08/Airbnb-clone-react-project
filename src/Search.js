import React, { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  };
  return (
    <div className='search'>
      <DateRangePicker
        className='search__date'
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    </div>
  );
}

export default Search;
