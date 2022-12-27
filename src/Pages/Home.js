import React, { useEffect, useState } from 'react';
import HomeChatBox from '../Comp/HomeChatBox/HomeChatBox';
// import MemoryInput from '../Comp/MemoryInput/MemoryInput';

const Home = () => {
    return (
        <div className='h-fit'>
            <HomeChatBox/>
            {/* <MemoryInput/> */}
        </div>
    );
};

export default Home;