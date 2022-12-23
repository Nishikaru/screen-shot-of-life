import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginBox from '../Comp/Login/LoginBox';
import { AuthContext } from '../Comp/UserContext/UserContext';

const Login = () => {
    document.title='ss of life login'
    const navigate =useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    // geting data from context api
    const {setLoading,loginWithMail,goWithGoogle} = useContext(AuthContext);
    const [errorMsg ,setErrorMsg] = useState('');

    // login with email
  const logIn = (e)=>{
    e.preventDefault();
    const form = e.target;
    
    const email = form.email.value;
    const password = form.password.value;

    loginWithMail(email,password)
    .then(result=>{
        const user = result.user;
        console.log(user);
        // const currentUser ={
        //   email : user.email
        // }
            if(user.uid){
              navigate('/')
            }
        // setErrorMsg('')
    })
    .catch(err=>console.log(err))
}
    // log in with gooogle
    const signinWithGoogle = ()=>{
        goWithGoogle()
        .then(result=>{
            const user = result.user;
            // console.log(user);
            // const currentUser ={
            //   email : user.email
            // }
            if(user.uid){
                navigate('/')
              }
              setErrorMsg('')
        })
        .catch(error=>{
    
        })
        .finally(()=>{
          setLoading(false);
        })
    }
    
    return (
        <div className='w-screen h-screen flex flex-col gap-5 items-center justify-center'>
            <LoginBox signinWithGoogle={signinWithGoogle} logIn={logIn}/>
            <p className='uppercase'>
                don'n have an account? <Link to='/signup' className='text-blue-400'>sing up</Link>
            </p>
        </div>
    );
};

export default Login;