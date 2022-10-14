import {Box, Container, Grid, Stack, Typography, useTheme} from '@mui/material'

import FooterAuthor from './FooterAuthor'
import FooterSVG from './FooterSVG'

const AUTHORS = [
  {
    name: 'Alex 1',
    linkedin: 'https://www.linkedin.com/in/fededg/',
    email: 'itati@gmail.com',
  },
  {
    name: 'Alex 2',
    linkedin: 'https://www.linkedin.com/in/fededg/',
    email: 'itati@gmail.com',
  },
  {
    name: 'Itatí Romero',
    linkedin: 'https://www.linkedin.com/in/fededg/',
    email: 'itati@gmail.com',
  },
  {
    name: 'Federico González',
    linkedin: 'https://www.linkedin.com/in/fededg/',
    github: 'https://github.com/FedericoDG',
    email: 'fede@nazgul.com.ar',
  },
]

const Footer = () => {
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
            justifyContent="space-around"
            px={5}
            sx={{backgroundColor: palette.primary.main}}
          >
            <Box display={{xs: 'none', sm: 'block'}} lg={9} md={8} sm={5}>
              <Typography fontWeight="bold" variant="h4">
                TINDEV
              </Typography>
            </Box>
            <Grid item lg={3} md={4} sm={7}>
              <Typography variant="h6">AUTORES</Typography>
              <Stack>
                {AUTHORS.map((author) => (
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
