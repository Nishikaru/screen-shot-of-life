import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPicker = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='shadow-lg text-xl'>
      <Calendar className='rounded-md' onChange={onChange} value={value} />
    </div>
  );
}
export default CalendarPicker;