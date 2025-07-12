import { useDispatch, useSelector } from "react-redux"

export default function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector(state =>{
        if(state.searchStr) return state.products.filter(product => product.name.includes(state.searchStr))
        return state.products
    })

    const onDelete = (id) => {
        dispatch({
            type: 'products/delete',
            value: id
        })
    }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <span>{product.name}</span>
                    <button onClick={() => onDelete(product.id)}>delete</button>
                </li>
            ))}
        </ul>
    )
}
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, IconButton
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

export default function ProductTable({ products, categories, onEdit, onDelete }) {
    const getCategoryName = (id) => {
        const cat = categories.find(c => c.id === id);
        return cat?.name || '';
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Tên SP</TableCell>
                        <TableCell>Danh mục</TableCell>
                        <TableCell>Thứ tự</TableCell>
                        <TableCell>Hành động</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{getCategoryName(row.categoryId)}</TableCell>
                            <TableCell>{row.orderNum}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => onEdit(row)}><Edit /></IconButton>
                                <IconButton onClick={() => onDelete(row.id)}><Delete /></IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
//2
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    TextField, Button, MenuItem
} from '@mui/material';
import { useState, useEffect } from 'react';

export default function ProductForm({ open, onClose, onSave, categories, initialData }) {
    const [form, setForm] = useState({ name: '', categoryId: '', orderNum: '' });

    useEffect(() => {
        if (initialData) setForm(initialData);
        else setForm({ name: '', categoryId: '', orderNum: '' });
    }, [initialData]);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        onSave(form);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{initialData ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</DialogTitle>
            <DialogContent>
                <TextField label="Tên SP" name="name" fullWidth margin="normal" value={form.name} onChange={handleChange} />
                <TextField
                    label="Danh mục"
                    name="categoryId"
                    select
                    fullWidth
                    margin="normal"
                    value={form.categoryId}
                    onChange={handleChange}
                >
                    {categories.map(cat => (
                        <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="Thứ tự"
                    name="orderNum"
                    fullWidth
                    type="number"
                    margin="normal"
                    value={form.orderNum}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Huỷ</Button>
                <Button onClick={handleSubmit} variant="contained">Lưu</Button>
            </DialogActions>
        </Dialog>
    );
}