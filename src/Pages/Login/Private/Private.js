import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loding from '../../../Shared/Loding/Loding';

const Private = ({ children }) => {
    const [user, lodding] = useAuthState(auth);
    const location = useLocation();

    if (lodding) {
        return <Loding></Loding>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default Private;