import {Box, Container, Grid, Paper} from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import Form from '../components/completeRegister/Form'
import hero from '../assests/undraw_coding_re_iv62.svg'

const Register = () => (
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
            <Form />
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

export default Register
