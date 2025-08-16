import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const user = useAppSelector(s => s.auth.user);
    if (!user) return <Navigate to="/login" replace />;
    return children;
}
