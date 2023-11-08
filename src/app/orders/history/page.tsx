
import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import ShopLayout from '@/components/layouts/ShopLayout';
import NextLink from 'next/link';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fullname', headerName: 'Nombre Completo', width: 200 },
    {
        field: 'paid',
        headerName: 'Pagado',
        description: 'Muestra informacion si esta pagada la orden',
        width: 150,
        renderCell: (params: GridRenderCellParams) => {
            return params.row.paid ? (
                <Chip color='success' label='Pagada' variant='outlined' />
            ) : (
                <Chip color='error' label='No Pagada' variant='outlined' />
            );
        },
    },
    {
        field: 'order',
        headerName: "Ver Orden",
        width: 150,
        sortable: false,
        filterable: false,
        hideable: false,
        renderCell: (params: GridRenderCellParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior scroll={false}>
                    <Link underline='always'>
                        <Typography>Ver Orden</Typography>
                    </Link>
                </NextLink>
            )



        }
    }
];

const rows = [
    { id: 1, paid: true, fullname: 'Pedro Fermin', },
    { id: 2, paid: false, fullname: 'Juan Garcia', },
    { id: 3, paid: false, fullname: 'Yurekvy Rodriguez', },
    { id: 4, paid: true, fullname: 'Maria Fermin', },
    { id: 5, paid: true, fullname: 'Milton Ruiz', },
    { id: 6, paid: true, fullname: 'Nellis Moreno', },
    { id: 7, paid: false, fullname: 'Belitza Perez', },
    { id: 8, paid: true, fullname: 'Andras Rodriguez', },
    { id: 9, paid: true, fullname: 'Andres Rodrigruez', },
    { id: 10, paid: false, fullname: 'Dubranser Ruiz', },
];

const HistoryPage = () => {
    return (
        <ShopLayout>
            <Typography variant='h1' component='h1'>
                Historial de órdenes
            </Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
                        pageSizeOptions={[5, 10, 15]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    );
};

export default HistoryPage;
