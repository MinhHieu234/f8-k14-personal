import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockLoginApi } from '../../services/authService';
import { Link as RouterLink } from 'react-router-dom'

import {
    Grid, Box, Typography, TextField, FormControlLabel, Checkbox,
    Button, Link, IconButton, InputAdornment, Alert
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Import ảnh từ thư mục assets
import steamImage from '../../assets/steam-logo.png';
import bkStarLogo from '../../assets/bkstar-logo.png';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => event.preventDefault();

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await mockLoginApi({ email, password });
            setLoading(false);
            localStorage.setItem('token', response.data.token);
            navigate('/classes');
        } catch (err) {
            setLoading(false);
            setError(err.response?.data?.message || 'Đã có lỗi xảy ra.');
        }
    };

    return (
        // Box ngoài cùng để căn giữa thẻ trên nền xám
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
            {/* Grid container bây giờ chính là cái thẻ (card) */}
            <Grid container
                  sx={{
                      width: '90%',
                      maxWidth: '900px',
                      minHeight: '600px',
                      boxShadow: 3,
                      borderRadius: 2,
                      overflow: 'hidden',
                  }}
            >
                {/* Cột trái */}
                <Grid
                    xs={12} sm={5} md={5}
                    sx={{
                        backgroundColor: '#3978c8',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 4,
                        color: 'white',
                    }}
                >
                    <Box component="img" sx={{ maxWidth: '80%', height: 'auto', marginBottom: 4 }} alt="STEAM Education" src={steamImage} />
                    <Typography variant="h6" component="p" align="center" sx={{ fontWeight: 'bold' }}>GIEO MẦM SÁNG TẠO...</Typography>
                    <Typography variant="h6" component="p" align="center" sx={{ fontWeight: 'bold' }}>... DẪN HƯỚNG ĐAM MÊ</Typography>
                </Grid>

                {/* Cột phải */}
                <Grid
                    xs={12} sm={7} md={7}
                    sx={{
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: { xs: 3, md: 4 },
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 450 }}>
                        <Box component="img" sx={{ width: 150, marginBottom: 2 }} alt="BKStar Logo" src={bkStarLogo} />
                        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>Đăng Nhập</Typography>
                        <Typography component="p" variant="body2" color="text.secondary" sx={{ mb: 3 }}>Cung cấp giải pháp toàn diện cho lớp học thông minh</Typography>

                        <Alert icon={<InfoOutlinedIcon fontSize="inherit" />} severity="info" sx={{ width: '100%', mb: 2, backgroundColor: '#e6f7ff' }}>
                            Debug: Auth=No, User=No
                        </Alert>

                        {error && <Alert severity="error" sx={{ width: '100%', mb: 2 }}>{error}</Alert>}

                        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1, width: '100%' }}>
                            <TextField margin="normal" required fullWidth label="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <TextField
                                margin="normal" required fullWidth label="Nhập mật khẩu" type={showPassword ? 'text' : 'password'}
                                value={password} onChange={(e) => setPassword(e.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid><FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Ghi nhớ tôi" /></Grid>
                                <Grid><Link href="#" variant="body2">Quên mật khẩu ?</Link></Grid>
                            </Grid>
                            <Button type="submit" fullWidth variant="contained" disabled={loading} sx={{ mt: 3, mb: 2, py: 1.5, backgroundColor: '#3978c8' }}>
                                {loading ? 'Đang xử lý...' : 'ĐĂNG NHẬP'}
                            </Button>
                            <Box sx={{ textAlign: 'center' }}>
                                <Link component={RouterLink} to="/register" variant="body2">
                                    Đăng kí tài khoản cho học viên
                                </Link>
                            </Box>

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default LoginPage;