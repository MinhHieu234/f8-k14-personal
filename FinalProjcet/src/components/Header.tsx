import { AppBar, Toolbar, Typography, Button, Avatar, Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store';
import { logout } from '../store/authSlice';
import { rememberEmail } from '../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const { user } = useAppSelector(s=>s.auth);
    const dispatch = useAppDispatch();
    const nav = useNavigate();

    const onLogout = () => {
        if (user?.email) rememberEmail.set(user.email); // giữ email cho form login
        dispatch(logout());
        nav('/login', { replace:true });
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ gap:2 }}>
                <Typography variant="h6" sx={{ flex:1 }}>BKStar Classroom</Typography>

                {/* rule teacher mới thấy */}
                {user?.role === 'teacher' && (
                    <Button variant="contained" onClick={()=>nav('/classes/create')} disableElevation>
                        Tạo lớp
                    </Button>
                )}

                {user && (
                    <Box sx={{ display:'flex', alignItems:'center', gap:1 }}>
                        <Avatar src="https://i.pravatar.cc/100?img=12" />
                        <Typography>{user.email}</Typography>
                        <Button color="inherit" onClick={onLogout}>Đăng xuất</Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
