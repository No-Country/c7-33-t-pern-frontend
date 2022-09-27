import {Grid, Typography} from '@mui/material'

const Login = () => (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    sx={{height: '500px', backgroundColor: 'red'}}
  >
    <Grid item>
      <Typography variant="overline">estoy en login</Typography>
    </Grid>
  </Grid>
)

export default Login
