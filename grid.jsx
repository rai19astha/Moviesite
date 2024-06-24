import React, { useState } from 'react';
import { TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';

const PriceSelector = () => {
  const [latestPriceChecker, setLatestPriceChecker] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleRadioChange = (event) => {
    setLatestPriceChecker(event.target.value === 'latest');
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select Price Option</FormLabel>
      <RadioGroup
        aria-label="priceOption"
        name="priceOption"
        value={latestPriceChecker ? 'latest' : 'dateRange'}
        onChange={handleRadioChange}
      >
        <FormControlLabel value="latest" control={<Radio />} label="Latest Price" />
        <FormControlLabel value="dateRange" control={<Radio />} label="Date Range" />
      </RadioGroup>

      {!latestPriceChecker && (
        <div>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ marginRight: '10px' }}
          />
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      )}
    </FormControl>
  );
};

export default PriceSelector;
