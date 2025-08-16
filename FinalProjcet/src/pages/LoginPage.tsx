import React, { useEffect, useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
    Box, Typography, TextField, FormControlLabel, Checkbox,
    Button, Link, IconButton, InputAdornment, Alert, CircularProgress
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import steamImage from '../assets/steam-logo.png';
import bkStarLogo from '../assets/bkstar-logo.png';
import { loginApi, saveTokens, decodeUser, rememberEmail } from '../services/authService';

import { useAppDispatch } from '../store';
import { setUser } from '../store/authSlice';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [remember, setRemember] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const remembered = rememberEmail.get();
        if (remembered) setEmail(remembered);
    }, []);

    const handleClickShowPassword = () => setShowPassword(s => !s);
    const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault();

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await loginApi({ email, password });
            // Chuẩn hóa tên trường token: accessToken | access | token ; refreshToken | refresh
            const data = res?.data ?? {};
            const accessToken =
                data.accessToken ?? data.access ?? data.token ?? data?.data?.accessToken ?? data?.data?.access;
            const refreshToken =
                data.refreshToken ?? data.refresh ?? data?.data?.refreshToken ?? data?.data?.refresh;

            if (!accessToken) {
                throw new Error('Không nhận được accessToken (có thể server trả tên khác: access/ token).');
            }

            saveTokens(accessToken, refreshToken);
            if (remember) rememberEmail.set(email); else rememberEmail.clear();

            const info = decodeUser();
            if (info) dispatch(setUser(info));
            navigate('/classes', { replace: true });
        } catch (err: any) {
            const msg =
                err?.response?.data?.message ||
                err?.response?.data?.detail ||
                (typeof err?.response?.data === 'string' ? err.response.data : '') ||
                err?.message ||
                'Đã có lỗi xảy ra.';
            setError(msg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'rgba(133,142,145,0.62)' }}>
            <Box sx={{ display:'flex', flexDirection:'row', height:'900px', width:'80%', m:'auto', boxShadow:3, borderRadius:'24px', overflow:'hidden' }}>
                <Box sx={{ width:'60%', backgroundColor:'#3978c8', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', px:3 }}>
                    <Box component="img" src={steamImage} alt="STEAM Logo" sx={{ width:'80%', mb:4 }} />
                    <Typography variant="subtitle1" fontWeight="bold" color="white" align="center">GIEO MẦM SÁNG TẠO...</Typography>
                    <Typography variant="subtitle1" fontWeight="bold" color="white" align="center">... DẪN HƯỚNG ĐAM MÊ</Typography>
                </Box>

                <Box sx={{ width:'40%', backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center', px:6 }}>
                    <Box sx={{ width:'100%', maxWidth:400 }}>
                        <Box component="img" src={bkStarLogo} alt="BKStar Logo" sx={{ width:120, mx:'auto', mb:2 }} />
                        <Typography variant="h6" align="center" fontWeight="bold" gutterBottom>Đăng Nhập</Typography>
                        <Typography variant="body2" color="text.secondary" align="center" mb={2}>Cung cấp giải pháp toàn diện cho lớp học thông minh</Typography>

                        {(import.meta as any).env.DEV && (
                            <Alert icon={<InfoOutlinedIcon />} severity="info" sx={{ mb:2, backgroundColor:'#e6f7ff' }}>
                                Debug: Auth=No, User=No
                            </Alert>
                        )}

                        {error && <Alert severity="error" sx={{ mb:2 }}>{error}</Alert>}

                        <Box component="form" onSubmit={handleLogin}>
                            <TextField
                                label="Nhập email"
                                type="email"
                                fullWidth required margin="normal" size="small"
                                value={email} onChange={(e)=>setEmail(e.target.value)}
                            />
                            <TextField
                                label="Nhập mật khẩu"
                                fullWidth required margin="normal" size="small"
                                type={showPassword ? 'text' : 'password'}
                                value={password} onChange={(e)=>setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                                {showPassword ? <VisibilityOff/> : <Visibility/>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', my:1 }}>
                                <FormControlLabel control={<Checkbox color="primary" checked={remember} onChange={(_,v)=>setRemember(v)} />} label="Ghi nhớ tôi" />
                                <Link component={RouterLink} to="/forgot" variant="body2">Quên mật khẩu?</Link>
                            </Box>

                            <Button type="submit" fullWidth variant="contained" disabled={loading}
                                    sx={{ mt:2, py:1.2, backgroundColor:'#3978c8' }}
                                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                            >
                                {loading ? 'Đang xử lý...' : 'ĐĂNG NHẬP'}
                            </Button>

                            <Box mt={2} textAlign="center">
                                <Link component={RouterLink} to="/register" variant="body2">Đăng kí tài khoản cho học viên</Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default LoginPage;
