import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SignupBox from '../Comp/Signup/SignuoBox';
import { AuthContext } from '../Comp/UserContext/UserContext';

const SignUp = () => {
    const {signupWithEmail} = useContext(AuthContext);

    const newAccount = (e)=>{
        e.preventDefault();
         const form = e.target;
         const email = form.email.value;
         const password = form.password.value;
         const confirmPass = form.confirmPass.value;
        //  console.log(email);
        if(password==confirmPass){
            signupWithEmail(email,password)
            .then(result=>{
                const user = result.user;
                console.log(user);
            })
            .catch(err=>console.log(err));
        }
    }
    return (
        <div className='w-screen h-screen flex flex-col gap-5 items-center justify-center'>
            <SignupBox newAccount={newAccount} />
            <p className='uppercase'>
                don'n have an account? <Link to='/login' className='text-blue-400'>login</Link>
            </p>
        </div>
    );
};

export default SignUp;