import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { useDispatch } from 'react-redux';
import { setFishDate } from '../../redux/slices/PostSlice';

import 'react-calendar/dist/Calendar.css';
import { Button, Stack } from '@mui/material';

export default function CalendarComponent() {
  const dispatch = useDispatch();

  const [value, onChange] = useState(new Date());
  const [calendarToggler, setCalendar] = useState(true);

  const newDateFunc = () => {
    let newDate = moment(value).format('L');
    dispatch(setFishDate(newDate));
    setCalendar(!calendarToggler);
  };

  React.useEffect(() => {
    newDateFunc();
  }, [value]);

  const displayCalendar = () => {
    setCalendar(!calendarToggler);
  };

  return (
    <>
      <Button
        onClick={displayCalendar}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '200px',
          marginBottom: '10px',
        }}>
        {calendarToggler ? 'Скрыть календарь' : 'Показать календарь'}
      </Button>
      <Stack
        sx={
          calendarToggler
            ? { marginBottom: '10px', display: 'unset' }
            : {
                marginBottom: '10px',
                display: 'none',
              }
        }>
        <Calendar onChange={onChange} value={value} />
      </Stack>
    </>
  );
}
