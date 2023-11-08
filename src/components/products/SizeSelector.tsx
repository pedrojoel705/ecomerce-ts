import { FC } from 'react';
import { ISize } from '../../../interface/products';
import { Box, Button } from '@mui/material';

interface Props {
    selectSizes?: ISize,
    sizes: ISize[]
}

const SizeSelector: FC<Props> = ({ selectSizes, sizes }) => {

    return (
        <Box>
            {
                sizes.map(size => (

                    <Button
                        key={size}
                        size='small'
                        color={selectSizes === size ? 'primary' : 'info'}
                    >
                        {size}
                    </Button>
                ))



            }
        </Box>
    )
}

export default SizeSelector