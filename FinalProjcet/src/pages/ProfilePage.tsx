import React, { useRef } from 'react';
import { Box, Typography, Button, TextField, Grid, AppBar, Toolbar, Avatar, Link as MuiLink, Divider, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link as RouterLink } from 'react-router-dom';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const LabeledTextField = ({ label, ...props }: { label: string } & React.ComponentProps<typeof TextField>) => (
    <Box sx={{ flexGrow: 1, minWidth: '180px' }}>
        <Typography variant="caption" display="block" sx={{ mb: 0.5, fontWeight: 'medium' }}>
            {label}
        </Typography>
        <TextField
            fullWidth
            variant="outlined"
            size="small"
            {...props}
        />
    </Box>
);

const ProfilePage: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const userInfo = {
        name: 'Trần Xuân Bảng',
        email: 'bangtran.hbt@gmail.com',
        parentPhone: 'bangtran.hbt@gmail.com'
    };

    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log("File đã chọn:", file);
            alert(`Đã chọn file: ${file.name}`);
        }
    };

    return (
        <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            {/* Header */}
            <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
                <Toolbar>
                    <MenuBookIcon sx={{ color: '#3978c8', mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3978c8', flexGrow: 1 }}>
                        BKStar <span style={{ color: '#f5a623' }}>Classroom</span>
                    </Typography>
                    <Button component={RouterLink} to="/classes/add" variant="outlined" startIcon={<AddIcon />} sx={{ mr: 2 }}>
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

            {/* Nội dung chính */}
            <Box sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Thông tin cá nhân
                </Typography>

                <Box sx={{ backgroundColor: 'white', p: 3, borderRadius: 2 }}>
                    {/* Phần thông tin cơ bản */}
                    <Box component="form" mb={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                Thông tin cơ bản
                            </Typography>
                            <Button variant="contained" sx={{ backgroundColor: '#3978c8' }}>Lưu lại</Button>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 3 }}>
                            <Avatar sx={{ width: 100, height: 100, mb: 2, bgcolor: 'grey.300' }}>TB</Avatar>
                            <input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                            <Button variant="outlined" startIcon={<CloudUploadIcon />} onClick={handleUploadClick}>
                                Tải lên
                            </Button>
                        </Box>

                        {/* Hàng 1 */}
                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} sx={{ mb: 3 }}>
                            <LabeledTextField label="Tên của bạn" defaultValue={userInfo.name} />

                            {/* Xử lý riêng cho ô Email */}
                            <Box sx={{ flexGrow: 1, minWidth: '180px' }}>
                                <Typography variant="caption" display="block" sx={{ mb: 0.5, fontWeight: 'medium' }}>
                                    Email
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    defaultValue={userInfo.email}
                                    InputProps={{
                                        readOnly: true, // Giữ readOnly để không thể sửa
                                    }}
                                    sx={{
                                        // Thêm màu nền xám nhạt
                                        '& .MuiInputBase-root': {
                                            backgroundColor: '#f0f0f0',
                                        },
                                        // Con trỏ chuột hình "cấm"
                                        '& .MuiInputBase-input': {
                                            cursor: 'not-allowed',
                                        }
                                    }}
                                />
                            </Box>

                            <LabeledTextField label="Trường" placeholder="Nhập tên trường" />
                            <LabeledTextField label="Tên phụ huynh" placeholder="Nhập tên phụ huynh" />
                            <LabeledTextField label="Số điện thoại phụ huynh" defaultValue={userInfo.parentPhone} />
                        </Stack>
                    </Box>

                    <Divider />

                    {/* Phần thay đổi mật khẩu */}
                    <Box component="form" mt={3}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
                            Thay đổi mật khẩu
                        </Typography>

                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="flex-end">
                            <LabeledTextField label="Mật khẩu cũ" type="password" />
                            <LabeledTextField label="Mật khẩu mới" type="password" />
                            <LabeledTextField label="Nhập lại mật khẩu mới" type="password" />
                        </Stack>

                        <Box sx={{ mt: 3 }}>
                            <Button variant="contained" sx={{ backgroundColor: '#3978c8' }}>Lưu lại</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfilePage;
