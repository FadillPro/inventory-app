import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAdmin = false }) => {
    const token = localStorage.getItem('userToken');
    const role = localStorage.getItem('userRole');

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (isAdmin && role !== 'admin') {
        return <Navigate to="/user/home" />;
    }

    return children;
};

export default ProtectedRoute;