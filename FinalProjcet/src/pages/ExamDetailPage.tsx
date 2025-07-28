import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Paper, Link as MuiLink, Avatar, Breadcrumbs } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import EditExamDialog from '../components/exams/EditExamDialog';
import { Link as RouterLink, useParams } from 'react-router-dom'; // Thêm useParams

// Dữ liệu giả (giữ nguyên)
const initialExamDetails = {
    name: 'ĐỀ THI LẦN 1',
    startDate: '2024-01-05',
    duration: '5 phút',
};

const examParts = [
    { id: 1, code: '01', title: 'PHẦN 1: TƯ DUY TOÁN HỌC', time: 60, questions: 40 },
    { id: 2, code: '01', title: 'PHẦN 3: TƯ DUY KHOA HỌC/ GIẢI QUYẾT VẤN ĐỀ', time: 60, questions: 20 },
    { id: 3, code: '01', title: 'PHẦN 2: TƯ DUY ĐỌC HIỂU', time: 30, questions: 40 },
];

const submissions = [
    { id: 1, studentName: 'Phạm Thùy Dương', email: 'duongpham@gmail.com', status: 'chờ chấm lại' },
    { id: 2, studentName: 'bang', email: 'bang@test.com', status: 'chờ chấm lại' },
];

// Component con (giữ nguyên)
const ExamPartCard = ({ part }: { part: typeof examParts[0] }) => (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, position: 'relative' }}>
        <Typography variant="body2" color="text.secondary">Đề bài: {part.title}</Typography>
        <MuiLink href="#" sx={{ position: 'absolute', top: 8, right: 8, fontSize: '0.8rem' }}>
            <EditIcon fontSize="small" /> Edit
        </MuiLink>
        <Typography variant="body2">Mã đề: {part.code}</Typography>
        <Typography variant="body2">Thời gian làm bài: {part.time} phút</Typography>
        <Typography variant="body2">Số câu hỏi: {part.questions}</Typography>
    </Paper>
);

const SubmissionCard = ({ submission }: { submission: typeof submissions[0] }) => (
    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Avatar>{submission.studentName.charAt(0)}</Avatar>
            <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{submission.studentName}</Typography>
                <Typography variant="body2" color="text.secondary">{submission.email}</Typography>
            </Box>
        </Box>
        <Typography variant="body2">Thời gian làm bài: </Typography>
        <Typography variant="body2">Số đề đã hoàn thành: </Typography>
        <Typography variant="body2">Trạng thái: {submission.status}</Typography>
        <Box sx={{ mt: 2, textAlign: 'right' }}>
            <Button variant="contained" size="small" sx={{ backgroundColor: 'success.main' }}>Chi tiết</Button>
        </Box>
    </Paper>
);


const ExamDetailPage: React.FC = () => {
    const { examId } = useParams<{ examId: string }>(); // Lấy ID từ URL
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [examDetails, setExamDetails] = useState(initialExamDetails);

    const handleSaveChanges = (updatedData: { name: string; duration: string; startDate: string }) => {
        setExamDetails(updatedData);
        console.log('Saving changes:', updatedData);
        alert('Đã cập nhật thông tin bài thi!');
    };

    return (
        <Box minHeight="100vh" display="flex" flexDirection="column">
            <Header />
            <Box display="flex" flexGrow={1}>
                <Sidebar />
                <Box flexGrow={1} p={3} sx={{ backgroundColor: '#f4f6f8' }}>
                    {/* Breadcrumbs */}
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <MuiLink underline="hover" color="inherit" href="/classes">
                            Danh sách bài thi
                        </MuiLink>
                        <Typography color="text.primary">Chi tiết bài thi</Typography>
                    </Breadcrumbs>

                    {/* Exam Info */}
                    <Paper sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3, borderRadius: 2 }}>
                        <Box>
                            <Typography>Tên bài thi: {examDetails.name}</Typography>
                            <Typography>Ngày bắt đầu: {examDetails.startDate}</Typography>
                            <Typography>Thời gian cho giữa các đề bài: {examDetails.duration}</Typography>
                        </Box>
                        <Box>
                            <Button
                                variant="contained"
                                sx={{ mr: 1 }}
                                onClick={() => setOpenEditDialog(true)}
                            >
                                Chỉnh sửa
                            </Button>
                            <Button variant="outlined" color="error">Xóa bỏ</Button>
                        </Box>
                    </Paper>

                    {/* Exam Parts */}
                    <Box mb={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Danh sách đề bài</Typography>
                            {/* Sửa lại nút này để điều hướng */}
                            <Button
                                component={RouterLink}
                                to={`/exam/${examId}/add-part`}
                                variant="contained"
                                startIcon={<AddIcon />}
                                sx={{ backgroundColor: '#3978c8' }}
                            >
                                Thêm đề bài
                            </Button>
                        </Box>
                        <Grid container spacing={3}>
                            {examParts.map(part => (
                                <Grid item key={part.id} xs={12} md={4}>
                                    <ExamPartCard part={part} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {/* Submissions */}
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Danh sách bài làm</Typography>
                        <Grid container spacing={3}>
                            {submissions.map(sub => (
                                <Grid item key={sub.id} xs={12} md={4}>
                                    <SubmissionCard submission={sub} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>
            </Box>

            {/* Render component Dialog */}
            <EditExamDialog
                open={openEditDialog}
                onClose={() => setOpenEditDialog(false)}
                onSave={handleSaveChanges}
                examData={examDetails}
            />
        </Box>
    );
};

export default ExamDetailPage;
