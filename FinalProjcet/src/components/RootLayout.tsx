
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <Box>

            <Header />


            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 ,minHeight: '100vh', pt: '64px' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default RootLayout;
