import React, { useState } from 'react';
import { Box, Typography, Button, TextField, Grid, AppBar, Toolbar, Avatar, Link as MuiLink, Menu, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ClassCard from '../components/dashboard/ClassCard';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Thêm useNavigate

const mockClasses = [
    { id: 1, name: 'Test Thi Thu', memberCount: 1, classCode: '123456' },
    { id: 2, name: 'lol', memberCount: 1, classCode: '123456' },
    { id: 3, name: 'A1', memberCount: 1, classCode: '123456' },
    { id: 4, name: 'A2', memberCount: 1, classCode: 'abcdef' },
    { id: 5, name: 'a', memberCount: 1, classCode: '123456' },
    { id: 6, name: 'Test Bangbxt 01', memberCount: 1, classCode: '001001' },
    { id: 7, name: 'test 3', memberCount: 1, classCode: '123456' },
    { id: 8, name: '123123', memberCount: 1, classCode: '123123' },
    { id: 9, name: 'Kaspersky', memberCount: 1, classCode: '120521' },
];

const DashboardPage: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate(); // Khởi tạo hook navigate

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        localStorage.removeItem('token');
        navigate('/login');
    };

    // Hàm mới để điều hướng đến trang profile
    const handleProfileClick = () => {
        handleClose();
        navigate('/profile');
    };

    return (
        <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            {/* Thanh Header */}
            <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
                <Toolbar>
                    <MenuBookIcon sx={{ color: '#3978c8', mr: 1 }} />
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: '#3978c8', flexGrow: 1 }}>
                        BKStar <span style={{ color: '#f5a623' }}>Classroom</span>
                    </Typography>

                    <Button
                        component={RouterLink}
                        to="/classes/add"
                        variant="contained"
                        startIcon={<AddIcon />}
                        sx={{ mr: 2, backgroundColor: '#3978c8' }}
                    >
                        Tạo lớp
                    </Button>

                    <MuiLink
                        component={RouterLink}
                        to="/classes"
                        sx={{ mr: 3, textDecoration: 'none', color: 'text.primary' }}
                    >
                        Trang chủ
                    </MuiLink>

                    <Button
                        onClick={handleClick}
                        sx={{ textTransform: 'none', color: 'text.primary', p: 0.5, borderRadius: 2 }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Avatar sx={{ width: 32, height: 32 }}>B</Avatar>
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography variant="body2" sx={{ fontWeight: 'bold' }}>Trần Xuân Bảng</Typography>
                                <Typography variant="caption" color="text.secondary">Giáo viên</Typography>
                            </Box>
                            <KeyboardArrowDownIcon />
                        </Box>
                    </Button>

                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        {/* Sửa lại onClick ở đây */}
                        <MenuItem onClick={handleProfileClick}>Thông tin cá nhân</MenuItem>
                        <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                    </Menu>

                </Toolbar>
            </AppBar>

            {/* Phần nội dung chính */}
            <Box sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                        Danh sách lớp học
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            size="small"
                            placeholder="Tìm kiếm"
                            sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px', backgroundColor: 'white' } }}
                            InputProps={{ startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} /> }}
                        />
                        <Button
                            component={RouterLink}
                            to="/classes/add"
                            variant="contained"
                            startIcon={<AddIcon />}
                            sx={{ backgroundColor: '#f5a623', '&:hover': { backgroundColor: '#d9941a' }, boxShadow: 'none' }}
                        >
                            Thêm lớp học
                        </Button>
                    </Box>
                </Box>

                <Grid container spacing={3}>
                    {mockClasses.map((classInfo) => (
                        <Grid item key={classInfo.id} xs={12} sm={6} md={4}>
                            <ClassCard classInfo={classInfo} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default DashboardPage;
