import { useState, useEffect } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function ContactForm({ initialData = {}, onSubmit, onCancel }) {
    const [form, setForm] = useState({
        firstName: '', lastName: '', email: '', phone: '', avatar: '',
    });

    useEffect(() => {
        if (initialData) setForm(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.firstName || !form.email || !form.phone) return alert("Vui lòng điền đủ");
        onSubmit(form);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required />
            <TextField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} />
            <TextField label="Email" name="email" value={form.email} onChange={handleChange} required />
            <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} required />
            <TextField label="Avatar URL" name="avatar" value={form.avatar} onChange={handleChange} />
            <Box display="flex" gap={2}>
                <Button type="submit" variant="contained">Lưu</Button>
                <Button onClick={onCancel}>Hủy</Button>
            </Box>
        </Box>
    );
}
