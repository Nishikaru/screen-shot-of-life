import React from 'react';
import {MdSend} from 'react-icons/md'

const MemoryInput = () => {
    return (
        <div className='absolute bottom-0 mx-auto w-screen p-4'>
            <form className='flex w-[900px] m-auto justify-around'>
                <input className='w-[700px] max-w-[70vw] rounded-md border-2 border-black p-2' placeholder='Memory' type="text" name='memory' id='memory' />
                <button className='text-3xl rounded-full hover:shadow-lg p-2 transition-all' type='submit'><MdSend/></button>
            </form>
        </div>
    );
};

export default MemoryInput;