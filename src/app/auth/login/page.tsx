import type { Metadata } from 'next'

import NextLink from 'next/link';
import { Box, Grid, TextField, Typography, Link, Button } from '@mui/material';
import AuthLayout from "@/components/layouts/AuthLayout"




export const metadata: Metadata = {
    title: 'Ingresar',
    description: 'Pagina de Login',
}

const LoginPage = () => {
    return (
        <AuthLayout >
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant='h1' component='h1'>
                            Iniciar Seccion
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Correo" variant='filled' type='email' fullWidth sx={{ my: 2 }} />
                        <TextField label="contrasena" type='password' fullWidth variant='filled' sx={{ my: 2 }} />
                    </Grid>
                    < Grid item xs={12}>

                        <Button color='secondary' size='large' fullWidth className='cirular-btn'>
                            Ingresar
                        </Button>

                    </Grid>


                    <Grid item xs={12} display='flex' justifyContent='end' mt={2}>
                        <NextLink href="/auth/singup" passHref legacyBehavior scroll={false} >
                            <Link underline='always'>
                                ¿No tienes cuenta?
                            </Link>
                        </NextLink>

                    </Grid>
                </Grid>
            </Box>


        </AuthLayout >
    )
}

export default LoginPage