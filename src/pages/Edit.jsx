import {Box, Container, Grid, Paper} from '@mui/material'

import Form from '../components/edit/Form'
import hero from '../assests/undraw_online_resume_re_ru7s.svg'

const Edit = () => {
  const onSubmit = (data) => console.log(data)

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
          <Box sx={{maxWidth: 400}}>
            <Paper>
              <Form onSubmit={onSubmit} />
            </Paper>
          </Box>
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

export default Edit
