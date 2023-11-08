import { Divider, Grid, Typography } from "@mui/material"


const OrderSumary = () => {
    return (
        <Grid container>

            <Grid item xs={6}>
                <Typography>Nro. Producto</Typography>
            </Grid>

            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography>4 Items</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>SubTotal</Typography>
            </Grid>

            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography >${`${453.65}`}</Typography>
            </Grid>

            <Grid item xs={6}>
                <Typography>Impuesto</Typography>
            </Grid>

            <Grid item xs={6} display='flex' justifyContent='end'>
                <Typography >${`${24.53}`}</Typography>
            </Grid>

            <Divider sx={{ my: 1 }} />
            <Grid item xs={6} sx={{ mt: 3 }}>
                <Typography>Total</Typography>
            </Grid>

            <Grid item xs={6} display='flex' justifyContent='end' sx={{ mt: 3 }}>
                <Typography variant="subtitle1">${`${489.65}`}</Typography>
            </Grid>


        </Grid >
    )
}

export default OrderSumary