'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme } from '@/themes';


import Head from 'next/head';
import { FC } from 'react';
import { Box } from '@mui/material';



const darkTheme = createTheme({
    palette: {
        mode: 'dark',

    },
});

interface Props {
    children: React.ReactNode;

}

const AuthLayout: FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={lightTheme}>
            <CssBaseline />

            <main>
                <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">
                    {children}
                </Box>
            </main>
        </ThemeProvider >
    );
};

export default AuthLayout;
