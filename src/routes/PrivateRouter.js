import React from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../components/hooks/useAuth';

export const PrivateRouter = ({ children }) => {
    const auth = useAuth();
    return auth ? children : <Navigate to="/auth" />;
}