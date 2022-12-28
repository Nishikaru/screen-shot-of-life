import React, { useContext } from 'react';
import {MdSend} from 'react-icons/md'
import { AuthContext } from '../UserContext/UserContext';

const MemoryInput = ({setReload}) => {
    const {user} = useContext(AuthContext);
    const sendMemory = async(e)=>{
        e.preventDefault();
        const form = e.target
        const memory = form.memory.value;

        console.log(new Date().toLocaleTimeString());
        const data = {
            memory:memory,
            date:new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString() ,
            user:user?.email
        }

        // console.log(data)

        const requestOptions = {

            method: "POST", // post requset
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        };

        const url = 'http://localhost:5000/user'

        fetch(url,requestOptions)
        .then(res=>res.json())
        .then(data=>{console.log(data)
            setReload(data.insertedId)
            form.memory.value='';
        })

    }
    return (
        <div onSubmit={sendMemory} className='absolute bottom-0 left-0  w-screen py-4 md:p-4'>
            <form className='flex w-[100vw] md:w-[60vw] mx-auto justify-around'>
                <input className='w-full md:w-[50vw] max-w-[70vw] rounded-md border-2 border-black p-2' placeholder='Memory' type="text" name='memory' />
                <button className='text-3xl rounded-full md:hover:shadow-lg py-2 md:p-2 transition-all' type='submit'><MdSend/></button>
            </form>
        </div>
    );
};

export default MemoryInput;