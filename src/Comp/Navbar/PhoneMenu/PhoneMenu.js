import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const PhoneMenu = () => {
    const {theme} = useContext(AuthContext);
    return (
        <div>
            <div className={`absolute top-14 bg-skin-${theme.MainBg} flex flex-col gap-3 md:hidden`}>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/'>Home</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/memories'>Memores</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all'>Plus<sup>+</sup></Link>
                </div>
        </div>
    );
};

export default PhoneMenu;