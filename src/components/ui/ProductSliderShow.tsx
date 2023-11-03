'use client';
import { FC } from 'react';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';

import styles from './ProductSliderShow.module.css';

interface Props {
    images: string[];
}

const ProductSliderShow: FC<Props> = ({ images }) => {
    return (
        <div className='slider-containe'>
            <Slide easing='ease' duration={7000} indicators>
                {images.map((image, index) => {
                    const url = `/products/${image}`;

                    return (
                        <div className={styles['each-slide']} key={index}>
                            <div
                                style={{
                                    backgroundImage: `url(${url})`,
                                    backgroundSize: 'cover',
                                }}></div>
                        </div>
                    );
                })}
            </Slide>
        </div>
    );
};

export default ProductSliderShow;
