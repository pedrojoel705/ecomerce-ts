import React from 'react';
import {
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    Box,
    Button,
    Link
} from '@mui/material';

import NextLink from 'next/link';

import ShopLayout from '@/components/layouts/ShopLayout';
import CartList from '@/components/cart/CartList';
import OrderSumary from '@/components/cart/OrderSumary';



export function generateMetadata() {
    return {
        title: `Resumen de la orden`,
        description: `Resumen de la orden`,
    };
}

const SummaryPage = () => {
    return (
        <ShopLayout>
            <Typography variant='h1' component='h1'>
                {' '}
                Resumen de la orden
            </Typography>

            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='sumary-card'>
                        <CardContent>
                            <Typography variant='h2' mb={2}>Resumen de la Orden</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='space-between' alignContent='center' mb={2} >
                                <Typography variant='subtitle1'> Direccion de Entrega</Typography>
                                <NextLink href='/checkout/address' passHref scroll={false} legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>

                            </Box>


                            <Typography>Pedro Fermin</Typography>
                            <Typography>Av Juan B justo 1737, tigre</Typography>
                            <Typography>1648</Typography>
                            <Typography>Buenos Aires, Argentina</Typography>
                            <Typography>1153350958</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display='flex' justifyContent='end' mb={2} >
                                <Typography variant='subtitle1'> </Typography>
                                <NextLink href='/cart' passHref scroll={false} legacyBehavior>
                                    <Link underline='always'>
                                        Editar
                                    </Link>
                                </NextLink>

                            </Box>


                            <OrderSumary />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth>

                                    Confirmar Orden
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default SummaryPage;
