import { Stack } from '@mui/material';
import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFishDate } from '../../redux/slices/PostSlice';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const TimePicker = () => {
  const { fishingDate } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  const fishDate = () => {
    dispatch(setFishDate(fishingDate));
  };

  return (
    <Stack sx={{ marginBottom: '10px' }}>
      <DatePicker selected={fishingDate} onChange={(date) => dispatch(setFishDate(date))} />
    </Stack>
  );
};

export default TimePicker;
