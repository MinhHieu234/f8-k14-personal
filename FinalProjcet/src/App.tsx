import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from './store';
import { hydrateAuth, logout } from './store/authSlice';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ClassesPage from './pages/ClassesPage';
import ProtectedRoute from './routes/ProtectedRoute';

function AppInner() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { hydrated, user } = useAppSelector(s => s.auth);

    useEffect(() => {
        dispatch(hydrateAuth());
        const handler = () => {
            dispatch(logout());
            alert('Phiên đã hết hạn');
            navigate('/login', { replace: true });
        };
        window.addEventListener('auth:expired', handler);
        return () => window.removeEventListener('auth:expired', handler);
    }, [dispatch, navigate]);

    // Chờ hydrate xong rồi mới render Routes để tránh redirect nhấp nháy
    if (!hydrated) return null; // hoặc spinner

    return (
        <Routes>
            {/* "/" tự điều hướng theo trạng thái đăng nhập */}
            <Route path="/" element={<Navigate to={user ? '/classes' : '/login'} replace />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route
                path="/classes"
                element={
                    <ProtectedRoute>
                        <ClassesPage />
                    </ProtectedRoute>
                }
            />

            {/* Bắt mọi path lạ */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppInner />
        </BrowserRouter>
    );
}
