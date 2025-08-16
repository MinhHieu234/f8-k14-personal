import React, { useState } from 'react';
import { Box, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import { registerApi } from "../services/authService";

import { useNavigate } from 'react-router-dom';

export default function RegisterPage(){
    const nav = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirm,setConfirm] = useState('');
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [success,setSuccess] = useState('');

    const validate = () => {
        if (!name.trim()) return 'Tên không được trống';
        if (!/^\S+@\S+\.\S+$/.test(email)) return 'Email không hợp lệ';
        if (password.length < 6) return 'Mật khẩu tối thiểu 6 kí tự';
        if (password !== confirm) return 'Mật khẩu xác nhận không khớp';
        return '';
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const msg = validate();
        if (msg) { setError(msg); return; }
        setLoading(true); setError(''); setSuccess('');
        try {
            await registerApi({ name: name.trim(), email: email.trim(), password: password.trim() });
            setSuccess('Đăng ký thành công! Vui lòng đăng nhập.');
            setTimeout(()=> nav('/login', { replace:true }), 700);
        } catch (err:any) {
            setError(err?.response?.data?.message || 'Đăng ký thất bại (email đã tồn tại, mật khẩu yếu, ...).');
        } finally { setLoading(false); }
    };

    return (
        <Box sx={{ maxWidth:420, mx:'auto', mt:8 }}>
            <Typography variant="h5" fontWeight="bold" mb={2}>Đăng ký tài khoản</Typography>
            {error && <Alert severity="error" sx={{ mb:2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb:2 }}>{success}</Alert>}
            <Box component="form" onSubmit={onSubmit}>
                <TextField label="Họ tên" fullWidth margin="normal" value={name} onChange={e=>setName(e.target.value)} />
                <TextField label="Email" type="email" fullWidth margin="normal" value={email} onChange={e=>setEmail(e.target.value)} />
                <TextField label="Mật khẩu" type="password" fullWidth margin="normal" value={password} onChange={e=>setPassword(e.target.value)} />
                <TextField label="Xác nhận mật khẩu" type="password" fullWidth margin="normal" value={confirm} onChange={e=>setConfirm(e.target.value)} />
                <Button type="submit" variant="contained" fullWidth disabled={loading} sx={{ mt:2 }}>
                    {loading ? <CircularProgress size={20} color="inherit" /> : 'Đăng ký'}
                </Button>
            </Box>
        </Box>
    );
}
