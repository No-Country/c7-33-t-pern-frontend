import {Button, Grid, TextField, Typography, Container, Select} from '@mui/material'
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
            {errors.name && (
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
          </Grid>
          {errors.lastName && (
            <Typography color="error" variant="caption">
              El campo Contraseña es obligatorio
            </Typography>
          )}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Titulo o Branch"
              type="text"
              variant="standard"
              {...register('title', {required: true})}
            />
            {errors.title && (
              <Typography color="error" variant="caption">
                El campo Titulo es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              label="Biografia"
              maxRows={3}
              minRows={2}
              type="text"
              variant="standard"
              {...register('biography', {required: true})}
            />
            {errors.biography && (
              <Typography color="error" variant="caption">
                El campo biografia es obligatorio
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            {/* <Select */}
          </Grid>
        </Grid>
        <Grid container mt={1} spacing={1}>
          <Grid item xs={6}>
            <Button fullWidth type="submit" variant="contained">
              Enviar
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
