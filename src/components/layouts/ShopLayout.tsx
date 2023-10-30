'use client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { Navbar } from '../ui/Navbar';
import { lightTheme } from '@/themes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const ShopLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      {/* TODO: SliderBar */}
      <Navbar />
      <main
        style={{
          margin: '80px auto', // Corregido: coma a espacio
          maxWidth: '1680px', // Corregido: px a rem
          padding: '15px', // Corregido: px a rem y eliminada la coma
          marginTop: '136px',
        }}>
        {children}
      </main>

      {/* Footer */}
      <footer>{/* TODO: mi custom footer */}</footer>
    </ThemeProvider>
  );
};

export default ShopLayout;
