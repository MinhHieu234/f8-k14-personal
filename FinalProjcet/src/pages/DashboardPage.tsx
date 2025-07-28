import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    AppBar,
    Toolbar,
    Avatar,
    Link as MuiLink,
    Menu,
    MenuItem
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import ClassCard from '../components/dashboard/ClassCard';

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
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
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
        <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            {/* Header */}
            <AppBar position="static" color="default" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
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

                    <Button onClick={handleClick} sx={{ textTransform: 'none', color: 'text.primary', p: 0.5, borderRadius: 2 }}>
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

            {/* Main content */}
            <Box sx={{ px: 4, py: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', mb: 3, gap: 2 }}>
                    <Typography variant="h5" fontWeight="bold">Danh sách lớp học</Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            size="small"
                            placeholder="Tìm kiếm"
                            sx={{
                                width: 240,
                                backgroundColor: 'white',
                                borderRadius: '8px',
                            }}
                            InputProps={{
                                startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />
                            }}
                        />
                        <Button
                            component={RouterLink}
                            to="/classes/add"
                            variant="contained"
                            startIcon={<AddIcon />}
                            sx={{
                                backgroundColor: '#f5a623',
                                textTransform: 'none',
                                boxShadow: 'none',
                                fontWeight: 500,
                                '&:hover': { backgroundColor: '#d9941a' }
                            }}
                        >
                            Thêm lớp học
                        </Button>
                    </Box>
                </Box>

                {/* Danh sách lớp học  */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, minmax(280px, 1fr))',
                        gap: 4,
                        justifyContent: 'center',
                    }}
                >
                    {mockClasses.map((classInfo) => (
                        <ClassCard key={classInfo.id} classInfo={classInfo} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default DashboardPage;
