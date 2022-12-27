import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChatBubble from '../ChatBubble/ChatBubble';
import FixedInput from './FixedInput/FixedInput';

const SsBox = () => {
    const memories = useLoaderData();
    return (
        <div className='mx-auto p-4 max-w-[80vw] w-[900px] h-[80vh] items-end flex flex-col-reverse overflow-y-auto'>
            <div className='flex flex-col items-end'>
            {memories.map(memory=><ChatBubble key={memory._id} memory={memory} /> )}
            </div>

            <FixedInput/>
        </div>
    );
};

export default SsBox;