import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChatBubble from '../ChatBubble/ChatBubble';
import FixedInput from './FixedInput/FixedInput';

const SsBox = () => {
    const data = useLoaderData();
    const {allValues,date} =data;
    return (
        <div className='mx-auto p-4 max-w-[80vw] w-[900px] h-[80vh] items-end flex flex-col-reverse overflow-y-auto'>
            <div className='flex flex-col items-end'>
            {allValues.map(memory=><ChatBubble key={memory._id} memory={memory} /> )}
            </div>

            <FixedInput date={date}/>
        </div>
    );
};

export default SsBox;