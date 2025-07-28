'use client';

import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Grid,
    Paper,
    InputAdornment,
    Link as MuiLink 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CreateExamDialog from '../components/exams/CreateExamDialog';

const ongoingExams = [
    { id: 1, title: 'ĐỀ THI LẦN 1', startDate: '05/01/2024' },
    { id: 2, title: 'Thi thử lần 2', startDate: '26/01/2024' },
    { id: 3, title: 'Thử Thử Lần 3', startDate: '28/01/2024' },
    { id: 4, title: 'Thi Thử 4', startDate: '30/01/2024' },
    { id: 5, title: 'Thử Thử 5', startDate: '22/04/2024' },
    { id: 6, title: 'test 4', startDate: '07/07/2025' },
    { id: 7, title: 'test5', startDate: '07/07/2025' },
];

const upcomingExams = [
    { id: 8, title: '123123', startDate: '17/07/2025' },
    { id: 9, title: 'test bài thi', startDate: '22/07/2025' },
];

// Sửa lại ExamCard để nhận id và có thể click
const ExamCard = ({ id, title, startDate }: { id: number; title: string; startDate: string }) => (
    <MuiLink component={RouterLink} to={`/exam/${id}`} underline="none">
        <Paper
            elevation={0}
            sx={{
                width: '90%',
                p: 2,
                mr: 20,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                borderRadius: 2,
                border: '1px solid #ddd',
                backgroundColor: '#fff',
                borderLeft: '5px solid #2196f3',
                transition: 'box-shadow 0.3s, border-color 0.3s',
                '&:hover': {
                    boxShadow: 3,
                    borderColor: 'primary.main'
                }
            }}
        >
            <DescriptionOutlinedIcon sx={{ fontSize: 40, color: '#64b5f6' }} />
            <Box>
                <Typography
                    variant="subtitle1"
                    sx={{
                        fontWeight: 'bold',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Ngày bắt đầu: {startDate}
                </Typography>
            </Box>
        </Paper>
    </MuiLink>
);

const ExamsPage: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleCreateExam = (examData: { name: string; duration: string; startDate: string }) => {
        console.log('Creating new exam:', examData);
        alert(`Đã tạo bài thi mới: ${examData.name}`);
    };

    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <Header />
            <Box display="flex" flexGrow={1} minHeight="100vh">
                <Box sx={{ width: 500, bgcolor: '#f5f5f5', borderRight: '1px solid #ddd' }}>
                    <Sidebar />
                </Box>
                <Box flexGrow={1} p={3}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            mb: 4,
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                            Danh sách Bài thi
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <TextField
                                size="small"
                                placeholder="Tìm kiếm"
                                sx={{ backgroundColor: 'white', borderRadius: 2, width: 240 }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon color="action" />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Button
                                variant="contained"
                                startIcon={<AddIcon />}
                                onClick={() => setOpenDialog(true)}
                                sx={{
                                    borderRadius: 2,
                                    backgroundColor: '#3978c8',
                                    '&:hover': { backgroundColor: '#2f69b3' },
                                }}
                            >
                                Tạo bài thi
                            </Button>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 5 }}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}
                        >
                            Bài thi đang diễn ra
                        </Typography>
                        <Grid container spacing={3}>
                            {ongoingExams.map((exam) => (
                                <Grid key={exam.id} item xs={4}>
                                    <ExamCard id={exam.id} title={exam.title} startDate={exam.startDate} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    <Box>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}
                        >
                            Bài thi chưa bắt đầu
                        </Typography>
                        <Grid container spacing={3}>
                            {upcomingExams.map((exam) => (
                                <Grid key={exam.id} item xs={4}>
                                    <ExamCard id={exam.id} title={exam.title} startDate={exam.startDate} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>
            <CreateExamDialog
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                onCreate={handleCreateExam}
            />
        </Box>
    );
};

export default ExamsPage;
