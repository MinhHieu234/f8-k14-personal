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
            <DialogTitle>{initialData ? 'Sua san pham' : 'Them san pham'}</DialogTitle>
            <DialogContent>
                <TextField label="Ten san pham" name="name" fullWidth margin="normal" value={form.name} onChange={handleChange} />
                <TextField
                    select
                    label="Danh muc"
                    name="categoryId"
                    fullWidth
                    value={form.categoryId}
                    onChange={handleChange}
                >
                    {Array.isArray(categories) && categories.map((cat) => (
                        <MenuItem key={cat.id} value={cat.id}>
                            {cat.name}
                        </MenuItem>
                    ))}
            </TextField>
                <TextField
                    label="so thu tu"
                    name="orderNum"
                    fullWidth
                    type="number"
                    margin="normal"
                    value={form.orderNum}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>huy</Button>
                <Button onClick={handleSubmit} variant="contained">luu</Button>
            </DialogActions>
        </Dialog>
    );
}