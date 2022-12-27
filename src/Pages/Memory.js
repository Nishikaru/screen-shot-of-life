import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SsBox from '../Comp/SsBox/SsBox';


const Memory = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <SsBox/>
        </div>
    );
};

export default Memory;