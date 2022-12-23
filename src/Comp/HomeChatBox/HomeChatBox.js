import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import ChatBubble from '../ChatBubble/ChatBubble';
import MemoryInput from '../MemoryInput/MemoryInput';
import { AuthContext } from '../UserContext/UserContext';

const HomeChatBox = () => {
    const {user} = useContext(AuthContext);
    const [memories,setMemories] = useState([])
    console.log(user)
    useEffect(()=>{
        fetch(`http://localhost:5000/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{setMemories(data)
        // console.log(user)
        })
    },[user])
    return (
        <div className='mx-auto p-4 max-w-[80vw] w-[900px] h-[80vh] items-end flex flex-col-reverse overflow-y-auto'>
            {memories.map(memory=><ChatBubble key={memory._id} memory={memory} /> )}

            <MemoryInput/>
        </div>
    );
};

export default HomeChatBox;