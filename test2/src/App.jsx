import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';
import DashboardPage from './pages/DashboardPage'; // Thêm import cho trang mới
import './App.css';

// Không cần component Dashboard cũ ở đây nữa

function App() {
    return (
        <Routes>
            {/* Route mặc định sẽ chuyển hướng đến trang đăng nhập */}
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Chỉ giữ lại một route cho dashboard và trỏ đến component mới */}
            <Route path="/classes" element={<DashboardPage />} />
        </Routes>
    );
}

export default App;