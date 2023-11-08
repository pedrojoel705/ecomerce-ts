import {
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    Box,
    Chip,
} from '@mui/material';
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';


import ShopLayout from '@/components/layouts/ShopLayout';
import CartList from '@/components/cart/CartList';
import OrderSumary from '@/components/cart/OrderSumary';



export function generateMetadata() {
    return {
        title: `Resumen de la orden 35423451234`,
        description: `Resumen de la orden`,
    };
}

const OrderPage = () => {
    return (
        <ShopLayout>
            <Typography variant='h1' component='h1'>
                Orden: 9863242628
            </Typography>
            {/* <Chip
                sx={{ my: 2 }}
                label="Pendiente de Pago"
                color='error'
                variant='outlined'
                icon={<CreditCardOffOutlined />}
            /> */}

            <Chip
                sx={{ my: 2 }}
                label="Pago Realizado"
                color='success'
                variant='outlined'
                icon={<CreditScoreOutlined />}
            />



            <Grid container>
                <Grid item xs={12} sm={7}>
                    <CartList />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className='sumary-card'>
                        <CardContent>
                            <Typography variant='h2' mb={2}>
                                Resumen de la Compra
                            </Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignContent='center'
                                mb={2}>
                                <Typography variant='subtitle1'>
                                    {' '}
                                    Direccion de Entrega
                                </Typography>

                            </Box>

                            <Typography>Pedro Fermin</Typography>
                            <Typography>Av Juan B justo 1737, tigre</Typography>
                            <Typography>1648</Typography>
                            <Typography>Buenos Aires, Argentina</Typography>
                            <Typography>1153350958</Typography>
                            <Divider sx={{ my: 1 }} />


                            <Typography variant='subtitle1' mb={2}>Orden</Typography>
                            <OrderSumary />

                            <Box >
                                <h1>Pagar</h1>
                                <Chip
                                    label="Pago Realizado"
                                    color='success'
                                    variant='outlined'
                                    icon={<CreditScoreOutlined />}
                                />

                            </Box>


                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default OrderPage;
