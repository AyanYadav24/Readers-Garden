import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, authUser }) => {
  if (!authUser) {
    return <Navigate to="/signup" />;
  }
  return children;
};

export default PrivateRoute;
