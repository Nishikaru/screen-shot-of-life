import React, { Children, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const ProtectiveRout = ({Children}) => {
    const {user} = useContext(AuthContext);
    
    if(user&&user.uid){
        return Children
    }else{
        return <Navigate to='/login' replace></Navigate>
    }
};

export default ProtectiveRout;