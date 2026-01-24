import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Paper, Typography, TextField, Button, Stack } from '@mui/material';

// Import ảnh logo
import bkStarLogo from '../../assets/bkstar-logo.png';

// Tạo một interface để định nghĩa kiểu cho các lỗi của form
interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}

const RegisterPage: React.FC = () => {
    // Gán kiểu dữ liệu cho các state
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const [errors, setErrors] = useState<FormErrors>({});
    const navigate = useNavigate();

    const validate = (): boolean => {
        const tempErrors: FormErrors = {};
        if (!name) tempErrors.name = "Vui lòng nhập tên của bạn";
        if (!email) {
            tempErrors.email = "Vui lòng nhập email";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Địa chỉ email không hợp lệ";
        }
        if (!password) {
            tempErrors.password = "Vui lòng nhập mật khẩu";
        } else if (password.length < 6) {
            tempErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
        }
        if (!confirmPassword) {
            tempErrors.confirmPassword = "Vui lòng nhập lại mật khẩu";
        } else if (password !== confirmPassword) {
            tempErrors.confirmPassword = "Mật khẩu nhập lại không khớp";
        }

        setErrors(tempErrors);
        // Trả về true nếu không có lỗi nào
        return Object.keys(tempErrors).length === 0;
    };

    // Gán kiểu cho event của form
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) {
            // Logic gọi API đăng ký ở đây
            console.log("Form is valid, submitting:", { name, email, password });
            // Sau khi đăng ký thành công, có thể chuyển về trang đăng nhập
            alert('Đăng ký thành công!');
            navigate('/login');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: '#f0f2f5',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    padding: 4,
                    width: '100%',
                    maxWidth: 500,
                    borderRadius: 2,
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate // Tắt validate mặc định của trình duyệt
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Box component="img" sx={{ width: 150, mb: 2 }} alt="BKStar Logo" src={bkStarLogo} />
                    <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                        Đăng kí học viên
                    </Typography>

                    <TextField
                        fullWidth
                        margin="normal"
                        label="Tên của bạn *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name || ' '}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Địa chỉ email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email || ' '}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        type="password"
                        label="Mật khẩu *"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password || ' '}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        type="password"
                        label="Nhập lại mật khẩu *"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword || ' '}
                    />

                    <Stack direction="row" spacing={2} sx={{ mt: 3, width: '100%' }}>
                        <Button
                            fullWidth
                            variant="outlined"
                            onClick={() => navigate('/login')}
                        >
                            Hủy
                        </Button>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{ backgroundColor: '#3978c8' }}
                        >
                            Đăng ký
                        </Button>
                    </Stack>
                </Box>
            </Paper>
        </Box>
    );
}

export default RegisterPage;