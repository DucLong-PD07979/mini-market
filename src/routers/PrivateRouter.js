import React from 'react';
import { Navigate } from 'react-router-dom';
import * as path from '../util/constants/router';

const PrivateRouter = ({children}) => {
    const currentUser = null;
    if(!currentUser){
        return <Navigate to={path.LOGIN}></Navigate>;
    }
  return children
}

export default PrivateRouter