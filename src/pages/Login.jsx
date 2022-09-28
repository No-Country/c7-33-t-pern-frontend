import {Button, TextField, Typography, Grid, Box} from '@mui/material'
import {useForm} from 'react-hook-form'

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <Box mt={{xs: 15, sm: 30}} mx="auto" p={2} sx={{maxWidth: 400}}>
      <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
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
                email invalid
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="standard"
              {...register('password', {required: true})}
            />
            {errors.password && <span>This field is required</span>}
          </Grid>
        </Grid>
        <Grid container mt={1} spacing={1}>
          <Grid item xs={6}>
            <Button fullWidth type="submit" variant="contained">
              Login
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth color="error" type="reset" variant="text">
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}

export default Login
