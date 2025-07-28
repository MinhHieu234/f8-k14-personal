import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import RegisterPage from './components/register/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import CreateClassPage from './pages/CreateClassPage';
import ProfilePage from './pages/ProfilePage';
import ClassDetailPage from  './pages/ClassDetailPage'
import ExamsPage from  './pages/ExamsPage'
import ExamDetailPage from './pages/ExamDetailPage'
import CreateExamPartPage from './pages/CreateExamPartPage'
import MembersPage from './pages/MembersPage'
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
            <Route path="/class/:classId" element={<ClassDetailPage />} />
            <Route path="/exams" element={<ExamsPage />} />
            <Route path="/Detail" element={<ClassDetailPage />} />
            <Route path="/exam/:examId" element={<ExamDetailPage />} />
            <Route path="/exam/:examId/add-part" element={<CreateExamPartPage />} />
            <Route path="/members" element={<MembersPage />} />
        </Routes>
    );
}

export default App;
