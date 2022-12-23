import React from 'react';
import SignupForm from './SignupFrom/SignupFrom';


const SignupBox = ({newAccount}) => {
    return (
        <div className='w-[800px] h-[500px] shadow-lg mt-[-4em] rounded-md flex flex-row-reverse'>
            
            <SignupForm newAccount={newAccount} />

            <div className='w-1/2 flex items-center justify-center '>
                <h1 className='text-4xl font-semibold capitalize text-shadow-lg'>
                    Please<br />sign up
                </h1>
            </div>
        </div>
    );
};

export default SignupBox;