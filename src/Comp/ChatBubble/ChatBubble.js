import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'
import './ChatBubble.css'

const ChatBubble = ({memory}) => {
    // console.log(memory)
    return (
        <div className='max-w-[700px] pl-8 gap-1 flex flex-col items-end justify-between mainBubble hover:translate-x-[-0.5em]  transition-all'>
            <div className='flex items-center justify-center'>
            <div className='optionIcon transition-all cursor-pointer p-2 hover:shadow-md rounded-full'>
                <BsThreeDotsVertical/>
            </div>
            <div className='max-w-[600px] shadow-md hover:shadow-lg inline-block text-lg font-medium p-4 rounded-md'>
            <div>
                {memory.memory}
            </div>
            </div>

            </div>
            <p className='text-sm text-slate-600 font-light' >{memory.time}</p>
        </div>
    );
};

export default ChatBubble;