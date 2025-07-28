import React from 'react'
import { Link } from 'react-router-dom'
import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material'


import DescriptionIcon from '@mui/icons-material/Description'


interface SidebarProps {
    className: string
    activeView: string
    onViewChange: (view: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ className, activeView, onViewChange }) => {
    return (
        <Paper
            elevation={1}
            sx={{
                p: 2,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                {className}
            </Typography>
            <List>
                {/* Tổng quan */}
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/Detail"
                        sx={{ borderRadius: 1 }}
                    >
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary="Tổng quan" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/exams"
                        sx={{ borderRadius: 1 }}
                    >
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary="Bài thi" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/members"
                        sx={{ borderRadius: 1 }}
                    >
                        <ListItemIcon><DescriptionIcon /></ListItemIcon>
                        <ListItemText primary="Thành viên" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    )
}
export default Sidebar
