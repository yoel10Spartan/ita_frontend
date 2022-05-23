import React from 'react';
import { Navigate } from "react-router";
import { useAuth } from '../components/hooks/useAuth';

export const PublicRouter = ({ children }) => {
    const auth = useAuth();
    return !auth ? children : <Navigate to="/" />;
}