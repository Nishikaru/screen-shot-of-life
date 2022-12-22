import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPicker = () => {
  const [value, onChange] = useState(new Date());
  useEffect(()=>{
    console.log(value);
  },[])
  const datePicker = () => {
    console.log(value);
  }
  return (
    <div className='shadow-lg text-xl'>
      <Calendar className='rounded-md' onClickDay={datePicker} onChange={onChange} value={value} />
    </div>
  );
}
export default CalendarPicker;