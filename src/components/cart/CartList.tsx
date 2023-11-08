import { FC } from 'react';
import NextLink from 'next/link';

import {
    Grid,
    Typography,
    CardActionArea,
    Link,
    CardMedia,
    Box,
    Button,
} from '@mui/material';
import ItemCounter from '../ui/ItemCounter';

import { initialData } from '../../../database/products';

const productInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
    initialData.products[3],
];

interface Props {
    editable?: boolean;
}

const CartList: FC<Props> = ({ editable }) => {
    return (
        <>
            {productInCart.map((product) => (
                <Grid key={product.slug} container sx={{ mb: 1 }} >
                    <Grid item xs={3}>
                        {/* TODO: llevar a la pagina del producto */}
                        <NextLink
                            href='/product/slug'
                            passHref
                            scroll={false}
                            legacyBehavior>
                            <Link>
                                <CardActionArea>
                                    <CardMedia
                                        image={`/products/${product.images[0]}`}
                                        component='img'
                                        sx={{ borderRadius: '6px' }}></CardMedia>
                                </CardActionArea>
                            </Link>
                        </NextLink>
                    </Grid>

                    <Grid item xs={7}>
                        <Box display='flex' flexDirection='column' ml={2}>
                            <Typography variant='body1'>{product.title}</Typography>
                            <Typography variant='body1'>
                                Talla: <strong>M</strong>
                            </Typography>

                            {/* editable */}
                            {editable ? (
                                <ItemCounter />
                            ) : (
                                <Typography variant='h6'>3 Items</Typography>
                            )}
                        </Box>
                    </Grid>

                    <Grid
                        item
                        xs={2}
                        display='flex'
                        alignItems='center'
                        flexDirection='column'>
                        <Typography variant='subtitle2'>${product.price}</Typography>

                        {editable && (
                            <Button variant='text' color='error'>
                                Remover
                            </Button>
                        )}
                    </Grid>
                </Grid>
            ))}
        </>
    );
};

export default CartList;
