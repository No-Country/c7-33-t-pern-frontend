import {Button, Box, Grid, Stack, Typography, Container, useTheme} from '@mui/material'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled'

import hero from '../assests/undraw_Code_thinking_re_gka2.svg'

const StyledLi = styled.li`
  position: relative;
  &:before {
    position: absolute;
    left: 0;
    top: 12px;
    content: '';
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: ${(props) => (props.color ? props.color : 'red')};
    display: inline-block;
    margin-left: -1em;
  }
`

const Home = () => {
  const {palette} = useTheme()

  return (
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
          <ul style={{listStyle: 'none'}}>
            <StyledLi color={palette.success.main}>
              <Typography variant="h6">Conecta con otros perfiles tech</Typography>
            </StyledLi>
            <StyledLi color={palette.success.main}>
              <Typography variant="h6">Suma experiencia trabajando en equipo</Typography>
            </StyledLi>
            <StyledLi color={palette.success.main}>
              <Typography variant="h6">Crea proyectos geniales!</Typography>
            </StyledLi>
          </ul>
          <Stack direction="row" gap={3} my={3}>
            <Link style={{textDecoration: 'none'}} to="/login">
              <Button color="primary" size="large" type="button" variant="outlined">
                Ingresar
              </Button>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/register">
              <Button color="secondary" size="large" type="button" variant="contained">
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
          <img alt="ilustration" src={hero} style={{display: 'block', width: '100%'}} />
        </Box>
      </Grid>
    </Container>
  )
}

export default Home
