'use client';
import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Button, Avatar, Box, Menu, MenuItem, Link as MuiLink
} from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        handleClose();
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleProfileClick = () => {
        handleClose();
        navigate('/profile');
    };

    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}
        >
            <Toolbar>
                <MenuBookIcon sx={{ color: '#3978c8', mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#3978c8', flexGrow: 1 }}>
                    BKStar <Box component="span" sx={{ color: '#f5a623' }}>Classroom</Box>
                </Typography>

                <Button
                    component={RouterLink}
                    to="/classes/add"
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{ mr: 2, backgroundColor: '#3978c8', textTransform: 'none', fontWeight: 500 }}
                >
                    Tạo lớp
                </Button>

                <MuiLink
                    component={RouterLink}
                    to="/classes"
                    sx={{ mr: 3, textDecoration: 'none', color: 'text.primary', fontWeight: 500 }}
                >
                    Trang chủ
                </MuiLink>

                <Button
                    onClick={handleMenuOpen}
                    sx={{ textTransform: 'none', color: 'text.primary', p: 0.5, borderRadius: 2 }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Avatar sx={{ width: 32, height: 32 }}>B</Avatar>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="body2" fontWeight="bold">Trần Xuân Bảng</Typography>
                            <Typography variant="caption" color="text.secondary">Giáo viên</Typography>
                        </Box>
                        <KeyboardArrowDownIcon />
                    </Box>
                </Button>

                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={handleProfileClick}>Thông tin cá nhân</MenuItem>
                    <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
