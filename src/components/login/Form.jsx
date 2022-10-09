import {Button, TextField, Typography, Grid, Container} from '@mui/material'
import {useForm} from 'react-hook-form'

const Form = ({onSubmit}) => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

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
          <Grid item xs={6}>
            <Button fullWidth color="error" type="reset" variant="contained">
              Cancelar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Form
