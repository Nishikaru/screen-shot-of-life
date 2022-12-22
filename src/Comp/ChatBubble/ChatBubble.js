import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'
import './ChatBubble.css'

const ChatBubble = () => {
    return (
        <div className='pl-8 gap-3 flex items-center justify-between mainBubble hover:translate-x-[-1em]  transition-all'>
            <div className='optionIcon transition-all cursor-pointer p-2 hover:shadow-md rounded-full'>
                <BsThreeDotsVertical/>
            </div>
            <div className='shadow-md hover:shadow-lg inline-block text-lg font-medium p-4 rounded-md'>
            <div>
                This is a text that user posted.
            </div>
            </div>
        </div>
    );
};

export default ChatBubble;