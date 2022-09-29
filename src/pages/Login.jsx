import {Box} from '@mui/material'

import Form from '../components/login/Form'

const Login = () => {
  const onSubmit = (data) => console.log(data)

  return (
    <Box mt={{xs: 15, sm: 30}} mx="auto" p={2} sx={{maxWidth: 400}}>
      <Form onSubmit={onSubmit} />
    </Box>
  )
}

export default Login
