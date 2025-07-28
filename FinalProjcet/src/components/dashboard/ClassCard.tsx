import React from 'react';
import {
    Box,
    Typography,
    Button,
    Paper
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ShareIcon from '@mui/icons-material/Share';
import { Link as RouterLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
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
            elevation={1}
            sx={{
                p: 2.5,
                borderRadius: 2,
                backgroundColor: '#0097e6',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100px',
                width: '100%',
                maxWidth: '500px',
                mx: 'auto'
            }}
        >
           
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle1" fontWeight="bold" noWrap>
                    {classInfo.name}
                </Typography>
                <MuiLink
                    component={RouterLink}
                    to={`/class/${classInfo.id}`}
                    underline="none"
                    sx={{ color: 'white', display: 'flex', alignItems: 'center', gap: 0.5 }}
                >
                    <Typography variant="body2">Vào lớp</Typography>
                    <ArrowForwardIosIcon sx={{ fontSize: '0.8rem' }} />
                </MuiLink>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    mt: 2,
                }}
            >

                <Box>
                    <Typography variant="h4" fontWeight="bold" sx={{ lineHeight: 1 }}>
                        {classInfo.memberCount}
                    </Typography>
                    <Typography variant="body2">Thành viên tham gia</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                        Mã lớp: {classInfo.classCode}
                    </Typography>
                    <Button
                        size="small"
                        startIcon={<ShareIcon fontSize="small" />}
                        sx={{
                            backgroundColor: 'white',
                            color: '#0097e6',
                            borderRadius: '20px',
                            textTransform: 'none',
                            fontSize: '0.7rem',
                            px: 2,
                            minHeight: 28,
                            '&:hover': {
                                backgroundColor: '#f1f1f1'
                            }
                        }}
                    >
                        Chia sẻ
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default ClassCard;
