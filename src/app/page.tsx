import ShopLayout from '@/components/layouts/ShopLayout';
import { Card, CardActionArea, Grid, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { initialData } from '../../database/products';

export default function Home() {
  return (
    <ShopLayout>
      <Typography variant='h1' component='h1'>
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <Grid container spacing={4}>


        {initialData.products.map((product) => (
          <Grid item xs={6} sm={4} key={product.slug}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  title={product.title}
                  image={`products/${product.images[0]}`}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </ShopLayout>
  );
}
