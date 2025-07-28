import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';


interface ExamDetails {
    name: string;
    duration: string;
    startDate: string;
}

interface EditExamDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: (examData: ExamDetails) => void;
    examData: ExamDetails;
}

const EditExamDialog: React.FC<EditExamDialogProps> = ({ open, onClose, onSave, examData }) => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [startDate, setStartDate] = useState('');


    useEffect(() => {
        if (examData) {
            setName(examData.name);
            setDuration(examData.duration.replace(' phút', ''));
            setStartDate(examData.startDate);
        }
    }, [examData, open]);

    const handleSave = () => {
        if (name && duration && startDate) {
            onSave({ name, duration: `${duration} phút`, startDate });
            onClose(); // Đóng dialog sau khi lưu
        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    };

    return (
        <Dialog open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: 2, width: '100%', maxWidth: '500px' } }}>
            <DialogTitle sx={{ fontWeight: 'bold' }}>Chỉnh sửa bài thi</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="normal"
                    label="Tên bài thi"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required
                    margin="normal"
                    label="Thời gian giữa các bài thi (phút)"
                    type="number"
                    fullWidth
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <TextField
                    required
                    margin="normal"
                    label="Thời gian bắt đầu"
                    type="date" // Dùng kiểu date để dễ chọn ngày
                    fullWidth
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions sx={{ p: '0 24px 16px' }}>
                <Button variant="outlined" onClick={onClose}>Hủy</Button>
                <Button
                    variant="contained"
                    onClick={handleSave}
                    sx={{ backgroundColor: '#3978c8' }}
                >
                    Chỉnh sửa
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditExamDialog;
