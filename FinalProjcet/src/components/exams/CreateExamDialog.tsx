import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';


interface CreateExamDialogProps {
    open: boolean;
    onClose: () => void;
    onCreate: (examData: { name: string; duration: string; startDate: string }) => void;
}

const CreateExamDialog: React.FC<CreateExamDialogProps> = ({ open, onClose, onCreate }) => {
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('');
    const [startDate, setStartDate] = useState('');

    const handleCreate = () => {
        if (name && duration && startDate) {
            onCreate({ name, duration, startDate });
            onClose(); // Đóng dialog sau khi tạo
        } else {
            alert('Vui lòng điền đầy đủ thông tin.');
        }
    };

    return (
        <Dialog open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: 2, width: '100%', maxWidth: '500px' } }}>
            <DialogTitle sx={{ fontWeight: 'bold' }}>Tạo bài thi mới</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    required
                    margin="normal"
                    label="Tên bài thi"
                    placeholder="Nhập tên bài thi"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    required
                    margin="normal"
                    label="Thời gian giữa các bài thi (phút)"
                    placeholder="Nhập thời gian"
                    type="number"
                    fullWidth
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
                <TextField
                    required
                    margin="normal"
                    label="Thời gian bắt đầu"
                    placeholder="mm/dd/yyyy"
                    type="text"
                    fullWidth
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </DialogContent>
            <DialogActions sx={{ p: '0 24px 16px' }}>
                <Button variant="outlined" onClick={onClose}>Hủy</Button>
                <Button
                    variant="contained"
                    onClick={handleCreate}
                    sx={{ backgroundColor: '#3978c8' }}
                >
                    Tạo mới
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateExamDialog;
