import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import {
    Box, Typography, TextField, FormControlLabel, Checkbox,
    Button, Link, IconButton, InputAdornment, Alert, CircularProgress
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import steamImage from '../../assets/steam-logo.png';
import bkStarLogo from '../../assets/bkstar-logo.png';
import { mockLoginApi } from '../../services/authService';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await mockLoginApi({ email, password });
            if (response.data?.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/classes');
            } else {
                throw new Error('Không nhận được token từ máy chủ.');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || err.message || 'Đã có lỗi xảy ra.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(133,142,145,0.62)'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '900px',
                    width: '80%',
                    margin: 'auto',
                    boxShadow: 3,
                    borderRadius: '24px',
                    overflow: 'hidden'
                }}
            >

                <Box
                    sx={{
                        width: '60%',
                        backgroundColor: '#3978c8',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: 3
                    }}
                >
                    <Box component="img" src={steamImage} alt="STEAM Logo" sx={{ width: '80%', mb: 4 }} />
                    <Typography variant="subtitle1" fontWeight="bold" color="white" align="center">
                        GIEO MẦM SÁNG TẠO...
                    </Typography>
                    <Typography variant="subtitle1" fontWeight="bold" color="white" align="center">
                        ... DẪN HƯỚNG ĐAM MÊ
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '40%', 
                        backgroundColor: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        px: 6
                    }}
                >
                    <Box sx={{ width: '100%', maxWidth: 400 }}>
                        <Box component="img" src={bkStarLogo} alt="BKStar Logo" sx={{ width: 120, mx: 'auto', mb: 2 }} />
                        <Typography variant="h6" align="center" fontWeight="bold" gutterBottom>
                            Đăng Nhập
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center" mb={2}>
                            Cung cấp giải pháp toàn diện cho lớp học thông minh
                        </Typography>

                        {process.env.NODE_ENV === 'development' && (
                            <Alert icon={<InfoOutlinedIcon />} severity="info" sx={{ mb: 2, backgroundColor: '#e6f7ff' }}>
                                Debug: Auth=No, User=No
                            </Alert>
                        )}

                        {error && (
                            <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>
                        )}

                        <Box component="form" onSubmit={handleLogin}>
                            <TextField
                                label="Nhập email"
                                fullWidth
                                required
                                margin="normal"
                                size="small"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Nhập mật khẩu"
                                fullWidth
                                required
                                margin="normal"
                                size="small"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    my: 1
                                }}
                            >
                                <FormControlLabel
                                    control={<Checkbox color="primary" />}
                                    label="Ghi nhớ tôi"
                                />
                                <Link href="#" variant="body2">Quên mật khẩu?</Link>
                            </Box>

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={loading}
                                sx={{ mt: 2, py: 1.2, backgroundColor: '#3978c8' }}
                                startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
                            >
                                {loading ? 'Đang xử lý...' : 'ĐĂNG NHẬP'}
                            </Button>

                            <Box mt={2} textAlign="center">
                                <Link component={RouterLink} to="/register" variant="body2">
                                    Đăng kí tài khoản cho học viên
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default LoginPage;
