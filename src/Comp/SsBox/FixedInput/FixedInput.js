import React from 'react';

const FixedInput = ({date}) => {
    return (
        <div className='absolute bottom-0 left-0  w-screen p-4'>
            <form className='flex w-[900px] mx-auto justify-around' action="">
            <input className='w-[700px] max-w-[70vw] rounded-md border-2 border-black p-2 text-center' type="text" value={date} name="" id="" readOnly/>
            </form>
        </div>
    );
};

export default FixedInput;