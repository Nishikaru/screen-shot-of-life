import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';

const Themes = () => {
    const {themech} = useContext(AuthContext);
    const handleTheme = (color)=>{
        themech(color)
    }
    return (
        <div className=' absolute bottom-2 left-2 flex flex-col p-4 gap-4'>
            <button onClick={()=>handleTheme('dark')} className='w-10 h-10 bg-black border-2 border-black rounded-full'></button>
            <button onClick={()=>handleTheme('light')} className='w-10 h-10 bg-white border-2 border-black rounded-full cursor-pointer'></button>
        </div>
    );
};

export default Themes;