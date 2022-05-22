import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Login from '../Pages/Login/Login';

const ProtectedRoute = ({children}) => {
    const [user] = useAuthState(auth);
    const location = useLocation();
    const token = localStorage.getItem("accessKey");
    if (token ) {
        return children;
    }
    
        return <Login forom={location} />
    
}

export default ProtectedRoute