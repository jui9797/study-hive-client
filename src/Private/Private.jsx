import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Private = ({children}) => {
    const{loading, user} =useContext(AuthContext)

    if(loading){
        return (<>
        <Spinner></Spinner>
        </>)
    }

    if(user && user?.email){
        return children
    }

    return (
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    );
};

export default Private;