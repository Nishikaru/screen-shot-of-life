import React from 'react';
import LoginForm from './LoginForm/LoginForm';

const LoginBox = ({logIn,signinWithGoogle}) => {
    return (
        <div className='md:w-[800px] md:h-[500px] shadow-lg mt-[-4em] justify-center items-center gap-4 md:gap-0 p-4 md:p-0 rounded-md flex flex-col-reverse md:flex-row-reverse'>
            
            <LoginForm signinWithGoogle={signinWithGoogle} logIn={logIn} />

            <div className='w-1/2 flex items-center justify-center '>
                <h1 className='text-4xl font-semibold capitalize text-shadow-lg'>
                    Please<br />log in
                </h1>
            </div>
        </div>
    );
};

export default LoginBox;