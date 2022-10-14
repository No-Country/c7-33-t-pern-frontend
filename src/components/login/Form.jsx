import {Button, TextField, Typography, Grid, Container, Box, useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Form = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const {palette} = useTheme()

  return (
    <Container className="container-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="standard"
              {...register('email', {required: true})}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                El campo Email es obligatorio
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contraseña"
              variant="standard"
              {...register('password', {required: true})}
            />
            {errors.password && (
              <Typography color="error" variant="caption">
                El campo Contraseña es obligatorio
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container mt={1} spacing={1}>
          <Grid item xs={6}>
            <Button fullWidth type="submit" variant="contained">
              Ingresar
            </Button>
          </Grid>
          <Grid item mb={3} xs={6}>
            <Button fullWidth color="error" type="reset" variant="text">
              Cancelar
            </Button>
          </Grid>
        </Grid>
        <Grid item sx={{paddingBottom: 1}} xs={12}>
          <Typography variant="caption">
            ¿No tienes una cuenta?{' '}
            <Link style={{color: palette.primary.main}} to="/register">
              Regístrate aquí
            </Link>
          </Typography>
        </Grid>
      </form>
    </Container>
  )
}

export default Form
