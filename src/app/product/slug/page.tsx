import ShopLayout from '@/components/layouts/ShopLayout';
import { initialData } from '../../../../database/products';
import { Grid, Box, Typography, Button, Chip } from '@mui/material';
import ProductSliderShow from '@/components/ui/ProductSliderShow';
import ItemCounter from '@/components/ui/ItemCounter';
import SizeSelector from '@/components/products/SizeSelector';

const { title, description, price, images, sizes } = initialData.products[0];

export function generateMetadata() {
    return {


        title: `${title}`,
        description: `${description}`,
        images: '/img/logo.png'
    };
}

const ProductPage = () => {
    return (
        <ShopLayout>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <ProductSliderShow images={images} />
                </Grid>
                <Grid item xs={12} sm={5}>
                    {/* Tiltulos */}
                    <Box display={'flex'} flexDirection={'column'}>
                        <Typography variant='h1' component={'h1'}>
                            {title}
                        </Typography>
                        <Typography variant='subtitle1' component={'h2'}>
                            ${price}
                        </Typography>

                        <SizeSelector
                            sizes={sizes}
                        // selectSizes={sizes[0]}
                        />

                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            <ItemCounter />
                        </Box>

                        {/* Botones de compra */}

                        <Button color='secondary' className='circular-btn'>
                            Agregar al carrito
                        </Button>

                        {/* <Chip label='No hay disponibles' color="error" variant="outlined"></Chip> */}

                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle1' component='h2'>
                                Descripcion
                            </Typography>
                            <Typography variant='body2'>{description}</Typography>
                            {/* ItemCounter */}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default ProductPage;
