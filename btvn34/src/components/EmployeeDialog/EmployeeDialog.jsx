import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    TextField
} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function EmployeeDialog({ open, onClose, onSave, employee, setEmployee }) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        const { name, age, address } = employee;
        if (!name || !age || !address) {
            alert("Vui lòng điền đầy đủ thông tin!");
            return;
        }
        onSave();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{employee.id ? "Cập nhật nhân viên" : "Thêm nhân viên mới"}</span>
                <CloseOutlinedIcon sx={{ cursor: 'pointer' }} onClick={onClose} />
            </DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth variant="standard" label="Name"
                    name="name" value={employee.name} onChange={handleChange}
                />
                <TextField
                    fullWidth variant="standard" label="Age" type="number"
                    name="age" value={employee.age} onChange={handleChange}
                />
                <TextField
                    fullWidth variant="standard" label="Address"
                    name="address" value={employee.address} onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="error" variant="outlined">Đóng</Button>
                <Button onClick={handleSave} color="info" variant="outlined">Lưu</Button>
            </DialogActions>
        </Dialog>
    );
}
