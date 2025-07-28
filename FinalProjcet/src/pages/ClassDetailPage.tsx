'use client'

import {
    Box,
    Typography,
    Avatar,
    Grid,
    Paper,
    Button,
    Stack,
    Divider,
    Chip
} from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const classData = {
    name: 'Test Thi Thu',
    teacher: 'Trần Xuân Bảng',
    members: [
        { id: 1, name: 'Trần Xuân Bảng', role: 'Giáo viên', isOwner: true },
        { id: 2, name: 'Phạm Thùy Dương', role: 'Học sinh' },
        { id: 3, name: 'bang', role: 'Học sinh' },
        { id: 4, name: 'Putin', role: 'Học sinh' }
    ],
    tests: 11,
    recentActivities: [
        { user: 'Nam', title: 'test 1', time: '16-07-2025 09:31:14' },
        { user: 'Nam', title: 'bài thi test 1', time: '13-07-2025 09:39:27' },
        { user: 'Nam', title: 'test5', time: '07-07-2025 08:51:37' },
        { user: 'Nam', title: 'test 4', time: '07-07-2025 02:35:15' },
        { user: 'Nam', title: '123123', time: '06-07-2025 09:32:32' },
        { user: 'Nam', title: 'Thu Thư 5', time: '22-04-2024 06:24:49' },
        { user: 'Nam', title: 'Thu Thư 4', time: '30-01-2024 09:04:04' },
        { user: 'Nam', title: 'Thu Thư Lan 3', time: '28-01-2024 10:21:55' },
        { user: 'Nam', title: 'Thu Thư Lan 2', time: '26-01-2024 10:59:23' },
        { user: 'Nam', title: 'ĐỀ THI LẦN 1', time: '23-01-2024 04:40:21' }
    ]
}
const ExamsPage = () => (
    <Paper sx={{ p: 2, borderRadius: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Danh sách Bài thi
        </Typography>
        <Typography>
            Nội dung trang bài thi sẽ được hiển thị ở đây.
        </Typography>
    </Paper>
);

export default function ClassDetailPage() {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          
            <Header />


            <Box sx={{ display: 'flex', flexGrow: 1 }}>

                <Box
                    sx={{
                        width: 240,
                        bgcolor: '#f5f5f5',
                        borderRight: '1px solid #ddd',
                    }}
                >
                    <Sidebar />
                </Box>


                <Box sx={{ flexGrow: 1, p: 2 }}>
                    <Grid container spacing={3}>

                        <Grid item xs={12} md={8}>

                            <Paper
                                size="small"
                                elevation={1}
                                sx={{
                                    width: '100%',
                                    p: 3,
                                    borderRadius: 3,
                                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                                    color: 'white'
                                }}
                            >
                                <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={3}>
                                    <Box flex={1}>
                                        <Typography variant="h6" fontWeight="bold">{classData.name}</Typography>
                                        <Typography variant="body2">Giáo viên: {classData.teacher}</Typography>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            sx={{
                                                mt: 1,
                                                color: 'white',
                                                borderColor: 'white',
                                                textTransform: 'none',
                                                '&:hover': {
                                                    borderColor: 'white',
                                                    backgroundColor: 'rgba(255,255,255,0.1)'
                                                }
                                            }}
                                            startIcon={<ContentCopyIcon sx={{ color: 'white' }} />}
                                        >
                                            Sao chép liên kết
                                        </Button>
                                    </Box>

                                    <Stack direction="row" spacing={-1}>
                                        <Avatar sx={{ bgcolor: '#673ab7' }}>P</Avatar>
                                        <Avatar sx={{ bgcolor: '#ff9800' }}>B</Avatar>
                                        <Avatar sx={{ bgcolor: '#00bcd4' }}>PD</Avatar>
                                        <Avatar sx={{ bgcolor: '#e91e63' }}>TB</Avatar>
                                    </Stack>
                                </Box>
                            </Paper>

                            <Grid container spacing={4} mt={4}>
                                <Grid item xs={6}>
                                    <Paper sx={{ p: 5, borderRadius: 2 ,width: '100%' }}>
                                        <Typography variant="h6">
                                            👥 {classData.members.length} Thành Viên
                                        </Typography>
                                    </Paper>
                                </Grid>
                                <Grid item xs={6}>
                                    <Paper sx={{ p: 5, borderRadius: 2 , width: '50%', ml: 25}}>
                                        <Typography variant="h6">
                                            📄 {classData.tests} Bài Kiểm Tra
                                        </Typography>
                                    </Paper>
                                </Grid>
                            </Grid>


                            <Paper sx={{ mt: 3, borderRadius: 3 }}>
                                <Box p={2} minWidth="1000px">
                                    <Typography variant="h6" fontWeight="bold" color="primary">
                                        Danh sách thành viên
                                    </Typography>
                                    <Divider sx={{ my: 1 }} />


                                    <Grid container spacing={22} sx={{ fontWeight: 'bold', pb: 1 }}>
                                        <Grid item xs={1} >No.</Grid>
                                        <Grid item xs={6}>Họ tên</Grid>
                                        <Grid item xs={5} >Vị trí</Grid>
                                    </Grid>


                                    {classData.members.map((member, idx) => (
                                        <Grid spacing={18}
                                            container
                                            key={member.id}
                                            sx={{
                                                py: 2,
                                                bgcolor: idx % 2 === 0 ? '#f5f5f5' : 'white',
                                                borderRadius: 1,
                                                alignItems: 'center',
                                                borderBottom: '1px solid #e0e0e0'
                                            }}
                                        >
                                            <Grid item xs={1}>
                                                <Typography>{idx + 1}</Typography>
                                            </Grid >
                                            <Grid item xs={6}>
                                                <Typography>{member.name}</Typography>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <Stack direction="row" >
                                                    <Chip
                                                        label={member.role}
                                                        color={member.role === 'Giáo viên' ? 'error' : 'success'}
                                                        size="small"
                                                    />
                                                    <Box sx={{ width: 20, textAlign: 'center' }  }>
                                                        {member.isOwner && (
                                                            <Typography component="span" fontSize="1rem">🔑</Typography>
                                                        )}
                                                    </Box>
                                                </Stack>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Right column - Activity */}
                        <Grid item xs={12} md={4}  >
                            <Box sx={{ position: 'sticky', top: 100, height: '100%' , ml:10}} >
                                <Paper sx={{ p: 2, borderRadius: 3 }}>
                                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                        🗓️ Hoạt động gần đây
                                    </Typography>
                                    <Stack spacing={2}>
                                        {classData.recentActivities.map((activity, index) => (
                                            <Box key={index} display="flex" alignItems="center" gap={2}>
                                                <Avatar
                                                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                                                    sx={{ width: 40, height: 40 }}
                                                />
                                                <Box>
                                                    <Typography variant="body2">
                                                        Bài thi <strong>{activity.title}</strong> vừa được tải lên
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        📅 {activity.time}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
