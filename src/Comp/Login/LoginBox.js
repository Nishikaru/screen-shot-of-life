import React from 'react';
import LoginForm from './LoginForm/LoginForm';

const LoginBox = () => {
    return (
        <div className='w-[800px] h-[500px] shadow-lg mt-[-4em] rounded-md flex flex-row-reverse'>
            
            <LoginForm/>
            
            <div className='w-1/2 flex items-center justify-center '>
                <h1 className='text-4xl font-semibold capitalize'>
                    Please<br />log in
                </h1>
            </div>
        </div>
    );
};

export default LoginBox;