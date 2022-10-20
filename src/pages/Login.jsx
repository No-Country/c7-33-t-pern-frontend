import {Box, Container, Grid, Paper} from '@mui/material'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

import Form from '../components/login/Form'
import hero from '../assests/undraw_login_re_4vu2.svg'

const Login = () => {
  const navigate = useNavigate()
  const url = 'http://localhost:8000/api/v1'
  const onSubmit = (data) => {
    localStorage.setItem('token', '')
    localStorage.setItem('userInfo', {})
    axios
      .post(`${url}/users/login`, data)
      .then((res) => {
        navigate('/profiles')
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('userInfo', JSON.stringify(res.data.data.user))
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          alert('Invalid Credentials')
        } else {
          console.log(error.response)
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

export default Login
