import React, { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button, TextField, Paper, AppBar, Toolbar, Avatar, Link as MuiLink } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const CreateClassPage: React.FC = () => {
    const [className, setClassName] = useState<string>('');
    const [protectionCode, setProtectionCode] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Xử lý logic tạo lớp mới ở đây
        console.log({ className, protectionCode });
        alert('Tạo lớp thành công!');
        navigate('/classes'); // Quay về trang danh sách lớp học
    };

    return (
        <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            {/* Header được sử dụng lại */}
            <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
                <Toolbar>
                    <MenuBookIcon sx={{ color: '#3978c8', mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3978c8', flexGrow: 1 }}>
                        BKStar <span style={{ color: '#f5a623' }}>Classroom</span>
                    </Typography>
                    <Button variant="contained" startIcon={<AddIcon />} sx={{ mr: 2, backgroundColor: '#3978c8' }}>
                        Tạo lớp
                    </Button>
                    <MuiLink component={RouterLink} to="/classes" sx={{ mr: 3, textDecoration: 'none', color: 'text.primary' }}>
                        Trang chủ
                    </MuiLink>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar sx={{ width: 32, height: 32 }}>B</Avatar>
                        <Box>
                            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Trần Xuân Bảng</Typography>
                            <Typography variant="caption" color="text.secondary">Giáo viên</Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Phần nội dung chính */}
            <Box sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Thêm lớp học mới
                </Typography>

                {/* Form tạo lớp */}
                <Paper
                    elevation={0}
                    sx={{
                        p: 4,
                        width: '100%',
                        maxWidth: 500,
                        mx: 'auto', // Căn giữa form
                        borderRadius: 2
                    }}
                >
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            label="Tên lớp học"
                            placeholder="Nhập tên lớp học"
                            value={className}
                            onChange={(e) => setClassName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            label="Mã bảo vệ"
                            placeholder="Nhập mã bảo vệ"
                            value={protectionCode}
                            onChange={(e) => setProtectionCode(e.target.value)}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 3 }}>
                            <Button variant="outlined" onClick={() => navigate('/classes')}>
                                Hủy
                            </Button>
                            <Button type="submit" variant="contained" sx={{ backgroundColor: '#3978c8' }}>
                                Tạo mới
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default CreateClassPage;