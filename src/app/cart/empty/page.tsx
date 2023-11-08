import React from 'react';

import ShopLayout from '@/components/layouts/ShopLayout';
import { Box, Typography, Link } from '@mui/material';
import { RemoveShoppingCartOutlined } from '@mui/icons-material';
import NextLink from 'next/link';

export function generateMetadata() {
    return {
        title: `Carrito Vacio`,
        description: `No hay articulos en el carrito de compra`,
    };
}
const empty = () => {
    return (
        <ShopLayout>
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 300px)' // Agregado un espacio entre "100vh" y "-100px"
            >
                <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
                <Box display='flex' flexDirection='column' alignItems='center'>

                    <Typography>Su Carrito esta Vacio</Typography>

                    <NextLink href='/' passHref legacyBehavior scroll={false}>

                        <Typography variant='h4' color='secondary'>
                            Regresar
                        </Typography>

                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    );
};

export default empty;
