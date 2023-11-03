'use client'
import { FC, useMemo, useState } from 'react';
import Link from 'next/link';

import {
    Card,
    CardActionArea,
    CardMedia,
    Grid,
    Typography,
    Box,

} from '@mui/material';

import { IProduct } from '../../../interface/products';



interface Props {
    product: IProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(() => {
        return isHovered
            ? `products/${product.images[1]}`
            : `products/${product.images[0]}`


    }, [isHovered, product.images])

    return (
        <Grid
            item xs={6}
            sm={4}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <Link href="/product/slug" passHref prefetch={false} >

                <Card>

                    <CardActionArea>


                        <CardMedia
                            className='fadeIn'
                            component='img'
                            title={product.title}
                            image={productImage}

                        />

                    </CardActionArea>


                </Card >

            </Link>


            <Box sx={{ mt: 1 }} className='fadenIn'>
                <Typography fontWeight={700}>{product.title}</Typography>
                <Typography fontWeight={500} >{product.price}$</Typography>
            </Box>
        </Grid >
    );
};

export default ProductCard;
