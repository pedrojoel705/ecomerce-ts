import type { Metadata } from 'next'

import NextLink from 'next/link';
import { Box, Grid, TextField, Typography, Link, Button } from '@mui/material';
import AuthLayout from "@/components/layouts/AuthLayout"




export const metadata: Metadata = {
    title: 'Registro de usuario',
    description: 'pagina para crear cuenta',
}

const SingupPage = () => {
    return (
        <AuthLayout >
            <Box sx={{ width: 350, padding: '10px 20px' }}>
                <Grid container>
                    <Grid item xs={12} >
                        <Typography variant='h1' component='h1'>
                            Crear Cuenta
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Nombre y Apellido" variant='filled' type='text' fullWidth sx={{ my: 2 }} />
                        <TextField label="Correo" variant='filled' type='email' fullWidth sx={{ my: 2 }} />
                        <TextField label="Contrasena" type='password' fullWidth variant='filled' sx={{ my: 2 }} />
                        <TextField label="Repita Contrasena" type='password' fullWidth variant='filled' sx={{ my: 2 }} />
                    </Grid>
                    < Grid item xs={12}>

                        <Button color='secondary' size='large' fullWidth className='cirular-btn'>
                            Registrarte
                        </Button>

                    </Grid>


                    <Grid item xs={12} display='flex' justifyContent='end' mt={2}>
                        <NextLink href='/auth/login' passHref legacyBehavior scroll={false} >
                            <Link underline='always'>
                                ¿Ya tienes cuenta?
                            </Link>
                        </NextLink>

                    </Grid>
                </Grid>
            </Box>


        </AuthLayout >
    )
}

export default SingupPage