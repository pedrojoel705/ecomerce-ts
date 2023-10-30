import ShopLayout from '@/components/layouts/ShopLayout';
import { Box, Typography, Link } from '@mui/material';

export function generateMetadata() {
  return {
    title: `Página no encontrada`,
    description: `No encontramos ninguna página aquí`,
  };
}

export default function NotFound() {
  return (
    <ShopLayout>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 100px)' // Agregado un espacio entre "100vh" y "-100px"
        sx={{ display: { xs: 'none', sm: 'flex' } }}>
        <Typography variant='h1' component='h1' fontSize={100} fontWeight={200}>
          404|
        </Typography>
        <Typography>No encontramos ninguna página aquí</Typography>
      </Box>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 300px)'
        sx={{ display: { xs: 'flex', sm: 'none' } }}>
        <Typography variant='h1' component='h1' fontSize={30} fontWeight={400}>
          404|
        </Typography>
        <Typography>No encontramos ninguna página aquí</Typography>
      </Box>
    </ShopLayout>
  );
}
