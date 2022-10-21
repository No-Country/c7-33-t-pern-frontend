import {Box, Container, Divider, Grid, Stack, Typography, useTheme} from '@mui/material'

import FooterAuthor from './FooterAuthor'
import FooterSVG from './FooterSVG'

const AUTHORS = [
  {
    name: 'Alex Terrones Rivera',
    linkedin: 'https://www.linkedin.com/in/alextrdev/',
    email: 'alextrdev@gmail.com',
    github: 'https://github.com/alextrdev',
  },
  {
    name: 'Oscar Solorzano',
    linkedin: 'https://www.linkedin.com/in/oscar-solorzano/',
    email: 'oscar.solorzano98@gmail.com',
    github: 'https://github.com/OscarSolorzano',
  },
  {
    name: 'Maria I. Romero',
    linkedin: 'https://www.linkedin.com/in/bon-vivant/',
    email: 'itati3911@gmail.com',
    github: 'https://github.com/itati3911',
  },
  {
    name: 'Federico González',
    linkedin: 'https://www.linkedin.com/in/fededg/',
    github: 'https://github.com/FedericoDG',
    email: 'fede@nazgul.com.ar',
  },
]

const Footer = ({conectar}) => {
  const users = conectar ?? AUTHORS
  const {palette} = useTheme()

  return (
    <footer
      className="custom-shape-divider-top-1665705481"
      style={{backgroundColor: palette.primary.main}}
    >
      <Box>
        <FooterSVG />
        <Container maxWidth="xl">
          <Grid
            container
            flex
            alignItems="center"
            color={palette.background.default}
            justifyContent="space-between"
            px={5}
            sx={{backgroundColor: palette.primary.main}}
          >
            <Box display={{xs: 'none', sm: 'block'}} lg={9} md={8} sm={6}>
              <Typography color={palette.secondary.main} fontWeight="bold" variant="h4">
                TINDEV
              </Typography>
              <Divider />
              <Typography color={palette.background.paper} variant="body1">
                Conecta, gana experiencia, crea.
              </Typography>
            </Box>
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Typography color={palette.background.paper} fontWeight={500} variant="h6">
                AUTORES
              </Typography>
              <Stack>
                {users.map((author) => (
                  <FooterAuthor key={`${author.name} ${author.lastname}`} author={author} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer
