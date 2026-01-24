import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CreateClassPage from './pages/CreateClassPage';
import ProfilePage from './pages/ProfilePage'; // Thêm import
import './App.css';

function App() {
    return (
        <Routes>
            {/* Route mặc định sẽ chuyển hướng đến trang đăng nhập */}
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/classes" element={<DashboardPage />} />
            <Route path="/classes/add" element={<CreateClassPage />} />

            {/* Thêm route cho trang thông tin cá nhân */}
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    );
}

export default App;
