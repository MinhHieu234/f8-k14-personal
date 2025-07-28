import React from 'react';
import {
    Box, Typography, Paper,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow
} from '@mui/material';
import RootLayout from '../components/RootLayout';

// Dữ liệu giả lập cho thành viên
const members = [
    { id: 1, name: 'Trần Xuân Bảng', role: 'Giáo viên' },
    { id: 2, name: 'Phạm Thùy Dương', role: 'Học sinh' },
    { id: 3, name: 'bang', role: 'Học sinh' },
    { id: 4, name: 'Putin', role: 'Học sinh' },
];

const MembersPage: React.FC = () => {
    return (
        <RootLayout>
            <Box sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
                    Danh sách thành viên
                </Typography>
                <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
                    <TableContainer>
                        <Table>
                            <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold', width: '10%' }}>NO.</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', width: '60%' }}>HỌ TÊN</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold', width: '30%' }}>VỊ TRÍ</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {members.map((member, index) => (
                                    <TableRow key={member.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#fafafa' } }}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{member.name}</TableCell>
                                        <TableCell>{member.role}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </RootLayout>
    );
};

export default MembersPage;
