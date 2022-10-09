import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import {ThemeProvider} from '@mui/material/styles'

import lightTheme from '../themes/light-theme'
import ProfileCard from '../components/home/ProfileCard'
import users from '../constants/users'

// eslint-disable-next-line react/function-component-definition
export default function Home() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <main>
        <div>
          <div className="container_all" id="container__all">
            <div className="cover">
              <div className="bg_color" />
              <div className="wave w1" />
              <div className="wave w2" />

              <div className="container__cover">
                <div className="container__info extra">
                  <h1>Bienvenido a</h1>
                  <h2>DevMatch</h2>
                  <p>Conectamos perfiles Tech</p>
                  <br />
                  <p>Sumamos experiencia juntos</p>
                  <br />
                  <p>Concretamos proyectos</p>

                  <a href="/login">
                    <input className="boton" type="button" value="Ingresar" />
                  </a>
                  <a href="/register">
                    <input className="boton" type="button" value="Registrarse" />
                  </a>
                </div>
                <div className="container__vector">
                  <img alt="" className="extra" src="images/undraw_Code_thinking_re_gka2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cards */}
        <Container maxWidth="xl" sx={{py: 8}}>
          <div>
            <p className="textil">Comenzá a conectar ahora!</p>
          </div>
          <Grid container justifyContent="center" mb={6} mt={1} spacing={2}>
            {users.map((user) => (
              <Grid key={user.id} item>
                <ProfileCard user={user} />
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* end cards */}
      </main>
    </ThemeProvider>
  )
}
