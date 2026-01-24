import React from 'react';
import { Box, Typography, Link, Button, Paper } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShareIcon from '@mui/icons-material/Share';

interface ClassInfo {
    name: string;
    memberCount: number;
    classCode: string;
}

interface ClassCardProps {
    classInfo: ClassInfo;
}

const ClassCard: React.FC<ClassCardProps> = ({ classInfo }) => {
    return (
        <Paper
            elevation={0} // Bỏ shadow của thẻ
            sx={{
                p: 2.5,
                borderRadius: 3, // Bo góc nhiều hơn
                backgroundColor: '#0097e6', // Màu xanh dịu hơn
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                    {classInfo.name}
                </Typography>
                <Link href="#" underline="none" sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Typography variant="body2">Vào lớp</Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: '0.8rem' }} />
                </Link>
            </Box>

            <Box sx={{ my: 2, flexGrow: 1 }}>
                <Typography variant="h2" component="p" sx={{ fontWeight: 'bold' }}>
                    {classInfo.memberCount}
                </Typography>
                <Typography variant="body1">Thành viên tham gia</Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2">Mã lớp: {classInfo.classCode}</Typography>
                <Button
                    size="small"
                    startIcon={<ShareIcon />}
                    sx={{
                        color: '#0097e6', // Chữ màu xanh
                        backgroundColor: 'white', // Nền màu trắng
                        textTransform: 'none',
                        borderRadius: '20px', // Bo tròn thành hình viên thuốc
                        '&:hover': {
                            backgroundColor: '#f0f0f0',
                        },
                    }}
                >
                    Chia sẻ
                </Button>
            </Box>
        </Paper>
    );
};

export default ClassCard;