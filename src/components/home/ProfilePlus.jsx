import React from 'react'
import {Button, Container, Rating, Stack, Chip, Box} from '@mui/material'

const ProfilePlus = ({userP}) => (
  <Container className="fondo-profile MuiCOntainer-root css-1ho1q6">
    <div className="container__background-triangle">
      <div className="triangle triangle1" />
      <div className="triangle triangle2" />
      <div className="triangle triangle3" />
    </div>
    <div className="container__cards">
      <div className="card">
        <div className="cover__card">
          <img alt="" src={userP.avatar} />
        </div>
        <div className="nombre">{`${userP.name} ${userP.lastname}`}</div>
        <h3>{userP.title}</h3>
        <p>{userP.bio}</p>
        <div className="footer__card">
          <Stack
            className="user__name"
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            justifyContent="center"
            mb={1}
            mt={1}
            style={{height: 60}}
          >
            {userP.stack.map((stack, idx) => {
              if (idx < 5) {
                return (
                  <Chip
                    key={stack}
                    color="primary"
                    label={stack}
                    size="small"
                    sx={{mb: 1, mr: 1}}
                  />
                )
              }

              return null
            })}
          </Stack>
          <Stack alignItems="center" direction="row" flexWrap="wrap" justifyContent="center" />

          <Rating readOnly name="read-only" precision={0.5} size="small" value={userP.rating} />
        </div>
        <div>Busco proyectos:</div>
        <Stack
          className="user__name"
          alignItems="center"
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          mb={1}
          mt={1}
          style={{height: 60}}
        >
          {userP.projects.map((projects, idx) => {
            if (idx < 5) {
              return (
                <Chip
                  key={projects}
                  color="primary"
                  label={projects}
                  size="small"
                  sx={{mb: 1, mr: 1}}
                />
              )
            }

            return null
          })}
        </Stack>
        <Stack alignItems="center" direction="row" flexWrap="wrap" justifyContent="center" />

        <div className="botones">
          <Button margin="10px" variant="outlined">
            conectar
          </Button>
          <Button variant="outlined">regresar</Button>
        </div>
      </div>
    </div>
  </Container>
)

export default ProfilePlus
