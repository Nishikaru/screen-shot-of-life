import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import PhoneMenu from './PhoneMenu/PhoneMenu';
import {RiMenu4Line} from 'react-icons/ri'

const Navbar = () => {
    const {theme,user,LogOut} = useContext(AuthContext);
    const [menu,setMenu] = useState(false)
    // console.log(user.uid)
    return (
        <div>
            <nav className={`flex justify-between items-center px-4 md:px-80 py-3 transition-all shadow-lg bg-skin-${theme.MainBg}`}>
                <div className='md:hidden'></div>
                <div>
                <Link className='capitalize text-xl font-medium hover:shadow-lg rounded-md p-2 transition-all text-shadow-lg' to='/'>screen shot of life</Link>
                </div>

                <div className='hidden md:flex gap-3'>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/'>Home</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/memories'>Memores</Link>
                <Link className='hover:shadow-lg rounded-md p-2 transition-all'>Plus<sup>+</sup></Link>
                </div>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                    <RiMenu4Line/>
                <PhoneMenu menu={menu} />
                </div>
                <div className='hidden md:inline-block'>
                    {
                        user?.uid?<button onClick={LogOut} className='hover:shadow-lg rounded-md p-2 transition-all'>Log out</button>:
                        <Link className='hover:shadow-lg rounded-md p-2 transition-all' to='/login'>Log in</Link>
                        
                    }
                </div>
            </nav>
        </div>
    );
};

export default Navbar;