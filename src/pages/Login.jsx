import {Box, Container} from '@mui/material'

import Form from '../components/login/Form'

const Login = () => {
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <Container>
        <div className="container__background-triangle">
          <div className="triangle triangle1" />
          <div className="triangle triangle2" />
          <div className="triangle triangle3" />
        </div>
      </Container>
      <Box mt={{xs: 15, sm: 30}} mx="auto" p={2} sx={{maxWidth: 400}}>
        <Form onSubmit={onSubmit} />
      </Box>
    </>
  )
}

export default Login
