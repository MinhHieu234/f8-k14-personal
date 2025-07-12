import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact, setSearch, addContact, updateContact } from './contactsSlice';
import { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import {
    Box,
    Grid,
    TextField,
    Typography,
    Modal
} from '@mui/material';

export default function ContactsList() {
    const dispatch = useDispatch();
    const { items, loading, error, search } = useSelector(state => state.contacts);
    const [editing, setEditing] = useState(null);
    const [openForm, setOpenForm] = useState(false);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("Bạn có chắc chắn muốn xóa không?")) {
            dispatch(deleteContact(id));
        }
    };

    const handleSearch = (e) => {
        dispatch(setSearch(e.target.value));
    };

    const filtered = items.filter(c => {
        const fullName = (c.firstName + ' ' + c.lastName).toLowerCase();
        return (
            fullName.includes(search.toLowerCase()) ||
            c.email.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <Box p={2}>
            <TextField
                label="Tìm kiếm..."
                value={search}
                onChange={handleSearch}
                fullWidth
                sx={{ mb: 2 }}
            />

            {loading && <Typography>Loading...</Typography>}
            {error && <Typography color="error">{error}</Typography>}

            <Grid container spacing={2}>
                {filtered.map((c) => (
                    <Grid item xs={12} sm={6} md={3} key={c.id}>
                        <ContactCard
                            contact={c}
                            onEdit={(contact) => {
                                setEditing(contact);
                                setOpenForm(true);
                            }}
                            onDelete={handleDelete}
                        />
                    </Grid>
                ))}

                {/* Card để thêm liên hệ mới */}
                <Grid item xs={12} sm={6} md={3}>
                    <ContactCard
                        isAddCard
                        onEdit={() => {
                            setEditing(null);
                            setOpenForm(true);
                        }}
                    />
                </Grid>
            </Grid>

            <Modal open={openForm} onClose={() => setOpenForm(false)}>
                <Box sx={{
                    p: 3,
                    backgroundColor: 'white',
                    m: 'auto',
                    mt: '10%',
                    width: 400,
                    borderRadius: 2
                }}>
                    <ContactForm
                        initialData={editing}
                        onSubmit={(data) => {
                            if (editing) {
                                dispatch(updateContact({ id: editing.id, data }));
                            } else {
                                dispatch(addContact(data));
                            }
                            setOpenForm(false);
                            setEditing(null);
                        }}
                        onCancel={() => {
                            setOpenForm(false);
                            setEditing(null);
                        }}
                    />
                </Box>
            </Modal>
        </Box>
    );
}
