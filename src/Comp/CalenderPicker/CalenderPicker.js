import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const CalendarPicker = () => {
  const navigate = useNavigate();

  const {user} = useContext(AuthContext);
  const [value, onChange] = useState(new Date());
  useEffect(()=>{
    if(value.toLocaleDateString()==new Date().toLocaleDateString()){
    }else{
      console.log(value.toLocaleDateString())
      navigate(`/memory/${user.email}/${value.toLocaleDateString()}`)
    }
  },[value])
  return (
    <div className='shadow-lg text-xl'>
      <Calendar className='rounded-md' onChange={onChange} value={value} />
    </div>
  );
}
export default CalendarPicker;