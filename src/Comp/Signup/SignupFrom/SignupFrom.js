import React from 'react';
import {FcGoogle} from 'react-icons/fc'

const SignupForm = ({newAccount}) => {
    return (
        <div className='h-full flex flex-col justify-center items-center w-1/2'>
            <form onSubmit={newAccount} className=' flex flex-col gap-4 justify-center items-center'>
                <input placeholder='Email' className='p-2 rounded-md shadow-lg' type="email" name='email' id='email' />
                <input placeholder='password' className='p-2 rounded-md shadow-lg' type="password" name='password' />
                <input placeholder='confirm password' className='p-2 rounded-md shadow-lg' type="password" name='confirmPass' />
                <button type='submit' className='hover:translate-x-1 hover:shadow-xl transition-all font-semibold uppercase shadow-lg p-2 px-4 rounded-md'>sign up</button>
            </form>
            <div className='flex w-full items-center gap-2 p-5'>
                <hr className='w-full' />
                <p>OR</p>
                <hr className='w-full' />
            </div>
            <div>
                <button className='uppercase p-2 shadow-lg font-semibold rounded-md flex items-center gap-3 hover:shadow-xl transition-all hover:translate-x-1 min-w-[250px]'><span><FcGoogle/></span> Continue with google</button>
            </div>
        </div>
    );
};

export default SignupForm;