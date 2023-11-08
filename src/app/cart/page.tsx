import React from 'react'
import { Typography, Grid, Card, CardContent, Divider, Box, Button } from '@mui/material';

import ShopLayout from '@/components/layouts/ShopLayout'
import CartList from '@/components/cart/CartList';
import OrderSumary from '@/components/cart/OrderSumary';

export function generateMetadata() {
    return {
        title: `Carrito-3`,
        description: `Carrito de compra de la tienda`,
    };
}

const CartPage = () => {
    return (
        <ShopLayout>
            <Typography variant='h1' component='h1'> Carrito</Typography>

            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList editable />

                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='sumary-card'>
                        <CardContent>
                            <Typography variant="h2">Resumen del pedido</Typography>
                            <Divider sx={{ my: 1 }} />

                            <OrderSumary />

                            <Box sx={{ mt: 3 }}>
                                <Button color='secondary' className='circular-btn' fullWidth> Checkout</Button>


                            </Box>


                        </CardContent>


                    </Card>

                </Grid>


            </Grid>


        </ShopLayout>


    )
}

export default CartPage