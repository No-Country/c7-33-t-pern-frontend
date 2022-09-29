import {Box} from '@mui/material'

import Form from '../components/register/Form'

const Register = () => {
  const onSubmit = (data) => console.log(data)

  return (
    <Box mt={{xs: 15, sm: 10}} mx="auto" p={2} sx={{maxWidth: 400}}>
      <Form onSubmit={onSubmit} />
    </Box>
  )
}

export default Register
