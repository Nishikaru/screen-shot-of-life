import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PhoneMenu = ({menu}) => {
    const {theme,LogOut,user} = useContext(AuthContext);
    return (
        <div>
            <div className={`${menu?'flex':'hidden'} w-screen h-screen absolute top-0 left-0 bg-black/40`}></div>
            <div className={`${menu?'inline-block':'hidden'} bg-white absolute top-14 right-3 bg-skin-${theme.MainBg} flex flex-col gap-3 md:hidden shadow-lg rounded-md p-4`}>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/'>Home</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/memories'>Memores</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all'>Plus<sup>+</sup></Link>
                {
                        user?.uid?<button onClick={LogOut} className='hover:shadow-lg rounded-md p-2 transition-all'>Log out</button>:
                        <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/login'>Log in</Link>
                        
                    }
                </div>
        </div>
    );
};

export default PhoneMenu;