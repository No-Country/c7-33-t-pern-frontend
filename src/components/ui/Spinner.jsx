import {Box, CircularProgress, Container, Typography} from '@mui/material'

const Spinner = ({height}) => (
  <Container
    sx={{
      position: 'fixed',
      zIndex: '100',
      background: 'rgba(0,0,0,.4)',
      minWidth: '100vw',
      height: '100vh',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <CircularProgress color="primary" />
      <Typography textAlign="center" variant="body">
        Cargando...
      </Typography>
    </Box>
  </Container>
)

export default Spinner
