import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Comp/Navbar/Navbar';
import Home from '../Pages/Home';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;