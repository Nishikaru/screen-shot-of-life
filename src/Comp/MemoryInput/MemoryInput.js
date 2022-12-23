import React, { useContext } from 'react';
import {MdSend} from 'react-icons/md'
import { AuthContext } from '../UserContext/UserContext';

const MemoryInput = () => {
    const {user} = useContext(AuthContext);
    const sendMemory = async(e)=>{
        e.preventDefault();
        const form = e.target
        const memory = form.memory.value;

        const data = {
            memory:memory,
            time: new Date(),
            user:user?.email
        }

        console.log(data)

        const requestOptions = {

            method: "POST", // post requset
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        };

        const url = 'http://localhost:5000/user'

        fetch(url,requestOptions)
        .then(res=>res.json())
        .then(data=>console.log(data))

    }
    return (
        <div onSubmit={sendMemory} className='absolute bottom-0 left-0  w-screen p-4'>
            <form className='flex w-[900px] mx-auto justify-around'>
                <input className='w-[700px] max-w-[70vw] rounded-md border-2 border-black p-2' placeholder='Memory' type="text" name='memory' />
                <button className='text-3xl rounded-full hover:shadow-lg p-2 transition-all' type='submit'><MdSend/></button>
            </form>
        </div>
    );
};

export default MemoryInput;