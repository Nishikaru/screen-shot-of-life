import React from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';

const HomeChatBox = () => {
    return (
        <div className='mx-auto p-4 max-w-[80vw] w-[900px] h-[80vh] items-end flex flex-col-reverse overflow-y-auto'>
            <ChatBubble/>
            <ChatBubble/>
        </div>
    );
};

export default HomeChatBox;