import React from 'react';
import { Box, Typography, Button, TextField, Grid, AppBar, Toolbar, Avatar, Link as MuiLink } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import ClassCard from '../components/dashboard/ClassCard'; // Import component thẻ lớp học

// Dữ liệu giả lập cho các lớp học (giữ nguyên)
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
    return (
        <Box sx={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            {/* Thanh Header tách biệt ở trên cùng */}
            <AppBar
                position="static"
                color="default"
                elevation={0} // Bỏ shadow
                sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'text.primary', flexGrow: 1 }}>
                        BKStar Classroom
                    </Typography>
                    <Button variant="outlined" startIcon={<AddIcon />} sx={{ mr: 2 }}>
                        Tạo lớp
                    </Button>
                    <MuiLink href="#" sx={{ mr: 3, textDecoration: 'none', color: 'text.primary', fontWeight: 'medium' }}>
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

            {/* Phần nội dung chính của trang */}
            <Box sx={{ p: 4 }}>
                {/* Thanh tiêu đề và tìm kiếm */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Danh sách lớp học
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <TextField
                            size="small"
                            placeholder="Tìm kiếm"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '8px',
                                    backgroundColor: 'white',
                                },
                            }}
                            InputProps={{
                                startAdornment: <SearchIcon color="action" sx={{ mr: 1 }} />,
                            }}
                        />
                        <Button
                            variant="contained"
                            startIcon={<AddIcon />}
                            sx={{
                                backgroundColor: '#f5a623',
                                '&:hover': { backgroundColor: '#d9941a' },
                                boxShadow: 'none'
                            }}
                        >
                            Thêm lớp học
                        </Button>
                    </Box>
                </Box>

                {/* Lưới các lớp học */}
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