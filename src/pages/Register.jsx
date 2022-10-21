import {Box, Container, Grid, Paper} from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import Form from '../components/register/Form'
import hero from '../assests/undraw_coding_re_iv62.svg'

const Register = () => {
  const url = 'https://tindev-depoy.onrender.com/api/v1'
  const navigate = useNavigate()
  const onSubmit = (data) => {
    const newUser = {email: data.email, password: data.password1}

    axios
      .post(`${url}/users/singup`, newUser)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        if (error.response.data.message === 'Validation error') {
          alert('This Email is already in use')
        } else {
          alert(error.response.data.message)
        }
      })
  }

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

export default Register
