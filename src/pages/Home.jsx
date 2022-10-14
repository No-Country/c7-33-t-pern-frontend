import {Button, Box, Grid, Stack, Typography, Container} from '@mui/material'
import {Link} from 'react-router-dom'

const Home = () => (
  <Container
    maxWidth="xl"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 210px - 69px)',
    }}
  >
    <Grid container className="home-background" px={6}>
      <Grid
        item
        md={5}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}
        xs={12}
      >
        <Typography variant="h3">Bienvenidos a</Typography>
        <Typography color="primary" fontWeight="bold" variant="h2">
          TinDev
        </Typography>
        <ul>
          <li>
            <Typography variant="h6">Conectamos perfiles Tech</Typography>
          </li>
          <li>
            <Typography variant="h6">Sumamos experiencia juntos</Typography>
          </li>
          <li>
            <Typography variant="h6">Concretamos proyectos</Typography>
          </li>
        </ul>
        <Stack direction="row" gap={3} my={3}>
          <Link to="/login">
            <Button size="large" type="button" variant="contained">
              Ingresar
            </Button>
          </Link>
          <Link to="/register">
            <Button color="success" size="large" type="button" variant="contained">
              Registrarse
            </Button>
          </Link>
        </Stack>
      </Grid>
      <Box
        item
        component={Grid}
        display={{sm: 'none', md: 'flex', xs: 'none'}}
        md={7}
        sx={{
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <img
          alt="ilustration"
          src="images/undraw_Code_thinking_re_gka2.svg"
          style={{display: 'block', width: '100%'}}
        />
      </Box>
    </Grid>
  </Container>
)

export default Home
