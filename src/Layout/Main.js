import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Comp/Navbar/Navbar';
import Themes from '../Comp/Themes/Themes';


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Themes/>
        </div>
    );
};

export default Main;