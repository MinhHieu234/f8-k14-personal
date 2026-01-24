'use client';

import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Grid,
    Link,
} from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axiosClient from '../ utils/axios';

export default function RegisterPage() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [serverError, setServerError] = useState('');

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!name.trim()) newErrors.name = 'Vui lòng nhập tên của bạn.';
        if (!email.trim()) newErrors.email = 'Vui lòng nhập email.';
        if (!password) newErrors.password = 'Vui lòng nhập mật khẩu.';
        if (!rePassword) newErrors.rePassword = 'Vui lòng nhập lại mật khẩu.';
        else if (password !== rePassword)
            newErrors.rePassword = 'Mật khẩu không khớp.';
        return newErrors;
    };

    const handleSubmit = async () => {
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        try {
            await axiosClient.post('/auth/register', {
                name,
                email,
                password,
            });
            router.push('/login');
        } catch (err: any) {
            setServerError(err.response?.data?.message || 'Đăng ký thất bại.');
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={4} sx={{ p: 4, width: '100%', maxWidth: 400 }}>
                <Box textAlign="center" mb={3}>
                    <img
                        src="/logo.png"
                        alt="logo"
                        style={{ height: 40 }}
                    />
                    <Typography variant="h5" mt={1} fontWeight="bold">
                        Đăng kí học viên
                    </Typography>
                </Box>

                <TextField
                    fullWidth
                    label="Tên của bạn"
                    placeholder="Nhập tên của bạn"
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!errors.name}
                    helperText={errors.name}
                />
                <TextField
                    fullWidth
                    label="Địa chỉ email"
                    placeholder="Nhập địa chỉ email"
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!errors.email}
                    helperText={errors.email}
                />
                <TextField
                    fullWidth
                    label="Mật khẩu"
                    type="password"
                    placeholder="Nhập mật khẩu"
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                />
                <TextField
                    fullWidth
                    label="Nhập lại mật khẩu"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    margin="normal"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                    error={!!errors.rePassword}
                    helperText={errors.rePassword}
                />

                {serverError && (
                    <Typography color="error" mt={1} fontSize={14}>
                        {serverError}
                    </Typography>
                )}

                <Box display="flex" justifyContent="space-between" mt={3}>
                    <Button variant="outlined" onClick={() => router.push('/login')}>
                        Hủy
                    </Button>
                    <Button variant="contained" onClick={handleSubmit}>
                        Đăng ký
                    </Button>
                </Box>

                <Box mt={2} textAlign="center">
                    <Link href="/login" fontSize={14}>
                        Đã có tài khoản? Đăng nhập
                    </Link>
                </Box>
            </Paper>
        </Grid>
    );
}
