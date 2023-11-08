import ShopLayout from '@/components/layouts/ShopLayout';
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';

export function generateMetadata() {
    return {
        title: `Página no encontrada`,
        description: `No encontramos ninguna página aquí`,
    };
}
const AddressPage = () => {
    return (
        <ShopLayout>
            <Typography variant='h1' component='h1'>
                {' '}
                Direccion
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField label='Nombre' variant='filled' fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Apellido' variant='filled' fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Direccion' variant='filled' fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label='Direccion 2(opcional)'
                        variant='filled'
                        fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Ciudad' variant='filled' fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label='Codigo Postal'
                        variant='filled'
                        fullWidth></TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <Select variant='filled' label='pais' value={1}>
                            <MenuItem value={1}>Venezuela</MenuItem>
                            <MenuItem value={2}>Ecuador</MenuItem>
                            <MenuItem value={2}>Argentina</MenuItem>
                            <MenuItem value={4}>Colombia</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField label='Telefono' variant='filled' fullWidth></TextField>
                </Grid>
            </Grid>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                <Button color='primary' size='large'>
                    Revisar Pedido
                </Button>
            </Box>
        </ShopLayout>
    );
};

export default AddressPage;
