import { Card, CardContent, Avatar, Typography, IconButton, Stack, Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import AddIcon from '@mui/icons-material/Add';

export default function ContactCard({ contact, onEdit, onDelete, isAddCard = false }) {
    if (isAddCard) {
        return (
            <Card sx={{ backgroundColor: '#e0f7fa', p: 2, borderRadius: 3 }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar sx={{ width: 80, height: 80, mb: 2 }} src="https://i.pravatar.cc/150?u=add" />
                    <Typography fontWeight="bold" variant="h6">Thêm liên hệ</Typography>
                    <Typography color="text.secondary" mb={2}>Click để tạo mới</Typography>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={onEdit}
                    >
                        Add to Contacts
                    </Button>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card sx={{ backgroundColor: '#e0f7fa', p: 2, borderRadius: 3 }}>
            <Box display="flex" justifyContent="flex-end">
                <IconButton onClick={() => onEdit(contact)}>
                    <EditIcon color="warning" />
                </IconButton>
                <IconButton onClick={() => onDelete(contact.id)}>
                    <DeleteIcon color="error" />
                </IconButton>
            </Box>
            <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                    src={contact.avatar}
                    alt={contact.firstName}
                    sx={{ width: 80, height: 80, margin: '0 auto', mb: 1 }}
                />
                <Typography variant="h6" fontWeight="bold">
                    {contact.firstName} {contact.lastName}
                </Typography>
                <Typography color="primary">Chức danh</Typography>
                <Typography color="text.secondary" mb={1}>Thông tin mô tả ngắn...</Typography>

                <Stack spacing={1} alignItems="center">
                    <Box display="flex" alignItems="center" gap={1}>
                        <PhoneIcon fontSize="small" />
                        <Typography variant="body2">{contact.phone}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <EmailIcon fontSize="small" />
                        <Typography variant="body2">{contact.email}</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                        <PublicIcon fontSize="small" />
                        <Typography variant="body2">www.example.com</Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}
