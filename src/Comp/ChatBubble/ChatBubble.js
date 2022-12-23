import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'
import './ChatBubble.css'

const ChatBubble = ({memory}) => {
    return (
        <div className='pl-8 gap-3 flex items-center justify-between mainBubble hover:translate-x-[-0.5em]  transition-all'>
            <div className='optionIcon transition-all cursor-pointer p-2 hover:shadow-md rounded-full'>
                <BsThreeDotsVertical/>
            </div>
            <div className='shadow-md hover:shadow-lg inline-block text-lg font-medium p-4 rounded-md'>
            <div>
                {memory.memory}
            </div>
            </div>
        </div>
    );
};

export default ChatBubble;