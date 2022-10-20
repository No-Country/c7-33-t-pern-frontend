import {Button, Grid, TextField, Typography, Container} from '@mui/material'
import {useForm} from 'react-hook-form'
import {useTheme} from '@emotion/react'
import {Link} from 'react-router-dom'

const Form = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm()

  const {palette} = useTheme()

  const password = watch('password1')
  const repeatPassword = watch('password2')

  return (
    <Container className="container-form">
      <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Nombre"
              type="text"
              variant="standard"
              {...register('name', {required: true})}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                El campo Nombre es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Apellido"
              type="text"
              variant="standard"
              {...register('lastName', {required: true})}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                El campo Apellido es obligatorio
              </Typography>
            )}
          </Grid>
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

          {/* <Grid item xs={12}>
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="standard"
              {...register('password1', {required: true})}
            />
          </Grid>
          {errors.email && (
            <Typography color="error" variant="caption">
              El campo Contraseña es obligatorio
            </Typography>
          )}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Confirmar contraseña"
              type="password"
              variant="standard"
              {...register('password2', {required: true})}
            />
            {errors.password2 && (
              <Typography color="error" variant="caption">
                El campo Repetir Contraseña es obligatorio
              </Typography>
            )}
            {password !== '' && repeatPassword !== '' && password !== repeatPassword && (
              <Typography color="error" variant="caption">
                Las contraseñas no coinciden
              </Typography>
            )}
          </Grid> */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Bio"
              type="text"
              variant="standard"
              {...register('biography', {required: true})}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                El campo Bio es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="LinkedIn"
              type="text"
              variant="standard"
              {...register('linkedin', {required: true})}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                El campo LinkedIn es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="GitHub"
              type="text"
              variant="standard"
              {...register('github', {required: true})}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                El campo GitHub es obligatorio
              </Typography>
            )}
          </Grid>
        </Grid>
        <Grid container mt={1} spacing={1}>
          <Grid item xs={6}>
            <Button fullWidth type="submit" variant="contained">
              Guardar
            </Button>
          </Grid>
          <Grid item mb={3} xs={6}>
            <Link style={{textDecoration: 'none'}} to="/">
              <Button fullWidth color="secondary" type="reset" variant="contained">
                Cancelar
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item sx={{paddingBottom: 1}} xs={12}>
          <Typography variant="caption">
            Ya tienes una cuenta?{' '}
            <Link style={{color: palette.primary.main}} to="/login">
              Ingresa aquí
            </Link>
          </Typography>
        </Grid>
      </form>
    </Container>
  )
}

export default Form
