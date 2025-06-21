import './App.css';
import { useState } from 'react';
import { Button } from '@mui/material';
import FTable from './components/FTable';
import EmployeeDialog from './components/EmployeeDialog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [isOpenDialog, setIsOpenDialog] = useState(false);
    const [employees, setEmployees] = useState([
        { id: 1, name: 'Viet', age: 23, address: '123/3 Lê Lợi, Q1' },
        { id: 2, name: 'Nam', age: 24, address: '456 Nguyễn Huệ, Q1' },
        { id: 3, name: 'An', age: 25, address: '789 Trần Hưng Đạo, Q5' },
    ]);

    const [curEmployee, setCurEmployee] = useState({
        id: null,
        name: '',
        age: '',
        address: ''
    });

    const handleClose = () => {
        setIsOpenDialog(false);
        setCurEmployee({ id: null, name: '', age: '', address: '' });
    };

    const handleSave = () => {
        const { name, age, address } = curEmployee;

        if (!name || !age || !address) {
            toast.error("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (curEmployee.id) {

            setEmployees(prev =>
                prev.map(emp => emp.id === curEmployee.id ? curEmployee : emp)
            );
            toast.success("Cập nhật nhân viên thành công!");
        } else {

            const newId = Math.max(...employees.map(e => e.id), 0) + 1;
            setEmployees([...employees, { ...curEmployee, id: newId }]);
            toast.success("Thêm nhân viên mới thành công!");
        }

        handleClose();
    };

    const handleEdit = (employee) => {
        setCurEmployee(employee);
        setIsOpenDialog(true);
    };

    const handleDelete = (id) => {
        if (confirm('Bạn có chắc muốn xoá nhân viên này?')) {
            setEmployees(prev => prev.filter(emp => emp.id !== id));
            toast.success("Đã xoá nhân viên thành công!");
        }
    };

    const columns = [
        { name: 'id', text: 'ID' },
        { name: 'name', text: 'Tên' },
        { name: 'age', text: 'Tuổi' },
        { name: 'address', text: 'Địa chỉ' },
        { name: 'action', text: 'Hành động' }
    ];

    return (
        <>
            <EmployeeDialog
                open={isOpenDialog}
                onClose={handleClose}
                onSave={handleSave}
                employee={curEmployee}
                setEmployee={setCurEmployee}
            />

            <FTable
                columns={columns}
                rows={employees}
                onEdit={handleEdit}
                onDelete={handleDelete}
            />

            <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => {
                    setCurEmployee({ id: null, name: '', age: '', address: '' });
                    setIsOpenDialog(true);
                }}
            >
                Thêm nhân viên mới
            </Button>
            <ToastContainer position="top-right" autoClose={2000} />
        </>
    );
}
export default App;
