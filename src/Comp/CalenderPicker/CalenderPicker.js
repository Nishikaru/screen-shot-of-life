import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const CalendarPicker = () => {
  const navigate = useNavigate();
  const [counter,setCounter] = useState(0)

  const {user} = useContext(AuthContext);
  const [value, onChange] = useState(new Date());
  useEffect(()=>{
    if(value.toLocaleDateString()==new Date().toLocaleDateString()){
      if(counter>0){
        navigate('/')
      }else{
        setCounter(1);
      }
    }else{
      console.log(value.toLocaleDateString())
      navigate(`/memory/${user.email}/${value.toLocaleDateString()}`)
    }
  },[value])
  return (
    <div className='shadow-lg text-xl ch text-black'>
      <Calendar className='rounded-md' onChange={onChange} value={value} />
    </div>
  );
}
export default CalendarPicker;